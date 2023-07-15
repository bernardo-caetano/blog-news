import { prisma } from "@/services/prisma";
import { stripe } from "@/services/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import Stripe from "stripe";

async function buffer(readable: Readable) {
  const chunks = []

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }

  return Buffer.concat(chunks)
}

export const config = {
  api: {
    bodyParser: false
  }
}

const relevantEvents = new Set([
  'checkout.session.completed'
])

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  } else {
    const buf = await buffer(req)

    const secret = req.headers['stripe-signature']!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET!)
    } catch (err) {
      return res.status(400).send('webhook error')
    }

    const { type } = event


    if (relevantEvents.has(type)) {
      const subscriptionStatus = event.data.object.status

      if (subscriptionStatus === 'complete') {
        const customerEmail = event.data.object.customer_details.email
        await prisma.user.update({
          where: {
            email: customerEmail,
          },
          data: {
            subscription_active: true,
          }
        })

        return res.status(200).json({ payment: true })

      } else {
        return res.status(400).json({ payment: false })
      }
    }
  }
}
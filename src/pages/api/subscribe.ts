import { prisma } from "@/services/prisma";
import { stripe } from "@/services/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  } else {
    const session = await getSession({ req })


    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      }
    })

    let customerId = user?.stripe_customer_id

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session?.user?.email!,
      })

      await prisma.user.update({
        where: {
          email: session?.user?.email!,
        },
        data: {
          stripe_customer_id: stripeCustomer.id
        }
      })
      customerId = stripeCustomer.id
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: "auto",
      line_items: [
        { price: 'price_1M9azvDXX8w4b1ObMu8EmOp2', quantity: 1 },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL!,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })
    return res.status(200).json({ sessionId: stripeCheckoutSession.id })
  }
}
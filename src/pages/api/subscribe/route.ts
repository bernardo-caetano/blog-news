import { prisma } from "@/services/prisma";
import { stripe } from "@/services/stripe";
import { NextResponse } from "next/server";
export async function POST(request: Request) {

  const session = await request.json()
  if (session !== null) {

    const user = await prisma.user.findUnique({
      where: {
        email: session.email,
      }
    })

    let customerId = user?.stripe_customer_id

    if (!customerId) {

      const stripeCustomer = await stripe.customers.create({
        email: session.email,
      })

      await prisma.user.update({
        where: {
          email: session.email,
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
    return NextResponse.json({ sessionId: stripeCheckoutSession.id })
  } else {
    return NextResponse.json({ error: 'O usuário precisa estar logado.' }, { status: 400 })
  }

}
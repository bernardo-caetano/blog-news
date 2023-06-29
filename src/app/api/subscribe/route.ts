import { stripe } from "@/services/stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  console.log('request', request);

  const session = await getServerSession(authOptions)
  console.log(session)

  const stripeCustomer = await stripe.customers.create({
    email: session?.user?.email!,
  })
  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
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
}
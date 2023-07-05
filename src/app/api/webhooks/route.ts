import { stripe } from "@/services/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";



export async function POST(request: Request) {

  const headerList = headers()
  const secret = headerList.get('stripe-signature')
  const sair = await request.json()
  const subscriptionId = sair.data.object.subscription !== undefined && sair.data.object.subscription
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  console.log(subscription)
  if (secret) {
    return NextResponse.json({ payment: true })
  } else {
    return NextResponse.json({ payment: false })
  }
}


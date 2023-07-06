import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";



export async function POST(request: Request) {

  const stripeData = await request.json()
  const subscriptionStatus = stripeData.data.object.status
  if (subscriptionStatus === 'paid') {

    const customerEmail = stripeData.data.object.customer_email

    await prisma.user.update({
      where: {
        email: customerEmail,
      },
      data: {
        subscription_active: true,
      }
    })
    return NextResponse.json({ payment: true })
  } else {
    return NextResponse.json({ payment: false })
  }
}


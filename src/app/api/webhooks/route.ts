import { headers } from "next/headers";
import { NextResponse } from "next/server";



export async function POST() {

  const headerList = headers()
  const secret = headerList.get('stripe-signature')

  if (secret) {
    return NextResponse.json({ payment: true })
  } else {
    return NextResponse.json({ payment: false })
  }


}


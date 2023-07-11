import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const sessionEmail = await request.json();

  if (sessionEmail !== null) {

    const user = await prisma.user.findUnique({
      where: {
        email: sessionEmail.email,
      }
    })

    return NextResponse.json({ paymentActive: user?.subscription_active })


  } else {
    return NextResponse.json({ error: 'Usuário não logado.', paymentActive: false, status: 400 })
  }


}

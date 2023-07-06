import { prisma } from '@/services/prisma'
import { NextResponse } from 'next/server'

interface dataPostResponse {
  name: string
  email: string
  imageUrl: string
}

export async function GET(request: Request) {
  const data = request.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const data: dataPostResponse = await request.json()
  const { name, email, imageUrl } = data

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userExists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  } else {
    const user = await prisma.user.create({ data: { email, name, imageUrl } })
    return NextResponse.json(user)
  }
}

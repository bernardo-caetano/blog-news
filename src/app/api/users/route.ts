import { prisma } from '@/services/prisma'
import { NextResponse } from 'next/server'

interface dataPostResponse {
  name: string
  email: string
  imageUrl: string
}

export async function GET(request: Request) {
  return NextResponse.json(request.body)
}

export async function POST(request: Request) {
  const data: dataPostResponse = await request.json()
  const { name, email, imageUrl } = data
  const user = await prisma.user.create({ data: { email, name, imageUrl } })
  return NextResponse.json(user)
}

import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface dataPostResponse {
  name: string
  email: string
  imageUrl: string
}

// export async function GET() {
//   return NextResponse.json({ message: 'hello', status: 200 })
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  } else {
    const data: dataPostResponse = req.body
    const { name, email, imageUrl } = data

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userExists) {
      return ''
    } else {
      const user = await prisma.user.create({ data: { email, name, imageUrl } })
      return res.status(201).json(user)
    }
  }

}

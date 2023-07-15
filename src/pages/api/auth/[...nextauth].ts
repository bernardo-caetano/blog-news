import { prisma } from '@/services/prisma'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : '',
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : '',
    }),
  ],


}
export default NextAuth(authOptions)

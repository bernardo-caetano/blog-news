'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface NextAuthProviderProps {
  children: ReactNode
}

export default function NextAuthProvider({ children }: NextAuthProviderProps) {
  return <SessionProvider>{children} </SessionProvider>
}

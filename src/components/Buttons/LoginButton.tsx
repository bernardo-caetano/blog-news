'use client'
import { ArrowRight, Note } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export function LoginButton() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center justify-center gap-12">
      {session?.expires !== undefined ? (
        <span> Logado </span>
      ) : (
        <>
          <Link
            href="/login"
            type="button"
            className="p-12 bg-gray-600 border-2 border-gray-800 rounded-lg flex gap-8 items-center justify-center transition
              hover:border-green-500"
          >
            <p>Login</p>
            <ArrowRight size={24} />
          </Link>
          <Link
            href="/cadastro"
            type="button"
            className="p-12 bg-gray-600 border-2 border-gray-800 rounded-lg flex gap-8 items-center justify-center transition
              hover:border-green-500"
          >
            <p>Cadastrar</p>
            <Note size={24} />
          </Link>
        </>
      )}
    </div>
  )
}

'use client'
import { ViewPost } from '@/controllers/ViewPost'
import { ArrowRight, Note } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export function LoginButton() {
  const { data: session } = useSession()
  useEffect(() => {
    ViewPost(session)
  }, [session])
  return (
    <div className="flex items-center justify-center gap-12">
      {session?.expires !== undefined ? (
        <>
          <span className="flex px-8 py-8 rounded-full gap-8 bg-gray-600 items-center justify-center">
            <Image
              className="rounded-full"
              src={session?.user?.image!}
              alt="foto do usuário"
              width={40}
              height={40}
            />
            <p>{session?.user?.name}</p>
          </span>
          <button
            type="button"
            onClick={() => signOut()}
            className="p-12 bg-gray-600 border-2 border-gray-800 rounded-lg flex gap-8 items-center justify-center transition
              hover:border-green-500"
          >
            Sair <ArrowRight />
          </button>
        </>
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

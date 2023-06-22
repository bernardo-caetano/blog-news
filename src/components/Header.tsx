'use client'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo/logo.png'
import { SocialIcons } from './SocialIcons'
import { useSession, signIn, signOut } from 'next-auth/react'
import { ArrowRight, Note } from '@phosphor-icons/react'

export function Header() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <header className="w-full bg-gray-800 flex justify-center items-center py-16 border-b-2 border-green-600 fixed top-0  ">
        <div className="w-11/12 flex justify-between items-center">
          <Link href="/" className="flex gap-8 ">
            {/* <span className="text-4xl text-green-600">LOGO</span> */}
            <Image src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-3xl">PRESSTART</h1>
          </Link>
          {/* <nav className="flex gap-8">
          <Link
            className="brightness-50 hover:brightness-100 transition tablet:brightness-100"
            href="/"
          >
            Consoles
          </Link>
          <Link
            className="brightness-50 hover:brightness-100 transition tablet:brightness-100"
            href="/"
          >
            E-Sports
          </Link>
          <Link
            className="brightness-50 hover:brightness-100 transition tablet:brightness-100"
            href="/"
          >
            Reviews
          </Link>
        </nav> */}
          <div className="flex items-center justify-center gap-12">
            <Link
              href="/login"
              type="button"
              className="p-12 bg-green-600 rounded-lg flex gap-8 items-center justify-center"
            >
              <p>Login</p>
              <ArrowRight size={24} />
            </Link>
            <Link
              href="/cadastro"
              type="button"
              className="p-12 bg-green-600 rounded-lg flex gap-8 items-center justify-center"
            >
              <p>Cadastrar</p>
              <Note size={24} />
            </Link>
          </div>

          {/* {session ? <p>Logado</p> : <p>Não Logado</p>}
        <SocialIcons /> */}
        </div>
      </header>
      <div className="w-full min-h-[82px]"></div>
    </>
  )
}

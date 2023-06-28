import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo/logo.png'
import { LoginButton } from './Buttons/LoginButton'

export function Header() {
  return (
    <>
      <header className="w-full bg-gray-800 flex justify-center items-center py-16 border-b-2 border-green-600 fixed top-0  ">
        <div className="w-11/12 flex justify-between items-center">
          <Link href="/" className="flex gap-8 ">
            <Image src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-3xl">PRESSTART</h1>
          </Link>
          <LoginButton />
        </div>
      </header>
      <div className="w-full min-h-[82px]"></div>
    </>
  )
}

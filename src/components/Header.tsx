import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo/logo.png'
import { SocialIcons } from './SocialIcons'

export function Header() {
  return (
    <div className="w-full bg-gray-500 flex justify-center items-center py-16 border-b-2 border-green-400 fixed top-0  ">
      <div className="w-11/12 flex justify-between items-center">
        <Link href="/" className="flex gap-8 ">
          {/* <span className="text-4xl text-green-400">LOGO</span> */}
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
        <SocialIcons />
      </div>
    </div>
  )
}

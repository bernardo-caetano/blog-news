import Link from 'next/link'
import logo from '@/assets/images/logo/logo.png'
import Image from 'next/image'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <div className="w-full bg-gray-800 flex justify-center items-center py-32  border-t-2 border-green-600 mt-32 flex-col gap-16 ">
      <div className="w-11/12 flex justify-between items-center">
        <Link href="/" className="flex gap-8 ">
          {/* <span className="text-4xl text-green-400">LOGO</span> */}
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
        <SocialIcons />
      </div>
      <span className="text-[12px]">
        © Copyright 2023-2023 Presstart Comunicação e Participações LTDA
      </span>
    </div>
  )
}

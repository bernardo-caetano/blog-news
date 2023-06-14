import Link from 'next/link'

export function Footer() {
  return (
    <div className="w-full bg-gray-500 flex justify-center items-center py-32  border-t-2 border-green-400 mt-32 flex-col gap-16">
      <div className="w-11/12 flex justify-between items-center">
        <Link href="/" className="flex gap-8 ">
          <span className="text-4xl text-green-400">LOGO</span>
        </Link>
        <div>ícones redes sociais</div>
      </div>
      <span className="text-[12px]">
        © Copyright 2023-2023 Presstart Comunicação e Participações LTDA
      </span>
    </div>
  )
}

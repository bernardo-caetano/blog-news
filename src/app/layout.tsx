import { Header } from '@/components/Header'
import './globals.css'
import { Roboto } from 'next/font/google'
import { DefaultLayout } from '@/components/Layouts/DefaultLayout'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog News',
  description: 'Seu blog de notícias',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-gray-800 text-white`}>
        <Header />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

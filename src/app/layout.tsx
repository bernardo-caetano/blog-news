import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import { Roboto } from 'next/font/google'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/../prismicio'
import NextAuthProvider from '@/Providers/NextAuthProvider'

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
    <html lang="pt-br" className="h-full w-full">
      <body
        className={`${roboto.className} h-full w-full bg-gray-900 text-white flex flex-col items-center`}
      >
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </NextAuthProvider>
      </body>
    </html>
  )
}

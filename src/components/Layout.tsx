import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout({ children }: {

  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center w-full h-full' >
        {children}
      </main>
      <Footer />
    </>
  )
}
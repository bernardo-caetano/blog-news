import { ReactNode } from 'react'
import { Billboard } from '../Ads/Billboard'

interface LayoutProps {
  children: ReactNode
}
export function DefaultLayout({ children }: LayoutProps) {
  return (
    <main>
      <div className="flex w-full h-full items-center justify-center my-32">
        <Billboard />
      </div>

      {children}
    </main>
  )
}

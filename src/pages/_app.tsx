import { repositoryName } from '@/prismicio'
import '@/styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { LoadingProvider } from '@/context/LoadingContext'
import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (<>
    <SessionProvider session={session}>
      <LoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProvider>
    </SessionProvider>
    <PrismicPreview repositoryName={repositoryName} />
  </>
  )
}

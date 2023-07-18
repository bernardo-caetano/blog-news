import { repositoryName } from '@/prismicio'
import '@/styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { LoadingProvider } from '@/context/LoadingContext'
import { Layout } from '@/components/Layout'
import { SubscriptionStatusProvider } from '@/context/SubscriptionStatusContext'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (<>
    <SessionProvider session={session}>
      <LoadingProvider>
        <SubscriptionStatusProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SubscriptionStatusProvider>
      </LoadingProvider>
    </SessionProvider>
    <PrismicPreview repositoryName={repositoryName} />
  </>
  )
}

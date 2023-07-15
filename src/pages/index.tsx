
import { createClient } from '@/prismicio'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { mainNewsMock } from '@/assets/mock/mainNews'
import { stripe } from '@/services/stripe'
import { MainNews } from '@/components/MainNews'
import { SubscribeButton } from '@/components/Buttons/SubscribeButton'
import NewsCard from '@/components/NewsCard'
import { getSession } from 'next-auth/react'

export default function Home({ newsData, product }: any) {

  // async function getNews() {
  //   const client = createClient()

  //   const newsData = await client.getAllByType('news')
  //   console.log(newsData)

  //   return newsData
  // }

  // useEffect(() => { console.log(newsData, product) }, [])
  const newsList = mainNewsMock

  const mainNewsData = newsList.slice(0, 3)

  const moreNewsData = newsList.slice(3, newsList.length)
  return (
    <div className="flex items-center justify-center flex-col max-w-[1230px] mt-32 pt-32">
      <MainNews mainNewsData={mainNewsData} />
      <section className="w-full h-full flex flex-col justify-center items-start gap-32 mt-32">
        <SubscribeButton priceId={product.priceId} />
        {moreNewsData.map((newsData, index) => {
          return <NewsCard key={index} dataNewsCard={newsData} />
        })}
      </section>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const client = createClient()
  const newsData = await client.getAllByType('news')
  const price = await stripe.prices.retrieve('price_1M9azvDXX8w4b1ObMu8EmOp2', {
    expand: ['product'],
  })
  const product = {
    priceId: price.id || null,
    amount:
      price.unit_amount !== null
        ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100)
        : null,
  }

  return { props: { newsData, product, session } }
}

import { createClient } from '@/prismicio'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { mainNewsMock } from '@/assets/mock/mainNews'
import { stripe } from '@/services/stripe'
import { MainNews } from '@/components/MainNews'
import { SubscribeButton } from '@/components/Buttons/SubscribeButton'
import { getSession } from 'next-auth/react'
import MoreNewsCard from '@/components/MoreNewsCard'
import NewsCard from '@/components/NewsCard'

interface NewsDataProps {
  uid: string
  url: string
  title: string
  subtitle: string
  img: {
    src: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
}

export default function Home({ newsData, product }: any) {
  const newsDataReducer = newsData.reduce((acc: NewsDataProps[], item: any) => {
    acc.push({
      uid: item.uid,
      url: item.url,
      title: item.data.slices[0].primary.title[0].text,
      subtitle: item.data.slices[0].primary.subtitle,
      img: {
        src: item.data.slices[0].primary.main_image.url,
        alt: item.data.slices[0].primary.main_image.alt,
        dimensions: {
          width: item.data.slices[0].primary.main_image.dimensions.width,
          height: item.data.slices[0].primary.main_image.dimensions.width,
        }
      }
    })
    return acc;
  }, [])

  const mainNewsData = newsDataReducer.slice(0, 3)
  const subscriptionNewsData = newsDataReducer.slice(3, 6)
  const moreNewsData = newsDataReducer.slice(6, newsData.length)
  return (
    <div className="flex items-center justify-center flex-col max-w-[1230px] mt-32 pt-32">
      <MainNews mainNewsData={mainNewsData} />
      <section className="w-full h-full flex flex-col justify-center items-start gap-32 mt-32">
        <label className='text-2xl'>Notícias para Assinantes</label>
        <div className="w-full h-full flex justify-between items-start gap-32 mt-32">
          {subscriptionNewsData.map((subscriptionNews: NewsDataProps, index: number) => {
            return <NewsCard key={index} dataNewsCard={subscriptionNews} />
          })}
        </div>
      </section>

      <section className="w-full h-full flex flex-col justify-center items-start gap-32 mt-32">
        <label className='text-2xl'>Mais Notícias</label>
        {moreNewsData.map((moreNews: NewsDataProps, index: number) => {
          return <MoreNewsCard key={index} dataNewsCard={moreNews} />
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
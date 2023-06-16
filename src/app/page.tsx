import { mainNewsMock } from '@/assets/mock/mainNews'
import { Billboard } from '../components/Ads/Billboard'
import { MainNews } from '../components/MainNews'
import NewsCard from '@/components/NewsCard'
import { createClient } from '../../prismicio'

export default async function Home({ params }: any) {
  const client = createClient()

  // const page = await client.getByUID('homepage', params.uid)

  console.log(params)
  return (
    <main className="flex items-center justify-center flex-col max-w-[1230px] mt-74">
      <div
        className="flex w-full h-full items-center justify-center my-32
      md-desk:w-730"
      >
        <Billboard />
      </div>
      <MainNews mainNewsData={mainNewsMock} />
      <section className="w-full h-full flex flex-col justify-center items-center gap-32 mt-32">
        {mainNewsMock.map((newsData, index) => {
          return <NewsCard key={index} dataNewsCard={newsData} />
        })}
      </section>
    </main>
  )
}

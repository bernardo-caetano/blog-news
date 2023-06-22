import { mainNewsMock } from '@/assets/mock/mainNews'
// import { Billboard } from '../components/Ads/Billboard'
import { MainNews } from '../components/MainNews'
import NewsCard from '@/components/NewsCard'
// import { createClient } from '../../prismicio'

// interface MainNewsType {
//   uid: string
//   url: string
//   title: string
//   subtitle: string
//   text: string
//   img: {
//     src: string
//     alt: string
//     dimensions: {
//       width: number
//       height: number
//     }
//   }
// }
export const revalidate = 60 * 60 * 60 * 24 * 7 // revalidate this page every 1 week

export default async function Home({ params }: any) {
  // const client = createClient()

  // const newsData = await client.getAllByType('news')

  // const newsList = newsData.reduce<MainNewsType[]>((acc, news) => {
  //   acc.push({
  //     uid: news.uid,
  //     url: news.url,
  //     title: news.data.slices[0]?.primary.title[0].text,
  //     subtitle: news.data.slices[0]?.primary.subtitle,
  //     img: {
  //       src: news.data.slices[0]?.primary.main_image.url,
  //       alt: news.data.slices[0]?.primary.main_image.alt,
  //       dimensions: news.data.slices[0]?.primary.main_image.dimensions,
  //     },
  //   })
  //   return acc
  // }, [] as MainNewsType[])

  const newsList = mainNewsMock

  const mainNewsData = newsList.slice(0, 3)

  const moreNewsData = newsList.slice(3, newsList.length)

  return (
    <main className="flex items-center justify-center flex-col max-w-[1230px] mt-32 pt-32">
      {/* <div
        className="flex w-full h-full items-center justify-center my-32
      md-desk:w-730"
      >
        <Billboard />
      </div> */}
      <MainNews mainNewsData={mainNewsData} />
      <section className="w-full h-full flex flex-col justify-center items-start gap-32 mt-32">
        {moreNewsData.map((newsData, index) => {
          return <NewsCard key={index} dataNewsCard={newsData} />
        })}
      </section>
    </main>
  )
}

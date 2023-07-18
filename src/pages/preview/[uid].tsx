/* eslint-disable prefer-const */
import { newsMock } from '@/assets/mock/newsMock'
import Image from 'next/image'
import { GetStaticProps } from 'next'

export default function NewsPreview({ news }: any) {
  return (
    <div className="flex items-center justify-center flex-col max-w-[1230px] mt-32">
      <section className="flex flex-col justify-center items-center gap-32">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-[56px] font-bold text-green-500">{news.title}</h1>

          <h2 className="text-[20px]">{news.subtitle}</h2>
        </div>
        <Image
          src={news.img.src}
          alt={news.img.alt}
          width={1230}
          height={600}
        />
      </section>
      <section className="text-[20px] flex flex-col gap-18 mt-32">
        <p>{news.text}</p>
      </section>
    </div>

  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
  // const client = createClient({ previewData })
  // const news = await client.getByUID('news', String(params?.uid))

  const news = newsMock

  return { props: { news } }
}
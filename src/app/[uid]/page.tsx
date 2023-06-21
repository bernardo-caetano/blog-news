// import { createClient } from '@/../prismicio'
import { newsMock } from '@/assets/mock/newsMock'
import Image from 'next/image'

export default async function News({ params }: any) {
  // const client = createClient()
  // const news = await client.getByUID('news', params.uid)
  // const data = news.data
  const news = newsMock

  return (
    <main className="flex items-center justify-center flex-col max-w-[1230px] mt-74">
      <section className="flex flex-col justify-center items-center gap-32">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-[56px] font-bold text-green-400">{news.title}</h1>

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
    </main>
  )
}
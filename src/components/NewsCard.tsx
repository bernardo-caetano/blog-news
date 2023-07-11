import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  dataNewsCard: {
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
}
export default function NewsCard({ dataNewsCard }: NewsCardProps) {
  return (
    <div className="flex items-center justify-center object-cover gap-16 w-full h-full">
      <Link
        href={`${dataNewsCard.url}`}
        className="w-full h-full flex items-center justify-center object-cover gap-16"
      >
        <Image
          className="aspect-video object-cover"
          src={dataNewsCard.img.src}
          alt={dataNewsCard.img.alt}
          width={340}
          height={190}
        />
        <div className="w-full h-full flex flex-col gap-8 justify-start items-start">
          <p className="text-[24px] text-green-500 font-bold">
            {dataNewsCard.title}
          </p>
          <p className="text-[16px] text-white font-normal">
            {dataNewsCard.subtitle}
          </p>
        </div>
      </Link>
    </div>
  )
}

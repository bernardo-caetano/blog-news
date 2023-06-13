import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  dataNewsCard: { img: string; alt: string; title: string }
}
export default function NewsCard({ dataNewsCard }: NewsCardProps) {
  return (
    <div className="flex items-center justify-center object-cover gap-16">
      <Link
        href="/"
        className="w-full h-full flex items-center justify-center object-cover gap-16"
      >
        <Image
          className="aspect-video"
          src={dataNewsCard.img}
          alt={dataNewsCard.alt}
          width={340}
          height={190}
        />
        <div className="w-full h-full">
          <p className="text-[24px] text-green-400 font-bold">
            {dataNewsCard.title}
          </p>
        </div>
      </Link>
    </div>
  )
}

import Link from 'next/link'

interface MainNewsDataProps {
  mainNewsData: {
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
  }[]
}
export function MainNews({ mainNewsData }: MainNewsDataProps) {
  return (
    <section className="flex justify-center items-center gap-16 w-full h-full max-h-660 min-h-660">
      <Link href={`${mainNewsData[0].url}`} className="w-full h-full">
        <div
          style={{
            background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[0]?.img.src})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
          className="flex bg-gray-200 w-full  justify-start items-end min-w-606 h-660 text-4xl font-bold px-32 pb-104"
        >
          {mainNewsData[0]?.title}
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center w-full h-full gap-16">
        <Link href={`${mainNewsData[1].url}`} className="w-full h-full">
          <div
            style={{
              background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[1]?.img.src})`,
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
            }}
            className="flex bg-gray-200 w-full h-322 justify-start items-end text-4xl font-bold pb-82 px-32"
          >
            {mainNewsData[1]?.title}
          </div>
        </Link>
        <Link href={`${mainNewsData[2].url}`} className="w-full h-full">
          <div
            style={{
              background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[2]?.img.src})`,
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
            }}
            className=" flex bg-gray-200 w-full h-322 justify-start items-end text-4xl font-bold pb-82 px-32"
          >
            {mainNewsData[2]?.title}
          </div>
        </Link>
      </div>
    </section>
  )
}

interface MainNewsProps {
  mainNewsData: { img: string; alt: string; title: string }[]
}

export function MainNews({ mainNewsData }: MainNewsProps) {
  return (
    <section className="flex justify-center items-center gap-16 w-full h-full max-h-660 min-h-660">
      <div
        style={{
          background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[0].img})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
        className="flex bg-gray-200 w-full  justify-start items-end min-w-606 h-660 text-4xl font-bold px-32 pb-104"
      >
        {mainNewsData[0].title}
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full gap-16">
        <div
          style={{
            background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[1].img})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
          className="flex bg-gray-200 w-full h-322 justify-start items-end text-4xl font-bold pb-82 px-32"
        >
          {mainNewsData[1].title}
        </div>
        <div
          style={{
            background: `linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%) , url(${mainNewsData[2].img})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
          className=" flex bg-gray-200 w-full h-322 justify-start items-end text-4xl font-bold pb-82 px-32"
        >
          {mainNewsData[2].title}
        </div>
      </div>
    </section>
  )
}

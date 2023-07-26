/* eslint-disable prefer-const */
import { newsMock } from '@/assets/mock/newsMock'
import { prisma } from '@/services/prisma'
import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { SubscriptionStatusContext } from '@/context/SubscriptionStatusContext'
import { createClient } from '@/prismicio'

export default function News({ userSubscriptionActive, news }: any) {
  const { handleSubscriptionStatus } = useContext(SubscriptionStatusContext)
  const { data: session } = useSession()
  const newsData = {
    title: news.data.slices[0].primary.title[0].text,
    subtitle: news.data.slices[0].primary.subtitle,
    img: {
      src: news.data.slices[0].primary.main_image.url,
      alt: news.data.slices[0].primary.main_image.alt,
      dimensions: {
        width: news.data.slices[0].primary.main_image.dimensions.width,
        height: news.data.slices[0].primary.main_image.dimensions.width,
      }
    },
    text: news.data.slices[1].primary.content[0].text,
  }

  useEffect(() => {
    handleSubscriptionStatus(userSubscriptionActive)
  }, [session])

  return (
    <div className="flex newss-center justify-center flex-col max-w-[1230px] mt-32">
      <section className="flex flex-col justify-center newss-center gap-32">
        <div className="flex flex-col newss-start justify-center gap-8">
          <h1 className="text-[56px] font-bold text-green-500">{newsData.title}</h1>

          <h2 className="text-[20px]">{newsData.subtitle}</h2>
        </div>
        <Image
          src={newsData.img.src}
          alt={newsData.img.alt}
          width={1230}
          height={600}
        />
      </section>
      <section className="text-[20px] flex flex-col gap-18 mt-32">
        <p>{newsData.text}</p>
      </section>
    </div>

  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const client = createClient()
  const news = await client.getByUID('news', String(context?.params?.uid))
  const userSubscriptionSituation = session ? await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
    select: {
      subscription_active: true
    }
  }) : { subscription_active: false }

  const userSubscriptionActive = userSubscriptionSituation !== null && userSubscriptionSituation?.subscription_active

  if (!userSubscriptionActive) {
    return {
      redirect: {
        destination: `/preview/${context?.params?.uid}`,
        permanent: false,
      }
    }
  }
  return { props: { session, userSubscriptionActive, news } }
}
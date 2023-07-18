/* eslint-disable prefer-const */
import { newsMock } from '@/assets/mock/newsMock'
import { prisma } from '@/services/prisma'
import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { SubscriptionStatusContext } from '@/context/SubscriptionStatusContext'

export default function News({ userSubscriptionActive, news }: any) {
  const { handleSubscriptionStatus } = useContext(SubscriptionStatusContext)
  const { data: session } = useSession()

  useEffect(() => {
    handleSubscriptionStatus(userSubscriptionActive)
  }, [session])

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  // const client = createClient()
  // const news = await client.getByUID('news', String(context?.params?.uid))

  const news = newsMock

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
        destination: '/',
        permanent: false,
      }
    }
  }
  return { props: { session, userSubscriptionActive, news } }
}
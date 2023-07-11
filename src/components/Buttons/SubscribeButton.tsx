
import { api } from "@/services/axios";
import { getStripeJs } from "@/services/stripe-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface SubscribeButtonProps {
  priceId: string | null;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      router.push('/login')

    } else {
      try {
        const response = await api.post('/subscribe', {
          email: session ? session?.user?.email : null,
        })

        const { sessionId } = response.data

        const stripe = await getStripeJs()

        await stripe?.redirectToCheckout({ sessionId })
      } catch (err) {
        console.error(err)
      }
    }


  }
  return (
    <button type="button"
      onClick={() => handleSubscribe()}>Inscreva-se</button>
  )
}

import { SubscriptionStatusContext } from "@/context/SubscriptionStatusContext";
import { api } from "@/services/axios";
import { getStripeJs } from "@/services/stripe-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// interface SubscribeButtonProps {
//   priceId: string | null;
// }

export function SubscribeButton(
  // { priceId }: SubscribeButtonProps
) {
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      router.push('/login')
    } else {

      try {
        const response = await api.post('/subscribe')

        const { sessionId } = response.data

        const stripe = await getStripeJs()

        await stripe?.redirectToCheckout({ sessionId })
      } catch (err) {
        console.error(err)
      }
    }


  }
  return (
    <button className="py-12 px-18 rounded-lg bg-green-600 transition hover:brightness-110 " type="button"
      onClick={() => handleSubscribe()}>Inscreva-se</button>
  )
}
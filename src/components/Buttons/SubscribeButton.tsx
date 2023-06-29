'use client'
import { api } from "@/services/axios";
import { getStripeJs } from "@/services/stripe-js";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface SubscribeButtonProps {
  priceId: string | null;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      redirect('/login')

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
    <button type="button"
      onClick={() => handleSubscribe()}>Inscreva-se</button>
  )
}
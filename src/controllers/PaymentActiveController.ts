'use client'
import { PaymentActiveContext } from "@/context/PaymentActiveContext"
import { useContext } from "react"

export function PaymentActiveController() {
  const { isPaymentActive } = useContext(PaymentActiveContext)
  if (isPaymentActive) {
    return isPaymentActive
  } else {
    return null
  }

}
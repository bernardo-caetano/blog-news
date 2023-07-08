/* eslint-disable prettier/prettier */
'use client'
import { createContext, useState, ReactNode, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { api } from '@/services/axios'

export const PaymentActiveContext = createContext({ isPaymentActive: false })

interface PaymentActiveProviderProps {
  children: ReactNode
}


export function PaymentActiveProvider({ children }: PaymentActiveProviderProps) {
  const { data: session } = useSession()
  const [isPaymentActive, setIsPaymentActive] = useState(false)


  const checkPaymentActive = useCallback(async () => {

    try {
      const response = await api.post('/checkPaymentActive', {
        email: session ? session?.user?.email : null,
      })

      setIsPaymentActive(response.data.paymentActive)

    } catch (err) {
      return ''
    }

  }, [session])

  useEffect(() => {
    if (session !== null && session !== undefined) {
      checkPaymentActive()
    }
  }, [session, checkPaymentActive])




  return (
    <PaymentActiveContext.Provider value={{ isPaymentActive }}>
      {children}
    </PaymentActiveContext.Provider>
  )
}
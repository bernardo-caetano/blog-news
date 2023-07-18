import { ReactNode, createContext, useState } from "react"

interface SubscriptionStatusProps {
  children: ReactNode
}

interface SubscriptionContextProps {
  subscriptionStatus: boolean
  handleSubscriptionStatus: (status: boolean) => void
}

export const SubscriptionStatusContext = createContext({} as SubscriptionContextProps)

export function SubscriptionStatusProvider({ children }: SubscriptionStatusProps) {
  const [subscriptionStatus, setSubscriptionStatus] = useState<boolean>(false)

  function handleSubscriptionStatus(status: boolean) {
    setSubscriptionStatus(status)
  }

  return (
    <SubscriptionStatusContext.Provider value={{ subscriptionStatus, handleSubscriptionStatus }}>{children}</SubscriptionStatusContext.Provider>
  )
}
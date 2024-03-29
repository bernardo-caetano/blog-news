/* eslint-disable prettier/prettier */
'use client'
import Router from 'next/router'
import { createContext, useState, ReactNode } from 'react'
import { Loader } from '@/components/Loader'

export const LoadingContext = createContext({ loading: false })

interface LoadingProviderProps {
	children: ReactNode
}

// interface LoadingState {
// 	loading: boolean
// 	setLoading: () => void
// }

export function LoadingProvider({ children }: LoadingProviderProps) {
	const [loading, setLoading] = useState<boolean>(false)

	const handleStart = () => {
		setLoading(true)
	}

	const handleComplete = () => {
		setLoading(false)
	}

	Router.events.on('routeChangeStart', handleStart)
	Router.events.on('routeChangeComplete', handleComplete)
	Router.events.on('routeChangeError', handleComplete)

	return (
		<LoadingContext.Provider value={{ loading }}>
			<Loader loading={loading} />
			{children}
		</LoadingContext.Provider>
	)
}

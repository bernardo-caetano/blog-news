'use client'

import { api } from '@/services/axios'
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthButtonProps {
  auth: string
}
export function AuthButton({ auth }: AuthButtonProps) {
  const router = useRouter()
  const { data: session } = useSession()
  console.log(session)
  async function postData() {
    try {
      await api.post('/users', {
        name: session?.user?.name,
        email: session?.user?.email,
        imageUrl: session?.user?.image,
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
      } else {
        console.error(err)
      }
    }
  }
  useEffect(() => {
    if (session === undefined || session === null) {
      // eslint-disable-next-line no-useless-return
      return
    } else {
      postData()
      // router.push('/')
    }
  }, [session, router])
  return (
    <button
      type="button"
      onClick={() => {
        signIn(auth)
      }}
      className="w-full max-w-[350px] rounded-full py-8 px-16 bg-gray-600 flex justify-center items-center gap-16  text-xl transition border-2 border-gray-800
      hover:border-green-500"
    >
      {auth === 'github' ? 'GitHub' : 'Google'}

      <span className="p-8 bg-gray-900 rounded-full">
        {auth === 'github' ? (
          <GithubLogo size={32} />
        ) : (
          <GoogleLogo size={32} />
        )}
      </span>
    </button>
  )
}

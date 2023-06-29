'use client'

import { api } from '@/services/axios'
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { signIn, useSession } from 'next-auth/react'

interface AuthButtonProps {
  auth: string
  isLogin?: boolean
}
export function AuthButton({ auth, isLogin = false }: AuthButtonProps) {
  const { data: session } = useSession()

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

  async function SignInFunction() {
    await signIn(auth)
    if (!isLogin) {
      await postData()
    }
  }

  return (
    <button
      type="button"
      onClick={() => {
        SignInFunction()
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

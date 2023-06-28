'use client'

import { signIn } from 'next-auth/react'

export function GitHubAuth() {
  return (
    <button type="button" onClick={() => signIn('github')}>
      Logar com GitHub
    </button>
  )
}

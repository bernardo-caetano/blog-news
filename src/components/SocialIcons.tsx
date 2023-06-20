'use client'
import { InstagramLogo, TwitterLogo, FacebookLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function SocialIcons({ size = 24, color = '#00B37E' }) {
  return (
    <span className="flex gap-8">
      <Link href="https://instagram.com" target="_blank">
        <InstagramLogo size={size} color={color} />
      </Link>
      <Link href="https://facebook.com" target="_blank">
        <FacebookLogo size={size} color={color} />
      </Link>
      <Link href="https://twitter.com" target="_blank">
        <TwitterLogo size={size} color={color} />
      </Link>
    </span>
  )
}

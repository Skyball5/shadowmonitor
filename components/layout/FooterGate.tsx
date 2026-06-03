'use client'

import { usePathname } from 'next/navigation'
import SiteFooter from './SiteFooter'

export default function FooterGate() {
  const pathname = usePathname()?.replace(/\/$/, '') || ''

  if (pathname === '/subscribe' || pathname === '/secure-tip') {
    return null
  }

  return <SiteFooter />
}
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SiteNavProps = {
  showActive?: boolean
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/investigations/armenia', label: 'Featured' },
  { href: '/view-all-articles', label: 'Archive' },
]

export default function SiteNav({ showActive = true }: SiteNavProps) {
  const pathname = usePathname()

  const isActive = (href: string) => showActive && pathname === href
  const isHome = showActive && pathname === '/'
  const isSecureTip = showActive && pathname === '/secure-tip'

  return (
    <div className="sticky top-0 z-50 flex min-h-[88px] items-center justify-between border-b border-[#151815] bg-black/82 px-5 sm:px-6">
      <Link
        href="/"
        className={`flex h-16 w-16 items-center justify-center rounded-xl border bg-[#0a0c0a] font-sans transition ${
          isHome
            ? 'border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]'
            : 'border-[#2a2d2a]'
        }`}
        aria-label="Back to home"
      >
        <span className="text-[1.2rem] font-semibold leading-none tracking-[-0.06em] text-white">
          s
        </span>
        <span className="text-[1.2rem] font-semibold leading-none tracking-[-0.06em] text-[#86a65b]">
          m
        </span>
      </Link>

      <nav className="flex items-center gap-5">
        {navLinks.map((link) => {
          const active = isActive(link.href)

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`text-sm transition ${
                active
                  ? 'rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-white'
                  : 'text-[#d8d8d8] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.linkedin.com/company/shadowmonitor"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ShadowMonitor LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2d2a] text-[#d8d8d8] transition hover:border-[#3d433d] hover:text-white sm:h-11 sm:w-11"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M8 10v6" />
              <path d="M8 7.5v.5" />
              <path d="M12 16v-3.2c0-1.3.8-2.3 2-2.3s2 .9 2 2.3V16" />
            </svg>
          </a>

          <a
  href="https://t.me/shadowmonitor_org"
  target="_blank"
  rel="noreferrer noopener"
  aria-label="ShadowMonitor Telegram"
  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2d2a] text-[#d8d8d8] transition hover:border-[#3d433d] hover:text-white sm:h-11 sm:w-11"
>
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 4 10 13" />
    <path d="M21 4 14 21l-4-8-8-4 19-5Z" />
  </svg>
</a>
        </div>

        <Link
          href="/secure-tip"
          aria-current={isSecureTip ? 'page' : undefined}
          className={`inline-flex rounded-lg border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
            isSecureTip
              ? 'border-white/25 bg-white/10 text-white'
              : 'border-[#2a2d2a] text-[#d8d8d8] hover:border-[#3d433d] hover:text-white'
          }`}
        >
          Secure tip
        </Link>
      </div>
    </div>
  )
}
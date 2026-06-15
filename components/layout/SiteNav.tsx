'use client'

import { useEffect, useState } from 'react'
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

function LinkedInIcon() {
  return (
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
  )
}

function TelegramIcon() {
  return (
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
  )
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export default function SiteNav({ showActive = true }: SiteNavProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => showActive && pathname === href
  const isHome = showActive && pathname === '/'
  const isSecureTip = showActive && pathname === '/secure-tip'

  const navItemClass = (active: boolean) =>
    `text-sm transition ${
      active
        ? 'rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-white'
        : 'text-[#d8d8d8] hover:text-white'
    }`

  const iconButtonClass =
    'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2d2a] text-[#d8d8d8] transition hover:border-[#3d433d] hover:text-white sm:h-11 sm:w-11'

  return (
    <div className="sticky top-0 z-50 border-b border-[#151815] bg-black/90">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex min-h-[72px] items-center justify-between gap-3 sm:min-h-[88px]">
          <Link
            href="/"
            className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-[#0a0c0a] font-sans transition sm:h-16 sm:w-16 ${
              isHome
                ? 'border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]'
                : 'border-[#2a2d2a]'
            }`}
            aria-label="Back to home"
          >
            <span className="text-[1rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[1.2rem]">
              s
            </span>
            <span className="text-[1rem] font-semibold leading-none tracking-[-0.06em] text-[#86a65b] sm:text-[1.2rem]">
              m
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={navItemClass(active)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/company/shadowmonitor"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="ShadowMonitor LinkedIn"
                className={iconButtonClass}
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://t.me/shadowmonitor_org"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="ShadowMonitor Telegram"
                className={iconButtonClass}
              >
                <TelegramIcon />
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

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://www.linkedin.com/company/shadowmonitor"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ShadowMonitor LinkedIn"
              className={iconButtonClass}
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://t.me/shadowmonitor_org"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ShadowMonitor Telegram"
              className={iconButtonClass}
            >
              <TelegramIcon />
            </a>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-site-nav"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={`${iconButtonClass} ${
                mobileMenuOpen ? 'border-white/25 bg-white/10 text-white' : ''
              }`}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-site-nav" className="pb-4 md:hidden">
            <div className="rounded-2xl border border-[#2a2d2a] bg-black/95 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
              <nav className="flex flex-col">
                {navLinks.map((link) => {
                  const active = isActive(link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-xl px-3 py-3 text-sm transition ${
                        active
                          ? 'bg-white/10 text-white'
                          : 'text-[#d8d8d8] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <Link
                href="/secure-tip"
                aria-current={isSecureTip ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`mt-3 inline-flex w-full items-center justify-center rounded-lg border px-3 py-3 text-sm transition ${
                  isSecureTip
                    ? 'border-white/25 bg-white/10 text-white'
                    : 'border-[#2a2d2a] text-[#d8d8d8] hover:border-[#3d433d] hover:text-white'
                }`}
              >
                Secure tip
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
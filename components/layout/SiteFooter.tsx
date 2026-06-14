import Link from 'next/link'

const exploreLinks = [
  { href: '/investigations/curacao', label: 'Featured investigation' },
  { href: '/subscribe', label: 'Subscribe' },
  { href: '/secure-tip', label: 'Secure Tip' },
]

const contactLinks = [
  {
    href: 'mailto:monitor@shadowmonitor.org',
    label: 'monitor@shadowmonitor.org',
    icon: MailIcon,
  },
  {
    href: 'https://t.me/shadowmonitor',
    label: 'Telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://www.linkedin.com/company/shadowmonitor',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
]

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
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

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
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

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-white/10 bg-black pt-6">
      <div className="mx-auto max-w-[1600px] border-t border-white/6 px-4 pt-6 pb-4 sm:px-6 sm:pt-6 sm:pb-6">
        <div className="rounded-[24px] bg-white/[0.03] px-5 py-6 text-[13px] text-white/45 sm:px-6 sm:py-7">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.9fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
  <span className="text-[15px] font-semibold leading-none tracking-[-0.08em]">
  <span className="text-white">s</span>
  <span className="text-[#86a65b]">m</span>
</span>
</div>

                <p className="text-[30px] font-semibold leading-none tracking-[-0.06em] text-white/85">
                  <span>shadow</span>
                  <span className="text-[#86a65b]">monitor</span>
                </p>
              </div>

              <p className="mt-4 max-w-sm leading-7">
                Investigating the systems behind the grey zone.
              </p>

              <a
                href="mailto:monitor@shadowmonitor.org"
                className="mt-5 block w-fit text-[15px] leading-7 text-white/85 transition hover:text-white"
              >
                <span className="text-[#86a65b]">monitor@shadowmonitor.org</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.34em] text-[#86a65b]">
                Explore
              </h3>

              <nav className="mt-4 flex flex-col gap-3">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="lg:-ml-12">
              <h3 className="text-xs uppercase tracking-[0.34em] text-[#86a65b]">
                Editorial
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-white/55">
                Independent investigative publication covering the systems,
  infrastructure and pressures shaping the grey zone economy.
              </p>

              <p className="mt-4 text-white/70">
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.34em] text-[#86a65b]">
                Contact
              </h3>

              <div className="mt-4 flex flex-col gap-4">
                {contactLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
                  >
                    <span className="text-[#86a65b]">
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/35">
            <p>© {new Date().getFullYear()} ShadowMonitor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

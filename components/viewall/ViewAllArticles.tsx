import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const archiveItems = [
  {
    type: 'Analysis',
    date: 'June 2026',
    title: 'The Other Armenia',
    excerpt:
      'While European leaders discuss Armenia’s future in Europe, a different Armenia quietly powers gambling infrastructure used across multiple continents — including parts of the ecosystem surrounding Iran’s parallel digital economy.',
    image: '/investigations/armenia-dossier.png',
    tags: ['ARMENIA', 'INFRASTRUCTURE', 'IGAMING'],
    href: '/investigations/armenia',
  },
  {
    type: 'Investigation',
    date: 'June 2026',
    title: 'Curaçao Is Losing Operators. The Reform Is Only Part of the Story',
    excerpt:
      'Regulatory reform may be reshaping Curaçao’s gambling system — but operators say the deeper risk lies elsewhere.',
    image: '/investigations/curacao-dossier.png',
    tags: ['CURAÇAO', 'AML', 'SANCTIONS', 'PAYMENT PROCESSORS'],
    href: '/investigations/curacao',
  },
  {
    type: 'Investigation',
    date: 'June 2026',
    title: 'Iran Built a Parallel Digital Economy Under Pressure',
    excerpt:
      'Persian betting platforms became part of a wider bypass infrastructure built around Telegram, crypto settlement and sanctions-era survival networks.',
    image: '/investigations/iran-shadow-economy.png',
    tags: ['IRAN', 'TELEGRAM', 'CRYPTO'],
    href: '/investigations/iran',
  },
  {
    type: 'Investigation',
    date: 'June 2026',
    title:
      "When Losing Becomes Optional: The Rise of Europe's Gambling Claim Industry",
    excerpt:
      'What began as consumer protection has evolved into a cross-border ecosystem of litigation, claim financing and gambling-loss recovery.',
    image: '/investigations/claims-industry-dossier.png',
    tags: ['CLAIMS', 'LITIGATION', 'EUROPE'],
    href: '/investigations/claims-industry',
  },
  {
    type: 'Investigation',
    date: 'May 2026',
    title: 'Anjouan: Inside the Offshore Licensing Machine',
    excerpt:
      'How the Union of the Comoros became one of the world’s most prolific issuers of online gambling licenses.',
    image: '/investigations/anjouan-dossier.png',
    tags: ['ANJOUAN', 'GAMBLING', 'OFFSHORE LICENSING'],
    href: '/investigations/anjouan',
  },
  {
    type: 'Analysis',
    date: 'May 2026',
    title: "The Market for Tomorrow's Secrets",
    excerpt:
      'Prediction markets are turning information about future events into a tradable asset — creating new forms of insider trading, media influence and regulatory conflict.',
    image: '/investigations/prediction-market-dossier.png',
    tags: ['PREDICTION', 'MARKETS', 'INTELLIGENCE'],
    href: '/investigations/prediction',
  },
]

const jurisdictions = [
  ['CUR', 'Bankruptcy Law'],
  ['ARM', 'iGaming Industry'],
  ['GER', 'Claims Industry'],
  ['IRN', 'Betting Economy'],
]


function HomepageHeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-[30px] bg-black">
      <div className="grid grid-cols-12 gap-6 px-5 pb-5 pt-8 sm:px-6 sm:pt-10 lg:items-start">
        <div className="relative z-30 col-span-12 lg:col-span-4 lg:pr-2">
          <div className="max-w-[560px]">
            <h1 className="relative z-40 text-[clamp(2.7rem,4.2vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              shadow<span className="text-[#86a65b]">monitor</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.36em] text-[#8d938d] sm:mt-8 sm:text-[0.72rem] sm:tracking-[0.38em]">
  <span>Independent</span>
  <span>•</span>
  <span>Investigative</span>
  <span>•</span>
  <span>Intelligence</span>
</div>

<p className="mt-8 max-w-[520px] text-[1.35rem] leading-[1.42] tracking-[-0.03em] text-[#d8d8d8] sm:mt-10 sm:text-[1.55rem] lg:text-[1.7rem]">
  Investigating the systems behind the grey zone.
</p>

<div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
  <Link
    href="/about"
    className="inline-flex rounded-xl bg-[#9fbe63] px-5 py-3.5 text-sm font-medium text-black transition hover:bg-[#b1d26d] sm:px-7 sm:py-4"
  >
    Our Approach
  </Link>

  <Link
    href="/subscribe"
    className="inline-flex rounded-xl border border-white/20 px-5 py-3.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/5 sm:px-7 sm:py-4"
  >
    Subscribe
  </Link>
</div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[320px] lg:h-[380px]">
            <img
              src="/main/heromain-map.png"
              alt="ShadowMonitor intelligence map"
              className="h-full w-full object-cover"
              style={{
                objectPosition: '48% 46%',
                transform: 'scale(0.95)',
                transformOrigin: 'center center',
              }}
            />

            <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-[#050705] via-[#050705]/65 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[6%] bg-gradient-to-l from-[#050705] via-[#050705]/25 to-transparent" />
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-3">
          <div className="rounded-[24px] bg-[rgba(5,7,5,0.82)] p-3.5 backdrop-blur-sm sm:p-4">
            <div className="text-[1.2rem] font-semibold tracking-[-0.05em] text-[#9fbe63] sm:text-[1.35rem]">
              JUNE 2026
            </div>

            <div className="mt-4 text-[0.62rem] uppercase tracking-[0.28em] text-[#9ca19c] sm:text-[0.68rem]">
              Jurisdictions in focus
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4 sm:mt-5 sm:gap-x-6 sm:gap-y-4">
              {jurisdictions.map(([code, label]) => (
                <div key={code}>
                  <div className="text-[1.45rem] font-medium tracking-[-0.04em] text-white sm:text-[1.55rem]">
                    {code}
                  </div>

                  <div className="mt-1 text-[0.75rem] leading-snug text-[#7d837d] sm:text-[0.8rem] sm:leading-relaxed">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function FeedCard({
  item,
}: {
  item: {
    type: string
    date: string
    title: string
    excerpt: string
    image: string
    tags: string[]
    href: string
  }
}) {
  return (
    <article className="grid gap-4 rounded-[22px] bg-black/20 p-4 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:items-start">
      <div className="aspect-[3/2.2] w-full overflow-hidden rounded-[18px] bg-gradient-to-br">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs uppercase tracking-[0.28em] text-[#86a65b]">
            {item.type}
          </span>
          <span className="text-xs text-white/35">{item.date}</span>
        </div>

        <h2 className="mt-3 text-[22px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[28px]">
          <Link href={item.href} className="transition hover:text-[#86a65b]">
            {item.title}
          </Link>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60 sm:text-[14px]">
          {item.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ViewAllArticles() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav />

      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
        <HomepageHeroBanner />

        <section
          id="all-articles"
          className="mt-4 rounded-[24px] bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.38em] text-[#86a65b]">
              All publications
            </p>

            <Link
              href="/"
              className="inline-flex rounded-lg border border-white/10 px-3 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/70 transition hover:border-white/20 hover:text-white"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-4">
            {archiveItems.map((item, index) => (
              <div
                key={item.title}
                className={index === 0 ? '' : 'mt-4 border-t border-white/10 pt-4'}
              >
                <FeedCard item={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
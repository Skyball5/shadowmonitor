import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const featuredInvestigation = {
  type: 'Analysis',
  date: 'June 2026',
  title: 'The Market of Reputation Warfare',
  excerpt:
    'Private intelligence firms, SEO takedown specialists, stolen algorithms, and false attribution through planted code: in iGaming, reputation has become a weapon. Here is how the market that manufactures and destroys it on demand actually works.',
  image: '/investigations/reputation-warfare.png',
  tags: ['REPUTATION', 'SEO TAKEDOWNS', 'ATTRIBUTION'],
  href: '/investigations/reputation-warfare',
}

const featuredTags = featuredInvestigation.tags

const feedItems = [
  {
  type: 'Analysis',
  date: 'June 2026',
  title: 'The Other Armenia',
  excerpt:
    'While European leaders discuss Armenia’s future in Europe, a different Armenia quietly powers gambling infrastructure used across multiple continents — including parts of the ecosystem surrounding Iran’s parallel digital economy.',
  image: '/investigations/armenia-dossier.png',
  tags: ['ARMENIA', 'INFRASTRUCTURE', 'IGAMING'],
  tone: 'from-[#101613] via-[#151b15] to-[#050505]',
},
  {
    type: 'Investigation',
    date: 'June 2026',
    title: 'Curaçao Is Losing Operators. The Reform Is Only Part of the Story',
    excerpt:
      'Regulatory reform may be reshaping Curaçao’s gambling system — but operators say the deeper risk lies elsewhere.',
    image: '/investigations/curacao-dossier.png',
    tags: ['CURAÇAO', 'AML', 'SANCTIONS', 'PAYMENT PROCESSORS'],
    tone: 'from-[#101613] via-[#151b15] to-[#050505]',
  },
  {
    type: 'Investigation',
    date: 'June 2026',
    title: 'Iran Built a Parallel Digital Economy Under Pressure',
    excerpt:
      'Persian betting platforms became part of a wider bypass infrastructure built around Telegram, crypto settlement and sanctions-era survival networks.',
    image: '/investigations/iran-shadow-economy.png',
    tags: ['IRAN', 'TELEGRAM', 'CRYPTO'],
    tone: 'from-[#111311] via-[#171915] to-[#050505]',
  },
  {
    type: 'Analysis',
    date: 'May 2026',
    title: "The Market for Tomorrow's Secrets",
    excerpt:
      'Prediction markets are turning information about future events into a tradable asset — creating new forms of insider trading, media influence and regulatory conflict.',
    image: '/investigations/prediction-market-dossier.png',
    tags: ['PREDICTION', 'MARKETS', 'INTELLIGENCE'],
    tone: 'from-[#101214] via-[#16191d] to-[#050505]',
  },
  
]

const jurisdictions = [
  ['CUR', 'Bankruptcy Law'],
  ['ARM', 'iGaming Industry'],
  ['GER', 'Claims Industry'],
  ['IRN', 'Betting Economy'],
]

const topics = ['Investigations', 'iGaming', 'Crypto', 'Fintech', 'Offshore']

const navigation = [
  { label: 'News', href: '#' },
  { label: 'Investigations', href: '#latest' },
  { label: 'Regulators', href: '#' },
  { label: 'About', href: '#' },
]

function HomepageHeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-[30px] bg-black">
  {/* HERO */}
  <div className="grid grid-cols-12 gap-6 px-5 pb-5 pt-8 sm:px-6 sm:pt-10 lg:items-start">
        {/* LEFT */}
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
              Investigating the systems behind the Grey Zone.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
              <div className="flex items-center gap-3">
  <Link
    href="/about"
    className="inline-flex items-center rounded-full bg-[#86a65b] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
  >
    Our Approach
  </Link>

  <Link
    href="/subscribe"
    className="inline-flex items-center rounded-full border border-white/80 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
  >
    Subscribe
  </Link>
</div>
            </div>
          </div>
        </div>

        {/* MAP */}
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

        {/* RIGHT PANEL */}
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

function HomepageFeaturedInvestigation() {
  return (
    <article className="overflow-hidden rounded-[28px] bg-neutral-950">
      <div className="relative px-5 py-5 sm:px-6 sm:py-6 lg:min-h-[360px] lg:px-9 lg:py-9">
        <div className="relative z-30 flex flex-col lg:w-[60%] lg:pr-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[#86a65b] sm:text-xs">
              Featured publication
            </div>

            <div className="h-1 w-1 rounded-full bg-neutral-500" />

            <div className="text-[0.68rem] text-neutral-500 sm:text-xs">
              Published June, 2026
            </div>

            <div className="h-1 w-1 rounded-full bg-neutral-500" />

            <div className="text-[0.68rem] text-neutral-500 sm:text-xs">
              20 min read
            </div>
          </div>

          <div className="mt-6 max-w-3xl sm:mt-7">
            <Link href={featuredInvestigation.href} className="block group">
              <h1 className="max-w-3xl text-[clamp(1.55rem,2.1vw,2.55rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-neutral-100 transition group-hover:text-[#9fbe63] sm:text-[clamp(1.7rem,2.3vw,2.8rem)]">
                {featuredInvestigation.title}
              </h1>
            </Link>

            <p className="mt-4 max-w-2xl text-[clamp(0.95rem,1.05vw,1.1rem)] leading-relaxed text-neutral-300 sm:mt-5">
              {featuredInvestigation.excerpt}
            </p>
          </div>

          <div className="mt-6 lg:hidden">
            <div className="relative h-[240px] overflow-hidden rounded-[22px] sm:h-[280px]">
              <img
                src={featuredInvestigation.image}
                alt={featuredInvestigation.title}
                className="h-full w-full object-cover"
                style={{ objectPosition: '88% 46%' }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/24 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-neutral-950/80 to-transparent" />

<div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-neutral-950/80 to-transparent" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 sm:mt-9">
            {featuredTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden rounded-r-[28px] lg:block">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(134,166,91,0.08),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(134,166,91,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />

  <div
    className="absolute inset-0"
    style={{
      WebkitMaskImage:
        'radial-gradient(ellipse at center, black 54%, transparent 100%)',
      maskImage:
        'radial-gradient(ellipse at center, black 54%, transparent 100%)',
    }}
  >
    <img
      src={featuredInvestigation.image}
      alt={featuredInvestigation.title}
      className="absolute inset-0 h-full w-full object-cover"
      style={{
        transform: 'translateX(-2%) scale(1)',
        transformOrigin: 'center center',
        objectPosition: '92% 46%',
      }}
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/5 to-transparent" />

<div className="absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent" />

<div className="absolute inset-y-0 left-[10%] w-[10%] bg-neutral-950/25 blur-2xl" />

<div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-neutral-950/70 to-transparent" />

<div className="absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-neutral-950/60 to-transparent" />

<div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-neutral-950/60 to-transparent" />
</div>
      </div>
    </article>
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
    image: string | null
    tags: string[]
    tone: string
  }
}) {
    const href = item.title.includes('The Other Armenia')
    ? '/investigations/armenia'
    : item.title.includes("The Market for Tomorrow's Secrets")
      ? '/investigations/prediction'
      : item.title.includes('Anjouan')
        ? '/investigations/anjouan'
        : item.title.includes('Curaçao')
          ? '/investigations/curacao'
          : item.title.includes('Iran')
            ? '/investigations/iran'
            : item.title.includes('When Losing Becomes Optional')
              ? '/investigations/claims-industry'
              : '#'

  return (
    <article className="grid gap-4 rounded-[22px] bg-black/20 p-4 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:items-start">
      <div className="aspect-[3/2.2] w-full overflow-hidden rounded-[18px] bg-gradient-to-br">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${item.tone}`} />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs uppercase tracking-[0.28em] text-[#86a65b]">
            {item.type}
          </span>
          <span className="text-xs text-white/35">{item.date}</span>
        </div>

        <h2 className="mt-3 text-[22px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[28px]">
          <Link href={href} className="transition hover:text-[#86a65b]">
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

export default function HomeLayout() {
  return (
    <main className="min-h-screen bg-black text-white">
  <SiteNav />

  <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
    <HomepageHeroBanner />

        <div className="mt-2">
          <HomepageFeaturedInvestigation />
        </div>

        <section
          id="latest"
          className="mt-4 rounded-[24px] bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.38em] text-[#86a65b]">
              Recent publications
            </p>

            <Link
              href="/view-all-articles"
              className="inline-flex whitespace-nowrap rounded-lg border border-white/20 px-5 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:text-white"
            >
              View All
            </Link>
          </div>

          <div className="mt-4">
            {feedItems.map((item, index) => (
              <div
                key={item.title}
                className={index === 0 ? '' : 'border-t border-white/10 pt-4 mt-4'}
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
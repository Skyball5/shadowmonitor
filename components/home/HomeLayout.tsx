import Link from 'next/link'

const featuredTags = ['CURAÇAO', 'AML', 'SANCTIONS', 'PAYMENT PROCESSORS']

const feedItems = [
  {
    type: 'Investigation',
    date: 'Nov 18, 2024',
    title: 'Anjouan: Inside the Offshore Licensing Machine',
    excerpt:
      'How the Union of the Comoros became one of the world’s most prolific issuers of online gambling licenses.',
    image: '/investigations/anjouan-dossier.png',
    tags: ['ANJOUAN', 'GAMBLING', 'OFFSHORE LICENSING'],
    tone: 'from-[#0f1511] via-[#171b15] to-[#050505]',
  },
  {
    type: 'Investigation',
    date: 'May 2026',
    title: 'Iran Built a Parallel Digital Economy Under Pressure',
    excerpt:
      'Persian betting platforms became part of a wider bypass infrastructure built around Telegram, crypto settlement and sanctions-era survival networks.',
    image: '/investigations/iran-shadow-economy.png',
    tags: ['IRAN', 'TELEGRAM', 'CRYPTO'],
    tone: 'from-[#101613] via-[#151b15] to-[#050505]',
  },
  {
    type: 'Analysis',
    date: 'Nov 29, 2024',
    title: 'Cyprus: The Silent Gateway for High-Risk Entities',
    excerpt:
      'Why Cyprus continues to attract high-risk businesses despite repeated regulatory promises.',
    image: null,
    tags: ['CYPRUS', 'REGULATION', 'HIGH RISK'],
    tone: 'from-[#131313] via-[#191919] to-[#080808]',
  },
  {
    type: 'Investigation',
    date: 'Nov 26, 2024',
    title: 'The Broker Network Behind Latin America’s Betting Boom',
    excerpt:
      'An affiliate network built in Costa Rica is feeding millions into unregulated platforms.',
    image: null,
    tags: ['COSTA RICA', 'BETTING', 'AFFILIATES'],
    tone: 'from-[#10110f] via-[#161616] to-[#070707]',
  },
]

const jurisdictions = [
  ['CUR', 'High risk · Payment processors'],
  ['MLT', 'Medium risk · Gaming'],
  ['GIB', 'High risk · Compliance'],
  ['IOM', 'Medium risk · Licensing'],
  ['UK', 'High risk · Service firms'],
  ['US', 'High risk · Payment routing'],
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
    <section className="relative overflow-hidden rounded-[34px] bg-black">
      {/* NAV */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#151815] px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2a2d2a] bg-[#0a0c0a] text-sm font-medium text-[#d7d7d7]">
            sm
          </div>

          <div className="text-[2rem] font-semibold tracking-[-0.05em] text-white">
            shadow<span className="text-[#86a65b]">monitor</span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm text-[#a7aaa7] lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-[#2a2d2a] px-4 py-2 text-sm text-[#d8d8d8] transition hover:border-[#3d433d] hover:text-white">
            Secure tip
          </button>

          <button className="rounded-lg bg-[#9fbe63] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#b1d26d]">
            Subscribe
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="grid grid-cols-12 gap-8 px-6 pb-4 pt-10 lg:items-start">
        {/* LEFT */}
        <div className="relative z-30 col-span-12 lg:col-span-4 lg:pr-4">
          <div className="max-w-[560px]">
            <h1 className="relative z-40 text-[clamp(3.6rem,5.6vw,5.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
              shadow<span className="text-[#86a65b]">monitor</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[0.72rem] uppercase tracking-[0.38em] text-[#8d938d]">
              <span>Independent</span>
              <span>•</span>
              <span>Investigative</span>
              <span>•</span>
              <span>Intelligence</span>
            </div>

            <p className="mt-12 max-w-[520px] text-[2rem] italic leading-[1.45] tracking-[-0.03em] text-[#d8d8d8]">
              Exposing the hidden structures and power behind the grey zone economies.
            </p>

            <div className="mt-14 flex items-center gap-4">
              <button className="rounded-xl bg-[#9fbe63] px-7 py-4 text-sm font-medium text-black transition hover:bg-[#b1d26d]">
                Subscribe
              </button>

              <button className="rounded-xl px-7 py-4 text-sm text-[#d5d5d5] transition hover:border-[#404640] hover:text-white">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="col-span-12 lg:col-span-5">
          <div className="relative h-[360px] overflow-hidden lg:h-[420px]">
            <img
              src="/main/heromain-map.png"
              alt="ShadowMonitor intelligence map"
              className="h-full w-full object-cover"
              style={{ objectPosition: '58% 50%' }}
            />

            <div className="absolute inset-y-0 left-0 w-[13%] bg-gradient-to-r from-[#050705] via-[#050705]/78 to-transparent" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="col-span-12 lg:absolute lg:right-6 lg:top-20 lg:z-30 lg:w-[340px]">
          <div className="rounded-[28px] bg-[rgba(5,7,5,0.82)] p-6 backdrop-blur-sm">
            <div className="text-[2rem] font-semibold tracking-[-0.05em] text-[#9fbe63]">
              APRIL 2026
            </div>

            <div className="mt-8 text-[0.78rem] uppercase tracking-[0.34em] text-[#9ca19c]">
              Jurisdictions in focus
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              {jurisdictions.map(([code, label]) => (
                <div key={code}>
                  <div className="text-[2rem] font-medium tracking-[-0.04em] text-white">
                    {code}
                  </div>

                  <div className="mt-2 text-sm leading-relaxed text-[#7d837d]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#1f231f]" />

            <div className="mt-10 text-[0.78rem] uppercase tracking-[0.34em] text-[#9ca19c]">
              Topics
            </div>

            <div className="mt-8 space-y-2">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-between text-[1.15rem] text-[#d4d4d4]"
                >
                  <span>{topic}</span>
                  <span className="text-[#86a65b]">›</span>
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
    <article className="overflow-hidden rounded-[30px] bg-neutral-950">
      <div className="relative min-h-[500px] px-8 py-8 sm:px-10 lg:px-12">
        <div className="relative z-30 flex min-h-[460px] flex-col lg:w-[60%] lg:pr-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
              Featured investigation
            </div>

            <div className="h-1 w-1 rounded-full bg-neutral-500" />

            <div className="text-xs text-neutral-500">Published Nov 18, 2024</div>

            <div className="h-1 w-1 rounded-full bg-neutral-500" />

            <div className="text-xs text-neutral-500">7 min read</div>
          </div>

          <div className="mt-10 max-w-3xl">
            <h1 className="max-w-3xl text-[clamp(1.9rem,2.85vw,3.3rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-neutral-100">
              Curaçao Is Losing Operators. The Reform Is Only Part of the Story
            </h1>

            <p className="mt-7 max-w-2xl text-[clamp(1.1rem,1.35vw,1.45rem)] leading-relaxed text-neutral-300">
              New documents reveal how a payment processor operated for years under the radar —
              until it couldn’t.
            </p>
          </div>

          <div className="mt-8 lg:hidden">
            <div className="relative h-[320px] overflow-hidden rounded-[26px]">
              <img
                src="/investigations/curacao-dossier.png"
                alt="Procedural investigation artwork for Curaçao bankruptcy article"
                className="h-full w-full object-cover"
                style={{ objectPosition: '90% 46%' }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/28 to-transparent" />
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-10 lg:pt-14">
            {featuredTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] overflow-hidden rounded-r-[30px] lg:block">
          <img
            src="/investigations/curacao-dossier.png"
            alt="Procedural investigation artwork for Curaçao bankruptcy article"
            className="h-full w-full object-cover"
            style={{
              transform: 'translateX(-8%) scale(0.97)',
              transformOrigin: 'center center',
            }}
          />

          <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-neutral-950 via-neutral-950/20 to-transparent" />
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
  const href = item.title.includes('Anjouan')
  ? '/investigations/anjouan'
  : item.title.includes('Curaçao')
    ? '/investigations/curacao'
    : '#'

  return (
    <article className="grid gap-4 rounded-[22px] border border-white/10 bg-black/20 p-4 md:grid-cols-[260px_minmax(0,1fr)]">
      <div
        className={`overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br ${item.tone}`}
      >
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-[190px] w-full object-cover" />
        ) : (
          <div className="h-[190px]" />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs uppercase tracking-[0.28em] text-[#86a65b]">{item.type}</span>
          <span className="text-xs text-white/35">{item.date}</span>
        </div>

        <h2 className="mt-3 text-[28px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[34px]">
          <Link href={href} className="transition hover:text-[#86a65b]">
            {item.title}
          </Link>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60 sm:text-[15px]">
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
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
        <HomepageHeroBanner />

        <div className="mt-4">
          <HomepageFeaturedInvestigation />
        </div>

        <section
          id="latest"
          className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.38em] text-[#86a65b]">
              Latest investigations
            </p>

            <span className="text-xs text-white/35">View all</span>
          </div>

          <div className="mt-4 space-y-4">
            {feedItems.map((item) => (
              <FeedCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <footer className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm text-white/40">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
            <div>
              <p className="text-[30px] font-semibold leading-none tracking-[-0.06em] text-white/85">
                <span>shadow</span>
                <span className="text-[#86a65b]">monitor</span>
              </p>

              <p className="mt-4 max-w-sm leading-7">
                Investigating the grey zones of finance. Exposing risk. Promoting transparency.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
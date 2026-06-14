import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const heroImage = '/about/about-hero.png'

function AboutHeroVisual() {
  return (
    <article className="overflow-hidden rounded-[28px] bg-neutral-950">
      <div className="relative px-5 py-5 sm:px-6 sm:py-6 lg:min-h-[360px] lg:px-9 lg:py-9">
        <div className="relative z-30 flex flex-col lg:w-[60%] lg:pr-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[#86a65b] sm:text-xs">
              About ShadowMonitor
            </div>

            <div className="h-1 w-1 rounded-full bg-neutral-500" />

            <div className="text-[0.68rem] text-neutral-500 sm:text-xs">
              Independent investigative intelligence
            </div>
          </div>

          <div className="mt-6 max-w-3xl sm:mt-7">
            <h1 className="max-w-3xl text-[clamp(1.55rem,2.1vw,2.55rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-neutral-100 sm:text-[clamp(1.7rem,2.3vw,2.8rem)]">
              Investigating the Systems Behind the Grey Zone
            </h1>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {['iGaming', 'Crypto', 'Offshore Finance', 'Payments', 'Infrastructure'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.05vw,1.1rem)] leading-relaxed text-neutral-300 sm:mt-6">
              We analyse how systems emerge, adapt and evolve under pressure.
            </p>
            <div className="mt-10">
  <Link
    href="/"
    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/15"
  >
    ← Back to ShadowMonitor
  </Link>
</div>
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <div className="relative h-[240px] overflow-hidden rounded-[22px] sm:h-[280px]">
            <img
              src={heroImage}
              alt="ShadowMonitor About Hero"
              className="h-full w-full object-cover"
              style={{ objectPosition: '48% 46%' }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/24 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-neutral-950/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-neutral-950/80 to-transparent" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden rounded-r-[28px] lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(134,166,91,0.08),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(134,166,91,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />

          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 54%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 54%, transparent 100%)',
            }}
          >
            <img
              src={heroImage}
              alt="ShadowMonitor About Hero"
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
  <SiteNav />

  <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
    <div className="mt-6">
      <AboutHeroVisual />
    </div>

        <section className="mt-6 rounded-[30px] bg-[#f3eee7] p-6 text-[#171612] sm:p-8 lg:p-10">
  <p className="text-xs uppercase tracking-[0.42em] text-[#7b7d6b]">
    Why We Don't Trust Simple Stories
  </p>

  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171612] sm:text-3xl">
    The grey zone is full of simple stories.
  </h2>

  <div className="mt-6 max-w-[78ch] space-y-4 text-[1.02rem] leading-8 text-[#26241f] sm:text-[1.08rem]">
    <p>
      A regulator is the hero. An operator is the villain. A government is
      protecting the public. A company is exploiting a loophole.
    </p>

    <p>
      Or the other way around.
    </p>

    <p>
      The longer you observe these environments, the harder it becomes to
      believe in explanations that simple.
    </p>

    <p>
      What appears to be a loophole is often an adaptation. What appears to be
      circumvention is often a response to pressure. What appears to be a
      conflict is often the visible expression of a larger system operating
      beneath the surface.
    </p>

    <p>
      We are less interested in assigning roles. We are interested in
      understanding how the system itself works.
    </p>
  </div>
</section>

        <section className="mt-4 rounded-[30px] bg-[#f3eee7] p-6 text-[#171612] sm:p-8 lg:p-10">
  <p className="text-xs uppercase tracking-[0.42em] text-[#7b7d6b]">
    What We Investigate
  </p>

  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171612] sm:text-3xl">
    The industries are different. The systems are connected.
  </h2>

  <div className="mt-6 max-w-[78ch] space-y-4 text-[1.02rem] leading-8 text-[#26241f] sm:text-[1.08rem]">
    <p>
      ShadowMonitor focuses on iGaming, crypto, offshore finance, payments
      infrastructure and the networks that connect them.
    </p>

    <p>
      On paper, these may appear to be separate industries. In practice, they
      overlap constantly.
    </p>

    <p>
      An operator depends on payment infrastructure. Payment infrastructure
      depends on licensing structures. Licensing structures depend on
      regulatory pressure.
    </p>

    <p>
      What interests us is not a particular sector in isolation, but the
      systems that emerge when these sectors interact.
    </p>
  </div>
</section>
<section className="mt-4 rounded-[30px] bg-[#f3eee7] p-6 text-[#171612] sm:p-8 lg:p-10">
  <p className="text-xs uppercase tracking-[0.42em] text-[#7b7d6b]">
    How Systems Emerge
  </p>

  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171612] sm:text-3xl">
    Order. Pressure. Adaptation. New order.
  </h2>

  <div className="mt-6 max-w-[78ch] space-y-4 text-[1.02rem] leading-8 text-[#26241f] sm:text-[1.08rem]">
    <p>
      Most systems begin with order. Rules are established. Boundaries are
      drawn. Institutions define what is permitted, prohibited and economically
      viable.
    </p>

    <p>
      Then reality intervenes. Markets change. Technology evolves. Participants
      adapt. Pressure accumulates.
    </p>

    <p>
      The existing framework begins to encounter situations it was never
      designed to handle.
    </p>

    <p>
  What begins as a workaround becomes infrastructure. What begins as an
  exception becomes a standard. What begins as a response to pressure
  becomes a new system.
</p>
</div>
</section>

<section className="mt-10 rounded-[28px] border border-white/10 bg-neutral-950 px-6 py-7 sm:px-8 sm:py-8">
  <div className="max-w-3xl">
    <div className="text-xs uppercase tracking-[0.34em] text-[#86a65b]">
      Secure Tip
    </div>

    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
      Have information worth sharing?
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-white/60">
      ShadowMonitor accepts confidential tips related to gambling,
      payments, offshore finance, crypto infrastructure and regulatory
      pressure. If you believe something deserves closer examination,
      we would like to hear from you.
    </p>

    <Link
      href="/secure-tip"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#86a65b] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
    >
      Submit a Secure Tip →
    </Link>
  </div>
</section>
      </div>
    </main>
  )
}
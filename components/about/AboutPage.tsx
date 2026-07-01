import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const heroImage = '/about/about-hero.png'

function AboutHeroVisual() {
  return (
    <div className="relative isolate bg-neutral-950 sm:min-h-[500px] sm:overflow-hidden sm:rounded-[30px]">
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(134,166,91,0.08),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(134,166,91,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />

      <div className="absolute inset-y-0 right-0 hidden w-[62%] md:block">
        <img
          src={heroImage}
          alt="ShadowMonitor About Hero"
          className="h-full w-full object-cover object-[68%_50%] brightness-[1.04] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/8 to-transparent" />
      </div>

      <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,7,0.98)_0%,rgba(7,10,7,0.95)_22%,rgba(7,10,7,0.72)_40%,rgba(7,10,7,0.22)_68%,rgba(7,10,7,0.02)_100%)]" />

      <div className="relative flex flex-col px-4 py-4 sm:min-h-[500px] sm:px-8 sm:py-8 lg:px-12">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#86a65b] sm:text-xs">
            About ShadowMonitor
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-500" />

          <div className="text-[10px] text-neutral-500 sm:text-xs">
            Independent Investigative Intelligence
          </div>
        </div>

        <div className="mt-12 max-w-3xl sm:mt-24">
          <h1 className="max-w-3xl text-[clamp(2rem,8.5vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-neutral-100 sm:text-[clamp(2.6rem,3.6vw,3.8rem)]">
            Investigating the Systems Behind the Grey Zone
          </h1>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
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

          <div className="mt-6 max-w-2xl sm:mt-7">
            <div className="rounded-[24px] border border-white/12 bg-black/40 px-5 py-5 sm:px-6 sm:py-6">
              <blockquote className="space-y-4">
                <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-neutral-300">
                  We analyse how systems emerge, adapt and evolve under pressure. Our focus is on the
                  structures beneath events — the incentives, regulatory frameworks and hidden dynamics
                  that shape outcomes long before they become visible.
                </p>
              </blockquote>

              <p className="mt-4 text-sm font-medium text-neutral-300 sm:mt-5">
                — Daryn Kellan, Founder &amp; Editor
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#86a65b]/40 bg-[#86a65b] px-4 py-2 text-sm font-medium text-neutral-950 transition hover:border-[#9bc45f] hover:bg-[#9bc45f] sm:mt-12"
          >
            ← Back to ShadowMonitor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
  <SiteNav />

  <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
    <div className="mt-2 sm:mt-3">
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
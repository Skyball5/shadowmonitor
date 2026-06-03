import Link from 'next/link'

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-black px-5 py-6 text-white sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col justify-center rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9fbe63]">
          Subscribe
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Get new investigations by email.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
          ShadowMonitor publishes investigations and analysis on high-risk
          financial networks, grey-zone economies, and regulatory pressure
          points.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:subscribe@shadowmonitor.org?subject=Subscribe%20to%20ShadowMonitor"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[#9fbe63] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#b1d26d]"
          >
            monitor@shadowmonitor.org
          </a>

          <Link
            href="/"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
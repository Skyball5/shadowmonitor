import Link from 'next/link'

export default function SecureTipPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-6 text-white sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col justify-center rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9fbe63]">
          Secure Tip
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Send information securely.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
          Send documents, leads, research materials, and other information
          relevant to ShadowMonitor investigations.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:tips@shadowmonitor.org?subject=Secure%20tip"
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
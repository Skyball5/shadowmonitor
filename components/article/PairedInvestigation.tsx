import Link from 'next/link'
import type { Article } from '@/data/articles/shared'

type Props = {
  article?: Article
  slug?: string
}

export default function PairedInvestigation({ article, slug }: Props) {
  if (!article) return null

  return (
    <div className="mt-12 border-t border-neutral-300 pt-8">
      <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
        Continue Investigation
      </div>

      <div className="max-w-2xl">
        <div className="text-[24px] leading-tight text-neutral-900">
          {article.title}
        </div>

        <p className="mt-4 text-[16px] leading-relaxed text-neutral-700">
          {article.dek}
        </p>

        {slug ? (
          <Link
            href={`/investigations/${slug}`}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-base font-medium text-neutral-100 shadow-sm transition hover:bg-neutral-800"
          >
            Read Investigation
          </Link>
        ) : null}
      </div>
    </div>
  )
}
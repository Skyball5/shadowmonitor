'use client'

import Link from 'next/link'
import type { ArticleEntry } from '@/data/articles'


const themeLabels = {
  igaming: 'iGaming',
  crypto: 'Crypto',
  'dark-payments': 'Dark Payments',
} as const

type ThemeKey = keyof typeof themeLabels

type Props = {
  relatedArticles: ArticleEntry[]
}

export default function ConnectedInvestigations({
  relatedArticles,
}: Props) {
  return (
    <div className="mt-12 border-t border-neutral-300 pt-8">
      <div className="mb-4">
        <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          Related Investigations
        </div>

        <div className="max-w-xl text-[20px] leading-snug text-neutral-900">
          Reporting connected through shared themes.
        </div>
      </div>

      <div className="space-y-5">
        {relatedArticles.map((entry) => (
          <Link
            key={entry.slug}
            href={`/investigations/${entry.slug}`}
            className="
              group
              block
              border-l border-neutral-300
              pl-5 py-0.5
              transition
              hover:border-neutral-500
            "
          >
            <div className="mb-1.5 text-[19px] leading-snug text-neutral-900 transition group-hover:text-black">
              {entry.article.title}
            </div>

            <div className="mb-3 max-w-2xl text-[15px] leading-6 text-neutral-700">
              {entry.article.dek}
            </div>

            <div className="flex flex-wrap gap-2 text-[12px] text-neutral-500">
              <span className="uppercase tracking-[0.12em] text-neutral-400">
                Themes
              </span>
              <span>{entry.article.themes.map((theme) => themeLabels[theme]).join(', ')}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
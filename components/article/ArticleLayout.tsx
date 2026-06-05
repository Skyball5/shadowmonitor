'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Section from './Section'
import { EntitySelectionProvider } from './EntityContext'
import ConnectedInvestigations from './ConnectedInvestigations'
import type {
  Article,
  ArticleBlock,
  InlinePart,
} from '@/data/articles/shared'
import { entities } from '@/lib/entities'
import EntityTag from './EntityTag'
import PairedInvestigation from './PairedInvestigation'
import type { ArticleEntry } from '@/data/articles'

type ArticleLayoutProps = {
  article: Article
  pairedArticle?: Article
  relatedArticles?: ArticleEntry[]
}

function renderStringWithAutoChips(text: string): ReactNode[] {
  const entries = Object.values(entities)
    .flatMap((entity) =>
      [entity.name, ...(entity.aliases ?? [])].map((label) => ({
        label,
        entityId: entity.id,
      }))
    )
    .sort((a, b) => b.label.length - a.label.length)

  if (entries.length === 0) {
    return [text]
  }

  const regex = new RegExp(
    entries
      .map((entry) => entry.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|'),
    'g'
  )
  const lookup = new Map(entries.map((entry) => [entry.label, entry.entityId]))

  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(regex)) {
    const index = match.index ?? 0
    const matched = match[0]

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    const entityId = lookup.get(matched)

    if (entityId) {
      nodes.push(
        <EntityTag
          key={`${entityId}-${index}-${matched}`}
          entityId={entityId}
          variant="article"
          label={matched}
        />
      )
    } else {
      nodes.push(matched)
    }

    lastIndex = index + matched.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

function renderInlineParts(parts: InlinePart[]): ReactNode[] {
  const nodes: ReactNode[] = []

  parts.forEach((part, index) => {
    if (typeof part === 'string') {
      nodes.push(...renderStringWithAutoChips(part))
      return
    }

    const entity = entities[part.id]

if (!entity) {
  console.warn('[ArticleLayout missing entity]', part.id)
  nodes.push(
    <span key={`${part.id}-${index}`} className="text-red-600">
      {part.id}
    </span>
  )
  return
}

const label = entity.aliases?.[0] ?? entity.name ?? part.id

nodes.push(
  <EntityTag
    key={`${part.id}-${index}`}
    entityId={part.id}
    variant="article"
    label={label}
  />
)
  })

  return nodes
}

function renderBlock(block: ArticleBlock) {
  if (block.type === 'callout') {
    return (
      <div className="my-10 rounded-lg border border-neutral-200 bg-neutral-100 p-6">
        <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
          {block.label}
        </div>
        <div className="text-lg text-neutral-800">{block.text}</div>
      </div>
    )
  }

  const sizeClass = block.size === 'xl' ? 'text-xl' : 'text-lg'

  return (
    <p className={`${sizeClass} leading-relaxed text-neutral-700`}>
      {renderInlineParts(block.parts)}
    </p>
  )
}

function InvestigationHeroVisual({ article }: ArticleLayoutProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-[24px] bg-neutral-950 sm:rounded-[30px]">
      {/* subtle atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(134,166,91,0.08),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(134,166,91,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />

      {/* integrated blend */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,7,0.98)_0%,rgba(7,10,7,0.96)_35%,rgba(7,10,7,0.92)_100%)]" />

      {/* CONTENT */}
      <div className="relative flex min-h-[320px] flex-col px-5 py-5 sm:min-h-[380px] sm:px-8 sm:py-8 lg:min-h-[420px] lg:px-12 lg:py-10">
        {/* META */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
            {article.eyebrow}
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-500" />

          <div className="text-[10px] text-neutral-500 sm:text-xs">
            Published {article.published}
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-500" />

          <div className="text-[10px] text-neutral-500 sm:text-xs">
            {article.readTime}
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-12 max-w-3xl sm:mt-20 lg:mt-24">
          <h1 className="max-w-3xl text-[clamp(2rem,8.5vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-neutral-100 sm:text-[clamp(2.6rem,3.6vw,3.8rem)]">
            {article.title}
          </h1>

          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-neutral-300 sm:mt-7 sm:text-[clamp(1.25rem,1.55vw,1.65rem)]">
            {article.dek}
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/15 sm:mt-12"
          >
            ← Back to ShadowMonitor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ArticleLayout({
  article,
  pairedArticle,
  relatedArticles,
}: ArticleLayoutProps) {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <EntitySelectionProvider>
      <div className="min-h-screen bg-neutral-950">
        {/* HERO */}
        <section className="border-b border-neutral-800/80 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:py-8">
            <InvestigationHeroVisual article={article} />
          </div>
        </section>

        {/* CONTENT */}
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12 px-6 pb-12 pt-4 lg:pb-16 lg:pt-6">
          {/* ARTICLE */}
          <main className="col-span-12 lg:col-span-8">
            <div className="max-w-3xl rounded-2xl bg-[#f5f2ea] px-8 py-10 text-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.28)] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
              {article.sections.map((section) => (
                <Section
                  key={section.id}
                  id={section.id}
                  setActiveSection={setActiveSection}
                >
                  {section.heading ? (
                    <h2 className="mb-6 mt-16 text-3xl font-semibold">
                      {section.heading}
                    </h2>
                  ) : null}

                  <div className="space-y-6">
                    {section.blocks.map((block, index) => (
                      <div key={`${section.id}-${index}`}>
                        {renderBlock(block)}
                      </div>
                    ))}
                  </div>
                </Section>
              ))}

              <PairedInvestigation
                article={pairedArticle}
                slug={article.pairedInvestigationSlug}
              />

              <ConnectedInvestigations
  relatedArticles={relatedArticles ?? []}
/>

              <a
                href="/"
                className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-lg font-medium text-neutral-100 shadow-sm transition hover:bg-neutral-800"
              >
                ← All Investigations
              </a>
            </div>
          </main>

          {/* SIDEBAR */}
<div className="!hidden lg:!block lg:col-span-4">
  <Sidebar activeSection={activeSection} article={article} />
</div>
        </div>
      </div>
    </EntitySelectionProvider>
  )
}
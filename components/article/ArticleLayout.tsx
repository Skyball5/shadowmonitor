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
    const label = entity.aliases?.[0] ?? entity.name

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
  const heroImage =
    article.heroImage?.trim() ||
    (article.title.includes('Anjouan')
      ? '/investigations/anjouan-dossier.png'
      : '/investigations/curacao-dossier.png')

  return (
    <div className="relative isolate min-h-[500px] overflow-hidden rounded-[30px] bg-neutral-950">
      {/* subtle atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(134,166,91,0.08),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(134,166,91,0.06),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />

      {/* IMAGE */}
      <div className="absolute inset-y-0 right-0 w-[62%]">
        <img
          src={heroImage}
          alt={article.title}
          className="h-full w-full object-cover object-[68%_50%] brightness-[1.04] contrast-[1.02]"
        />

        {/* edge fade */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/8 to-transparent" />
      </div>

      {/* integrated blend */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,7,0.98)_0%,rgba(7,10,7,0.95)_22%,rgba(7,10,7,0.72)_40%,rgba(7,10,7,0.22)_68%,rgba(7,10,7,0.02)_100%)]" />

      {/* CONTENT */}
      <div className="relative flex min-h-[500px] flex-col px-8 py-8 sm:px-10 lg:px-12">
        {/* META */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            {article.eyebrow}
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-500" />

          <div className="text-xs text-neutral-500">
            Published {article.published}
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-500" />

          <div className="text-xs text-neutral-500">{article.readTime}</div>
        </div>

        {/* TEXT */}
        <div className="mt-24 max-w-3xl">
          <h1 className="max-w-3xl text-[clamp(2.6rem,3.6vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-neutral-100">
            {article.title}
          </h1>

          <p className="mt-7 max-w-2xl text-[clamp(1.25rem,1.55vw,1.65rem)] leading-relaxed text-neutral-300">
            {article.dek}
          </p>

          <Link
            href="/"
            className="mt-12 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 backdrop-blur-sm transition hover:bg-white/15 hover:border-white/30"
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
          <aside className="col-span-12 lg:col-span-4">
            <Sidebar activeSection={activeSection} article={article} />
          </aside>
        </div>
      </div>
    </EntitySelectionProvider>
  )
}
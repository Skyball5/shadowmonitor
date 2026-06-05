import { anjouanArticle } from './anjouan'
import { claimsIndustryArticle } from './claims-industry'
import { curacaoArticle } from './curacao'
import { iranArticle } from './iran'
import { predictionArticle } from './prediction'
import type { InvestigationArticle } from './shared'

export const articleMap: Record<string, InvestigationArticle> = {
  'claims-industry': claimsIndustryArticle,
  anjouan: anjouanArticle,
  curacao: curacaoArticle,
  iran: iranArticle,
  prediction: predictionArticle,
}

export type ArticleSlug = keyof typeof articleMap

export type ArticleEntry = {
  slug: ArticleSlug
  article: InvestigationArticle
}

export const allArticles: ArticleEntry[] = Object.entries(articleMap).map(
  ([slug, article]) => ({
    slug: slug as ArticleSlug,
    article,
  })
)

export function getRelatedArticles(
  currentSlug: ArticleSlug
): ArticleEntry[] {
  const current = articleMap[currentSlug]
  const currentThemes = current.themes ?? []

  const excludedSlugs = new Set(
    [currentSlug, current.pairedInvestigationSlug].filter(Boolean) as string[]
  )

  if (current.relatedOverride?.length) {
    return current.relatedOverride
      .map((slug) => allArticles.find((entry) => entry.slug === slug))
      .filter((entry): entry is ArticleEntry => Boolean(entry))
      .filter((entry) => !excludedSlugs.has(entry.slug))
      .slice(0, 3)
  }

  const related = allArticles
    .filter((entry) => !excludedSlugs.has(entry.slug))
    .filter((entry) => {
      const entryThemes = entry.article.themes ?? []
      return entryThemes.some((theme) => currentThemes.includes(theme))
    })
    .sort((a, b) => {
      const aThemes = a.article.themes ?? []
      const bThemes = b.article.themes ?? []

      const sharedA = aThemes.filter((theme) => currentThemes.includes(theme)).length
      const sharedB = bThemes.filter((theme) => currentThemes.includes(theme)).length

      if (sharedA !== sharedB) {
        return sharedB - sharedA
      }

      const aDate = a.article.publishedAt ?? ''
      const bDate = b.article.publishedAt ?? ''

      return bDate.localeCompare(aDate)
    })

  return related.slice(0, 3)
}
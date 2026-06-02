import { anjouanArticle } from './anjouan'
import { curacaoArticle } from './curacao'
import { iranArticle } from './iran'
import type { InvestigationArticle} from './shared'

export const articleMap: Record<string, InvestigationArticle> = {
  anjouan: anjouanArticle,
  curacao: curacaoArticle,
  iran: iranArticle,
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

  if (current.relatedOverride?.length) {
    return current.relatedOverride
      .map((slug) => allArticles.find((entry) => entry.slug === slug))
      .filter((entry): entry is ArticleEntry => Boolean(entry))
      .slice(0, 3)
  }

  const related = allArticles
  .filter((entry) => entry.slug !== currentSlug)
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
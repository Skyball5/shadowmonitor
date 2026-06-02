import ArticleLayout from '@/components/article/ArticleLayout'
import { notFound } from 'next/navigation'
import { articleMap, getRelatedArticles } from '@/data/articles'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  const article = articleMap[slug as keyof typeof articleMap]

  if (!article) {
    notFound()
  }

    const pairedSlug = article.pairedInvestigationSlug
  const pairedArticle = pairedSlug
    ? articleMap[pairedSlug as keyof typeof articleMap]
    : undefined

  const relatedArticles = getRelatedArticles(
    slug as keyof typeof articleMap
  )
      return (
    <ArticleLayout
      article={article}
      pairedArticle={pairedArticle}
      relatedArticles={relatedArticles}
    />
  )
}
import ArticleLayout from '@/components/article/ArticleLayout'
import { notFound } from 'next/navigation'
import { anjouanArticle } from '@/data/articles/anjouan'
import { curacaoArticle } from '@/data/articles/curacao'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const articleMap = {
  curacao: curacaoArticle,
  anjouan: anjouanArticle,
} as const

const article = articleMap[slug as keyof typeof articleMap]

  if (!article) {
    notFound()
  }
  return <ArticleLayout article={article} />
}
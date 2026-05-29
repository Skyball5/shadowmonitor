export type ArticleSection = {
  id: string
  title: string
  content: string[]
}

export type ConnectedArticle = {
  title: string
  href: string
}

export type ArticleData = {
  slug: string

  title: string
  subtitle: string

  category: string
  published: string
  readTime: string

  heroImage: string

  tags: string[]

  connected?: ConnectedArticle[]

  sections: ArticleSection[]
}
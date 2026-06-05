export type EntityRefId =
  | 'cga'
  | 'lok'
  | 'adr'
  | 'bcgame'
  | 'law1931'
  | 'sbgok'
  | 'bijkerk'
  | 'cramm'
  | 'cyberluck'
  | 'trigonon'
  | 'gametech'
  | 'dama'
  | 'araxio'
  | 'rightnow'
  | 'blockdance'
  | 'smallhouse'
  | 'usoftgaming'

  | 'anjouan'
  | 'remoteOnboarding'
  | 'offshoreLicensing'
  | 'affiliateNetworks'
  | 'cryptoSettlement'

  | 'iran'
  | 'telegramRouting'
  | 'mirrorInfrastructure'
  | 'vpnAdaptation'
  | 'tron'
  | 'usdt'
  | 'parallelEconomy'
  | 'shadowRemittances'
  | 'otcSettlement'
  | 'sanctionsAdaptation'
  | 'dubaiLiquidityHub'
  | 'armeniaCorridor'
  | 'turkeyRelocationHub'
  | 'nitroPlayGroup'
  | 'softConstruct'
  | 'betConstruct'
  | 'miladHatemi'

  | 'consumerProtection'
  | 'crossBorderClaims'
  | 'litigationFunding'
  | 'claimAggregation'
  | 'forumShopping'
  | 'enforcementStrategy'
  | 'bankruptcyPetition'
  | 'damaCase'
  | 'araxioCase'
  | 'regulatoryArbitrage'
  | 'consumerVsEntrepreneur'
  | 'lgGiessen'
  | 'mga'
  | 'ksa'
  | 'curacaoBankruptcyLaw'
  | 'predictionMarkets'
  | 'eventContracts'
  | 'insiderTrading'
  | 'frenchWhale'
  | 'marketProbability'
  | 'collectiveIntelligence'
  | 'emanuelFabian'
  | 'timesOfIsrael'
  | 'publicPerception'
  | 'kalshi'
  | 'cftc'
  | 'forecastingSystem'
  | 'informationInfrastructure'
  | 'pentagonPizzaIndex'
  | 'osint'
  | 'financializationOfTheFuture'
  | 'knowledgeAboutTomorrow'
  | 'futureEvent'
  | 'largeWallet'
  | 'israeliAirForceMajor'
  | 'omerZiv'
  | 'polymarket'
  | 'bloomberg'
  | 'dowJones'

export type ThemeKey = 'igaming' | 'crypto' | 'dark-payments'

export type InlinePart =
  | string
  | {
      type: 'entity'
      id: EntityRefId
    }

export type ParagraphBlock = {
  type: 'paragraph'
  size?: 'xl' | 'lg'
  parts: InlinePart[]
}

export type CalloutBlock = {
  type: 'callout'
  label: string
  text: string
}

export type ArticleBlock = ParagraphBlock | CalloutBlock

export type ArticleSection = {
  id: string
  heading?: string
  blocks: ArticleBlock[]
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export type SourceItem = {
  kind: string
  title: string
  date: string
  status: string
  excerpt: string
}

export type ConnectedInvestigation = {
  title: string
  summary: string
  jurisdictions: string[]
  entities: string[]
}
export type IntelligenceSidebar = {
  focus: string
  entities: string[]
}

export type SidebarSectionMap = Record<string, IntelligenceSidebar>

export const e = (id: EntityRefId): InlinePart => ({
  type: 'entity',
  id,
})

export const p = (
  size: 'xl' | 'lg',
  ...parts: InlinePart[]
): ParagraphBlock => ({
  type: 'paragraph',
  size,
  parts,
})

export const callout = (
  label: string,
  text: string
): CalloutBlock => ({
  type: 'callout',
  label,
  text,
})

export type InvestigationArticle = {
  eyebrow: string
  published: string
  publishedAt: string
  readTime: string
  title: string
  dek: string
  heroImage: string
  timelineAfterSectionId: string
  sections: ArticleSection[]
  timeline: TimelineItem[]
  sources: SourceItem[]
  sidebar?: IntelligenceSidebar
  sidebarBySection?: SidebarSectionMap
  connectedInvestigations: ConnectedInvestigation[]
  pairedInvestigationSlug?: string
  themes: ThemeKey[]
  relatedOverride?: string[]
}
export type Article = InvestigationArticle
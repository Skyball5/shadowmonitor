import {
  type InvestigationArticle,
  type ArticleSection,
  type TimelineItem,
  type SourceItem,
  type ConnectedInvestigation,
  e,
  p,
  callout,
} from './shared'

export const claimsIndustryArticle: InvestigationArticle = {
  eyebrow: 'Investigations',
  published: 'May 2026',
  publishedAt: '2026-05-04',
  themes: ['igaming'],
  readTime: '13 min read',
  title: "When Losing Becomes Optional: The Rise of Europe's Gambling Claim Industry",
  dek: 'For years, European courts have expanded protections for online gamblers who played on unlicensed platforms. What began as consumer protection has gradually evolved into something larger: a cross-border industry built around recovering gambling losses, financing lawsuits, and pressuring operators far beyond Europe’s borders.',
  heroImage: '/investigations/claims-industry-dossier.png',
  pairedInvestigationSlug: 'curacao',
  timelineAfterSectionId: 'intro',

  sections: [
    {
      id: 'intro',
      heading: 'When Consumer Protection Meets Online Gambling',
      blocks: [
        p('xl', 'A Dutch player loses €40,000 gambling online.'),
        p(
          'xl',
          'Several years later, that same loss becomes the basis of a lawsuit, a purchased legal claim, and eventually a bankruptcy petition filed in a Caribbean court thousands of miles away.'
        ),
        p(
          'lg',
          'What sounds like an unlikely legal journey is becoming increasingly familiar across parts of Europe.'
        ),
        p(
          'lg',
          'Over the past decade, courts in several European jurisdictions have expanded protections for consumers who gambled on platforms operating without local authorization. What began as a straightforward application of ',
          e('consumerProtection'),
          ' principles has gradually evolved into something larger: a cross-border ecosystem of ',
          e('crossBorderClaims'),
          ', ',
          e('litigationFunding'),
          ' and legal recovery strategies targeting gambling operators across multiple jurisdictions.'
        ),
        p(
          'lg',
          'Supporters view the trend as a necessary correction to years of regulatory non-compliance. Critics see something different — the emergence of an industry whose economic incentives increasingly depend on transforming gambling losses into legal assets.'
        ),
        callout(
          'CORE THESIS',
          'Consumer protection did not disappear. It scaled into a claims market.'
        ),
      ],
    },

    {
      id: 'three-countries',
      heading: 'Three Countries, Three Approaches',
      blocks: [
        p(
          'lg',
          'Germany is often cited as one of the most influential examples.'
        ),
        p(
          'lg',
          'For years, German courts applied a relatively simple logic. If an operator provided gambling services to German players without a local license, the contractual relationship could be considered unlawful. As a result, players were often permitted to seek recovery of their losses.'
        ),
        p(
          'lg',
          'More recently, however, some German courts have begun introducing a more nuanced approach. The emerging distinction between ',
          e('consumerVsEntrepreneur'),
          ' has become increasingly significant.'
        ),
        p(
          'lg',
          'One of the most frequently cited examples is a decision by ',
          e('lgGiessen'),
          ', where the court declined to award recovery of gambling losses after concluding that the claimant had knowingly participated in the activity.'
        ),
        p(
          'lg',
          'That nuance also affects how offshore licenses are viewed. A company holding authorization from the ',
          e('mga'),
          ' could still find itself treated as an unauthorized operator if it lacked the appropriate German license.'
        ),
        p(
          'lg',
          'The Dutch position is shaped by the ',
          e('ksa'),
          ', where the tension between licensing discipline and post-loss recovery is increasingly visible.'
        ),
        p(
          'lg',
          'Austria represents a different model. Unlike Germany’s evolving case law, Austria operates under a state-monopoly system, and claims against unauthorized operators tend to follow a more straightforward logic in favor of players.'
        ),
        p(
          'lg',
          'Taken together, the three jurisdictions show that Europe is not converging on a single answer. It is producing a patchwork of rules that operators, funders, and claim buyers can exploit differently depending on where the claim begins.'
        ),
        callout(
          'LEGAL DISTINCTION',
          'The key question is no longer only whether the operator was licensed. It is whether the claimant is treated as a protected consumer or a knowledgeable market participant.'
        ),
      ],
    },

    {
      id: 'claims-industry',
      heading: 'The Emergence of a Claims Industry',
      blocks: [
        p(
          'lg',
          'The growth of player litigation has not occurred in isolation.'
        ),
        p(
          'lg',
          'Over time, a network of legal professionals, litigation specialists, and advocacy groups has developed around the recovery of gambling losses.'
        ),
        p(
          'lg',
          'Organizations such as ',
          e('sbgok'),
          ' became prominent participants in this environment.'
        ),
        p(
          'lg',
          'The underlying business models vary. Some firms work on contingency arrangements, receiving a percentage of any successful recovery. Others engage in ',
          e('litigationFunding'),
          ', providing capital for legal proceedings in exchange for a share of potential proceeds.'
        ),
        p(
          'lg',
          'In certain situations, entities go even further by purchasing claims outright from players at a discount.'
        ),
        p(
          'lg',
          'The result is a growing market in which legal claims themselves become tradable economic assets.'
        ),
        p(
          'lg',
          'That market is often coordinated by actors such as ',
          e('bijkerk'),
          ' and ',
          e('cramm'),
          ', with claim structures that increasingly rely on ',
          e('claimAggregation'),
          ' to create leverage across multiple player files.'
        ),
      ],
    },

    {
      id: 'incentive-structure',
      heading: 'The New Incentive Structure',
      blocks: [
        p(
          'lg',
          'Traditionally, gambling has involved a simple economic reality.'
        ),
        p('lg', 'Players could win.'),
        p('lg', 'Players could lose.'),
        p(
          'lg',
          'The financial risk was understood to be part of the activity itself.'
        ),
        p('lg', 'Modern recovery strategies introduce a different dynamic.'),
        callout(
          'ASYMMETRIC RISK',
          'Winnings remain private gains. Losses become potentially recoverable assets.'
        ),
        p(
          'lg',
          'This does not mean such claims automatically succeed. Nor does it imply that courts endorse every recovery effort.'
        ),
        p(
          'lg',
          'However, the existence of these legal mechanisms changes the incentives facing participants.'
        ),
        p(
          'lg',
          'Gambling losses are no longer viewed solely as losses.'
        ),
        p(
          'lg',
          'They may also become the starting point of future litigation.'
        ),
        p(
          'lg',
          'The growth of this incentive structure has contributed significantly to the expansion of ',
          e('crossBorderClaims'),
          ', ',
          e('forumShopping'),
          ' and ',
          e('regulatoryArbitrage'),
          ' throughout Europe.'
        ),
      ],
    },

    {
      id: 'why-curacao-matters',
      heading: 'Why Curaçao Matters',
      blocks: [
        p('lg', 'Winning a judgment is only part of the process.'),
        p('lg', 'Collecting on that judgment is often far more difficult.'),
        p(
          'lg',
          'This challenge has encouraged increasingly sophisticated forms of ',
          e('forumShopping'),
          ', where creditors seek jurisdictions offering the most effective enforcement tools.'
        ),
        p('lg', 'For many gambling-related claims, that search eventually leads to Curaçao.'),
        p(
          'lg',
          'A significant number of online gambling operators serving European customers have historically been connected to Curaçao.'
        ),
        p(
          'lg',
          'The jurisdiction occupies a unique position within the global gambling industry.'
        ),
        p(
          'lg',
          'Its relevance to player litigation, however, stems less from licensing and more from insolvency law.'
        ),
        p(
          'lg',
          'The ',
          e('curacaoBankruptcyLaw'),
          ' is based on legislation dating back to 1931.'
        ),
        p(
          'lg',
          'Critics argue that this structure creates opportunities for ',
          e('enforcementStrategy'),
          ' far removed from traditional insolvency objectives.'
        ),
        p(
          'lg',
          'Instead of serving primarily as a mechanism for resolving genuine corporate distress, bankruptcy proceedings can become a pressure tool directed at otherwise functioning businesses.'
        ),
        p(
          'lg',
          'In practice, a ',
          e('bankruptcyPetition'),
          ' may be used not simply to liquidate a company, but to force settlement before the case is fully tested.'
        ),
        p(
          'lg',
          'That is exactly why even operators such as ',
          e('bcgame'),
          ' began treating Curaçao’s insolvency regime as a strategic risk.'
        ),
        callout(
          'WHY CURAÇAO',
          'Once claims move from courtroom to insolvency court, the forum becomes part of the weapon.'
        ),
      ],
    },

    {
      id: 'dama',
      heading: 'When the Strategy Works: Dama',
      blocks: [
        p('lg', 'Few examples illustrate this dynamic better than the ', e('damaCase'), '.'),
        p(
          'lg',
          'In 2024, Dama N.V., one of the largest gambling operators associated with Curaçao, was declared bankrupt following proceedings initiated by creditors holding gambling-related claims.'
        ),
        p(
          'lg',
          'Among the underlying disputes were player judgments obtained in European jurisdictions, including Austria.'
        ),
        p(
          'lg',
          'The declaration of bankruptcy created immediate operational risks.'
        ),
        p(
          'lg',
          'For a company managing numerous brands and commercial relationships, the practical consequences of insolvency proceedings extended far beyond the disputed claims themselves.'
        ),
        p(
          'lg',
          'Within weeks, the relevant claims were settled and the bankruptcy declaration was overturned on appeal.'
        ),
        p(
          'lg',
          'Legally, the process demonstrated the effectiveness of the mechanism. Commercially, it showed how a relatively limited number of claims could create substantial leverage against a much larger organization.'
        ),
        p(
          'lg',
          'That is why the ',
          e('dama'),
          ' episode quickly became a reference point for how ',
          e('bankruptcyPetition'),
          ' pressure can reshape operator behavior.'
        ),
      ],
    },

    {
      id: 'araxio',
      heading: 'When the Strategy Fails: Araxio',
      blocks: [
        p(
          'lg',
          'The ',
          e('araxioCase'),
          ' followed a similar path but produced a very different outcome.'
        ),
        p(
          'lg',
          'Creditors successfully initiated bankruptcy proceedings against Araxio Development N.V., relying in part on gambling-related claims originating in Europe.'
        ),
        p(
          'lg',
          'European courts ruled that Araxio Development N.V. owed players compensation linked to gambling activity conducted without local licenses.'
        ),
        p(
          'lg',
          'Once the insolvency proceedings began, it became apparent that the company possessed little meaningful value available for distribution.'
        ),
        p(
          'lg',
          'The legal mechanism worked. The economic result did not.'
        ),
        p('lg', 'That distinction is crucial.'),
        p(
          'lg',
          'A bankruptcy petition may be a powerful instrument of pressure against a functioning company with assets and ongoing operations. Its effectiveness declines dramatically when those assets do not exist.'
        ),
        p(
          'lg',
          'That is exactly what made the ',
          e('araxio'),
          ' result so revealing: the claim machinery was there, but the recoverable value was not.'
        ),
        p(
          'lg',
          'The final lesson was not about the size of the claim, but about the limits of enforcement when the estate itself is effectively empty.'
        ),
      ],
    },

    {
      id: 'conclusion',
      heading: 'A System Reaching Its Limits',
      blocks: [
        p(
          'lg',
          'The expansion of Europe’s gambling recovery market reflects a broader transformation in the relationship between consumer protection and cross-border enforcement.'
        ),
        p(
          'lg',
          'National courts created mechanisms designed to protect players. Legal entrepreneurs developed ways to finance and scale those mechanisms. Specialized organizations learned how to aggregate claims and pursue them across jurisdictions.'
        ),
        p(
          'lg',
          'Eventually, the process reached courts located thousands of miles from the original gambling activity.'
        ),
        p(
          'lg',
          'Supporters argue that these developments merely ensure that operators remain accountable regardless of where they are incorporated.'
        ),
        p(
          'lg',
          'Critics counter that legal tools originally intended to protect consumers are increasingly being used for purposes far beyond their initial design.'
        ),
        callout(
          'REGULATORY ARBITRAGE',
          'What began as consumer protection has become a transnational ecosystem capable of generating claims, financing litigation, coordinating enforcement, and, in some cases, threatening the survival of operators far beyond the jurisdictions where those claims first originated.'
        ),
        p(
          'lg',
          'Whether that evolution represents justice, innovation, or unintended consequences remains a matter of debate.'
        ),
        p(
          'lg',
          'What is no longer debatable is the existence of the industry itself.'
        ),
        p(
          'lg',
          'And once you look at the chain from ',
          e('consumerProtection'),
          ' to ',
          e('crossBorderClaims'),
          ' to ',
          e('enforcementStrategy'),
          ', the system stops looking accidental.'
        ),
      ],
    },
  ] satisfies ArticleSection[],

  timeline: [
    {
      year: '2021',
      title: 'Recovery claims begin to scale across Europe',
      description:
        'Consumer recovery arguments move from isolated disputes into a repeatable litigation pattern.',
    },
    {
      year: '2022',
      title: 'Claims funding becomes more visible',
      description:
        'Foundations, funders and claim aggregators begin building a market around gambling-loss recovery.',
    },
    {
      year: '2024',
      title: 'Dama shows the leverage effect',
      description:
        'A bankruptcy petition against a major Curaçao operator demonstrates how a limited number of claims can create pressure.',
    },
    {
      year: '2025',
      title: 'Araxio exposes the limits',
      description:
        'The procedure can still succeed even when the estate itself is empty.',
    },
  ] satisfies TimelineItem[],

  sources: [
    {
      kind: 'Research notes',
      title: 'ShadowMonitor field notes',
      date: '2026',
      status: 'Internal',
      excerpt:
        'European gambling recovery litigation is increasingly structured as a cross-border enforcement ecosystem rather than a series of isolated consumer disputes.',
    },
    {
      kind: 'Research notes',
      title: 'Court and registry review',
      date: '2026',
      status: 'Internal',
      excerpt:
        'German, Austrian and Dutch developments point to a fragmented but expanding market for gambling-loss recovery.',
    },
    {
      kind: 'Research notes',
      title: 'Claims-industry memo',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Litigation funding, claim aggregation and insolvency pressure have become repeatable tools in the gambling claims market.',
    },
  ] satisfies SourceItem[],

  sidebarBySection: {
    intro: {
      focus: 'Consumer protection becomes a market',
      entities: ['consumerProtection', 'crossBorderClaims', 'litigationFunding', 'forumShopping'],
    },

    'three-countries': {
      focus: 'Germany, Austria and the Netherlands',
      entities: ['consumerVsEntrepreneur', 'lgGiessen', 'mga', 'ksa'],
    },

    'claims-industry': {
      focus: 'The claims market emerges',
      entities: ['sbgok', 'litigationFunding', 'claimAggregation', 'crossBorderClaims'],
    },

    'incentive-structure': {
      focus: 'Losses become recoverable assets',
      entities: ['crossBorderClaims', 'forumShopping', 'regulatoryArbitrage'],
    },

    'why-curacao-matters': {
      focus: 'Why enforcement reaches Curaçao',
      entities: ['curacaoBankruptcyLaw', 'enforcementStrategy', 'bankruptcyPetition', 'bcgame'],
    },

    dama: {
      focus: 'When leverage works',
      entities: ['damaCase', 'dama', 'bankruptcyPetition', 'law1931'],
    },

    araxio: {
      focus: 'When leverage fails',
      entities: ['araxioCase', 'araxio', 'bankruptcyPetition', 'rightnow'],
    },

    conclusion: {
      focus: 'A system reaching its limits',
      entities: ['regulatoryArbitrage', 'crossBorderClaims', 'enforcementStrategy', 'consumerProtection'],
    },
  },

  connectedInvestigations: [
    {
      title: 'The Colonial Bankruptcy Law Driving Gambling Operators Out of Curaçao',
      summary:
        'Why the old Curaçao insolvency regime became the natural endpoint for cross-border gambling claims.',
      jurisdictions: ['Curaçao'],
      entities: ['curacao', 'curacaoBankruptcyLaw', 'sbgok'],
    },
    {
      title: 'Anjouan: Inside the Offshore Licensing Machine',
      summary:
        'How offshore licensing, remote onboarding and crypto settlement became a faster launch stack for high-risk operators.',
      jurisdictions: ['Anjouan'],
      entities: ['anjouan', 'offshoreLicensing', 'cryptoSettlement'],
    },
  ] satisfies ConnectedInvestigation[],
}
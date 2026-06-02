import {
  type InvestigationArticle,
  type ArticleSection,
  type TimelineItem,
  type SourceItem,
  type ConnectedInvestigation,
  p,
  callout,
} from './shared'

export const anjouanArticle: InvestigationArticle = {
  eyebrow: 'Investigations',
  published: 'May 2026',
  publishedAt: '2026-05-01',
themes: ['igaming'],
  readTime: '12 min read',
  title: 'Anjouan: Inside the Offshore Licensing Machine',
  dek: 'How a tiny island in the Comoros became one of the world’s most efficient licensing hubs for high-risk gambling operators.',
  heroImage: '/investigations/anjouan-dossier.png',
  pairedInvestigationSlug: 'curacao',
  timelineAfterSectionId: 'intro',

  sections: [
    {
      id: 'intro',
      heading: 'A License in Days',
      blocks: [
        p(
          'xl',
          'In Telegram groups dedicated to gambling startups, Anjouan is usually mentioned with almost no ceremony. It is spoken about the way operators talk about logistics: a place where Offshore Licensing is fast, Remote Onboarding is expected, and the paperwork feels designed for speed rather than ceremony.'
        ),
        p(
          'lg',
          'That speed matters. For operators trying to launch quickly, Anjouan becomes less of a place than a product — a jurisdiction packaged for short timelines, distributed decision-making and businesses that want to move before competitors even finish their compliance checklist.'
        ),
        p(
          'lg',
          'What looks at first like a curious offshore anomaly is actually part of a much larger system. Anjouan sits inside a global stack that includes Affiliate Networks pushing traffic, Crypto Settlement handling cross-border movement of funds, and service providers that specialize in getting businesses live with minimal physical presence.'
        ),
      ],
    },
    {
      id: 'offshore-paradise',
      heading: 'An Offshore Product, Not Just a Jurisdiction',
      blocks: [
        p(
          'lg',
          'The appeal of Anjouan is not that it is the biggest or most prestigious offshore venue. It is that the entire offering is optimized for speed and convenience. Offshore Licensing becomes a service layer: one jurisdiction, one process, one path to market for operators who do not want to spend months waiting for approval.'
        ),
        p(
          'lg',
          'That logic reshapes the relationship between regulator and applicant. In a traditional licensing environment, the license is the end of a long process. In Anjouan, the license is part of the launch kit — bundled together with Remote Onboarding, basic corporate setup and the practical expectation that the operator is not building a local business at all.'
        ),
        callout(
          'INTELLIGENCE LAYER',
          'The Anjouan model works because it treats licensing as infrastructure. The jurisdiction is valuable not for its domestic market, but for how efficiently it plugs into a broader offshore system.'
        ),
      ],
    },
    {
      id: 'distribution-layer',
      heading: 'The Distribution and Settlement Layer',
      blocks: [
        p(
          'lg',
          'None of this exists in isolation. Anjouan only makes sense when viewed alongside the people and companies that use it. Some arrive through Affiliate Networks that route traffic to betting brands. Others arrive through consultants and intermediaries who specialize in moving operators from one jurisdiction to another without interrupting revenue.'
        ),
        p(
          'lg',
          'In that environment, the licensing decision is rarely ideological. It is operational. If an operator can get Remote Onboarding done quickly, connect payment rails, and start acquiring traffic through Affiliate Networks, then the jurisdiction has already proven its worth.'
        ),
        p(
          'lg',
          'That is why the Anjouan ecosystem feels less like a single license and more like a transaction chain. Offshore Licensing creates the legal wrapper, Remote Onboarding removes friction, Affiliate Networks fill the funnel, and Crypto Settlement keeps the money moving across borders that traditional finance often treats as too risky.'
        ),
      ],
    },
    {
      id: 'why-it-spreads',
      heading: 'Why the Model Keeps Spreading',
      blocks: [
        p(
          'lg',
          'The reason Anjouan keeps showing up in operator conversations is not because it solves every problem. It does not. But it solves enough of them at once to make the model attractive: speed, distance, low overhead and an ecosystem built around Offshore Licensing rather than local market development.'
        ),
        p(
          'lg',
          'That is also why the pattern is hard to dislodge. Once an operator has built its launch flow around Remote Onboarding, Affiliate Networks and Crypto Settlement, moving away from that stack becomes expensive. The jurisdiction is no longer just where the license lives; it is where the entire business process has been condensed.'
        ),
        p(
          'lg',
          'Anjouan therefore matters less as a geographic fact than as a blueprint. It shows how a small jurisdiction can become a distributed licensing machine when the surrounding infrastructure is tuned for offshore scale.'
        ),
      ],
    },
    {
      id: 'conclusion',
      heading: 'Beyond Anjouan',
      blocks: [
        p(
          'lg',
          'Anjouan is not the end of the story. It is a symptom of a much larger pattern in which gambling, Crypto Settlement, Remote Onboarding, Affiliate Networks and Offshore Licensing converge into a single distributed infrastructure.'
        ),
        p(
          'lg',
          'In that sense, the most important thing about Anjouan is not where it is. It is what it represents: a world where licensing becomes modular, onboarding becomes remote, traffic acquisition becomes industrial, and regulatory friction becomes something to route around rather than comply with.'
        ),
        p('lg', 'That is the real offshore machine.'),
      ],
    },
  ],

  timeline: [
    {
      year: '2022',
      title: 'Anjouan becomes more visible in operator circles',
      description:
        'Mentions begin to appear more frequently in startup and affiliate channels.',
    },
    {
      year: '2023',
      title: 'Remote Onboarding becomes a selling point',
      description:
        'The pitch shifts from jurisdictional novelty to operational convenience.',
    },
    {
      year: '2024',
      title: 'The offshore stack matures',
      description:
        'Licensing, traffic acquisition and Crypto Settlement increasingly appear as a single workflow.',
    },
  ] satisfies TimelineItem[],

  sources: [
    {
      kind: 'Research notes',
      title: 'ShadowMonitor field notes',
      date: '2026',
      status: 'Internal',
      excerpt:
        'The island is discussed less as a regulator and more as a launch mechanism for high-risk digital operators.',
    },
    {
      kind: 'Research notes',
      title: 'Telegram monitoring log',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Mentions of Offshore Licensing, Remote Onboarding, Affiliate Networks and Crypto Settlement often appear in the same operational context.',
    },
  ] satisfies SourceItem[],

  sidebarBySection: {
    intro: {
      focus: 'A license in days',
      entities: [
        'anjouan',
        'remoteOnboarding',
        'offshoreLicensing',
        'cryptoSettlement',
      ],
    },

    'offshore-paradise': {
      focus: 'An offshore product, not just a jurisdiction',
      entities: ['anjouan', 'offshoreLicensing', 'remoteOnboarding'],
    },

    'distribution-layer': {
      focus: 'The distribution and settlement layer',
      entities: ['affiliateNetworks', 'cryptoSettlement', 'remoteOnboarding'],
    },

    'why-it-spreads': {
      focus: 'Why the model keeps spreading',
      entities: [
        'anjouan',
        'offshoreLicensing',
        'affiliateNetworks',
        'cryptoSettlement',
      ],
    },

    conclusion: {
      focus: 'Anjouan as the blueprint',
      entities: [
        'anjouan',
        'offshoreLicensing',
        'remoteOnboarding',
        'affiliateNetworks',
        'cryptoSettlement',
      ],
    },
  },

  connectedInvestigations: [
    {
      title: 'Curaçao Is Losing Operators. The Reform Is Only Part of the Story',
      summary:
        'Why operators leave one jurisdiction and land in another when compliance pressure rises.',
      jurisdictions: ['Curaçao', 'Comoros'],
      entities: ['anjouan', 'offshoreLicensing', 'remoteOnboarding'],
    },
    {
      title: 'The Silent Gateway for High-Risk Entities',
      summary:
        'How offshore jurisdictions keep attracting high-risk businesses even when regulatory pressure rises.',
      jurisdictions: ['Cyprus'],
      entities: ['affiliateNetworks', 'cryptoSettlement'],
    },
  ] satisfies ConnectedInvestigation[],
}
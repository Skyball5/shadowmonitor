import {
  type InvestigationArticle,
  type ArticleSection,
  type TimelineItem,
  type SourceItem,
  type ConnectedInvestigation,
  p,
  callout,
} from './shared'

export const iranArticle: InvestigationArticle = {
  eyebrow: 'Investigations',
  published: 'May 2026',
  publishedAt: '2026-05-03',
themes: ['igaming', 'crypto', 'dark-payments'],
  readTime: '14 min read',
  title: 'Iran Built a Parallel Digital Economy Under Pressure',
  dek: 'Persian betting platforms became part of a wider bypass infrastructure built around Telegram, crypto settlement and sanctions-era survival networks.',
  heroImage: '/investigations/iran-dossier.png',
  pairedInvestigationSlug: 'armenia',

  timelineAfterSectionId: 'intro',

  sections: [
    {
      id: 'intro',
      heading: 'The Message',
      blocks: [
        p(
          'xl',
          'In the spring of 2026, while Iran was dealing with a currency crisis, the largest protests since the Islamic Revolution and a direct military escalation with Israel and the United States, a popular Persian-language betting channel on Telegram posted a short message for its subscribers: "If the site is blocked, use a VPN through the UAE, Turkey, India or Canada."'
        ),
        p(
          'lg',
          'Below it was a fresh Mirror Infrastructure address. Under that, a Telegram bot. And beneath that, instructions for topping up with USDT on TRON. At first glance it looked like a routine message from a grey-market betting operator. But in those details you can already see the architecture of a much larger system: Telegram Routing as a coordination layer, Mirror Infrastructure as access control, VPN Adaptation as daily habit, and Crypto Settlement as the financial backbone.'
        ),
        p(
          'lg',
          'What began as an underground betting market gradually became something bigger: a parallel digital economy able to function under sanctions, internet controls, banking isolation and war pressure. Betting platforms were one of its earliest and most visible layers, but they were never the whole story.'
        ),
      ],
    },

    {
      id: 'before-the-war',
      heading: 'Before the Pressure Became the System',
      blocks: [
        p(
          'lg',
          'Online gambling has long been formally prohibited in Iran, but by the end of the 2010s Persian-language sportsbooks and casino platforms had already become part of the local digital fabric. Football betting, live casino and especially crash games — fast, multiplier-based products that travel well through Telegram virality — spread through Instagram, Telegram, affiliate networks and influencer marketing.'
        ),
        p(
          'lg',
          'From the start, the ecosystem was built for a hostile environment. Domains rotated constantly. Telegram became the main access point. VPNs stopped being a technical trick and turned into a normal part of user behavior. One betting channel would pin a mirror, an APK, a VPN guide and a Telegram bot in the same message. Others published country-specific VPN whitelists for the UAE, Turkey, Hong Kong, India and Singapore.'
        ),
        p(
          'lg',
          'A shared operational language emerged: "بدون فیلتر" for no filter, "آدرس جدید" for new address, "فیلتر شکن" for VPN and circumvention. These were no longer random SEO phrases. They became the grammar of the system itself.'
        ),
      ],
    },

    {
      id: 'new-financial-rails',
      heading: 'New Financial Rails',
      blocks: [
        p(
          'lg',
          'At the same time, Iran’s financial environment was changing. Years of sanctions, banking restrictions and the chronic collapse of the rial pushed more and more economic activity toward OTC settlement, cryptoassets, informal remittance systems and other alternative payment rails.'
        ),
        p(
          'lg',
          'That is where the betting infrastructure turned out to be unusually well adapted. By 2024 and 2025, USDT on TRON had become the dominant settlement tool inside the Persian-facing betting ecosystem. Operators were no longer merely "accepting crypto"; they were architecturally built around Crypto Settlement. Separate dollar and tether accounts, TRC20 bonuses, cashback for crypto users, KYC-free onboarding, manual support over Telegram and automated payouts all became normal product features.'
        ),
        callout(
  'INTELLIGENCE LAYER',
  'The key shift was not that betting sites added crypto. The key shift was that crypto settlement became the operating logic around which the whole stack was designed.'
),
        p(
          'lg',
          'This is why the ecosystem quickly expanded beyond gambling. The same mechanisms — Telegram Routing, TRON, USDT, Crypto Settlement, VPN Adaptation and Mirror Infrastructure — started servicing informal transfers, Shadow Remittances, OTC Settlement, shadow commerce and other forms of sanctions-era survival.'
        ),
      ],
    },

    {
      id: 'telegram-as-nervous-system',
      heading: 'Telegram as a Nervous System',
      blocks: [
        p(
          'lg',
          'The real backbone of the ecosystem was not the sportsbook and not the crypto exchange. It was Telegram. Telegram channels acted simultaneously as routing infrastructure, customer support, affiliate funnels, crypto onboarding layers, retention systems and anti-censorship coordination points.'
        ),
        p(
          'lg',
          'During the protest waves of 2025 and 2026, when internet restrictions intensified, this infrastructure did not disappear. It adapted. Operators published new mirror addresses, tested VPN whitelists, moved users between channels and bots, created fallback routes and distributed APKs as a way to bypass browser-based access altogether.'
        ),
        p(
          'lg',
          'That same bypass infrastructure was not limited to betting. Telegram routing, VPN use and crypto settlement increasingly became part of a broader social adaptation: protest communication, informal transfers, shadow imports and everyday workarounds for financial restrictions. What had once been a marginal technique became a mass habit.'
        ),
      ],
    },

    {
      id: 'regional-layer',
      heading: 'Dubai, Turkey and Armenia',
      blocks: [
        p(
          'lg',
          'Although the audience of the ecosystem sits inside Iran, the infrastructure around it is deeply regional. Dubai functions as a Dubai Liquidity Hub, a crypto-conversion center and a relatively safe operational zone. It is where infrastructure operators such as NitroPlay Group can connect Persian-facing betting brands, Telegram acquisition campaigns, USDT/TRON payment systems, crash-game ecosystems and KYC-free onboarding flows.'
        ),
        p(
          'lg',
          'Turkey has long served as a relocation hub, an influencer base and an external operational layer for Persian-facing betting businesses. Many of the Instagram promoters who helped scale these brands worked from Turkey, where they could operate at a distance from Iranian enforcement. One of the most visible cases is Milad Hatemi, whose luxury-lifestyle gambling promotion built a mass audience before his extradition to Iran and later death sentence. His disappearance did not stop the infrastructure from moving on.'
        ),
        callout(
  'INFRASTRUCTURE LOGIC',
  'The face may disappear. The system remains.'
),
        p(
          'lg',
          'Armenia is the quietest and perhaps the most interesting regional adapter. Through SoftConstruct and BetConstruct, it has become one of the region’s major iGaming infrastructure layers. That broader Armenia Corridor increasingly connects Persian-facing digital businesses with Crypto Settlement, technology providers and regional infrastructure. It makes Armenia not just a side note, but a future investigative node in its own right.'
        ),
      ],
    },

    {
      id: 'the-state-question',
      heading: 'The State Question',
      blocks: [
        p(
          'lg',
          'The hardest question in the whole story is the role of the Iranian state. Officially, authorities prosecute gambling, block platforms, arrest influencers and periodically launch anti-gambling campaigns. Yet the crypto economy keeps growing, OTC Settlement keeps expanding, Telegram Routing keeps adapting and bypass mechanisms keep becoming more systematic.'
        ),
        p(
          'lg',
          'The result is not a clean binary of state versus underground. It looks more like a hybrid system in which underground commerce, private initiative, sanctions adaptation and some state interests end up using the same operational rails. Under severe geopolitical pressure, the line between tolerated shadow economy and survival infrastructure becomes increasingly blurred.'
        ),
        p(
          'lg',
          'That is why the story is not really about gambling at all. Gambling is only the visible layer that lets you see the machinery underneath.'
        ),
      ],
    },

    {
      id: 'parallel-economy',
      heading: 'The Parallel Digital Economy',
      blocks: [
        p(
          'lg',
          'To the outside world, Iran is often described as isolated, technologically constrained and economically damaged. But below the surface, a highly adaptive Parallel Digital Economy has emerged — one able to function under sanctions, banking isolation, internet blocks, currency collapse, protests and war.'
        ),
        p(
          'lg',
          'Individually, the components do not look extraordinary: Telegram channels, mirrors, VPNs, USDT, TRON, crash games, referral codes, bots. What matters is how they are connected. Over time, betting platforms, crypto settlement, bypass culture, shadow remittances, OTC infrastructure and regional intermediary corridors began to share the same operational rails.'
        ),
        callout(
  'PARALLEL ECONOMY',
  'Iran did not simply build a betting market. It built a parallel digital economy.'
),
        p(
          'lg',
          'And that is what makes the story larger than gambling, larger than crypto and larger than Telegram. It is one of the most interesting parallel digital economies formed under long-term geopolitical pressure.'
        ),
      ],
    },
  ] satisfies ArticleSection[],

  timeline: [
    {
      year: '2019',
      title: 'Persian betting brands become visible at scale',
      description:
        'Sportsbooks, casino brands and crash games spread through Instagram, Telegram and affiliate networks.',
    },
    {
      year: '2023',
      title: 'Crypto settlement becomes standard',
      description:
        'TRON and USDT increasingly replace local banking rails for deposits, withdrawals and cross-border transfers.',
    },
    {
      year: '2024',
      title: 'Regional infrastructure deepens',
      description:
        'Dubai, Turkey and Armenia become more important as liquidity, relocation and technology layers.',
    },
    {
      year: '2025',
      title: 'Internet restrictions and protests accelerate bypass behavior',
      description:
        'VPN usage, mirrors and Telegram routing become more embedded in daily digital life.',
    },
    {
      year: '2026',
      title: 'War pressure and sanctions logic converge',
      description:
        'The parallel economy becomes impossible to separate from the wider Iranian digital environment.',
    },
  ] satisfies TimelineItem[],

  sources: [
    {
      kind: 'Research notes',
      title: 'ShadowMonitor field notes',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Telegram routing, mirror rotation and crypto settlement appear together as a single operational stack across Persian-facing brands.',
    },
    {
      kind: 'Research notes',
      title: 'Telegram monitoring log',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Messages repeatedly combine VPN instructions, mirror URLs, bot links and TRON/USDT payment guidance.',
    },
    {
      kind: 'Research notes',
      title: 'Regional infrastructure memo',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Dubai, Turkey and Armenia function as intermediary layers for settlement, relocation and iGaming infrastructure.',
    },
  ] satisfies SourceItem[],

  sidebar: {
    focus: 'Parallel digital economy under pressure',
    entities: [
      'iran',
      'telegramRouting',
      'mirrorInfrastructure',
      'vpnAdaptation',
      'cryptoSettlement',
      'tron',
      'usdt',
      'armeniaCorridor',
      'dubaiLiquidityHub',
      'crashGames'
    ],
  },
sidebarBySection: {
  intro: {
    focus: 'Parallel digital economy under pressure',
    entities: [
      'iran',
      'telegramRouting',
      'mirrorInfrastructure',
      'vpnAdaptation',
      'cryptoSettlement',
    ],
  },

  'before-the-war': {
    focus: 'The ecosystem before pressure became the system',
    entities: [
      'iran',
      'telegramRouting',
      'vpnAdaptation',
      'mirrorInfrastructure',
      'crashGames'
    ],
  },

  'new-financial-rails': {
  focus: 'New financial rails',
  entities: [
    'cryptoSettlement',
    'tron',
    'usdt',
    'shadowRemittances',
    'otcSettlement',
    'sanctionsAdaptation',
  ],
},

  'telegram-as-nervous-system': {
    focus: 'Telegram as infrastructure',
    entities: [
      'telegramRouting',
      'mirrorInfrastructure',
      'vpnAdaptation',
    ],
  },

  'regional-layer': {
    focus: 'Regional infrastructure layer',
    entities: [
      'dubaiLiquidityHub',
      'armeniaCorridor',
      'nitroPlayGroup',
      'softConstruct',
      'betConstruct',
    ],
  },

  'the-state-question': {
    focus: 'State pressure and adaptation',
    entities: [
      'iran',
      'telegramRouting',
      'otcSettlement',
      'cryptoSettlement',
    ],
  },

  'parallel-economy': {
    focus: 'Parallel digital economy',
    entities: [
      'parallelDigitalEconomy',
      'cryptoSettlement',
      'telegramRouting',
      'shadowRemittances',
      'armeniaCorridor',
      'crashGames'
    ],
  },
},
  connectedInvestigations: [
    {
      title: 'Anjouan: Inside the Offshore Licensing Machine',
      summary:
        'How offshore licensing, remote onboarding and crypto settlement became a faster launch stack for high-risk operators.',
      jurisdictions: ['Anjouan'],
      entities: ['anjouan', 'cryptoSettlement', 'telegramRouting'],
    },
    {
      title: 'The Colonial Bankruptcy Law Driving Gambling Operators Out of Curaçao',
      summary:
        'Why the old Curaçao regime pushed operators toward new jurisdictions and new infrastructure layers.',
      jurisdictions: ['Curaçao'],
      entities: ['curacao', 'iran', 'parallelEconomy'],
    },
    {
      title: 'Armenia: The Quiet Infrastructure Adapter',
      summary:
        'How Armenia became a low-friction intermediary layer for iGaming, crypto settlement and regional infrastructure.',
      jurisdictions: ['Armenia'],
      entities: ['armeniaCorridor', 'softConstruct', 'betConstruct'],
    },
  ] satisfies ConnectedInvestigation[],
} satisfies InvestigationArticle
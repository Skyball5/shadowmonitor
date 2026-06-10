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

const connectedInvestigations = [
  {
    title: 'Iran: The Parallel Digital Economy',
    summary:
      'How Telegram routing, mirror infrastructure, VPN adaptation and crypto settlement merged into a regional shadow economy.',
    jurisdictions: ['Iran'],
    entities: ['iran'],
  },
] satisfies ConnectedInvestigation[]

export const armeniaArticle: InvestigationArticle = {
  eyebrow: 'Analysis',

  published: 'June 2026',
  publishedAt: '2026-06-09',

  themes: ['igaming', 'crypto'],

  readTime: '15 min read',

  title: 'The Other Armenia',

  dek:
    "While European leaders discuss Armenia's future in Europe, a different Armenia quietly powers gambling infrastructure used across multiple continents — including parts of the ecosystem surrounding Iran's parallel digital economy.",

  heroImage: '/investigations/armenia-dossier.png',

  pairedInvestigationSlug: 'iran',

  timelineAfterSectionId: 'intro',

  connectedInvestigations,

  timeline: [],

  sources: [],

  sections: [
    {
  id: 'intro',

  heading: 'The Two Armenias',

  blocks: [
    p(
      'xl',
      'In the first week of May 2026, Yerevan became the center of European diplomacy.'
    ),

    p(
      'lg',
      'Leaders from nearly fifty countries gathered in the Armenian capital for the eighth European Political Community summit. Ursula von der Leyen, António Costa, Keir Starmer and Volodymyr Zelensky joined Prime Minister Nikol Pashinyan to discuss security, connectivity, reform and Europe’s future political architecture.'
    ),

    p('lg', 'The symbolism was difficult to miss.'),

    p(
      'lg',
      'For years, Armenia had been viewed as a country balancing geography, history and dependence on larger powers. Now it was presenting itself as something different: a state increasingly aligned with Europe and increasingly interested in becoming part of the continent’s political and economic future.'
    ),

    p(
      'lg',
      'The summit was followed by the first-ever EU-Armenia bilateral summit. Joint declarations focused on deeper cooperation in energy, transport, digital development and institutional reform. For Brussels, Armenia increasingly looked like a country moving westward.'
    ),

    p(
      'lg',
      'A few kilometres away, however, another Armenia continued its ordinary working day.'
    ),

    p(
      'lg',
      'Along Admiral Isakov Avenue, overlooking the western edge of Yerevan, thousands of engineers, developers, product managers and analysts were building sportsbook platforms, casino engines, payment systems and gaming products used by operators across multiple continents.'
    ),

    p('lg', 'These two Armenias are not separate stories. They are the same story.'),
  ],
},

{
  id: 'bridge-to-machine',

  heading: 'The Armenia Corridor',

  blocks: [
    p(
      'lg',
      'In fact, one may increasingly shape the future of the other.'
    ),

    p(
      'lg',
      'Because while Armenia’s political trajectory increasingly points toward Europe, one of its most successful export industries operates in a world where the boundaries between regulated and unregulated markets are often far less clear.'
    ),

    p(
      'lg',
      'And nowhere is that tension more visible than in the country’s rapidly expanding gambling technology industry — one of the most successful and least understood parts of modern Armenia’s economy.'
    ),

    p(
      'xl',
      'To many outsiders, Armenia’s technology story is associated with software outsourcing, engineering talent and a growing startup ecosystem.'
    ),

    p(
      'lg',
      'What receives far less attention is the scale of the country’s gambling technology industry.'
    ),

    p(
      'lg',
      'Over the past decade, Armenia has quietly emerged as one of Eurasia’s most important centres for iGaming infrastructure. The sector’s growth has been dramatic. By 2024, turnover associated with Armenia’s gambling industry exceeded $18 billion — roughly seventeen times higher than in 2018.'
    ),

    p('lg', 'The numbers have become impossible for policymakers to ignore.'),

    p(
      'lg',
      'In 2025, Armenia’s parliament approved a major increase in state fees imposed on gambling operators, raising charges fivefold for leading industry participants. Officials openly described the sector as both an important source of revenue and a growing social concern.'
    ),

    callout(
      'ARMENIA’S IGAMING MACHINE',
      '$18bn gambling turnover in 2024\n17x growth since 2018\n15,000–20,000 estimated direct jobs\nOne of Armenia’s largest technology export sectors'
    ),

    p('lg', 'The contradiction reflects a deeper reality.'),

    p('lg', 'The industry has become economically significant.'),

    p(
      'lg',
      'Armenia’s ICT sector now employs more than 58,000 people and generates roughly seven percent of national GDP. Within that broader ecosystem, gambling technology occupies an unusually large position.'
    ),

    p(
      'lg',
      'SoftConstruct alone reports more than 7,000 employees worldwide. Digitain, another Yerevan-based giant, reports more than 5,000. Add operators such as TotoGaming and the wider network of suppliers, contractors, studios and support services, and a conservative estimate suggests that between 15,000 and 20,000 jobs may be directly connected to the industry.'
    ),

    p(
      'lg',
      'In practical terms, a substantial share of Armenia’s technology workforce now depends on gambling-related businesses.'
    ),

    p('lg', 'The scale becomes even more striking when viewed through the labour market.'),

    p(
      'lg',
      'Industry observers estimate that roughly one-third of Armenian IT specialists may work directly or indirectly within the broader iGaming ecosystem. On local recruitment platforms, gambling technology companies routinely account for a significant share of available technology vacancies.'
    ),

    p('lg', 'The salaries help explain why.'),

    p(
      'lg',
      'By the end of 2025, average compensation within Armenia’s ICT sector exceeded $2,100 per month — several times higher than average wages across much of the economy. Gambling technology sits near the top of that hierarchy.'
    ),

    p('lg', 'This is not a niche sector.'),

    p('lg', 'It is not a side story.'),

    p('lg', 'It is one of Armenia’s most important technology export industries.'),

    p('lg', 'Yet despite its scale, relatively little is known outside the industry itself.'),

    p(
      'lg',
      'Most international attention remains focused on operators, gambling brands and consumer-facing products.'
    ),

    p('lg', 'Far less attention is paid to the companies that build the infrastructure underneath.'),

    p('lg', 'That infrastructure has become one of Armenia’s most successful exports.'),

    p(
      'lg',
      'Like many technology success stories, however, Armenia’s gambling industry appears larger from the outside than it does from within.'
    ),

    p('lg', 'In reality, much of the ecosystem revolves around a surprisingly small number of companies.'),

    p('xl', 'The answer begins with two names.'),
  ],
},

    {
  id: 'giants',

  heading: 'The Two Giants of Yerevan',

  blocks: [
    p(
      'lg',
      'Together, SoftConstruct and Digitain form the backbone of Armenia’s modern gambling technology industry.'
    ),

    p(
      'lg',
      'Together, they employ more people than the population of many Armenian towns.'
    ),

    p('lg', 'Both are headquartered in Yerevan.'),

p('lg', 'Both employ thousands of engineers.'),

p(
  'lg',
  'Both built global businesses from Armenia while operating internationally through networks of subsidiaries, licensing entities and regional offices.'
),

    p('lg', 'And both increasingly illustrate how Armenia exports gambling infrastructure rather than gambling itself.'),

    callout(
      'THE TWO GIANTS',
      'SoftConstruct: 7,000+ employees\nDigitain: 5,000+ employees\nGlobal B2B infrastructure providers\nBuilt in Yerevan, exported worldwide'
    ),

    p(
      'lg',
      'SoftConstruct traces its origins to Vivaro, a local betting business founded by brothers Vigen and Vahe Badalyan in the early 2000s.'
    ),

    p(
      'lg',
      'Over time, that operation expanded into a much larger ecosystem that now includes BetConstruct, FeedConstruct, Fasttoken, Fastex, Ucraft and a growing collection of technology products serving operators around the world.'
    ),

    p('lg', 'The transformation is striking.'),

    p(
      'lg',
      'What began as a local betting company gradually evolved into a multinational infrastructure provider whose products now touch nearly every layer of the gambling technology stack.'
    ),

    p(
      'lg',
      'Its flagship B2B platform, BetConstruct, provides sportsbook technology, casino systems, live dealer products, odds feeds, customer management tools, payment infrastructure and a range of other services used by gambling operators across multiple jurisdictions.'
    ),

    p('lg', 'Today the group reports more than 7,000 employees across sixteen countries.'),

    p('lg', 'If SoftConstruct represents the public face of Armenia’s gambling technology sector, Digitain represents its quieter counterpart.'),

    p(
      'lg',
      'Founded by Vardges Vardanyan, Digitain spent two decades building a global B2B operation from its base in Yerevan.'
    ),

    p(
      'lg',
      'The company now reports more than 5,000 employees, maintains commercial hubs in Malta and Romania, operates internationally through UK and Maltese licensing structures and works with a network of more than 150 publicly disclosed operator partners.'
    ),

    p(
      'lg',
      'Like SoftConstruct, the company’s international expansion increasingly runs through European regulatory and licensing frameworks.'
    ),

    p('lg', 'Historically, Digitain claims relationships with more than 700 bookmakers worldwide.'),

    p(
      'lg',
      'Its ecosystem includes the Paydrom payments platform, the OddsOn sports data service and Galaxsys, a game development studio specialising in crash games and instant-win products.'
    ),

    p(
      'lg',
      'What began as a domestic industry gradually transformed into a technology cluster whose products increasingly travel far beyond the country that created them.'
    ),

    p('lg', 'That geographic reach is precisely what makes the story important.'),

    p('lg', 'Because infrastructure has a habit of travelling much further than the country that builds it.'),
  ],
},

{
  id: 'global',

  heading: 'From Yerevan to the World',

  blocks: [
    p(
      'xl',
      'The scale of Armenia’s gambling technology sector becomes easier to understand once its geographic footprint comes into view.'
    ),

    p(
      'lg',
      'Neither SoftConstruct nor Digitain built their businesses around Armenia’s domestic market.'
    ),

    p(
  'lg',
  'With a population of fewer than three million people, Armenia could never generate enough demand to support companies employing thousands of engineers and serving hundreds of operators around the world. From the beginning, export was not an option but the business model.'
),

    p('lg', 'Today, Armenian gambling technology reaches far beyond the South Caucasus.'),

    p(
      'lg',
      'Digitain’s public partner network alone stretches across Europe, Latin America, Africa and Asia. The company works with operators in Greece, Romania, Poland, Portugal and Serbia, while continuing to maintain a long-standing presence across post-Soviet markets.'
    ),

    p('lg', 'Its own products reveal how global that footprint has become.'),

    p(
      'lg',
      'Digitain’s sportsbook platform includes multiple interface configurations designed for different regions. European, African, Latin American, Asian and CIS-oriented versions adapt to local betting habits, internet infrastructure and user behaviour.'
    ),

    p('lg', 'Infrastructure providers rarely invest in that level of regional adaptation unless those markets matter.'),

    p('lg', 'The same pattern appears elsewhere.'),

    p(
      'lg',
      'SoftConstruct operates through an international network of offices, licensing structures and commercial entities stretching from Malta and London to the Middle East and Asia.'
    ),

    p('lg', 'The result is an unusual economic model.'),

    p('lg', 'Unlike traditional gambling hubs, Armenia does not primarily export casinos.'),

    p('lg', 'It exports the technology that casinos use.'),

    p('lg', 'Platforms. Games. Payment systems. Odds feeds. Customer management software. Risk-management tools.'),

    p('lg', 'The operators may sit in Bucharest, São Paulo or Lagos.'),

    p('lg', 'The infrastructure increasingly originates in Yerevan.'),

    p('lg', 'That distinction matters because infrastructure companies occupy a unique position inside global markets.'),

  ],
},
{
  id: 'bridge-to-iran',

  heading: 'Following the Infrastructure',

  blocks: [
    p('lg', 'Public disclosures provide only a partial answer.'),

    p(
      'lg',
      'Digitain publicly references more than 150 operator partners. Historically, however, the company has claimed relationships with more than 700 bookmakers.'
    ),

    p('lg', 'Many of those operators remain invisible to outside observers.'),

    p('lg', 'Some are regulated household names.'),

    p('lg', 'Others operate in markets where transparency is far less common.'),

    p('lg', 'That is not unusual for the industry.'),

    p(
      'lg',
      'But it makes tracing the real reach of gambling infrastructure significantly more difficult.'
    ),

    p(
      'lg',
      'And it becomes particularly relevant when examining one of the region’s most resilient and least transparent betting ecosystems.'
    ),

    p('xl', 'Iran.'),
  ],
},
    {
  id: 'iran-question',

  heading: 'The Iranian Question',

  blocks: [
    p('xl', 'To understand why Armenia matters, it helps to start somewhere else.'),

    p('lg', 'In Iran.'),

    p(
      'lg',
      'As ShadowMonitor previously documented, the country’s betting ecosystem evolved into something much larger than online gambling.'
    ),

    p(
      'lg',
      'Over time, Telegram channels, mirror domains, VPN usage, cryptocurrency settlement and informal financial networks merged into what increasingly resembles a parallel digital economy.'
    ),

    p('lg', 'Sportsbooks and casino platforms became one visible layer of that system.'),

    p('lg', 'But they were never the entire system.'),

    p('lg', 'Every betting ecosystem requires infrastructure.'),

    p('lg', 'Somebody provides the games. Somebody processes payments. Somebody supplies the platform. Somebody manages risk.'),

    p('lg', 'The end user may be sitting in Tehran.'),

    p('lg', 'The infrastructure rarely is.'),

    p('lg', 'Without platforms, there are no operators.'),

    p('lg', 'Without payment systems, there are no deposits.'),

    p('lg', 'Without games, there is no product.'),

    p('lg', 'Without infrastructure, there is no ecosystem.'),

    p('lg', 'And infrastructure has a habit of crossing borders.'),

    p(
      'lg',
      'Iran’s betting economy may be shaped by local demand, sanctions pressure, currency instability and the country’s unique digital environment.'
    ),

    p('lg', 'But the tools it relies upon frequently originate elsewhere.'),

    p('lg', 'Dubai plays one role.'),

    p('lg', 'Turkey plays another.'),

    p('lg', 'Armenia increasingly appears to play a third.'),

    p('lg', 'The relationship is not always obvious.'),

    p(
      'lg',
      'Which is precisely why the most revealing clues are sometimes found in unexpected places.'
    ),
  ],
},

{
  id: 'cultural-signals',

  heading: 'Cultural Signals',

  blocks: [
    p(
      'xl',
      'The strongest clues do not always appear in licensing records, corporate structures or compliance filings.'
    ),

    p('lg', 'Sometimes they appear inside the products themselves.'),

    p('lg', 'One example comes from Galaxsys, the game development studio created by Digitain in 2021.'),

    p(
      'lg',
      'Headquartered in Yerevan and operating within the broader Digitain ecosystem, the studio specialises in fast games, crash games and lightweight casino products distributed to operators around the world.'
    ),

    p('lg', 'Among those products is a game called Hokm.'),

    p('lg', 'For most European players, the title means little.'),

    p('lg', 'In Iran, it means something entirely different.'),

    p(
      'lg',
      'Hokm is one of the country’s most popular traditional card games. The word itself refers to the trump suit in Persian card play, and the game occupies a cultural position comparable to bridge, hearts or other deeply familiar national card games elsewhere.'
    ),

    p('lg', 'It is not simply a game.'),

    p('lg', 'It is a cultural reference.'),

    p('lg', 'A product immediately recognisable to millions of people who grew up with it.'),

    p('lg', 'Galaxsys does not hide this connection.'),

    p('lg', 'The company describes Hokm as one of the most popular card games in Iran and across the wider Middle East.'),

    p(
  'lg',
  'That description is revealing not because it proves anything, but because it demonstrates awareness.'
),

    p('lg', 'Infrastructure companies rarely create culturally specific products by accident.'),

    p('lg', 'They do so because they understand the audience.'),

    p('lg', 'Another title in the studio’s portfolio, Pasur, is similarly rooted in Persian gaming culture.'),

    p('lg', 'Backgammon, another staple of the region, appears among its offerings as well.'),

    p(
  'lg',
  'None of this proves that Galaxsys targets Iranian users or that Digitain works directly with operators serving the Iranian market.'
),

p(
  'lg',
  'But it does reveal something else.'
),

    p('lg', 'The products were built by people who understand those audiences.'),

    p('lg', 'The same pattern appears elsewhere.'),

    p(
      'lg',
      'In recent years, crash games have become one of the defining products of the Persian-language betting ecosystem. Fast, mobile-friendly and highly compatible with cryptocurrency payments, they spread efficiently through Telegram channels, affiliate networks and mirror-domain infrastructures.'
    ),

    p('lg', 'Galaxsys specialises in exactly that category.'),

    p(
      'lg',
      'Its portfolio includes crash games, mines-style games, instant-win products and provably fair mechanics increasingly associated with crypto-native gambling environments.'
    ),

    p('lg', 'None of these products are uniquely Iranian.'),

    p('lg', 'Yet together they form a pattern that feels familiar.'),

    p(
  'lg',
  'The overlap is not legal. It is cultural. Not proof, but recognition.'
),

    p('lg', 'And recognition matters.'),

    p(
      'lg',
      'Because it suggests that at least some parts of Armenia’s gambling technology industry understand markets that sit far beyond the boundaries of regulated Europe.'
    ),

    p('lg', 'The strongest clues do not always appear in documents.'),

    p('lg', 'Sometimes they appear inside the products themselves.'),

    p('lg', 'The question is whether that understanding remains purely commercial.'),

    p('lg', 'Or whether it increasingly intersects with some of the region’s most resilient digital grey zones.'),
  ],
},

{
  id: 'infrastructure',

  heading: 'The Infrastructure Question',

  blocks: [
    p(
      'xl',
      'The clearest evidence connecting Armenia’s gambling technology industry to the wider Persian-facing betting ecosystem does not come from game design.'
    ),

    p('lg', 'It comes from infrastructure.'),

    p(
      'lg',
      'In 2026, reporting based on material allegedly obtained from BetConstruct’s internal systems offered a rare glimpse into how gambling platforms are configured behind the scenes.'
    ),

    p(
      'lg',
      'Among the details highlighted by investigators was the presence of Iran as a dedicated target market within project-building tools associated with the company’s SpringBuilder ecosystem.'
    ),

    p(
      'lg',
      'According to the published material, selecting Iran automatically enabled Persian-language settings, Tehran timezone configuration and payment structures described as “shadow” configurations.'
    ),

    p('lg', 'The same reporting linked several Persian-facing betting brands to the BetConstruct technology stack.'),

    p('lg', 'For a company that presents itself primarily as a technology provider, the implications were difficult to ignore.'),

    p('lg', 'Yet the significance of the leak extends beyond any single company.'),

    p('lg', 'What it revealed was something more fundamental about how modern gambling infrastructure operates.'),

    p('lg', 'Infrastructure providers do not typically interact with end users.'),

    p('lg', 'They build systems.'),

    p('lg', 'Operators deploy those systems.'),

    p('lg', 'Players see only the final layer.'),

    p('lg', 'The further one moves from the customer, the more difficult responsibility becomes to define.'),

    p('lg', 'That ambiguity is not unique to gambling.'),

    p('lg', 'It exists throughout the digital economy.'),

    p('lg', 'Cloud providers do not create content.'),

    p('lg', 'Payment processors do not run marketplaces.'),

    p('lg', 'Infrastructure companies rarely control every use of their products.'),

    p('lg', 'Yet infrastructure remains essential.'),

    p('lg', 'Nothing functions without it.'),

    p('lg', 'The same principle applies here.'),

    p('lg', 'Platforms do not place bets.'),

    p('lg', 'Game studios do not recruit customers.'),

    p('lg', 'Payment gateways do not operate sportsbooks.'),

    p('lg', 'But together, those layers make betting ecosystems possible.'),

    p('lg', 'And some of those layers increasingly lead back to Armenia.'),

    p('lg', 'Digitain presents a different case.'),

    p('lg', 'Unlike BetConstruct, no equivalent leak has emerged.'),

    p(
  'lg',
  'No public document directly links the company to Persian-facing operators, no list of Iranian clients exists, and no internal configuration files have surfaced.'
),

    p('lg', 'What exists instead are signals.'),

    p('lg', 'A company employing more than 5,000 people.'),

    p('lg', 'A network that historically claims relationships with more than 700 bookmakers.'),

    p('lg', 'A game studio producing titles rooted in Persian gaming culture.'),

    p('lg', 'A payment ecosystem designed for global deployment.'),

    p('lg', 'And a business model built around supplying infrastructure rather than operating gambling brands directly.'),

    p('lg', 'None of these elements individually establishes a direct connection.'),

    p('lg', 'Collectively, however, they illustrate a broader reality.'),

    p('lg', 'Armenia’s gambling technology industry does not operate solely inside regulated European markets.'),

    p('lg', 'Its footprint is considerably larger than that.'),

    p(
      'lg',
      'The industry’s products, services and infrastructure increasingly circulate through regions where transparency is limited and where the distinction between legal, grey and informal markets is often difficult to draw.'
    ),

    p('lg', 'That observation alone would not be remarkable.'),

    p('lg', 'The global gambling industry has always operated across multiple regulatory environments.'),

    p('lg', 'What makes Armenia different is timing.'),

    p('lg', 'The country’s political trajectory is moving in one direction.'),

    p('lg', 'Parts of its technology infrastructure appear to be moving in many others.'),
  ],
},

{
  id: 'compliance',

  heading: 'Europe’s Future Compliance Question',

  blocks: [
    p('xl', 'For years, Armenia’s gambling technology sector benefited from a combination of advantages.'),

    p('lg', 'A highly educated workforce.'),

    p('lg', 'Strong engineering talent.'),

    p('lg', 'Competitive operating costs.'),

    p('lg', 'A favourable geographic position between Europe, the Middle East and post-Soviet markets.'),

    p('lg', 'Access to international licensing structures through Malta and the United Kingdom.'),

    p('lg', 'The result was one of the most successful technology stories in the post-Soviet space.'),

    p(
      'lg',
      'A country of fewer than three million people built an industry whose products now reach operators across Europe, Latin America, Africa, Asia and beyond.'
    ),

    p('lg', 'That success is real.'),

    p('lg', 'But success attracts scrutiny.'),

    p('lg', 'As Armenia moves closer to Europe, questions that once seemed peripheral may begin to matter more.'),

    p('lg', 'European integration is not only about politics.'),

    p('lg', 'It is also about expectations.'),

    p('lg', 'Transparency.'),

    p('lg', 'Compliance.'),

    p('lg', 'Corporate accountability.'),

    p('lg', 'Risk management.'),

    p(
      'lg',
      'The same standards applied to financial institutions, technology companies and payment providers increasingly shape expectations for gambling infrastructure as well.'
    ),

    p('lg', 'This is particularly true when infrastructure providers operate internationally while serving customers across multiple regulatory environments.'),

    p('lg', 'A company may be licensed in Malta.'),

    p('lg', 'Operate from Armenia.'),

    p('lg', 'Maintain commercial offices in London or Bucharest.'),

    p('lg', 'And provide services to operators scattered across several continents.'),

    p('lg', 'That complexity creates opportunity.'),

    p('lg', 'It also creates risk.'),

    p(
      'lg',
      'Both of Armenia’s largest gambling technology groups now operate through structures tied to European regulatory systems, particularly Malta and the United Kingdom.'
    ),

    p('lg', 'That connection helped fuel their international growth.'),

    p('lg', 'It may also expose them to a different level of scrutiny in the future.'),

    p(
      'lg',
      'None of this means that Armenia’s gambling technology sector faces an inevitable collision with Europe.'
    ),

    p('lg', 'Nor does it imply that Armenian companies have violated any laws.'),

    p(
      'lg',
      'But it does suggest that infrastructure relationships which once attracted little attention may receive greater scrutiny in the future.'
    ),

    p(
      'lg',
      'Particularly when they intersect with markets that European regulators view as politically sensitive, financially opaque or structurally high-risk.'
    ),

    p('lg', 'For now, many of those questions remain unanswered.'),

    p('lg', 'But unanswered questions have a habit of becoming policy questions.'),

    p('lg', 'And policy questions eventually become compliance questions.'),
  ],
},

{
  id: 'view-from-the-hill',

  heading: 'The View From The Hill',

  blocks: [
    p(
      'xl',
      'From the upper floors of Digitain’s headquarters on Admiral Isakov Avenue, Yerevan stretches westward toward the Ararat plain.'
    ),

    p('lg', 'The view captures a city that has changed dramatically over the past two decades.'),

    p('lg', 'A city increasingly connected to global technology markets.'),

    p('lg', 'A city increasingly connected to Europe.'),

    p('lg', 'And a city that quietly became one of Eurasia’s most important gambling technology hubs.'),

    p('lg', 'The platforms built here travel far beyond Armenia.'),

    p('lg', 'So do the games.'),

    p('lg', 'So do the payment systems.'),

    p('lg', 'So do the operators that depend on them.'),

    p('lg', 'Most of that story is entirely legitimate.'),

    p('lg', 'Some of it remains poorly understood.'),

    p('lg', 'And a small part of it increasingly overlaps with one of the region’s most resilient parallel digital economies.'),

    p('lg', 'Armenia did not create Iran’s betting ecosystem.'),

    p(
      'lg',
      'Nor did it create the wider network of VPNs, Telegram channels, cryptocurrency settlement systems and mirror infrastructures that emerged around it.'
    ),

    p('lg', 'But Armenia has become one of the places where parts of that infrastructure intersect with the global gambling industry.'),

    p('lg', 'For years, that role attracted little attention.'),

    p('lg', 'The country’s gambling technology sector was viewed primarily as a success story.'),

   p(
  'lg',
  'An export success. A technology success. An Armenian success.'
),

    p('lg', 'In many respects, it still is.'),

    p(
      'lg',
      'Yet the same forces that helped build that success — global reach, regulatory flexibility, cross-border infrastructure and access to difficult markets — may ultimately attract a different kind of attention.'
    ),

    p('lg', 'As Armenia moves closer to Europe, the questions surrounding those relationships are unlikely to disappear.'),

    p('lg', 'If anything, they are becoming harder to ignore.'),

    p('lg', 'Armenia’s gambling technology industry helped connect the country to the world.'),

    p('lg', 'The next question is which parts of that world Europe is willing to accept.'),

    p('lg', 'And whether Europe will eventually decide to look more closely at where that infrastructure leads.'),
  ],
},
  ],
  sidebar: {
  focus: 'Armenia between Europe and Iran',
  entities: [
    'armeniaCorridor',
    'igamingInfrastructure',
    'parallelDigitalEconomy',
    'culturalLocalization',
    'complianceGap',
  ],
},

sidebarBySection: {
  intro: {
    focus: 'One Country - Two Layers',
    entities: [
      'armeniaCorridor',
      'igamingInfrastructure',
    ],
  },

    'bridge-to-machine': {
    focus: "Armenia’s Technology Story",
    entities: [
      'igamingInfrastructure',
      'digitain',
    ],
  },

  giants: {
    focus: 'The Infrastructure Builders',
    entities: [
      'digitain',
      'betConstruct',
      'galaxsys',
      'paydrom',
    ],
  },

  global: {
    focus: 'The Infrastructure Travels',
    entities: [
      'armeniaCorridor',
      'igamingInfrastructure',
      'digitain',
    ],
  },

  'bridge-to-iran': {
  focus: 'The Armenia Corridor',
  entities: [
    'armeniaCorridor',
    'parallelDigitalEconomy',
    'igamingInfrastructure',
  ],
},

  'iran-question': {
    focus: 'Parallel digital economy',
    entities: [
      'parallelDigitalEconomy',
      'telegramRouting',
      'cryptoSettlement',
      'crashGames',
    ],
  },

  'cultural-signals': {
    focus: 'Cultural localization',
    entities: [
      'culturalLocalization',
      'hokm',
      'pasur',
      'galaxsys',
      'crashGames',
    ],
  },

  infrastructure: {
    focus: 'Infrastructure and responsibility',
    entities: [
      'betConstruct',
      'digitain',
      'paydrom',
      'complianceGap',
    ],
  },

  compliance: {
    focus: "The Compliance Question Has Already Arrived",
    entities: [
      'complianceGap',
      'mga',
    ],
  },

  'view-from-the-hill': {
    focus: 'The Other Armenia',
    entities: [
      'armeniaCorridor',
      'parallelDigitalEconomy',
      'complianceGap',
    ],
  },
},
}

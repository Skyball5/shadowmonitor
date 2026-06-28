import {
  type InvestigationArticle,
  type TimelineItem,
  type SourceItem,
  type ConnectedInvestigation,
  p,
  callout,
  documentBlock,
  e,
} from './shared'

export const reputationWarfareArticle: InvestigationArticle = {
  eyebrow: 'Analysis',
  published: 'June 2026',
publishedAt: '2026-06-01',

themes: ['igaming'],

readTime: '20 min read',

title: 'The Market of Reputation Warfare',

dek:
  'Private intelligence firms, SEO takedown specialists, SEO takedown specialists, stolen algorithms, and false attribution through planted code: in iGaming, reputation has become a weapon. Here is how the market that manufactures and destroys it on demand actually works.',

heroImage: '/investigations/reputation-warfare.png',
  timelineAfterSectionId: 'intro',

sections: [
  {
    id: 'commissioned-dirt',
    heading: 'Commissioned Dirt as a Service',
    blocks: [
  p(
    'xl',
    'In the part of the industry where operators deliberately seek out the least regulated jurisdictions, reputation is the one asset that cannot be bought outright. A licence can be picked up offshore. Payment processing can be routed around banking controls. Traffic can be bought wholesale through affiliates. The average player does not care much about reputation either — bonuses drive behaviour, not brand trust, and the industry’s entire growth model runs on that fact. But a regulator’s trust, a banking partner’s trust, and a platform provider’s trust work differently. They cannot be purchased directly. They have to be earned. But they can also be destroyed by a competitor.'
  ),
  p(
    'xl',
    'Which is why nobody in the industry was particularly shocked in October 2025 to learn that the damning report on the world’s largest live-casino supplier had been commissioned by one of its direct rivals. That rival had hired a private intelligence firm for several million pounds. What was shocking was that a court forced the names into the open. That almost never happens.'
  ),
  p(
    'xl',
    'Outside the courtroom, the market for corporate dirt in iGaming runs without subpoenas or paper trails — quietly, efficiently, and with an increasingly sophisticated toolkit. This piece tries to take it apart link by link.'
  ),
  documentBlock(
    'dossier',
    'Where the Evolution vs. Playtech Case Stands',
    [
      {
        heading: 'The money',
        body: 'Evolution alleges that Playtech paid Black Cube roughly £1.8 million to produce the report.',
      },
      {
        heading: 'The market reaction',
        body: 'When Playtech was publicly named as the client, its shares fell by nearly 21% in a single session.',
      },
      {
        heading: 'Playtech position',
        body: 'Playtech denies that the campaign was unlawful and says it was a reasonable response to credible concerns about Evolution’s business practices.',
      },
      {
        heading: 'Latest twist',
        body: 'In June 2026, the court denied Evolution’s bid to formally add Playtech as a co-defendant on procedural grounds.',
      },
    ],
    'Status: Active • Updated June 2026'
  ),
]
  },
  {
    id: 'reputation-cleanup',
    heading: 'Reputation Cleanup Industry',
    blocks: [
  p(
    'xl',
    'The reputation-management market described above produces a predictable side effect: if dirt can be commissioned and its suppression bought, sooner or later the same tools are turned on the “watchdogs” themselves. In the fintech and crypto niches adjacent to gambling, a durable ecosystem of outlets has built up over the years specializing in exposing scam projects, predatory payment processors, and gray-market operators. Some of them do real journalism. Some monetize the threat of publication. From the outside, telling one from the other is nearly impossible — which is exactly what makes both types influential and exposed.'
  ),
  p(
    'xl',
    'In December 2018, according to a report by the investigative trade outlet FinTelegram, based on documents from a criminal case, two men later convicted of running fraud operations — Uwe Lenhoff and Gal Barak — had this exchange on Telegram. Lenhoff sent over a contact: “Marco Juffermans... talk to him, he can help clean up Google from all this bullshit. It’s from Rudolf.” The next day Barak reported back: “Done, tell Rudolf – payment goes out today.” “Rudolf,” in this context, was, according to the outlet, Rudolf Booker, CEO of the Dutch payment company Payvision, which, per the same documents, had been processing transactions for Lenhoff and Barak’s fraud schemes worth more than €131 million.'
  ),
  p(
    'xl',
    'Marco Juffermans is an Amsterdam-based “right to be forgotten” consultant, a pioneer of the so-called “de-googling” concept, and founder of White Canvas. This is investigative journalism, not a court finding: none of the named parties has publicly contested the outlet’s account in any legal proceeding.'
  ),
  p(
    'xl',
    'The moral inversion here is almost too neat: money stolen from fraud victims was spent making sure future victims never saw warnings about the same fraud.'
  ),
  
]
  },
  {
    id: 'mirror-warfare',
    heading: 'Mirror Reputation Warfare',
    blocks: [
  p(
    'xl',
    'The exposure pattern is predictable: once an outlet has worked the beat long enough, a mirror-image cluster of sites, forum threads, and anonymous “dossiers” usually emerges, doing to the outlet exactly what it is accused of doing — publishing dirt, questioning motives, and naming owners and funding sources. These counter-outlets rarely disclose any transparent ownership structure. They tend to appear at suspiciously convenient moments, usually soon after a story that struck a nerve.'
  ),
  p(
    'xl',
    'Sometimes they are run by genuinely wronged parties. Sometimes by people with an interest in silencing legitimate reporting. From the outside, the two cases are indistinguishable. And that is the whole point of the mechanism: it works exactly the same regardless of who is actually telling the truth.'
  ),
  p(
    'xl',
    'A reputation mirror war does not require either side to be right — it only requires resources and the will to spend them. In an environment with high stakes and no real outside referee, that is the norm, not the exception.'
  ),
  
]
  },
 {
  id: 'killer-material',
  heading: 'When Knowledge Leaves the Building',
  blocks: [
    p(
      'xl',
      'The answer to the question the previous section ended with is fairly unglamorous: most of the time, the material walks out the door with the people who leave.'
    ),

    p(
      'xl',
      'In February 2024, the Australian slot manufacturer Aristocrat Leisure filed suit in federal court in Nevada against its direct rival, the US company Light & Wonder. Two former Aristocrat developers, Emma Charles and Lloyd Sefton, had moved to Light & Wonder in 2021. Shortly after, the games Dragon Train and Jewel of the Dragon appeared – which, Aristocrat alleged, weren’t just visually similar to its own Dragon Link and Lightning Link but built on the same mathematical model: identical RNG logic, the same payout probability tables, the same game-mechanics architecture.'
    ),

    p(
      'xl',
      'In September 2024, the court issued a preliminary injunction, barring Light & Wonder from selling or marketing Dragon Train and Jewel of the Dragon while the case proceeded. The wording mattered: the court found not just that the products looked similar, but that Light & Wonder had gained an unlawful competitive advantage by building Dragon Train using someone else’s trade secrets – without making comparable investments of its own time and money.'
    ),

    p(
      'xl',
      'The court drew that line between “inspired by” and “lifted from” cleanly. In January 2026, the parties settled: $127.5 million in damages, both games pulled from every market, and an obligation to destroy all documents reflecting Aristocrat’s mathematical model. Light & Wonder itself framed the episode quite differently from how the court’s language reads: according to the company’s CEO, this came down to a single disloyal employee who acted “without our knowledge and in direct violation of our policies” – not a corporate decision.'
    ),

    p(
      'xl',
      'What matters about this case is not the dollar figure or the names – it’s what actually leaves a company with the people who go. Not just professional experience and general skills, which any developer is legally entitled to carry with them, but specific non-generic artifacts: a particular implementation of an algorithm, model parameters, and architectural choices that two separate teams are unlikely to reproduce independently. The stuff that makes a competitor’s product theirs, not merely similar.'
    ),

    p(
      'xl',
      'That’s the technical raw material we have been talking about. And as long as we are discussing its use to build a rival product, this is a well-understood, classic form of IP theft with a clear legal framework around it. But that same raw material has another possible use: a far less obvious one – and a far harder one to prove.'
    ),
    documentBlock(
  'dossier',
  'Aristocrat vs. Light & Wonder',
  [
    {
      heading: 'TIMELINE',
      body: 'Emma Charles and Lloyd Sefton, who had previously worked at Aristocrat on Dragon Link, moved to Light & Wonder in 2021. Aristocrat filed suit in February 2024 in the US District Court for Nevada (with parallel proceedings in Australia). A preliminary injunction followed in September 2024. The parties settled in January 2026.',
    },
    {
      heading: 'THE SMOKING GUN',
      body: 'The decisive evidence was a spreadsheet found in Emma Charles’s possession containing the mathematical model behind Dragon Link — matching Aristocrat’s internal file down to its original creation date in November 2013, years before Charles joined Light & Wonder. Judge Gloria Navarro relied on that evidence when issuing the preliminary injunction.',
    },
    {
      heading: 'WHAT WAS AT STAKE',
      body: 'The dispute centered not on artwork or game themes but on the mathematical model itself: RNG logic, payout probability tables and the underlying game architecture. The settlement required Light & Wonder to pay $127.5 million, withdraw Dragon Train and Jewel of the Dragon worldwide, and destroy all documents reflecting Aristocrat’s mathematical model.',
    },
    {
      heading: 'TWO VERSIONS OF THE STORY',
      body: 'The court concluded that Light & Wonder had obtained an unlawful competitive advantage. The company maintained a different narrative: CEO Matt Wilson argued that one employee had improperly used Aristocrat’s mathematics without the company’s knowledge and in direct violation of its policies.',
    },
    {
      heading: 'A PARALLEL CASE',
      body: 'In 2021, Nexon sued Ironmace, alleging that source code and assets from its in-development project P3 had been used to create Dark and Darker. In April 2026, South Korea’s Supreme Court upheld the trade-secret violation and ordered Ironmace to pay approximately $3.84 million in damages.',
    },
  ],
  'Settled January 2026 • Games withdrawn from the market'
),
  ],
},

  {
    id: 'false-attribution',
    heading: 'False Technical Attribution',
    blocks: [
  p(
    'xl',
    'Picture this scenario: a handful of online casino sites pop up, do not pay out winnings, and disappear with players’ money. A technical forensic review points to a specific developer: same architecture, same coding style, the same distinctive patterns. The conclusion seems obvious — this is Operator X’s team’s work. Operator X’s reputation is finished. And proven, no less — backed by technical expertise.'
  ),
  p(
    'xl',
    'Except Operator X never built those sites.'
  ),
  p(
    'xl',
    'This is not speculative fiction. It is an accurate description of something security researchers call a false-flag operation — and one whose existence has been confirmed, repeatedly, in cases operating at a far higher level of sophistication than any casino-industry turf war.'
  ),
  p(
    'xl',
    'In February 2018, on the opening day of the Winter Olympics in Pyeongchang, malware known as Olympic Destroyer knocked out the Games’ IT infrastructure. The initial forensic read was nearly unanimous: the code shared distinctive data-wiping routines with malware previously associated with the North Korean Lazarus group. The evidence looked airtight. Several leading cybersecurity vendors independently pointed to North Korea.'
  ),
  documentBlock(
    'technical-brief',
    'Technical Artifacts of Attribution',
    [
      {
        heading: 'AT SOURCE-CODE LEVEL',
        body: 'Variable and function naming conventions, distinctive comments, conditional logic and non-obvious algorithmic choices — the kind of thing two separate teams are unlikely to reproduce independently.',
      },
      {
        heading: 'AT BUILD AND INFRASTRUCTURE LEVEL',
        body: 'Debug paths, compiler metadata, CI/CD pipeline configurations and code-signing material can all leave a developer-shaped footprint.',
      },
      {
        heading: 'AT PRODUCT-BEHAVIOR LEVEL',
        body: 'Specific RNG implementation quirks, API call patterns, timeout behavior and edge-case handling often form the most visible behavioral signature.',
      },
    ],
    'Technical Reference'
  ),
  p(
    'xl',
    'The evidence had been planted on purpose. The follow-up investigation by Cisco Talos and Kaspersky established that the attack had actually come from the Russian group Sandworm, which had deliberately inserted Lazarus-style code fragments as a false trail. In 2020, the US Department of Justice indicted six GRU officers from the unit known as Sandworm, and the UK National Cyber Security Centre separately confirmed that Russian military intelligence had tried to disguise its involvement as a North Korean attack. Some independent researchers still consider APT28/Fancy Bear the more likely culprit; there is still no full consensus.'
  ),
  p(
    'xl',
    'Olympic Destroyer showed just how vulnerable technical attribution can be to deliberate manipulation. But the underlying idea — wearing someone else’s identity as a tool of competitive warfare — has been around in the commercial world for a while now. Trade-secret litigation routinely turns on proving where code, algorithms and architectural choices actually came from. In other words, business has already learned to treat technical artifacts as fingerprints.'
  ),
  p(
    'xl',
    'The problem is that any fingerprint can be planted, not just found.'
  ),
  p(
    'xl',
    'Carrying this logic over to iGaming requires no stretch at all. If the technique works against national intelligence agencies and the world’s top cybersecurity firms, it works far more easily where forensic work is done by budget-constrained contractors, and where technically convincing evidence is already enough to trigger a regulatory action or a reputational hit piece. A former employee of a competitor brings real artifacts with them — a particular coding style, distinctive architectural choices, a recognizable RNG implementation — and those same artifacts, deliberately planted in someone else’s infrastructure, produce a false trail that looks technically convincing.'
  ),
  p(
    'xl',
    'We do not have a documented case of this specific application inside iGaming. But we do have a documented technique, documented channels for carrying it out, and an environment where every other method described in this piece is already in active use. The absence of public cases could mean the practice does not exist — or it could mean it is just well-hidden. We do not have grounds to confidently assume the former.'
  ),
]
  },
  
  {
  id: 'grey-zone-competition',
  heading: 'Grey-Zone Competition',
  blocks: [
    p(
      'xl',
      'Everything described so far exists independently. Commissioned intelligence reports. Reputation-cleanup businesses. Trade-secret litigation. False technical attribution. None of these mechanisms was invented for iGaming. Each has a documented history of its own.'
    ),

    p(
      'xl',
      'The question this investigation asks is a different one. What happens when all of these mechanisms become available inside a market already built around offshore licensing, regulatory arbitrage, anonymous ownership structures and weak cross-border enforcement?'
    ),

    p(
      'xl',
      e('yieldSec'),
      ' founder ',
      e('ismailVali'),
      ' compares the regulated gambling market to the visible tip of an iceberg. Beneath it lies a much larger commercial ecosystem operating across jurisdictions, payment routes and corporate structures that remain only partially visible to regulators. In such an environment, reputation itself becomes infrastructure. Licensing authorities, payment providers, investors and journalists all make decisions based on information they cannot independently verify. Whoever shapes that information gains leverage.'
    ),

    p(
      'xl',
      'We do not have evidence that this complete mechanism is already being used inside iGaming. No documented public case demonstrates that technical artifacts have been deliberately planted to manufacture false attribution against a competitor.'
    ),

    p(
      'xl',
      'What we do have, however, are all of the individual components: documented reputation-for-hire operations, documented reputation-cleanup businesses, documented trade-secret migration, documented false-flag attribution techniques, and an industry whose structural characteristics make the combination of those elements entirely plausible.'
    ),

    p(
      'xl',
      'Whether that final step has already been taken remains unknown. But the capability clearly exists.'
    ),
  ],
},
],

  sidebarBySection: {
  'commissioned-dirt': {
    focus: 'Reputation-for-Hire Market',
    entities: ['evolution', 'playtech', 'blackCube'],
  },
  'reputation-cleanup': {
    focus: 'Search Suppression Economy',
    entities: ['whiteCanvas', 'marcoJuffermans', 'payvision', 'rudolfBooker'],
  },
  'mirror-warfare': {
    focus: 'Counter-Narrative Operations',
    entities: ['finTelegram', 'whiteCanvas', 'payvision'],
  },
  'killer-material': {
    focus: 'Competitive IP Migration',
    entities: ['aristocratLeisure', 'lightAndWonder', 'dragonTrain', 'dragonLink'],
  },
  'false-attribution': {
    focus: 'Attribution Manipulation',
    entities: ['olympicDestroyer', 'sandworm', 'ciscoTalos', 'lazarus'],
  },
  'attribution-artifacts': {
    focus: 'Attribution Artifacts',
    entities: ['olympicDestroyer', 'ciscoTalos', 'sandworm'],
  },
  'grey-zone-competition': {
    focus: 'Competitive Trust Infrastructure',
    entities: ['yieldSec', 'playtech', 'aristocratLeisure', 'lightAndWonder'],
  },
},

connectedInvestigations: [],

sources: [],

timeline: [],
}
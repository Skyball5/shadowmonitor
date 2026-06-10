import {
  type InvestigationArticle,
  type TimelineItem,
  type SourceItem,
  type ConnectedInvestigation,
  p,
  callout,
  e,
} from './shared'

export const predictionArticle: InvestigationArticle = {
  eyebrow: 'Analysis',
  published: 'June 2026',
  publishedAt: '2026-06-05',
  themes: ['crypto'],
  readTime: '14 min read',
  title: "The Market for Tomorrow's Secrets",
  dek: 'How prediction markets turned information about future events into a financial asset.',
  heroImage: '/investigations/prediction-market-dossier.png',
  timelineAfterSectionId: 'intro',

  sections: [
    {
      id: 'intro',
      heading: 'A Secret Becomes a Trade',
      blocks: [
        p(
          'xl',
          'In June 2025, an ',
          e('israeliAirForceMajor'),
          ' attended a closed briefing about a planned strike against Iran. The date was classified. The operation was classified. Even the fact that an attack was being prepared was classified.'
        ),
        p(
          'lg',
          'According to the indictment, the officer later sent a message to ',
          e('omerZiv'),
          ', a former iGaming operator who immediately understood how to turn that knowledge into money. Using multiple accounts on ',
          e('polymarket'),
          ', he bought contracts tied to the coming events.'
        ),
        p(
          'lg',
          'When the strike happened, the positions paid out. Then they paid out again. Then again. In the end, the pair allegedly made more than $150,000 by trading on future military events.'
        ),
        callout(
          'INTELLIGENCE LAYER',
          'The object being traded here was not a company or a commodity. It was knowledge about a future event.'
        ),
      ],
    },

    {
      id: 'future-asset',
      heading: 'When the Future Became an Asset',
      blocks: [
        p(
          'xl',
          'Prediction markets look, at first glance, like betting platforms. That description is not wrong. It is just incomplete.'
        ),
        p(
          'lg',
          'There is a price. There is a probability. There is a payout. Anyone who understands sports betting can grasp the basic logic of ',
          e('eventContracts'),
          ' in a few minutes.'
        ),
        p(
          'lg',
          'And that is exactly why prediction markets are so easy to misread. The revolution did not happen in mathematics. It happened in the choice of what people were allowed to put money on.'
        ),
        p(
          'lg',
          'For centuries, people bet on horse races, football matches and other relatively closed systems. Now they bet on elections, wars, sanctions, coups, diplomatic agreements and military strikes. Once the future becomes tradable, information about the future becomes valuable.'
        ),
        callout(
          'PRICE SIGNAL',
          'Prediction markets do not just answer “what happened?” They try to assign a market price to “what happens next?”'
        ),
      ],
    },

    {
      id: 'insider',
      heading: 'The Insider Trade Has Moved',
      blocks: [
        p(
          'xl',
          'The Israeli case matters not because of the money. $150,000 is not enough to change the history of global finance. What matters is the structure.'
        ),
        p(
          'lg',
          'For the first time, an insider-trading case centered on the monetization of knowledge about something that had not yet happened. That is a different category of offense. It is not just a corporate secret. It is a future event.'
        ),
        p(
          'lg',
          'This is where prediction markets begin to look less like gambling and more like an information market with financial incentives. Traditional insider trading is familiar: you learn about a merger before the market does, you buy stock, you profit. Here the object is not a company. It is the event itself.'
        ),
        p(
          'lg',
          'That is why regulators have started paying attention. The ',
          e('cftc'),
          ' has already warned about misuse of non-public information on event-contract markets. The legal question is becoming harder, not easier: what should insider trading mean when the thing being traded is the future?'
        ),
      ],
    },

    {
      id: 'who-prices-future',
      heading: 'Who Prices the Future?',
      blocks: [
        p(
          'xl',
          'Supporters of prediction markets like to describe them as collective intelligence. The logic is attractive: thousands of people analyze information, thousands put money on the line, and a price emerges that reflects the crowd’s estimate of probability.'
        ),
        p(
          'lg',
          'In theory, that sounds almost ideal. In practice, there is a weakness. What happens when one player has a very large wallet?'
        ),
        p(
          'lg',
          'That question became impossible to ignore during the U.S. presidential race, when journalists began talking about the mysterious ',
          e('frenchWhale'),
          '. He took large positions on ',
          e('polymarket'),
          ' in favor of Donald Trump, and by the end of the cycle his profit was estimated at more than $80 million.'
        ),
        p(
          'lg',
          'The money was not the point. The point was the discomfort he created. What exactly was the market showing — collective wisdom or the conviction of one very large participant?'
        ),
        p(
          'lg',
          'That distinction matters. A market can be an information gauge. It can also become a mechanism of influence. That is true in stocks, bonds and currencies. It is even more true in prediction markets, because prediction markets do not just price assets. They price expectations.'
        ),
        callout(
          'COLLECTIVE INTELLIGENCE',
          'A prediction market can be useful even when it is not perfectly democratic. The question is how much influence large players should be allowed to have over the signal.'
        ),
      ],
    },

    {
      id: 'journalist-market',
      heading: 'When Journalists Become Part of the Market',
      blocks: [
        p(
          'xl',
          'For decades, the relationship between news and markets was straightforward. An event happened. Journalists reported it. Markets reacted. Event. News. Market.'
        ),
        p(
          'lg',
          'Prediction markets scramble that sequence. They insert themselves between event and reporting.'
        ),
        p(
          'lg',
          'The case of ',
          e('emanuelFabian'),
          ', a correspondent at ',
          e('timesOfIsrael'),
          ', made that shift visible in a very uncomfortable way. After Fabian published a note about the consequences of one of the Iranian attacks, traders on Polymarket began arguing over whether the wording of the story triggered payout conditions in a contract.'
        ),
        p(
          'lg',
          'The distinction was not academic. It was financial. According to U.S. reporting, one participant claimed to have staked nearly $900,000 on the outcome. When a journalist’s wording begins to decide whether a contract pays out, journalism has entered the market.'
        ),
        p(
          'lg',
          'This is already visible in the way major media organizations behave. ',
          e('bloomberg'),
          ' has incorporated prediction-market data into its systems. ',
          e('dowJones'),
          ' has partnered with Polymarket. Market probabilities increasingly show up inside mainstream coverage of elections, geopolitics and policy.'
        ),
        callout(
          'PUBLIC PERCEPTION',
          'Once market prices become part of the news cycle, they stop being passive observations. They start helping produce the story people think they are reading.'
        ),
      ],
    },

    {
      id: 'governments-meet-market',
      heading: 'When Governments Meet the Market',
      blocks: [
        p(
          'xl',
          'States have always liked markets when markets were useful. Prices of oil, bonds and currencies contain information. Governments know that. They use that information. They rely on it.'
        ),
        p(
          'lg',
          'Prediction markets create a more awkward situation. What happens when the market is not just pricing commodities or credit risk, but the probability of a military strike, an election or a coup?'
        ),
        p(
          'lg',
          'Now the market is no longer merely helping the state read reality. It is competing with the state in the production of forecasts.'
        ),
        p(
          'lg',
          'That is the real regulatory problem. Not betting. Not crypto. Not gambling. Competing systems of knowledge.'
        ),
        p(
          'lg',
          'The old system is built around intelligence agencies, analysts, bureaucracies and carefully controlled disclosure. The new one is built around capital, incentives, open-source data and continuously updated probabilities. The clash is not about ideology. It is about authority.'
        ),
        p(
          'lg',
          'Who gets to say what is likely to happen next? That is the question that sits underneath the legal battles around ',
          e('kalshi'),
          ' and the warnings coming from the ',
          e('cftc'),
          '.'
        ),
        callout(
          'FORECASTING SYSTEM',
          'Prediction markets are not just a new product category. They are a rival infrastructure for producing credible forecasts.'
        ),
      ],
    },

    {
      id: 'market-was-right',
      heading: 'The Market Was Right',
      blocks: [
        p(
          'xl',
          'Prediction markets would not matter if they were always wrong. The reason people keep watching them is that sometimes they seem to get things right before everyone else does.'
        ),
        p(
          'lg',
          'The 2024 U.S. election became one of the clearest examples. Polymarket often showed higher odds for Trump than many traditional models and polls did at the time. After the election, supporters of prediction markets treated that as proof that markets can sometimes see what experts miss.'
        ),
        p(
          'lg',
          'The deeper point is not whether any one election was perfectly forecast. The deeper point is that once enough people believe a market may contain useful information about the future, the market starts to matter in its own right.'
        ),
        p(
  'lg',
  'Critics often portray prediction markets as a dangerous intrusion into public life. History suggests a more complicated pattern. Long before prediction markets existed, betting markets helped build the audiences, rituals and commercial structures that turned modern sports into mass entertainment. The relationship between wagering and social institutions may be less an anomaly than a recurring feature of how attention economies develop.'
),
        p(
          'lg',
          'That is why people monitor prediction markets during geopolitical crises. That is why they watch them for signals around Taiwan, Iran, sanctions and major policy decisions. That is why the market can become news even before the event happens.'
        ),
        p(
          'lg',
          'The old OSINT habit was to search for traces of the future in the present: a sudden rise in Pentagon pizza orders, unusual flight activity, shipping movements, satellite images or search trends. Prediction markets are part of that same family.'
        ),
        p(
          'lg',
          'The ',
          e('pentagonPizzaIndex'),
          ' is funny until it is not. It reminds us that the future often leaves traces before it becomes obvious.'
        ),
        callout(
          'SIGNAL VS. NOISE',
          'Prediction markets do not eliminate uncertainty. They simply give uncertainty a price.'
        ),
      ],
    },

    {
      id: 'conclusion',
      heading: 'The Price of Tomorrow',
      blocks: [
        p(
          'xl',
          'The deepest mistake is to think of prediction markets as a strange side alley of gambling culture. They are much closer to an emerging layer of information infrastructure.'
        ),
        p(
          'lg',
          'That is why insiders move money through them. That is why journalists end up inside them. That is why regulators get nervous. That is why large capital can distort them. And that is why they sometimes work.'
        ),
        p(
          'lg',
          'The real story is not about betting. It is about the financialization of the future.'
        ),
        p(
          'lg',
          'For centuries, the most valuable information was never information about what already happened. It was information about what would happen next. Prediction markets did not invent that demand. They created a place where it can finally be traded.'
        ),
        p(
          'lg',
          'That may sound like a niche financial experiment. It is not. It may be one of the first signs that, in the 21st century, knowledge about tomorrow is becoming its own asset class.'
        ),
        p(
          'lg',
          'And if that is true, the most important question is no longer whether prediction markets should exist. It is how society will live with the fact that the future now has a price.'
        ),
      ],
    },
  ],

  timeline: [
    {
      year: '2024',
      title: 'Prediction markets move into the mainstream',
      description:
        'The U.S. election cycle pushes prediction markets from niche curiosity into a widely watched source of political probabilities.',
    },
    {
      year: '2025',
      title: 'The Israeli–Iran case makes the legal risk visible',
      description:
        'A military insider-trading case shows how future events can be monetized directly on a prediction market.',
    },
    {
      year: '2026',
      title: 'Regulators and media both start treating the markets seriously',
      description:
        'CFTC scrutiny, mainstream coverage and platform partnerships make prediction markets harder to dismiss as a novelty.',
    },
  ] satisfies TimelineItem[],

  sources: [
    {
      kind: 'Reporting',
      title: 'Israeli Polymarket indictment coverage',
      date: '2026',
      status: 'Cross-checked',
      excerpt:
        'Coverage of the Israeli Air Force reservist and Omer Ziv case tied to Polymarket and military operations against Iran.',
    },
    {
      kind: 'Reporting',
      title: 'Prediction-market coverage from mainstream media',
      date: '2024–2026',
      status: 'Cross-checked',
      excerpt:
        'Election-market coverage and follow-up reporting showing how prediction-market odds became part of public political commentary.',
    },
    {
      kind: 'Research notes',
      title: 'OSINT trace log',
      date: '2026',
      status: 'Internal',
      excerpt:
        'Notes on Pentagon Pizza Index, flight tracking, shipping movements and other trace-based forecasting systems.',
    },
  ] satisfies SourceItem[],

  sidebarBySection: {
    intro: {
      focus: 'A secret becomes a trade',
      entities: ['israeliAirForceMajor', 'omerZiv', 'polymarket', 'eventContracts'],
    },

    'future-asset': {
      focus: 'The future became a tradable asset',
      entities: ['predictionMarkets', 'eventContracts', 'knowledgeAboutTomorrow'],
    },

    insider: {
      focus: 'The insider trade moved from companies to events',
      entities: ['insiderTrading', 'cftc', 'futureEvent'],
    },

    'who-prices-future': {
      focus: 'A large wallet can shape a market for belief',
      entities: ['frenchWhale', 'collectiveIntelligence', 'marketProbability', 'largeWallet'],
    },

    'journalist-market': {
      focus: 'A journalist can become part of the market',
      entities: ['emanuelFabian', 'timesOfIsrael', 'publicPerception', 'informationInfrastructure'],
    },

    'governments-meet-market': {
      focus: 'Governments are now facing a rival forecasting system',
      entities: ['kalshi', 'cftc', 'forecastingSystem', 'informationInfrastructure'],
    },

    'market-was-right': {
      focus: 'Sometimes the market gets there first',
      entities: ['predictionMarkets', 'pentagonPizzaIndex', 'osint'],
    },

    conclusion: {
      focus: 'The future now has a price',
      entities: ['financializationOfTheFuture', 'knowledgeAboutTomorrow', 'futureEvent'],
    },
  },

  connectedInvestigations: [
    {
      title: 'Iran: The Infrastructure Behind the Strike',
      summary:
        'A thematic cross-link to the role of secrecy, military intelligence and information leakage around the Israeli–Iranian escalation.',
      jurisdictions: ['Israel', 'Iran'],
      entities: ['israeliAirForceMajor', 'omerZiv', 'polymarket'],
    },
    {
      title: 'Anjouan: Inside the Offshore Licensing Machine',
      summary:
        'A thematic cross-link on how regulatory friction becomes infrastructure when a market needs speed.',
      jurisdictions: ['Comoros'],
      entities: ['informationInfrastructure', 'predictionMarkets'],
    },
  ] satisfies ConnectedInvestigation[],
}
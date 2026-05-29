export type EntityType =
  | 'company'
  | 'regulator'
  | 'law'
  | 'jurisdiction'
  | 'person'
  | 'organization'
  | 'concept'

export interface Entity {
  id: string
  name: string
  type: EntityType

  shortDescription: string
  description: string

  jurisdiction?: string
  status?: string

  aliases?: string[]
  relatedEntities?: string[]
}

export const entities: Record<string, Entity> = {
  cga: {
    id: 'cga',
    name: 'Curaçao Gaming Authority',
    type: 'regulator',
    shortDescription: 'The regulator overseeing Curaçao’s post-LOK gambling framework.',
    description:
      'The Curaçao Gaming Authority became the central regulatory body after the introduction of the LOK reform, replacing the historic master-license structure with direct licensing and stricter compliance oversight.',
    jurisdiction: 'Curaçao',
    status: 'Active regulator',
    aliases: ['CGA'],
    relatedEntities: ['lok', 'law1931', 'bcgame'],
  },

  lok: {
    id: 'lok',
    name: 'LOK Reform',
    type: 'law',
    shortDescription: 'The legislative reform restructuring Curaçao’s gambling industry.',
    description:
      'LOK introduced direct licensing, stronger AML requirements and formal regulatory oversight under the CGA. The reform was designed to replace Curaçao’s controversial sublicensing system.',
    jurisdiction: 'Curaçao',
    status: 'Implemented',
    aliases: ['LOK'],
    relatedEntities: ['cga', 'law1931'],
  },

  law1931: {
    id: 'law1931',
    name: 'Faillissementsbesluit 1931',
    type: 'law',
    shortDescription: 'Colonial-era insolvency law still active in Curaçao.',
    description:
      'The Faillissementsbesluit 1931 governs bankruptcy proceedings in Curaçao and allows insolvency actions to begin under relatively low evidentiary thresholds. Operators increasingly view it as a structural business risk.',
    jurisdiction: 'Curaçao',
    status: 'Active legal framework',
    relatedEntities: ['bcgame', 'sbgok', 'bijkerk', 'cramm'],
  },

  adr: {
    id: 'adr',
    name: 'ADR',
    type: 'concept',
    shortDescription: 'Alternative dispute resolution mechanism introduced under LOK.',
    description:
      'ADR refers to the alternative dispute resolution channel introduced under the LOK regime. It can reduce litigation pressure, but it does not prevent bankruptcy petitions or replace the insolvency system.',
    jurisdiction: 'Curaçao',
    status: 'Dispute resolution mechanism',
    aliases: ['ADR'],
    relatedEntities: ['lok', 'law1931'],
  },

  bcgame: {
    id: 'bcgame',
    name: 'BC.Game',
    type: 'company',
    shortDescription: 'Crypto gambling operator that publicly exited Curaçao licensing.',
    description:
      'BC.Game became one of the most visible operators to publicly criticise Curaçao’s insolvency framework, arguing that the bankruptcy system could be abused against legitimate gambling businesses.',
    jurisdiction: 'Offshore',
    status: 'Operator',
    relatedEntities: ['law1931', 'cga', 'blockdance', 'smallhouse'],
  },

  sbgok: {
    id: 'sbgok',
    name: 'SBGOK',
    type: 'organization',
    shortDescription: 'Dutch foundation representing gambling-related player claims.',
    description:
      'SBGOK pursued aggressive litigation and bankruptcy strategies against Curaçao operators, becoming one of the most influential player-claim organisations inside the offshore gambling ecosystem.',
    jurisdiction: 'Netherlands / Curaçao',
    status: 'Litigation organization',
    aliases: ['Stichting Belangenbehartiging Gedupeerde Online Kansspelers'],
    relatedEntities: ['law1931', 'bijkerk', 'cramm', 'cyberluck', 'trigonon', 'adr'],
  },

  bijkerk: {
    id: 'bijkerk',
    name: 'Roelof Bijkerk',
    type: 'person',
    shortDescription: 'Attorney behind key player-claim and bankruptcy proceedings.',
    description:
      'Roelof Bijkerk operated through Legal & Management Solutions B.V. and became one of the central legal figures behind the Curaçao gambling litigation pipeline.',
    jurisdiction: 'Netherlands / Curaçao',
    status: 'Attorney',
    aliases: ['Bijkerk'],
    relatedEntities: ['sbgok', 'law1931', 'cramm'],
  },

  cramm: {
    id: 'cramm',
    name: 'Nardy Cramm',
    type: 'person',
    shortDescription: 'Founder and public face of the player-claim foundation.',
    description:
      'Nardy Cramm helped create the public-facing player-advocacy structure around SBGOK, presenting it as a consumer protection initiative while it became part of a broader litigation machine.',
    jurisdiction: 'Netherlands / Curaçao',
    status: 'Founder',
    aliases: ['Cramm'],
    relatedEntities: ['sbgok', 'bijkerk', 'law1931'],
  },

  cyberluck: {
    id: 'cyberluck',
    name: 'Cyberluck',
    type: 'company',
    shortDescription: 'Historic Curaçao master licence holder.',
    description:
      'Cyberluck was one of the key master licence holders in Curaçao’s older sublicensing system and became central to later liability disputes linked to operator enforcement.',
    jurisdiction: 'Curaçao',
    status: 'Master licence holder',
    relatedEntities: ['sbgok', 'law1931'],
  },

  trigonon: {
    id: 'trigonon',
    name: 'Trigonon Group N.V.',
    type: 'company',
    shortDescription: 'Operator involved in later liability litigation.',
    description:
      'Trigonon Group N.V. became part of the wider litigation pattern that reinforced how Curaçao courts were willing to test corporate boundaries when confronting gambling-related claims.',
    jurisdiction: 'Curaçao',
    status: 'Operator',
    relatedEntities: ['sbgok', 'law1931'],
  },

  gametech: {
    id: 'gametech',
    name: 'Game Tech Group N.V.',
    type: 'company',
    shortDescription: 'Operator behind Osiris Casino.',
    description:
      'Game Tech Group N.V. became one of the operators pressured through bankruptcy-related enforcement, settling with a claimant before formal proceedings could fully escalate.',
    jurisdiction: 'Curaçao',
    status: 'Operator',
    relatedEntities: ['dama'],
  },

  dama: {
    id: 'dama',
    name: 'Dama N.V.',
    type: 'company',
    shortDescription: 'Large Curaçao operator connected to key brands and litigation.',
    description:
      'Dama N.V. was declared bankrupt after refusing to satisfy a foreign judgment, becoming one of the most visible examples of bankruptcy used as leverage inside the Curaçao ecosystem.',
    jurisdiction: 'Curaçao',
    status: 'Operator',
    relatedEntities: ['law1931', 'gametech'],
  },

  araxio: {
    id: 'araxio',
    name: 'Araxio Development N.V.',
    type: 'company',
    shortDescription: 'Operator behind Wazamba, Casinia and Nomini.',
    description:
      'Araxio Development N.V. was declared bankrupt after player claims backed by legal funding litigation, but the estate reportedly contained little meaningful local value to seize.',
    jurisdiction: 'Curaçao',
    status: 'Operator',
    relatedEntities: ['law1931', 'rightnow'],
  },

  rightnow: {
    id: 'rightnow',
    name: 'RightNow',
    type: 'organization',
    shortDescription: 'German legal funding company specialising in gambling recovery cases.',
    description:
      'RightNow funded player recovery claims and helped drive litigation that exposed how offshore gambling enforcement could travel from European courts into Curaçao’s insolvency system.',
    jurisdiction: 'Germany',
    status: 'Legal funding company',
    relatedEntities: ['araxio'],
  },

  blockdance: {
    id: 'blockdance',
    name: 'BlockDance B.V.',
    type: 'company',
    shortDescription: 'Original Curaçao entity linked to BC.Game operations.',
    description:
      'BlockDance B.V. was the Curaçao company originally associated with BC.Game before operational control shifted to another entity during the restructuring period.',
    jurisdiction: 'Curaçao',
    status: 'Operating entity',
    relatedEntities: ['bcgame', 'smallhouse'],
  },

  smallhouse: {
    id: 'smallhouse',
    name: 'Small House B.V.',
    type: 'company',
    shortDescription: 'Successor entity used in the BC.Game restructuring.',
    description:
      'Small House B.V. became part of the restructuring that critics viewed as an attempt to separate assets from liabilities while leaving Curaçao exposure behind.',
    jurisdiction: 'Curaçao',
    status: 'Operating entity',
    relatedEntities: ['bcgame', 'blockdance'],
  },
  anjouan: {
  id: 'anjouan',
  name: 'Anjouan',
  type: 'jurisdiction',

  shortDescription:
    'An autonomous island within the Union of the Comoros and a major offshore licensing hub.',

  description:
    'Anjouan is one of the autonomous islands of the Union of the Comoros. Over the past decade it has developed into a prominent offshore licensing jurisdiction for online gambling operators, particularly those seeking rapid onboarding, low operating costs and remote licensing procedures. Its significance comes less from local market size than from its role within the wider global infrastructure supporting high-risk online businesses.',

  jurisdiction: 'Comoros',
  status: 'Active licensing jurisdiction',

  aliases: ['Anjouan'],
  relatedEntities: [
    'offshoreLicensing',
    'remoteOnboarding',
    'affiliateNetworks',
    'cryptoSettlement',
  ],
},

remoteOnboarding: {
  id: 'remoteOnboarding',
  name: 'Remote Onboarding',
  type: 'concept',

  shortDescription:
    'The ability to establish and license a business without physical presence.',

  description:
    'Remote onboarding refers to the process of registering companies, obtaining licenses and completing compliance procedures without visiting a jurisdiction in person. In offshore industries, streamlined remote onboarding significantly reduces friction, allowing operators to launch quickly across multiple jurisdictions with minimal local infrastructure.',

  status: 'Widely used offshore practice',

  aliases: ['Remote incorporation'],
  relatedEntities: ['anjouan', 'offshoreLicensing'],
},

offshoreLicensing: {
  id: 'offshoreLicensing',
  name: 'Offshore Licensing',
  type: 'concept',

  shortDescription:
    'Obtaining legal authorization from a foreign jurisdiction.',

  description:
    'Offshore licensing allows companies to operate under the legal framework of a jurisdiction different from the markets they serve. In online gambling, offshore licenses often provide regulatory recognition, corporate legitimacy and access to service providers while imposing fewer operational requirements than major regulated markets.',

  status: 'Global industry practice',

  aliases: ['Offshore license'],
  relatedEntities: ['anjouan', 'remoteOnboarding'],
},

affiliateNetworks: {
  id: 'affiliateNetworks',
  name: 'Affiliate Networks',
  type: 'concept',

  shortDescription:
    'Marketing ecosystems that acquire and redirect traffic to operators.',

  description:
    'Affiliate networks act as the customer-acquisition layer of the online gambling industry. They generate traffic through websites, influencers, media buying and referral systems, then direct users toward licensed operators. In many offshore ecosystems, affiliate infrastructure is as important as licensing and payments because it determines how operators scale internationally.',

  status: 'Core distribution layer',

  aliases: ['Affiliates'],
  relatedEntities: ['cryptoSettlement', 'anjouan'],
},

cryptoSettlement: {
  id: 'cryptoSettlement',
  name: 'Crypto Settlement',
  type: 'concept',

  shortDescription:
    'The use of cryptocurrencies to move and settle funds between participants.',

  description:
    'Crypto settlement refers to the movement of funds through digital assets rather than traditional banking rails. For offshore operators it can reduce dependence on banks, simplify cross-border transfers and provide access to markets where conventional payment processing is difficult. It has become a core component of many high-risk digital business models.',

  status: 'Growing payment infrastructure',

  aliases: ['Crypto payments'],
  relatedEntities: ['affiliateNetworks', 'anjouan'],
},
}

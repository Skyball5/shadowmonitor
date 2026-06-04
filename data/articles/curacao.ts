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
export const curacaoArticle: InvestigationArticle = {
  eyebrow: 'Investigations',
  published: 'May 2026',
  publishedAt: '2026-05-02',
themes: ['igaming'],
  readTime: '12 min read',
  title: 'The Colonial Bankruptcy Law Driving Gambling Operators Out of Curaçao',
  dek: 'Regulatory reform may be reshaping Curaçao’s gambling system — but operators say the deeper risk lies elsewhere.',
  heroImage: '/investigations/curacao-dossier.png',
  pairedInvestigationSlug: 'claims-industry',
  timelineAfterSectionId: 'intro',
  
  sidebarBySection: {
  intro: {
  focus: 'The reform was aimed at licensing',
  entities: ['lok', 'cga', 'law1931'],
},

'offshore-paradise': {
  focus: 'Compliance replaces convenience',
  entities: ['lok', 'cga', 'adr'],
},

law1931: {
  focus: 'A bankruptcy law built for another era',
  entities: ['law1931', 'curacao'],
},

sbgok: {
  focus: 'Liability boundaries inside Curaçao were becoming less reliable',
  entities: ['sbgok', 'cyberluck', 'trigonon'],
},

'bankruptcy-as-enforcement': {
  focus: 'Bankruptcy became a negotiation tool',
  entities: ['gameтech', 'dama'],
},

'empty-shells': {
  focus: 'Winning in court did not guarantee recovery',
  entities: ['bcgame', 'sbgok'],
},

'collapse-of-sbgok': {
  focus: 'The player advocates became the story',
  entities: ['sbgok'],
},

'what-happens-next': {
  focus: 'Reform may increase the very risk it cannot fix',
  entities: ['cga', 'lok', 'law1931', 'adr'],
},
},
sections: [
    {
      id: 'intro',
      blocks: [
        p('xl', 'For years, Curaçao sold the online gambling industry a simple proposition.'),
        p('xl', 'Minimal oversight. Cheap licences. Global reach.'),
        p(
          'lg',
          'Thousands of betting sites and crypto casinos registered on the small Caribbean island, many operating across Europe, Asia and Latin America with little more than a mailbox and a sublicence obtained through one of four master licence holders.'
        ),
        p('lg', 'That offshore ecosystem made Curaçao one of the most influential jurisdictions in online gambling.'),
        p('lg', 'Now it is beginning to fracture.'),
        p(
          'lg',
          'The island’s government spent years promising reform after mounting criticism from European regulators, anti-money laundering bodies and consumer protection advocates. In December 2024, Curaçao finally implemented the National Ordinance for Games of Chance — known universally across the industry as ',
          e('lok'),
          '. The reform dismantled the old master licence structure and replaced it with direct licensing under a new regulator, the ',
          e('cga'),
          '. Operators were told they would need real presence, stronger compliance systems and meaningful oversight.'
        ),
        callout(
          'Key Insight',
          'The reform was aimed at licensing. The real risk sits in the law beneath it.'
        ),
        p('lg', 'Some welcomed the changes as long overdue.'),
        p('lg', 'Others started leaving.'),
        p(
          'lg',
          'Industry observers say operators have increasingly migrated toward softer offshore jurisdictions such as Anjouan, part of the Comoros Islands, which now markets itself as an alternative for businesses seeking lower compliance pressure.'
        ),
        p(
          'lg',
          'Among the companies publicly distancing themselves from Curaçao was ',
          e('bcgame'),
          ', one of the world’s best-known crypto casinos and a sponsor of Leicester City Football Club.'
        ),
        p(
          'lg',
          'When the company abandoned its Curaçao licence in late 2024, it blamed something unusual: not the reform itself, but a bankruptcy law written nearly a century ago.'
        ),
        p(
          'lg',
          'According to ',
          e('bcgame'),
          ', Curaçao’s insolvency regime could be “easily abused against legitimate operators”.'
        ),
        p(
          'lg',
          'That warning pointed toward a deeper problem inside the island’s legal system — one largely untouched by the gambling reform and anchored by ',
          e('law1931'),
          '.'
        ),
      ],
    },
    {
      id: 'offshore-paradise',
      heading: 'From Offshore Paradise to Compliance Jurisdiction',
      blocks: [
        p(
          'lg',
          'Before LOK, Curaçao’s licensing system operated through four master licence holders authorised by the Ministry of Finance.'
        ),
        p('lg', 'Those companies issued sublicences to thousands of operators around the world.'),
        p('lg', 'The arrangement proved commercially successful but internationally controversial.'),
        p(
          'lg',
          'Critics argued that the system created only nominal supervision. Operators could obtain licences quickly and cheaply, often without substantial scrutiny. Compliance obligations existed largely on paper.'
        ),
        p('lg', 'LOK was intended to change that.'),
        p(
          'lg',
          'The new framework replaced sublicensing with direct regulation under the ',
          e('cga'),
          '. Operators applying for licences would now face stricter AML controls, revised responsible gambling obligations and demands for real operational substance on the island.'
        ),
        p(
          'lg',
          'The regulator also introduced certified ',
          e('adr'),
          ' mechanisms intended to handle player complaints outside the courts.'
        ),
        p(
          'lg',
          'By industry estimates, roughly 38 percent of direct licence applications submitted under the new regime have already been rejected.'
        ),
        p('lg', 'That number circulated widely inside the gambling sector.'),
        p('lg', 'To regulators, it signalled higher standards.'),
        p('lg', 'To some operators, it signalled the end of the Curaçao they originally came for.'),
        p('lg', 'But stricter licensing was only part of the calculation.'),
        p('lg', 'Behind the scenes, lawyers, compliance officers and corporate advisers were increasingly focused on another risk entirely: bankruptcy.'),
      ],
    },
    {
      id: 'law1931',
      heading: 'The Law From 1931',
      blocks: [
        p('lg', 'Curaçao’s insolvency regime predates online gambling, cryptocurrency and modern offshore finance.'),
        p('lg', 'The ', e('law1931'), ' was enacted when the island functioned primarily as a Dutch colonial trading outpost.'),
        p('lg', 'Yet the law still governs modern gambling companies incorporated there today.'),
        p('lg', 'Under Curaçao procedure, a creditor may seek bankruptcy based on an unpaid claim, even when the debt itself remains disputed.'),
        p('lg', 'Foreign court judgments can serve as the foundation for proceedings.'),
        p('lg', 'The financial threshold required to initiate a case may amount to only several hundred euros.'),
        p('lg', 'Courts generally require evidence of multiple creditors, but identifying additional claimants is often straightforward.'),
        p('lg', 'Once bankruptcy is granted, the effect can be immediate.'),
        p('lg', 'Corporate operations freeze.'),
        p('lg', 'Payments stop.'),
        p('lg', 'Documents cannot be executed.'),
        p('lg', 'Banking relationships become unstable.'),
        p('lg', 'Payment processors and software providers may reconsider commercial ties within days.'),
        p('lg', 'Even successful appeals often arrive too late to prevent operational damage.'),
        p('lg', 'For operators serving international gambling markets, the risk is existential.'),
        p(
          'lg',
          '“This bankruptcy procedure damages the industry and damages the island,” a representative of one major Curaçao operator said. “We are actively deciding whether to stay or leave. You never know what the courts will do next.”'
        ),
        p('lg', 'The result has produced an increasingly familiar corporate strategy.'),
        p('lg', 'Operators with sophisticated legal advisers structure businesses so that valuable assets sit outside Curaçao entities whenever possible.'),
        p('lg', 'Some migrate entirely.'),
        p('lg', 'Others remain — but only after building layers of corporate insulation.'),
        p('lg', 'That creates a peculiar legal environment.'),
        p('lg', 'The companies most exposed to Curaçao bankruptcy proceedings are often those maintaining genuine local presence and real operational substance — precisely the type of operator the reform was designed to attract.'),
      ],
    },
    {
      id: 'sbgok',
      heading: 'The Foundation That Learned to Use Bankruptcy as Leverage',
      blocks: [
        p(
          'lg',
          'No organisation exploited the bankruptcy mechanism more aggressively than SBGOK, a Dutch foundation registered in Willemstad in 2019.'
        ),
        p(
          'lg',
          'Its full Dutch name — Stichting Belangenbehartiging Gedupeerde Online Kansspelers — translates roughly to a foundation advocating for harmed online gambling players.'
        ),
        p('lg', 'Publicly, SBGOK presented itself as a consumer protection initiative.'),
        p('lg', 'Its founder, gambling industry journalist Nardy Cramm, described the organisation as a tool for helping players recover money from Curaçao operators.'),
        p('lg', 'Behind the scenes, however, the operation functioned as a sophisticated litigation machine.'),
        p('lg', 'Players assigned legal claims to the foundation.'),
        p('lg', 'Attorney Roelof Bijkerk, operating through Legal & Management Solutions B.V., pursued court cases and bankruptcy petitions against operators, often aggregating multiple player claims into a single insolvency strategy.'),
        p('lg', 'Recovered money was reportedly split: 65 percent to players, 35 percent to the foundation.'),
        p('lg', 'Funds moved through a dedicated attorney escrow account controlled by Bijkerk.'),
        p('lg', 'Over time, the organisation began reshaping Curaçao gambling jurisprudence itself.'),
        p('lg', 'In 2022, courts ordered operator Usoftgaming to pay more than €125,000 to six players.'),
        p('lg', 'More importantly, the appellate court held master licence holder Cyberluck jointly liable.'),
        p('lg', 'The implications for the industry were substantial.'),
        p('lg', 'For years, master licence holders had largely insulated themselves from direct responsibility for sublicensees.'),
        p('lg', 'Now that separation was weakening.'),
        p('lg', 'In 2024, the Dutch Supreme Court effectively reinforced the same principle in separate litigation involving Trigonon Group N.V.'),
        p('lg', 'The message reached the industry quickly: liability boundaries inside Curaçao’s licensing system were becoming less reliable.'),
      ],
    },
    {
      id: 'bankruptcy-as-enforcement',
      heading: 'Bankruptcy as Enforcement',
      blocks: [
        p('lg', 'Some of SBGOK’s cases achieved exactly what the insolvency mechanism was designed to accomplish.'),
        p('lg', 'Operators facing bankruptcy pressure sometimes chose settlement instead.'),
        p('lg', 'Game Tech Group N.V., owner of Osiris Casino, settled with a Canadian player for approximately €85,000 before bankruptcy proceedings formally began.'),
        p('lg', 'Dama N.V. — operator of BitStarz, LuckyDreams, Spinago and dozens of other gambling brands — was declared bankrupt in June 2024 after refusing to satisfy an Austrian judgment worth more than €816,000.'),
        p('lg', 'German players joined the proceedings, satisfying Curaçao’s requirement for multiple creditors.'),
        p('lg', 'Two months later, the bankruptcy was overturned after Dama N.V. produced financial records and demonstrated that debts had been paid.'),
        p('lg', 'In both cases, bankruptcy functioned as leverage.'),
        p('lg', 'The companies had reputations to protect, operational infrastructure to preserve and assets vulnerable to disruption.'),
        p('lg', 'But another set of cases revealed the limits of the system.'),
      ],
    },
    {
      id: 'empty-shells',
      heading: 'Empty Shells',
      blocks: [
        p('lg', 'Araxio Development N.V., operator of the Wazamba, Casinia and Nomini brands, was declared bankrupt in April 2023 following lawsuits brought by Austrian and German players.'),
        p('lg', 'The claims were backed by RightNow, a German legal funding company specialising in gambling recovery litigation.'),
        p('lg', 'European courts ruled that Araxio Development N.V. owed players compensation linked to gambling activity conducted without local licences.'),
        p('lg', 'The judgments survived appeals all the way to the Dutch Supreme Court.'),
        p('lg', 'Yet when bankruptcy arrived, there was effectively nothing left to seize.'),
        p('lg', 'The Curaçao entity reportedly contained no meaningful local assets.'),
        p('lg', 'The bankruptcy estate was empty.'),
        p('lg', 'Players won in court but recovered nothing.'),
        p('lg', 'Then came BC.Game.'),
        p('lg', 'The crypto casino was not a marginal offshore operator.'),
        p('lg', 'It was a globally recognisable brand sponsoring a Premier League football club.'),
        p('lg', 'Originally operated through Curaçao company BlockDance B.V., the business transferred operational control in April 2024 to another entity: Small House B.V.'),
        p('lg', 'To critics, the manoeuvre looked obvious.'),
        p('lg', 'Assets were moving.'),
        p('lg', 'Liability was staying behind.'),
        p('lg', 'SBGOK responded aggressively, filing bankruptcy petitions against both companies simultaneously and arguing that the corporate separation was artificial.'),
        p('lg', 'In November 2024, Curaçao’s appellate court agreed.'),
        p('lg', 'The judges applied reasoning resembling the common-law doctrine known as “piercing the corporate veil”, effectively treating the companies as one structure.'),
        p('lg', 'The ruling demonstrated how far Curaçao courts were willing to go when confronting attempts to isolate assets behind layered corporate entities.'),
        p('lg', 'But the result still changed little for creditors.'),
        p('lg', 'Player claims reportedly exceeded $2.5 million.'),
        p('lg', 'One Indonesian claimant alone alleged more than $1 million in blocked USDT deposits.'),
        p('lg', 'The proceedings generated headlines across the gambling industry.'),
        p('lg', 'The outcome was quieter.'),
        p('lg', 'Two companies entered bankruptcy.'),
        p('lg', 'Players still recovered nothing.'),
      ],
    },
    {
      id: 'collapse-of-sbgok',
      heading: 'Then the Player Advocates Turned on Each Other',
      blocks: [
        p('lg', 'In March 2025, the structure behind SBGOK itself began collapsing.'),
        p('lg', 'Nardy Cramm abruptly terminated cooperation with Roelof Bijkerk while the foundation was reportedly handling dozens of active proceedings and multiple open bankruptcy cases.'),
        p('lg', 'The litigation that followed exposed internal allegations rarely visible in player recovery operations.'),
        p('lg', 'According to court filings heard in October 2025, money recovered from gambling operators remained frozen inside Bijkerk’s attorney escrow account.'),
        p('lg', 'Bijkerk claimed Cramm had blocked payments to players.'),
        p('lg', 'Additional allegations included misleading claimants about case status and refusing to reassign claims back to players.'),
        p('lg', 'The court suspended Cramm’s authority and ordered the appointment of an interim director.'),
        p('lg', 'When Bijkerk proposed himself for the role, judges rejected the request, citing an obvious conflict of interest.'),
        p('lg', 'In one unusually direct sentence, the ruling stated: “De belangen van de gokgedupeerden staan voorop.”'),
        p('lg', 'The interests of harmed gamblers must come first.'),
        p('lg', 'The wording carried an unmistakable implication.'),
        p('lg', 'By that stage, the people supposedly being protected no longer appeared central to the conflict at all.'),
      ],
    },
    {
      id: 'what-happens-next',
      heading: 'The Contradiction at the Center of Curaçao’s Reform',
      blocks: [
        p('lg', 'The ', e('cga'), ' cannot solve this problem on its own.'),
        p('lg', 'The regulator repeatedly states that disputes between operators and players fall outside its authority.'),
        p('lg', 'It cannot compel compensation payments.'),
        p('lg', 'It cannot rewrite the insolvency regime.'),
        p('lg', 'And despite the scale of industry concern, no legislative reform of the ', e('law1931'), ' has been proposed.'),
        p('lg', 'The ', e('adr'), ' system introduced under ', e('lok'), ' may reduce some litigation pressure by providing alternative dispute resolution channels.'),
        p('lg', 'But participation in ADR is not mandatory before insolvency proceedings.'),
        p('lg', 'Players remain free to pursue bankruptcy petitions directly.'),
        p('lg', 'That leaves Curaçao facing two possible futures.'),
        p('lg', 'In one scenario, the reform succeeds.'),
        p('lg', 'The ', e('cga'), ' stabilises. Operators establish genuine local presence. The island evolves into a mature regulatory jurisdiction with real accountability, real infrastructure and internationally credible supervision.'),
        p('lg', 'But success would also deepen the contradiction.'),
        p('lg', 'The more “real” operators become inside Curaçao, the more vulnerable they may also become to the island’s unusually aggressive insolvency framework.'),
        p('lg', 'In the second scenario, migration accelerates.'),
        p('lg', 'Operators continue relocating toward softer offshore jurisdictions.'),
        p('lg', 'Curaçao loses licensees and licensing revenue.'),
        p('lg', 'And eventually the bankruptcy mechanism becomes irrelevant for a simple reason: there is nobody left worth bankrupting.'),
        p('lg', 'There is an irony here.'),
        p('lg', 'The aggressive use of bankruptcy proceedings helped make SBGOK one of the most visible player-advocacy organisations in the offshore gambling world.'),
        p('lg', 'But the same strategy may also have accelerated the flight of the operators on which its entire model depended.'),
        p('lg', 'Curaçao’s reform was designed to modernise the island’s gambling industry.'),
        p('lg', 'Instead, it may have exposed a deeper question about the island itself.'),
        p('lg', 'Can a modern regulatory system coexist with a legal mechanism built for a colonial trading economy nearly a century ago?'),
        p('lg', 'Increasingly, operators appear unwilling to wait for the answer.'),
      ],
    },
  ] as ArticleSection[],
  timeline: [
    {
      year: '2023',
      title: 'LOK reform discussions accelerate',
      description:
        'Regulatory restructuring becomes central to Curaçao’s international positioning.',
    },
    {
      year: '2024',
      title: 'Creditor actions increase',
      description:
        'Industry sources report growing concern around local legal exposure and insolvency risks.',
    },
    {
      year: '2025',
      title: 'Operators begin reassessing jurisdictional presence',
      description:
        'Several offshore operators quietly reduce Curaçao-linked operational dependencies.',
    },
  ] satisfies TimelineItem[],
  sources: [
    {
      kind: 'Filed Document',
      title: 'Curaçao Court Filing — 2024',
      date: 'March 2024',
      status: 'Verified copy',
      excerpt:
        'The petition argues that operational entities connected to the licensing structure may be exposed to creditor actions under the existing insolvency framework, including provisional measures before full adjudication.',
    },
    {
      kind: 'Registry Record',
      title: 'Insolvency Registry Entry — 2024',
      date: 'April 2024',
      status: 'Archive copy',
      excerpt:
        'Registry notes indicate that proceedings were opened with a low evidentiary threshold, creating a practical risk for operators with local exposure and associated entities.',
    },
    {
      kind: 'Public Statement',
      title: 'BC.Game Licence Statement — 2024',
      date: 'Late 2024',
      status: 'Public announcement',
      excerpt:
        'The company publicly framed Curaçao’s bankruptcy regime as a risk to legitimate operators, using the argument as part of its decision to exit the jurisdiction.',
    },
  ] satisfies SourceItem[],
  connectedInvestigations: [
    {
      title: 'BC.Game and the Enforcement Gap',
      summary:
        'An examination of how offshore operators navigate jurisdictional fragmentation and creditor exposure across licensing structures.',
      jurisdictions: ['Curaçao', 'Costa Rica'],
      entities: ['BC.Game', 'CGA'],
    },
    {
      title: 'The Silent Collapse of the Master License Era',
      summary:
        'How Curaçao’s historic licensing architecture became increasingly incompatible with international regulatory pressure.',
      jurisdictions: ['Curaçao'],
      entities: ['Master Licenses', 'LOK Reform'],
    },
    {
      title: 'Malta’s Processor Shadow Network',
      summary:
        'Inside the payment infrastructure quietly supporting high-risk gambling and crypto operations across multiple jurisdictions.',
      jurisdictions: ['Malta', 'Cyprus'],
      entities: ['Processors', 'Affiliate Networks'],
    },
  ] satisfies ConnectedInvestigation[],
}
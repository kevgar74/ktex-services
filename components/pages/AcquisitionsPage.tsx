'use client'
import Link from 'next/link'
import { Section, SectionHead } from '../ui/Section'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { ServiceHero, SplitBand, FeatureGrid, ServiceCTA } from './ServicePage'

export function AcquisitionsPage() {
  return (
    <div>
      <ServiceHero
        eyebrow="Acquisitions & Sales"
        tone="warm"
        motif="key"
        src="/assets/acq-aerial.jpg"
        alt="Aerial view of Houston, TX neighborhoods and skyline for property acquisitions"
        title="We acquire, represent, and sell."
        sub="K-Tex sources land and homes with real upside and brings finished property to market — representing you on both sides of the deal, with honest numbers throughout."
      />

      <Section style={{ paddingBottom: 72 }}>
        <SplitBand
          eyebrow="For sellers"
          tone="cool"
          motif="trending"
          src="/assets/seller-net-sheet.jpg"
          fit="contain"
          alt="Sample seller net sheet for a Houston, TX home sale"
          title="A clear, honest valuation — then a plan."
          body="Tell us about your lot or home and we'll come back with a straightforward assessment of what it's worth and what we can do with it. No pressure, no inflated promises."
          bullets={[
            'No-obligation property valuation',
            'Sell as-is, or build and sell with us',
            'Marketing handled by licensed real estate agent',
          ]}
          cta={['Request a valuation', 'contact']}
        />
      </Section>

      <Section bg="var(--surface-soft)" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <SplitBand
          flip
          eyebrow="For buyers & investors"
          tone="green"
          motif="dollar"
          src="/assets/frame-stage.jpg"
          alt="New home under construction at framing stage in Houston, TX"
          title="Move-in-ready builds and real upside."
          body="From first-time buyers to seasoned investors, we match you with the right property — and because we build what we sell, we can speak to every detail behind the walls."
          bullets={[
            'Curated new builds across Houston',
            'Investor-ready development opportunities',
            'One team from offer to closing',
          ]}
          cta={['Property Search', 'portfolio']}
        />
      </Section>

      <Section style={{ paddingTop: 72, paddingBottom: 16 }}>
        <RevealUp><SectionHead eyebrow="What's included" title="Representation that doesn't get handed off" max={560} /></RevealUp>
        <div style={{ marginTop: 36 }}>
          <FeatureGrid items={[
            ['Market & comparable analysis', 'Data-backed pricing grounded in current Houston-area comps, not guesswork.'],
            ['Acquisition sourcing', "Lots and homes sourced through our extensive local network. Our in-depth knowledge of City of Houston design requirements, permitting processes, and development regulations helps clients avoid costly mistakes and make informed property acquisition decisions."],
            ['Negotiation on both sides', 'We represent buyers and sellers with the same straight-talk approach.'],
            ['Closing coordination', 'Title, financing, and inspection logistics managed end to end.'],
          ]} />
        </div>
      </Section>

      <ServiceCTA
        title="Curious what your property is worth?"
        sub="Get a no-obligation valuation from a team that can also build and sell it."
        btn="Request a valuation"
      />
    </div>
  )
}

'use client'
import { Section, SectionHead } from '../ui/Section'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { StaggerGroup } from '../animations/StaggerGroup'
import { ServiceHero, SplitBand, ServiceCTA } from './ServicePage'

const APPROACH = [
  { icon: 'compass', title: 'Site & program', body: 'We start with the lot and how you live — orientation, setbacks, and the rooms that matter most.' },
  { icon: 'ruler', title: 'Plans & elevations', body: 'Detailed floor plans and elevations, refined with you before a single board is cut.' },
  { icon: 'leaf', title: 'Selections & detail', body: 'Finishes, fixtures, and material palettes chosen for durability and resale value.' },
]

export function DesignPage() {
  return (
    <div>
      <ServiceHero
        eyebrow="Residential Design"
        tone="stone"
        motif="ruler"
        src="/assets/blueprint-build.jpg"
        alt="Residential design blueprint transitioning to a finished Houston, TX home"
        title="Drawn to build. Designed to sell."
        sub="In-house design and development that balances livability, resale value, and modern architectural detail. Our plans aren't just beautiful — they're buildable, on budget."
      />

      <Section style={{ paddingBottom: 72 }}>
        <SplitBand
          eyebrow="Design philosophy"
          tone="warm"
          motif="compass"
          src="/assets/chesterfield.jpg"
          alt="Exterior rendering of a custom residential home designed by K-Tex Services"
          title="Form that follows the way people live."
          body="We design around daily life — light, flow, storage, and the spaces families actually use. Every plan is tuned for the Houston market so it holds value long after the build is done."
          bullets={[
            'Custom & semi-custom floor plans',
            'Interior selections & finishes',
            'Energy-conscious specifications',
          ]}
        />
      </Section>

      <Section bg="var(--surface-soft)" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <RevealUp>
          <SectionHead eyebrow="Our approach" title="From first sketch to final selections" max={560} />
        </RevealUp>
        <StaggerGroup
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 36 }}
          className="approach-grid"
        >
          {APPROACH.map(({ icon, title, body }) => (
            <div
              key={title}
              style={{
                background: '#fff',
                border: '1px solid var(--hairline-soft)',
                borderRadius: 'var(--r-xl)',
                padding: 30,
                height: '100%',
              }}
            >
              <div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--green-tint)', color: 'var(--green)', display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                <Icon name={icon} size={26} sw={1.75} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 24, color: 'var(--ink-deep)', marginBottom: 10 }}>{title}</div>
              <p style={{ fontSize: 16, color: 'var(--slate)' }}>{body}</p>
            </div>
          ))}
        </StaggerGroup>
        <style>{`@media (max-width: 700px) { .approach-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>

      <Section style={{ paddingTop: 72, paddingBottom: 72 }}>
        <SplitBand
          flip
          eyebrow="Designed for resale"
          tone="green"
          motif="trending"
          src="/assets/imperial.jpg"
          alt="Resale-ready custom home designed and built by K-Tex Services"
          title="Beautiful homes that hold their value."
          body="Because the people who design the home are the people who might sell it, every choice is weighed against what the market rewards. Good design and smart investment aren't a trade-off here."
          bullets={[
            'Resale-aware layouts & finishes',
            'Buildable plans, costed up front',
            'Cohesive interior & exterior design',
          ]}
          cta={['See built work', 'portfolio']}
        />
      </Section>

      <ServiceCTA
        title="Have a lot and a vision?"
        sub="Bring us the site — we'll design a home that you'll love to live in and a smart investment for years to come."
        btn="Start your design"
      />
    </div>
  )
}

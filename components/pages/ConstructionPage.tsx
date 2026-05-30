'use client'
import Link from 'next/link'
import { Section, SectionHead } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { StaggerGroup } from '../animations/StaggerGroup'
import { ServiceHero, SplitBand, FeatureGrid, StatStrip, ServiceCTA } from './ServicePage'

const CHIPS = [
  ['check', 'Contract administration'],
  ['calendar', 'Scheduling'],
  ['dollar', 'Budgeting'],
  ['shield', 'Quality control'],
  ['handshake', 'Vendor coordination'],
  ['fileText', 'Project accounting'],
]

const BUILD_STEPS = [
  ['01', 'Pre-construction', 'Permits, budgeting, and a locked schedule before we break ground.'],
  ['02', 'Site & structure', 'Foundation, framing, and inspections handled by our team.'],
  ['03', 'Systems & finish', 'Mechanicals, interior finish, and selections installed to spec.'],
  ['04', 'Walkthrough', 'Punch list, final inspection, and handover of the finished home.'],
]

/* Consulting cost graphic */
function ConsultingGraphic() {
  return (
    <RevealUp delay={0.1}>
      <div style={{ background: 'var(--canvas)', border: '1px solid var(--hairline-soft)', borderRadius: 'var(--r-2xl)', padding: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 26 }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink-deep)' }}>Where your dollars go</div>
          <span style={{ fontSize: 12, color: 'var(--steel)' }}>Illustrative</span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--charcoal)', marginBottom: 9 }}>Traditional design-build</div>
          <div style={{ display: 'flex', height: 48, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ width: '68%', background: 'var(--navy)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '.2px' }}>Construction cost</div>
            <div style={{ width: '32%', background: 'var(--steel)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>Builder&apos;s margin</div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--charcoal)', marginBottom: 9 }}>K-Tex consulting model</div>
          <div style={{ display: 'flex', height: 48, borderRadius: 6, overflow: 'hidden', width: '76%' }}>
            <div style={{ width: '89.5%', background: 'var(--navy)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>Construction cost</div>
            <div style={{ width: '10.5%', background: 'var(--green)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>Fee</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 22, padding: '13px 16px', background: 'var(--green-tint)', borderRadius: 8 }}>
          <Icon name="trending" size={20} color="var(--green-deep)" />
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--green-deep)' }}>Keep the builder&apos;s margin — pay a straightforward consulting fee instead.</span>
        </div>
      </div>
    </RevealUp>
  )
}

export function ConstructionPage() {
  return (
    <div>
      <ServiceHero
        eyebrow="Development & Construction"
        tone="navy"
        motif="hardhat"
        src="/assets/beall-street.jpg"
        alt="Ground-up townhome construction and development by K-Tex Services in Houston, TX"
        title="Ground-up builds, managed end to end."
        sub="From ground-up construction to full-scale subdivision development, we manage every phase of the project with one team accountable for delivering exceptional results on time, on budget, and to specification."
      />

      <Section style={{ paddingBottom: 64 }}>
        <StatStrip items={[['98%', 'On-time completion'], ['100+', 'Homes built'], ['25+ yrs', 'In the field']]} />
      </Section>

      <Section style={{ paddingBottom: 72 }}>
        <SplitBand
          eyebrow="How we build"
          tone="cool"
          motif="hardhat"
          src="/assets/project-manager.jpg"
          alt="K-Tex Services project manager reviewing blueprints at a new construction site in Houston, TX"
          title="One crew, one point of accountability."
          body="Avoid the costly disconnect between design and construction. Our integrated team handles every phase — from concept and plans to construction management and final delivery, ensuring accountability, quality control, and a seamless experience from start to finish."
          bullets={[
            'Dedicated project manager',
            'Transparent budget & schedule',
            'Quality control at every phase',
          ]}
        />
      </Section>

      <Section bg="var(--surface-soft)" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <RevealUp>
          <SectionHead eyebrow="Capabilities" title="What we deliver in the field" max={560} />
        </RevealUp>
        <div style={{ marginTop: 36 }}>
          <FeatureGrid cols={2} items={[
            ['New residential construction', 'Single-family homes and small developments built ground-up across greater Houston.'],
            ['Full-scale renovations', 'Gut renovations and additions that bring older homes up to modern standard.'],
            ['Development & land', 'Multi-home parcels and infill development, from entitlement through delivery.'],
            ['Construction management', 'Schedule, budget, subcontractor, and inspection coordination under one roof.'],
          ]} />
        </div>
      </Section>

      {/* Consulting section */}
      <Section style={{ paddingTop: 72, paddingBottom: 72 }}>
        <RevealUp>
          <SectionHead
            eyebrow="A different approach"
            title="Construction management consulting"
            sub="Our consultants have managed hundreds of residential projects — from bathroom renovations and home additions to luxury custom homes and multi-property developments — and have helped plan and develop residential communities for our own investments and for third-party investors. That hands-on experience led us to a different approach, built to give homeowners greater transparency, flexibility, and value."
            max={760}
          />
        </RevealUp>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center', marginTop: 44 }}
          className="consulting-grid"
        >
          <RevealUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--slate)' }}>
                Rather than serving as a traditional builder or general contractor, we provide construction management consulting. That lets you avoid paying the builder&apos;s profit margin and instead pay a straightforward consulting fee — professional project oversight at a significantly lower cost than the traditional design-build model.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--slate)' }}>
                Many homeowners already have trusted tradespeople, suppliers, or family connections who can contribute products or services at competitive prices. Where many builders limit projects to their established networks, we welcome opportunities to reduce costs without compromising quality — so you keep more control and the flexibility to choose the vendors that best fit your needs.
              </p>
            </div>
          </RevealUp>
          <ConsultingGraphic />
        </div>

        <RevealUp style={{ marginTop: 48 }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink-deep)', marginBottom: 18 }}>
            Many of the same services a general contractor provides — with you in control
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {CHIPS.map(([ic, label]) => (
              <span
                key={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  fontWeight: 700,
                  fontSize: 14,
                  color: 'var(--ink)',
                  background: 'var(--canvas)',
                  border: '1px solid var(--hairline)',
                  borderRadius: 'var(--r-full)',
                  padding: '11px 18px',
                }}
              >
                <Icon name={ic} size={17} color="var(--green)" />{label}
              </span>
            ))}
          </div>
        </RevealUp>

        <RevealUp style={{ marginTop: 44 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
              padding: '28px 32px',
              background: 'var(--surface-warm)',
              borderRadius: 'var(--r-2xl)',
            }}
          >
            <div style={{ fontWeight: 400, fontSize: 18, color: 'var(--ink-deep)', maxWidth: 620 }}>
              Every project is unique. Learn how our consulting approach can bring your vision to life while keeping your project on budget and under control.
            </div>
            <Link href="/contact"><Button kind="green" size="lg" icon="arrow">Talk to a consultant</Button></Link>
          </div>
        </RevealUp>

        <style>{`@media (max-width: 900px) { .consulting-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>

      {/* Build process steps */}
      <Section style={{ paddingTop: 72, paddingBottom: 16 }}>
        <RevealUp>
          <SectionHead eyebrow="The build process" title="Predictable, from permit to keys" max={560} />
        </RevealUp>
        <StaggerGroup
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 36 }}
          className="build-steps"
        >
          {BUILD_STEPS.map(([n, title, body]) => (
            <div key={n} style={{ borderTop: '3px solid var(--green)', paddingTop: 18 }}>
              <div style={{ fontWeight: 600, fontSize: 28, color: 'var(--navy)', letterSpacing: '-0.4px' }}>{n}</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink-deep)', margin: '8px 0 6px' }}>{title}</div>
              <p style={{ fontSize: 14, color: 'var(--slate)' }}>{body}</p>
            </div>
          ))}
        </StaggerGroup>
        <style>{`@media (max-width: 700px) { .build-steps { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </Section>

      <ServiceCTA
        title="Ready to break ground?"
        sub="From a single custom home to a multi-lot development, we'll deliver it on schedule and to spec."
        btn="Start a project"
      />
    </div>
  )
}

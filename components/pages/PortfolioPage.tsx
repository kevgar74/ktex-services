'use client'
import Link from 'next/link'
import { Section, SectionHead } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Photo } from '../ui/Photo'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { StaggerGroup } from '../animations/StaggerGroup'
import { ProjectCard } from '../cards/ProjectCard'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/lib/types'

function FeaturedProject({ p }: { p: Project }) {
  return (
    <RevealUp>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 0,
          borderRadius: 'var(--r-feature)',
          overflow: 'hidden',
          border: '1px solid var(--hairline-soft)',
        }}
        className="featured-grid"
      >
        <Photo
          src={p.img}
          alt={`${p.name} — featured ${p.cat} project in ${p.city} by K-Tex Services`}
          tone={p.tone}
          radius="0"
          height={460}
          motif="building"
        >
          <div style={{ position: 'absolute', top: 22, left: 22, zIndex: 2 }}>
            <Badge tone="navy">Featured project</Badge>
          </div>
        </Photo>
        <div
          style={{
            padding: '48px 44px',
            background: 'var(--surface-warm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <Badge tone="soft">{p.cat}</Badge>
            <Badge tone="soft">{p.year}</Badge>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 34, letterSpacing: '-0.5px', color: 'var(--ink-deep)', marginBottom: 8 }}>
            {p.name}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--slate)', marginBottom: 18 }}>
            <Icon name="pin" size={15} color="var(--stone)" />{p.city}
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 24 }}>{p.blurb}</p>
          <div style={{ display: 'flex', gap: 28, marginBottom: 28, flexWrap: 'wrap' }}>
            {p.stat.map(s => {
              const [a, ...b] = s.split(' ')
              return (
                <div key={s}>
                  <div style={{ fontWeight: 700, fontSize: 24, color: 'var(--navy)', letterSpacing: '-0.3px' }}>{a}</div>
                  <div style={{ fontSize: 14, color: 'var(--steel)' }}>{b.join(' ')}</div>
                </div>
              )
            })}
          </div>
          <div>
            <Link href="/contact"><Button kind="primary" icon="arrow">Discuss a similar project</Button></Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .featured-grid { grid-template-columns: 1fr !important; } }`}</style>
    </RevealUp>
  )
}

function DarkCTA() {
  return (
    <RevealUp>
      <div
        style={{
          position: 'relative',
          background: 'var(--green-brand)',
          borderRadius: 'var(--r-feature)',
          padding: '64px 56px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', right: -30, top: -30, width: 280, height: 280, opacity: 0.4,
            backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 640 }}>
          <Eyebrow light>Thinking about selling or building?</Eyebrow>
          <h2 style={{ fontWeight: 700, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.6px', color: '#fff', margin: '14px 0 14px' }}>
            Get a no-obligation valuation of your property.
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, color: 'var(--on-dark-soft)', marginBottom: 28 }}>
            Tell us about your lot or home and we&apos;ll come back with a clear, honest assessment — and what we can do with it.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact"><Button kind="green" size="lg" icon="arrow">Request a valuation</Button></Link>
            <Link href="/acquisitions"><Button kind="ghostLight" size="lg">How it works</Button></Link>
          </div>
        </div>
      </div>
    </RevealUp>
  )
}

export function PortfolioPage() {
  const featured = PROJECTS.find(p => p.featured)!
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <div>
      {/* Page head */}
      <Section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <RevealUp>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow>Project portfolio</Eyebrow>
            <h1 style={{ fontWeight: 700, fontSize: 58, lineHeight: 1.06, letterSpacing: '-1.2px', color: 'var(--ink-deep)', margin: '16px 0 0' }}>
              Land we found. Homes we built.
            </h1>
            <p style={{ fontWeight: 400, fontSize: 18, color: 'var(--slate)', margin: '18px 0 0' }}>
              A selection of K-Tex projects across greater Houston — each one acquired, designed, built, and brought to market by the same team.
            </p>
          </div>
        </RevealUp>
      </Section>

      {/* Featured */}
      <Section style={{ paddingBottom: 72 }}>
        <FeaturedProject p={featured} />
      </Section>

      {/* Grid */}
      <Section style={{ paddingBottom: 88 }}>
        <RevealUp>
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontWeight: 600, fontSize: 28, letterSpacing: '-0.3px', color: 'var(--ink-deep)' }}>All projects</h2>
          </div>
        </RevealUp>
        <StaggerGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 40 }} className="project-grid">
          {rest.map(p => <ProjectCard key={p.id} p={p} h={340} />)}
        </StaggerGroup>
        <style>{`@media (max-width: 700px) { .project-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>

      <Section style={{ paddingTop: 80, paddingBottom: 88 }}>
        <DarkCTA />
      </Section>
    </div>
  )
}

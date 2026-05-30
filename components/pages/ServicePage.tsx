'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Section, SectionHead } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Photo } from '../ui/Photo'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { RevealSide } from '../animations/RevealSide'
import { StaggerGroup } from '../animations/StaggerGroup'
import { CountUp } from '../animations/CountUp'

/* ---- Shared service hero ---- */
interface ServiceHeroProps {
  eyebrow: string
  title: string
  sub: string
  tone: 'warm' | 'navy' | 'green' | 'cool' | 'stone'
  motif: string
  src?: string
  alt?: string
}

export function ServiceHero({ eyebrow, title, sub, tone, motif, src, alt }: ServiceHeroProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(el.querySelector('[data-h="eyebrow"]'), { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55 }, 0.1)
    tl.fromTo(el.querySelector('[data-h="title"]'), { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.22)
    tl.fromTo(el.querySelector('[data-h="sub"]'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.38)
    tl.fromTo(el.querySelectorAll('[data-h="btn"]'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, 0.52)
    tl.fromTo(el.querySelector('[data-h="photo"]'), { scale: 1.04, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 }, 0.08)
  }, { scope: ref })

  return (
    <Section style={{ paddingTop: 56, paddingBottom: 64 }}>
      <div
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 52, alignItems: 'center' }}
        className="service-hero-grid"
      >
        <div>
          <div data-h="eyebrow"><Eyebrow>{eyebrow}</Eyebrow></div>
          <h1
            data-h="title"
            style={{
              fontWeight: 700,
              fontSize: 58,
              lineHeight: 1.06,
              letterSpacing: '-1.2px',
              color: 'var(--ink-deep)',
              margin: '16px 0 0',
            }}
          >
            {title}
          </h1>
          <p data-h="sub" style={{ fontWeight: 400, fontSize: 18, color: 'var(--slate)', margin: '20px 0 0', maxWidth: 480 }}>
            {sub}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <span data-h="btn"><Link href="/contact"><Button kind="primary" size="lg" icon="arrow">Start a conversation</Button></Link></span>
            <span data-h="btn"><Link href="/portfolio"><Button kind="secondary" size="lg">See the work</Button></Link></span>
          </div>
        </div>
        <div data-h="photo">
          <Photo src={src} alt={alt} tone={tone} height={440} radius="var(--r-feature)" motif={motif} />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .service-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  )
}

/* ---- Feature list ---- */
interface FeatureGridProps {
  items: [string, string][]
  cols?: number
}

export function FeatureGrid({ items, cols = 2 }: FeatureGridProps) {
  return (
    <StaggerGroup
      style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: 24 }}
      className="feature-grid"
    >
      {items.map(([title, body]) => (
        <div key={title} style={{ display: 'flex', gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'var(--green-tint)',
              color: 'var(--green)',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <Icon name="check" size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--ink-deep)', marginBottom: 6 }}>{title}</div>
            <p style={{ fontSize: 16, color: 'var(--slate)' }}>{body}</p>
          </div>
        </div>
      ))}
      <style>{`
        @media (max-width: 700px) {
          .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </StaggerGroup>
  )
}

/* ---- Alternating split band ---- */
interface SplitBandProps {
  eyebrow: string
  title: string
  body: string
  bullets?: string[]
  tone: 'warm' | 'navy' | 'green' | 'cool' | 'stone'
  motif: string
  flip?: boolean
  cta?: [string, string]
  src?: string
  fit?: 'cover' | 'contain'
  alt?: string
}

export function SplitBand({ eyebrow, title, body, bullets, tone, motif, flip, cta, src, fit, alt }: SplitBandProps) {
  const text = (
    <RevealSide from={flip ? 'right' : 'left'}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 style={{ fontWeight: 700, fontSize: 34, letterSpacing: '-0.5px', color: 'var(--ink-deep)', margin: '14px 0 16px' }}>{title}</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--slate)', marginBottom: bullets ? 20 : 24 }}>{body}</p>
        {bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {bullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>
                <Icon name="checkc" size={20} color="var(--green)" />{b}
              </div>
            ))}
          </div>
        )}
        {cta && (
          <Link href={`/${cta[1]}`}>
            <Button kind="ghost" icon="arrow">{cta[0]}</Button>
          </Link>
        )}
      </div>
    </RevealSide>
  )

  const img = (
    <RevealSide from={flip ? 'left' : 'right'}>
      <Photo src={src} alt={alt} fit={fit} tone={tone} height={400} radius="var(--r-3xl)" motif={motif} />
    </RevealSide>
  )

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}
      className="split-band"
    >
      {flip ? <>{img}{text}</> : <>{text}{img}</>}
      <style>{`
        @media (max-width: 900px) {
          .split-band { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ---- Stat strip ---- */
interface StatStripProps {
  items: [string, string][]
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <RevealUp>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${items.length},1fr)`,
          gap: 24,
          padding: '36px 0',
          borderTop: '1px solid var(--hairline-soft)',
          borderBottom: '1px solid var(--hairline-soft)',
        }}
        className="stat-strip"
      >
        {items.map(([n, l]) => (
          <div key={l}>
            <div style={{ fontWeight: 700, fontSize: 44, lineHeight: 1.1, color: 'var(--navy)', letterSpacing: '-1px' }}>
              <CountUp value={n} />
            </div>
            <div style={{ fontSize: 14, color: 'var(--steel)', marginTop: 4 }}>{l}</div>
          </div>
        ))}
        <style>{`
          @media (max-width: 700px) {
            .stat-strip { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </div>
    </RevealUp>
  )
}

/* ---- Service bottom CTA ---- */
interface ServiceCTAProps {
  title: string
  sub: string
  btn?: string
}

export function ServiceCTA({ title, sub, btn = 'Get a consultation' }: ServiceCTAProps) {
  return (
    <Section style={{ paddingTop: 64, paddingBottom: 88 }}>
      <RevealUp>
        <div
          style={{
            background: 'var(--navy)',
            borderRadius: 'var(--r-feature)',
            padding: '56px 48px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.6px', color: '#fff', margin: '0 auto 14px', maxWidth: 620 }}>
            {title}
          </h2>
          <p style={{ fontWeight: 400, fontSize: 18, color: 'var(--on-dark-soft)', margin: '0 auto 28px', maxWidth: 520 }}>{sub}</p>
          <Link href="/contact"><Button kind="green" size="lg" icon="arrow">{btn}</Button></Link>
        </div>
      </RevealUp>
    </Section>
  )
}

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Section, SectionHead } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Photo } from '../ui/Photo'
import { Icon } from '../ui/Icon'
import { RevealUp } from '../animations/RevealUp'
import { RevealSide } from '../animations/RevealSide'
import { StaggerGroup } from '../animations/StaggerGroup'
import { CountUp } from '../animations/CountUp'
import { ParallaxImage } from '../animations/ParallaxImage'
import { ServiceCard } from '../cards/ServiceCard'
import { ProjectCard } from '../cards/ProjectCard'
import { SERVICES, STEPS, PROJECTS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

/* ---- Circular spinning badge ---- */
function CircleBadge({ size = 116 }: { size?: number }) {
  const id = `cb${size}`
  return (
    <div
      data-hero="badge"
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--green)',
        cursor: 'pointer',
        flexShrink: 0,
        boxShadow: 'var(--shadow-2)',
      }}
    >
      <svg className="spin-badge" viewBox="0 0 120 120" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="#fff" style={{ font: '700 11px var(--font-sans)', letterSpacing: '2.5px' }}>
          <textPath href={`#${id}`} startOffset="0">K-TEX SERVICES · BUILT IN HOUSTON · </textPath>
        </text>
      </svg>
      <Link href="/portfolio" style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: '#fff' }}>
        <Icon name="play" size={26} />
      </Link>
    </div>
  )
}

/* ---- Hero (reference design) ---- */
function HeroReference() {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = heroRef.current
    if (!el) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('[data-hero="eyebrow"]', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.1)
    tl.fromTo('[data-hero^="word"]', { y: 52, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.14 }, 0.28)
    tl.fromTo('[data-hero="sub"]', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.58)
    tl.fromTo('[data-hero="btn"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.72)
    tl.fromTo('[data-hero="photo"]', { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, 0.12)
    tl.fromTo('[data-hero="photocopy"]', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.88)
    tl.fromTo('[data-hero="badge"]', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, 0.95)
    tl.fromTo('[data-hero="card"]', { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'back.out(1.3)' }, 0.8)
  }, { scope: heroRef })

  return (
    <div ref={heroRef}>
      <Section style={{ paddingTop: 48, paddingBottom: 64 }}>
        {/* Top zone */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}
          className="hero-grid"
        >
          <div>
            <div data-hero="eyebrow"><Eyebrow>Houston real estate &amp; development</Eyebrow></div>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 82,
                lineHeight: 1.02,
                letterSpacing: '-2px',
                color: 'var(--ink-deep)',
                margin: '20px 0 0',
              }}
              className="hero-headline"
            >
              <span data-hero="word-1" style={{ display: 'block' }}>Acquisitions.</span>
              <span data-hero="word-2" style={{ display: 'block' }}>Design.</span>
              <span data-hero="word-3" style={{ display: 'block', color: '#0f3d1c' }}>Construction.</span>
            </h1>
          </div>
          <p
            data-hero="sub"
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: 'var(--slate)',
              lineHeight: 1.6,
              maxWidth: 320,
              marginTop: 8,
              justifySelf: 'end',
              textAlign: 'right',
            }}
          >
            From land acquisition to finished communities, K-Tex Services delivers end-to-end real estate expertise for investors and individuals across Houston, Texas.
          </p>
        </div>

        <div data-hero="btn" style={{ marginTop: 28 }}>
          <Link href="/portfolio">
            <Button kind="primary" size="lg" icon="arrow">Explore projects</Button>
          </Link>
        </div>

        {/* Photo zone */}
        <div data-hero="photo" style={{ position: 'relative', marginTop: 34 }}>
          <ParallaxImage
            src="/assets/beall-street.jpg"
            alt="Modern townhome development by K-Tex Services in Houston, TX"
            height={560}
            radius="var(--r-feature)"
            priority
          >
            {/* gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,35,66,.05) 0%,rgba(10,35,66,.55) 100%)', zIndex: 1 }} />
            {/* bottom-left copy */}
            <div data-hero="photocopy" style={{ position: 'absolute', left: 30, bottom: 30, maxWidth: 320, zIndex: 2 }}>
              <p style={{ fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,.92)', lineHeight: 1.6 }}>
                Spaces where function meets elegance. Prime locations, contemporary aesthetics, and seamless living — built for homeowners and investors alike.
              </p>
            </div>
            {/* badge bottom-right */}
            <div style={{ position: 'absolute', right: 30, bottom: 30, zIndex: 2 }}>
              <CircleBadge />
            </div>
          </ParallaxImage>

          {/* Floating card */}
          <div
            data-hero="card"
            style={{
              position: 'absolute',
              left: '60%',
              bottom: -34,
              transform: 'translateX(-50%)',
              width: 'min(560px, 78%)',
              background: '#fff',
              borderRadius: 'var(--r-2xl)',
              boxShadow: 'var(--shadow-pop)',
              padding: 18,
              display: 'flex',
              gap: 18,
              alignItems: 'center',
              zIndex: 3,
            }}
          >
            <Photo
              src="/assets/find-home.jpg"
              alt="New-construction home for sale in greater Houston by K-Tex Services"
              pos="center"
              tone="stone"
              height={108}
              radius="var(--r-xl)"
              motif="home"
              style={{ width: 150, flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 21, color: 'var(--ink-deep)', letterSpacing: '-0.3px' }}>
                Find your next home
              </div>
              <p style={{ fontSize: 14, color: 'var(--slate)', margin: '6px 0 12px' }}>
                Browse move-in-ready builds and active developments across greater Houston.
              </p>
              <a
                href="https://kevingarza.exprealty.com"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  color: 'var(--navy-soft)',
                  cursor: 'pointer',
                  borderBottom: '2px solid var(--navy-soft)',
                  paddingBottom: 2,
                  textDecoration: 'none',
                }}
              >
                View inventory <Icon name="arrowUpRight" size={15} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ height: 34 }} />
      </Section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-headline { font-size: 52px !important; }
        }
      `}</style>
    </div>
  )
}

/* ---- Process section ---- */
function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-step]')
    gsap.fromTo(
      items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
      }
    )
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--navy)',
        borderRadius: 'var(--r-feature)',
        padding: '64px 56px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -40,
          top: -40,
          width: 320,
          height: 320,
          opacity: 0.5,
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div style={{ position: 'relative' }}>
        <Eyebrow light>Our process</Eyebrow>
        <h2 style={{ fontWeight: 700, fontSize: 36, letterSpacing: '-0.6px', color: '#fff', margin: '14px 0 36px', maxWidth: 520 }}>
          How a K-Tex project runs
        </h2>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}
          className="steps-grid"
        >
          {STEPS.map(([n, title, body]) => (
            <div key={n} data-step>
              <div style={{ fontWeight: 600, fontSize: 28, color: 'var(--green-soft)', letterSpacing: '-0.4px' }}>{n}</div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.15)', margin: '14px 0' }} />
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 14, color: 'var(--on-dark-soft)' }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ---- Dark CTA ---- */
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
            position: 'absolute',
            right: -30,
            top: -30,
            width: 280,
            height: 280,
            opacity: 0.4,
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
            Tell us about your lot or home and we&apos;ll come back with a clear, honest assessment of what it&apos;s worth — and what we can do with it.
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

/* ---- Main export ---- */
export function HomePage() {
  return (
    <div>
      <HeroReference />

      {/* Services */}
      <Section bg="var(--surface-soft)" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <RevealUp>
          <SectionHead
            eyebrow="What we do"
            title="Three disciplines, one accountable team"
            action={
              <Link href="/acquisitions" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 16, color: 'var(--navy-soft)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                All services <Icon name="arrow" size={17} />
              </Link>
            }
          />
        </RevealUp>
        <StaggerGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 36 }} className="cards-grid">
          {SERVICES.map(s => <ServiceCard key={s.id} s={s} />)}
        </StaggerGroup>
      </Section>

      {/* Recent Projects */}
      <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <RevealUp>
          <SectionHead
            eyebrow="Selected work"
            title="Recent projects"
            action={
              <Link href="/portfolio">
                <Button kind="ghost" icon="arrow">View portfolio</Button>
              </Link>
            }
          />
        </RevealUp>
        <StaggerGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 36 }} className="cards-grid">
          {PROJECTS.slice(0, 3).map(p => <ProjectCard key={p.id} p={p} />)}
        </StaggerGroup>
      </Section>

      {/* Process */}
      <Section style={{ paddingBottom: 80 }}>
        <RevealUp>
          <ProcessSection />
        </RevealUp>
      </Section>

      {/* CTA */}
      <Section style={{ paddingTop: 80, paddingBottom: 88 }}>
        <DarkCTA />
      </Section>

      <style>{`
        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

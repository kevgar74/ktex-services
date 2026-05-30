'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import type { GalleryData } from '@/lib/types'

interface GalleryPageProps {
  data: GalleryData
  projectSlug: string
}

function GalleryArrow({ side, onClick, light }: { side: 'left' | 'right'; onClick: () => void; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [side]: light ? 20 : 18,
        width: 52,
        height: 52,
        borderRadius: '50%',
        cursor: 'pointer',
        border: 'none',
        background: light ? 'rgba(255,255,255,.14)' : 'rgba(255,255,255,.92)',
        color: light ? '#fff' : 'var(--navy)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: light ? 'none' : 'var(--shadow-2)',
        zIndex: 5,
        transition: 'background .15s ease, transform .15s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
    >
      <Icon name="chevR" size={24} style={{ transform: side === 'left' ? 'rotate(180deg)' : 'none' }} />
    </button>
  )
}

export function GalleryPage({ data, projectSlug }: GalleryPageProps) {
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const railRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ x: 0, active: false })
  const imgContainerRef = useRef<HTMLDivElement>(null)

  const photos = data.photos
  const total = photos.length

  const clamp = (n: number) => ((n % total) + total) % total
  const next = useCallback(() => setIdx(v => clamp(v + 1)), [total])
  const prev = useCallback(() => setIdx(v => clamp(v - 1)), [total])
  const goTo = useCallback((n: number) => setIdx(clamp(n)), [total])

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'Escape') setZoom(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  /* Keep active thumbnail scrolled into view */
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const thumb = rail.children[idx] as HTMLElement
    if (!thumb) return
    const target = thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2
    rail.scrollTo({ left: target, behavior: 'smooth' })
  }, [idx])

  /* GSAP crossfade when idx changes */
  const prevIdx = useRef(idx)
  useEffect(() => {
    const container = imgContainerRef.current
    if (!container) return
    const imgs = container.querySelectorAll('[data-gallery-img]')
    const prev = imgs[prevIdx.current] as HTMLElement
    const cur = imgs[idx] as HTMLElement
    if (prev && cur && prev !== cur) {
      gsap.set(cur, { opacity: 0 })
      gsap.to(cur, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      gsap.to(prev, { opacity: 0, duration: 0.3, ease: 'power2.in' })
    }
    prevIdx.current = idx
  }, [idx])

  /* Entrance animation */
  const headerRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const el = headerRef.current
    if (!el) return
    gsap.fromTo(el.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.1 })
  }, { scope: headerRef })

  /* Drag / swipe on stage */
  const onDown = (x: number) => { drag.current = { x, active: true } }
  const onUp = (x: number) => {
    if (!drag.current.active) return
    const dx = x - drag.current.x
    drag.current.active = false
    if (dx < -50) next()
    else if (dx > 50) prev()
  }

  const [src, caption] = photos[idx]

  return (
    <div>
      {/* Header */}
      <Section style={{ paddingTop: 32, paddingBottom: 24 }}>
        <div ref={headerRef}>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontWeight: 700,
              fontSize: 14,
              color: 'var(--slate)',
              cursor: 'pointer',
              marginBottom: 22,
              textDecoration: 'none',
            }}
          >
            <Icon name="chevR" size={16} style={{ transform: 'rotate(180deg)' }} /> Back to portfolio
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>Project gallery</Eyebrow>
              <h1 style={{ fontWeight: 700, fontSize: 46, lineHeight: 1.08, letterSpacing: '-1px', color: 'var(--ink-deep)', margin: '14px 0 0' }}>
                {data.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 400, fontSize: 18, color: 'var(--slate)', marginTop: 12 }}>
                <Icon name="pin" size={17} color="var(--stone)" />{data.city}
                <span style={{ color: 'var(--hairline)' }}>·</span>
                {data.specs.join(' · ')}
              </div>
            </div>
            <Link href="/contact"><Button kind="primary" icon="arrow">Inquire about this home</Button></Link>
          </div>
        </div>
      </Section>

      {/* Stage */}
      <Section style={{ paddingBottom: 28 }}>
        <div ref={stageRef} style={{ position: 'relative' }}>
          <div
            onMouseDown={e => onDown(e.clientX)}
            onMouseUp={e => onUp(e.clientX)}
            onTouchStart={e => onDown(e.touches[0].clientX)}
            onTouchEnd={e => onUp(e.changedTouches[0].clientX)}
            onClick={() => setZoom(true)}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: 'var(--r-feature)',
              overflow: 'hidden',
              background: 'var(--navy)',
              cursor: 'zoom-in',
              userSelect: 'none',
            }}
          >
            <div ref={imgContainerRef} style={{ position: 'absolute', inset: 0 }}>
              {photos.map(([p], i) => (
                <Image
                  key={p}
                  src={p}
                  alt={`${data.name} — ${photos[i][1]}, ${data.city}`}
                  fill
                  data-gallery-img
                  draggable={false}
                  style={{
                    objectFit: 'cover',
                    opacity: i === idx ? 1 : 0,
                    transition: 'none', // GSAP handles transition
                    pointerEvents: 'none',
                  }}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority={i === 0}
                />
              ))}
            </div>

            {/* Caption overlay */}
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120, background: 'linear-gradient(transparent,rgba(10,35,66,.6))', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: 24, bottom: 20, display: 'flex', alignItems: 'center', gap: 12, pointerEvents: 'none', zIndex: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 12, letterSpacing: '1px', color: '#fff', background: 'rgba(10,35,66,.55)', padding: '6px 12px', borderRadius: 'var(--r-full)' }}>
                {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#fff', textShadow: '0 1px 4px rgba(10,35,66,.5)' }}>{caption}</span>
            </div>
          </div>

          <GalleryArrow side="left" onClick={prev} />
          <GalleryArrow side="right" onClick={next} />
        </div>
      </Section>

      {/* Thumbnail rail */}
      <Section style={{ paddingBottom: 80 }}>
        <div
          ref={railRef}
          style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'thin' }}
        >
          {photos.map(([p, cap], i) => (
            <button
              key={p}
              onClick={() => goTo(i)}
              style={{
                flex: '0 0 auto',
                width: 132,
                height: 88,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                background: 'var(--surface-soft)',
                boxShadow: i === idx ? '0 0 0 3px var(--green)' : '0 0 0 1px var(--hairline-soft)',
                transition: 'box-shadow .15s ease',
                position: 'relative',
              }}
            >
              <Image
                src={p}
                alt={`${data.name} — ${cap} thumbnail`}
                fill
                style={{ objectFit: 'cover', opacity: i === idx ? 1 : 0.7, transition: 'opacity .2s ease' }}
                sizes="132px"
              />
            </button>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {zoom && (
        <div
          onClick={() => setZoom(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(8,18,34,.94)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 24,
              right: 28,
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,.12)',
              color: '#fff',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Icon name="x" size={24} />
          </button>
          <Image
            src={src}
            alt={`${data.name} — ${caption}`}
            width={1200}
            height={800}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '92vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 8 }}
          />
          <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 18 }}>
            {caption}
            <span style={{ color: 'var(--on-dark-soft)', marginLeft: 12, fontWeight: 400, fontSize: 14 }}>
              {idx + 1} / {total}
            </span>
          </div>
          <GalleryArrow side="left" light onClick={prev} />
          <GalleryArrow side="right" light onClick={next} />
        </div>
      )}
    </div>
  )
}

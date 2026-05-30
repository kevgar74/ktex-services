'use client'
import Link from 'next/link'
import { Icon } from '../ui/Icon'
import type { Service } from '@/lib/types'

interface ServiceCardProps {
  s: Service
}

export function ServiceCard({ s }: ServiceCardProps) {
  return (
    <Link
      href={`/${s.id}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          background: 'var(--canvas)',
          border: '1px solid var(--hairline-soft)',
          borderRadius: 'var(--r-xl)',
          padding: 30,
          cursor: 'pointer',
          height: '100%',
          transition: 'transform .2s ease, box-shadow .2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-2)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            background: 'var(--green-tint)',
            color: 'var(--green)',
            display: 'grid',
            placeItems: 'center',
            marginBottom: 20,
          }}
        >
          <Icon name={s.icon} size={26} sw={1.75} />
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--steel)',
            marginBottom: 8,
          }}
        >
          {s.tag}
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.25,
            color: 'var(--ink-deep)',
            letterSpacing: '-0.2px',
            marginBottom: 10,
          }}
        >
          {s.title}
        </div>
        <p style={{ fontSize: 16, color: 'var(--slate)', letterSpacing: '-0.16px', marginBottom: 18, lineHeight: 1.5 }}>
          {s.body}
        </p>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--navy-soft)',
          }}
        >
          Learn more <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  )
}

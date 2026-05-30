'use client'
import Link from 'next/link'
import { Photo } from '../ui/Photo'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  p: Project
  h?: number
}

export function ProjectCard({ p, h = 240 }: ProjectCardProps) {
  const href = p.route ? `/${p.route}` : '/portfolio'
  const isGallery = p.route?.startsWith('gallery')

  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          cursor: 'pointer',
          borderRadius: 'var(--r-2xl)',
          overflow: 'hidden',
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
        <Photo
          src={p.img}
          alt={`${p.name} — ${p.cat} in ${p.city} by K-Tex Services`}
          tone={p.tone}
          radius="var(--r-2xl)"
          height={h}
          motif="building"
        >
          <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}>
            <Badge tone="ghost">{p.cat}</Badge>
          </div>
          {isGallery && (
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                fontWeight: 700,
                fontSize: 12,
                color: '#fff',
                background: 'rgba(10,35,66,.55)',
                padding: '7px 13px',
                borderRadius: 'var(--r-full)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <Icon name="layers" size={14} /> View gallery
            </div>
          )}
        </Photo>
        <div style={{ padding: '18px 4px 4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: 'var(--ink-deep)', letterSpacing: '-0.3px' }}>
              {p.name}
            </div>
            <span style={{ fontSize: 14, color: 'var(--steel)', whiteSpace: 'nowrap' }}>{p.year}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>
            <Icon name="pin" size={13} color="var(--stone)" />
            {p.city} · {p.stat.join(' · ')}
          </div>
        </div>
      </div>
    </Link>
  )
}

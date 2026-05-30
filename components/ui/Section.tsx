'use client'
import { Eyebrow } from './Eyebrow'

interface SectionProps {
  children: React.ReactNode
  bg?: string
  narrow?: boolean
  style?: React.CSSProperties
  id?: string
}

export function Section({ children, bg, narrow, style, id }: SectionProps) {
  return (
    <section style={{ background: bg || 'transparent', ...style }} id={id}>
      <div style={{ maxWidth: narrow ? 920 : 1240, margin: '0 auto', padding: '0 28px' }}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeadProps {
  eyebrow?: string
  title: string
  sub?: string
  light?: boolean
  action?: React.ReactNode
  align?: 'left' | 'center'
  max?: number
}

export function SectionHead({ eyebrow, title, sub, light, action, align = 'left', max = 620 }: SectionHeadProps) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      gap: 24, flexWrap: 'wrap', textAlign: align,
    }}>
      <div style={{ maxWidth: max, margin: align === 'center' ? '0 auto' : 0 }}>
        {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        <h2 style={{
          fontWeight: 700, fontSize: 38, lineHeight: 1.16, letterSpacing: '-0.6px',
          color: light ? '#fff' : 'var(--ink-deep)', margin: eyebrow ? '14px 0 0' : 0,
        }}>
          {title}
        </h2>
        {sub && (
          <p style={{
            fontWeight: 400, fontSize: 18, lineHeight: 1.44,
            color: light ? 'var(--on-dark-soft)' : 'var(--slate)', margin: '14px 0 0',
          }}>
            {sub}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}

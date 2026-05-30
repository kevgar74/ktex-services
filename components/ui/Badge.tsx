'use client'

type BadgeTone = 'warning' | 'success' | 'navy' | 'green' | 'soft' | 'ghost'

interface BadgeProps {
  children: React.ReactNode
  tone?: BadgeTone
}

const toneStyles: Record<BadgeTone, React.CSSProperties> = {
  warning: { background: 'var(--warning)', color: '#0a1a2a' },
  success: { background: 'var(--success)', color: '#fff' },
  navy:    { background: 'var(--navy)', color: '#fff' },
  green:   { background: 'var(--green)', color: '#fff' },
  soft:    { background: 'var(--green-tint)', color: 'var(--green-deep)' },
  ghost:   { background: 'rgba(255,255,255,.16)', color: '#fff', border: '1px solid rgba(255,255,255,.28)' },
}

export function Badge({ children, tone = 'warning' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 1.33,
        letterSpacing: '0.4px',
        borderRadius: 'var(--r-full)',
        padding: '5px 12px',
        whiteSpace: 'nowrap',
        ...toneStyles[tone],
      }}
    >
      {children}
    </span>
  )
}

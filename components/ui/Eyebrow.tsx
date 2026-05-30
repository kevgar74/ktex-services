'use client'

interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
}

export function Eyebrow({ children, light }: EyebrowProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 1.33,
        letterSpacing: '1.6px',
        textTransform: 'uppercase',
        color: light ? 'var(--green-soft)' : 'var(--green)',
      }}
    >
      <span style={{ width: 18, height: 1.5, background: 'currentColor', opacity: 0.6, flexShrink: 0 }} />
      {children}
    </div>
  )
}

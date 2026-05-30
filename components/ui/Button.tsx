'use client'
import { Icon } from './Icon'

type ButtonKind = 'primary' | 'green' | 'secondary' | 'ghost' | 'white' | 'ghostLight'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  kind?: ButtonKind
  size?: ButtonSize
  icon?: string
  iconLeft?: string
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const kindStyles: Record<ButtonKind, React.CSSProperties> = {
  primary:   { background: 'var(--navy)', color: '#fff', border: 'none' },
  green:     { background: 'var(--green)', color: '#fff', border: 'none' },
  secondary: { background: 'transparent', color: 'var(--ink-deep)', border: '2px solid var(--ink-deep)' },
  ghost:     { background: 'transparent', color: 'var(--ink-deep)', border: '2px solid rgba(10,26,42,.16)' },
  white:     { background: '#fff', color: 'var(--navy)', border: 'none' },
  ghostLight:{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.4)' },
}

export function Button({
  children, kind = 'primary', size = 'md', icon, iconLeft, onClick, style, className, type = 'button', disabled,
}: ButtonProps) {
  const isLg = size === 'lg'
  const isSm = size === 'sm'
  const hasBorder = kind === 'secondary' || kind === 'ghost' || kind === 'ghostLight'

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: isLg ? 14 : isSm ? 12 : 13,
    letterSpacing: '0.6px',
    textTransform: 'uppercase',
    borderRadius: 'var(--r-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.18s ease',
    padding: isLg
      ? hasBorder ? '15px 32px' : '17px 34px'
      : isSm
      ? hasBorder ? '9px 18px' : '11px 20px'
      : hasBorder ? '11px 24px' : '13px 26px',
    opacity: disabled ? 0.5 : 1,
    ...kindStyles[kind],
    ...style,
  }

  const iconSize = isLg ? 18 : 16

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={baseStyle}
      onMouseEnter={e => {
        if (disabled) return
        const el = e.currentTarget
        if (kind === 'primary') el.style.background = 'var(--navy-strong)'
        else if (kind === 'green') el.style.background = 'var(--green-deep)'
        else el.style.background = 'var(--surface-soft)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = kindStyles[kind].background as string
      }}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.98)' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {iconLeft && <Icon name={iconLeft} size={iconSize} />}
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </button>
  )
}

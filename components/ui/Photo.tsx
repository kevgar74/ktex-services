'use client'
import Image from 'next/image'
import { Icon } from './Icon'

type PhotoTone = 'warm' | 'navy' | 'green' | 'cool' | 'stone'
type PhotoFit = 'cover' | 'contain'

interface PhotoProps {
  tone?: PhotoTone
  radius?: string
  height?: number | string
  label?: string
  alt?: string
  children?: React.ReactNode
  motif?: string
  src?: string
  pos?: string
  fit?: PhotoFit
  style?: React.CSSProperties
  className?: string
}

const tones: Record<PhotoTone, { bg: string; grid: string; ink: string }> = {
  warm:  { bg: '#ece6d8', grid: 'rgba(10,35,66,.07)',    ink: '#b9ad95' },
  navy:  { bg: '#102f54', grid: 'rgba(255,255,255,.07)', ink: 'rgba(255,255,255,.4)' },
  green: { bg: '#13502a', grid: 'rgba(255,255,255,.07)', ink: 'rgba(255,255,255,.4)' },
  cool:  { bg: '#dde5ec', grid: 'rgba(10,35,66,.07)',    ink: '#9fb0bf' },
  stone: { bg: '#e4ddcf', grid: 'rgba(10,35,66,.06)',    ink: '#b4a890' },
}

export function Photo({
  tone = 'warm', radius = 'var(--r-3xl)', height = '100%', label, alt, children,
  motif, src, pos = 'center', fit = 'cover', style, className,
}: PhotoProps) {
  const t = tones[tone]
  const placeholderBg = src
    ? {}
    : {
        background: t.bg,
        backgroundImage: `linear-gradient(${t.grid} 1px,transparent 1px),linear-gradient(90deg,${t.grid} 1px,transparent 1px)`,
        backgroundSize: '34px 34px',
      }
  const fillBg = src && fit === 'contain' ? { background: '#fff' } : {}

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        height,
        borderRadius: radius,
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        ...placeholderBg,
        ...fillBg,
        ...style,
      }}
    >
      {src && (
        <Image
          src={src}
          alt={alt || label || ''}
          fill
          style={{ objectFit: fit, objectPosition: pos }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      )}
      {!src && (children || <Icon name={motif || 'home'} size={46} sw={1.25} color={t.ink} />)}
      {src && children}
      {label && !src && (
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            fontSize: 12,
            color: t.ink,
          }}
        >
          {label}
        </div>
      )}
    </div>
  )
}

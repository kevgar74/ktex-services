'use client'

const ICONS: Record<string, string> = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
  hammer: '<path d="m15 12-8.4 8.4a2.1 2.1 0 0 1-3-3L12 9"/><path d="M17.6 6.8a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L9.5 6.1l4.4 4.4Z"/>',
  ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>',
  hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15a8 8 0 0 1 16 0"/>',
  csquare: '<path d="M5 3h3v13h13v3H5z"/><path d="M11 16v-2M14 16v-2M17 16v-2M8 6h2M8 9h2M8 12h2"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9-9"/><path d="m16 5 3 3"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  bath: '<path d="M10 4 8 6"/><path d="M17 19v2M7 19v2"/><path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M4 12V6a2 2 0 0 1 3.4-1.4L9 6"/>',
  square: '<rect x="3" y="3" width="18" height="18" rx="2"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  chevL: '<path d="m15 18-6-6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  phone: '<path d="M13.8 19.8a17 17 0 0 1-9.6-9.6L6 8.4a1.4 1.4 0 0 0 .3-1.5L5 3.8A1.4 1.4 0 0 0 3.6 3H3a1.4 1.4 0 0 0-1.4 1.6A17 17 0 0 0 19.4 22.4 1.4 1.4 0 0 0 21 21v-.6a1.4 1.4 0 0 0-.8-1.3l-3.1-1.3a1.4 1.4 0 0 0-1.5.3Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkc: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  star: '<path d="m12 2 3 6.5 7 .9-5 4.8 1.2 7L12 18l-6.4 3.2L6.8 14l-5-4.8 7-.9Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  quote: '<path d="M10 11H6a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3"/><path d="M5 11v4a3 3 0 0 0 3 3M14 11v4a3 3 0 0 0 3 3"/>',
  play: '<path d="M6 3.5v17l14-8.5z" fill="currentColor" stroke="none"/>',
  trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 1 0-2.8l1.6-1.6a2 2 0 0 1 2.8 0L23 7"/><path d="M9 7 5.5 3.5a1 1 0 0 0-1.4 1.4L7 8"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3z"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
}

interface IconProps {
  name: string
  size?: number
  sw?: number
  color?: string
  style?: React.CSSProperties
  className?: string
}

export function Icon({ name, size = 24, sw = 2, color, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }}
    />
  )
}

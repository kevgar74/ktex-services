'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '../ui/Icon'

const COLS = [
  {
    head: 'Services',
    items: [
      { href: '/acquisitions', label: 'Acquisitions & Sales' },
      { href: '/design',       label: 'Residential Design' },
      { href: '/construction', label: 'Development & Construction' },
    ],
  },
  {
    head: 'Company',
    items: [
      { href: '/portfolio', label: 'Project portfolio' },
      { href: '/contact',   label: 'Contact us' },
      { href: '/',          label: 'About K-Tex' },
    ],
  },
  {
    head: 'Mail To',
    items: [
      { href: '/contact', label: '4008 Louetta Rd. #107' },
      { href: '/contact', label: 'Spring, TX 77388' },
      { href: '/contact', label: 'Serving Houston & surrounding areas' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        color: 'var(--on-dark-soft)',
        padding: '64px 28px 36px',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: 40,
            paddingBottom: 44,
            borderBottom: '1px solid rgba(255,255,255,.12)',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Image
              src="/assets/ktex-logo-white.png"
              alt="K-Tex Services"
              height={44}
              width={120}
              style={{ height: 44, width: 'auto' }}
            />
            <p
              style={{
                fontSize: 14,
                color: 'var(--on-dark-soft)',
                marginTop: 18,
                maxWidth: 280,
                lineHeight: 1.6,
              }}
            >
              From raw land to handed-over keys. We acquire, design, build, and sell — under one roof, across greater Houston.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20, color: '#fff' }}>
              <a
                href="tel:7132012807"
                style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: '#fff', textDecoration: 'none' }}
              >
                <Icon name="phone" size={15} /> (713) 201-2807
              </a>
              <a
                href="mailto:info@k-texservices.com"
                style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: '#fff', textDecoration: 'none' }}
              >
                <Icon name="mail" size={15} /> info@k-texservices.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(({ head, items }) => (
            <div key={head}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>{head}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    style={{ fontSize: 14, color: 'var(--on-dark-soft)', textDecoration: 'none' }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            paddingTop: 24,
            fontSize: 12,
            color: 'rgba(255,255,255,.5)',
          }}
        >
          <span>© 2026 K-Tex Services, LLC. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a style={{ color: 'inherit', textDecoration: 'none' }} href="#">Privacy</a>
            <a style={{ color: 'inherit', textDecoration: 'none' }} href="#">Terms</a>
            <a style={{ color: 'inherit', textDecoration: 'none' }} href="#">Equal Housing Opportunity</a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

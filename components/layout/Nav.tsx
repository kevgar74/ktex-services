'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'

const DD_ITEMS = [
  { href: '/acquisitions', label: 'Acquisitions & Sales', icon: 'pin' },
  { href: '/design',       label: 'Residential Design',   icon: 'ruler' },
  { href: '/construction', label: 'Development & Construction', icon: 'csquare' },
]

const NAV_LINKS = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact',   label: 'Contact' },
]

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '-0.14px',
    padding: '9px 15px',
    borderRadius: 'var(--r-full)',
    cursor: 'pointer',
    color: active ? '#fff' : 'var(--ink)',
    background: active ? 'var(--navy)' : 'transparent',
    transition: 'background .15s ease, color .15s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  }
}

interface NavProps {
  activePath: string
}

export function Nav({ activePath }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useGSAP(() => {
    const el = navRef.current
    if (!el) return
    gsap.fromTo(el, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.05 })
  }, [])

  const serviceRoutes = ['/acquisitions', '/design', '/construction']
  const servicesActive = serviceRoutes.includes(activePath)

  return (
    <header
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(255,255,255,.94)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'var(--hairline-soft)' : 'transparent'}`,
        transition: 'border-color .2s ease, box-shadow .2s ease',
        boxShadow: scrolled ? 'var(--shadow-sticky)' : 'none',
        opacity: 0, // GSAP sets this
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          height: 76,
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 28,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <Image src="/assets/ktex-logo.png" alt="K-Tex Services" height={56} width={120} style={{ height: 56, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 2, marginLeft: 14, alignItems: 'center' }} className="desktop-nav">
          <Link href="/" style={navLinkStyle(activePath === '/')}>Home</Link>

          {/* Services dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDdOpen(true)}
            onMouseLeave={() => setDdOpen(false)}
          >
            <span
              style={{
                ...navLinkStyle(servicesActive),
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                cursor: 'pointer',
              }}
            >
              Services <Icon name="chevD" size={15} />
            </span>
            {/* Dropdown panel */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                paddingTop: 10,
                width: 320,
                opacity: ddOpen ? 1 : 0,
                visibility: ddOpen ? 'visible' : 'hidden',
                transform: ddOpen ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all .18s ease',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: 'var(--r-xl)',
                  border: '1px solid var(--hairline-soft)',
                  boxShadow: 'var(--shadow-pop)',
                  padding: 8,
                }}
              >
                {DD_ITEMS.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 13,
                      padding: '12px 14px',
                      borderRadius: 'var(--r-lg)',
                      textDecoration: 'none',
                      color: 'var(--ink-deep)',
                      transition: 'background .12s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: 'var(--green-tint)',
                        color: 'var(--green)',
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon name={icon} size={19} sw={1.75} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={navLinkStyle(activePath === href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }} className="desktop-nav">
          <a
            href="tel:7132012807"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontWeight: 700,
              fontSize: 14,
              color: 'var(--ink)',
              padding: '0 6px',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            <Icon name="phone" size={16} color="var(--green)" /> (713) 201-2807
          </a>
          <Link href="/contact">
            <Button kind="primary">Start a conversation</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobile(m => !m)}
          aria-label="Menu"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink-deep)',
            display: 'none',
            padding: 4,
          }}
          className="mobile-toggle"
        >
          <Icon name={mobile ? 'x' : 'menu'} size={26} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div
          style={{
            borderTop: '1px solid var(--hairline-soft)',
            background: '#fff',
            padding: '12px 28px 20px',
          }}
        >
          {[
            { href: '/', label: 'Home' },
            ...DD_ITEMS,
            ...NAV_LINKS,
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobile(false)}
              style={{
                display: 'block',
                padding: '13px 0',
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--ink-deep)',
                borderBottom: '1px solid var(--hairline-soft)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 16 }}>
            <Link href="/contact" onClick={() => setMobile(false)}>
              <Button kind="primary" style={{ width: '100%', justifyContent: 'center' }}>
                Start a conversation
              </Button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface HeroAnimatorProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

/* Wraps the hero section and drives entrance animations on load.
   Children with data-hero="eyebrow|word-N|sub|btn|photo|card|badge"
   get targeted animations in sequence. */
export function HeroAnimator({ children, style, className }: HeroAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    const eyebrow = el.querySelector('[data-hero="eyebrow"]')
    const words = el.querySelectorAll('[data-hero^="word"]')
    const sub = el.querySelector('[data-hero="sub"]')
    const btns = el.querySelectorAll('[data-hero="btn"]')
    const photo = el.querySelector('[data-hero="photo"]')
    const card = el.querySelector('[data-hero="card"]')
    const badge = el.querySelector('[data-hero="badge"]')

    if (eyebrow) tl.fromTo(eyebrow, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.1)
    if (words.length) tl.fromTo(words, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.12 }, 0.25)
    if (sub) tl.fromTo(sub, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
    if (btns.length) tl.fromTo(btns, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, 0.65)
    if (photo) tl.fromTo(photo, { scale: 1.04, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 }, 0.15)
    if (card) tl.fromTo(card, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }, 0.75)
    if (badge) tl.fromTo(badge, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, 0.85)
  }, [])

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

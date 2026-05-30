'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealSideProps {
  children: React.ReactNode
  from?: 'left' | 'right'
  delay?: number
  style?: React.CSSProperties
  className?: string
}

export function RevealSide({ children, from = 'left', delay = 0, style, className }: RevealSideProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { x: from === 'left' ? -48 : 48, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.85,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div ref={ref} style={{ opacity: 0, ...style }} className={className}>
      {children}
    </div>
  )
}

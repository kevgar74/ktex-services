'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  style?: React.CSSProperties
  className?: string
  once?: boolean
}

export function RevealUp({ children, delay = 0, duration = 0.7, y = 32, style, className, once = true }: RevealUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 20%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
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

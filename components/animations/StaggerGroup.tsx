'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StaggerGroupProps {
  children: React.ReactNode
  stagger?: number
  y?: number
  style?: React.CSSProperties
  className?: string
  selector?: string
}

export function StaggerGroup({ children, stagger = 0.1, y = 28, style, className, selector = ':scope > *' }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll(selector)
    if (!items.length) return

    gsap.fromTo(
      items,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger,
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
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

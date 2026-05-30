'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CountUpProps {
  value: string
  style?: React.CSSProperties
  className?: string
}

function parseNumber(val: string): { prefix: string; num: number; suffix: string } | null {
  const m = val.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/)
  if (!m) return null
  return { prefix: m[1], num: parseFloat(m[2].replace(/,/g, '')), suffix: m[3] }
}

function formatNum(n: number, original: string): string {
  if (original.includes(',')) return Math.round(n).toLocaleString()
  if (original.includes('.')) return n.toFixed(1)
  return Math.round(n).toString()
}

export function CountUp({ value, style, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = parseNumber(value)

  useGSAP(() => {
    const el = ref.current
    if (!el || !parsed) return

    const obj = { val: 0 }
    gsap.to(obj, {
      val: parsed.num,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate() {
        el.textContent = parsed.prefix + formatNum(obj.val, value) + parsed.suffix
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <span ref={ref} style={style} className={className}>
      {parsed ? parsed.prefix + '0' + parsed.suffix : value}
    </span>
  )
}

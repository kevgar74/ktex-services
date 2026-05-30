'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  height: number | string
  radius?: string
  strength?: number
  children?: React.ReactNode
  priority?: boolean
}

export function ParallaxImage({ src, alt, height, radius = 'var(--r-feature)', strength = 0.15, children, priority }: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    gsap.fromTo(
      img,
      { yPercent: -strength * 30 },
      {
        yPercent: strength * 30,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        height,
        borderRadius: radius,
        overflow: 'hidden',
      }}
    >
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          height: '120%',
          width: '100%',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={priority}
        />
      </div>
      {children && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {children}
        </div>
      )}
    </div>
  )
}

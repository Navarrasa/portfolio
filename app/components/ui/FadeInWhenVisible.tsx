// components/AnimatedSection.tsx
'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { JSX, useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements // permite mudar o tipo (section, div, etc)
  id?: string
}

export const AnimatedSection = ({
  children,
  delay = 0.1,
  duration = 0.6,
  className = '',
  as = 'section',
  id,
}: AnimatedSectionProps) => {
  const Component = motion[as as keyof typeof motion] as React.ElementType
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay },
    },
  }

  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </Component>
  )
}

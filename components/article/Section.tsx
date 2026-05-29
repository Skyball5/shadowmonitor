'use client'

import { useEffect, useRef } from 'react'

export default function Section({
  id,
  children,
  setActiveSection,
}: {
  id: string
  children: React.ReactNode
  setActiveSection: (id: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [id, setActiveSection])

  return (
    <section ref={ref} className="mb-12">
      {children}
    </section>
  )
}
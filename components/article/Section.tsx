'use client'

import type { ReactNode } from 'react'

export default function Section({
  id,
  children,
  setSectionRef,
}: {
  id: string
  children: ReactNode
  setSectionRef: (id: string, element: HTMLElement | null) => void
}) {
  return (
    <section
      ref={(element) => setSectionRef(id, element)}
      className="mb-12"
      data-section-id={id}
    >
      {children}
    </section>
  )
}
'use client'

import { useEntitySelection } from './EntityContext'
import { entities } from '@/lib/entities'

type EntityTagProps = {
  entityId: string
  variant?: 'article' | 'sidebar'
  label?: string
  className?: string
}

export default function EntityTag({
  entityId,
  variant = 'sidebar',
  label,
  className = '',
}: EntityTagProps) {
  const entity = entities[entityId]
  const { openEntity } = useEntitySelection()

  if (!entity) return null

  const baseStyles =
    variant === 'article'
      ? `
        inline-flex items-center align-baseline
        rounded-md
        border border-neutral-300
        bg-[#f2eee5]
        px-2.5 py-0.5
        text-[0.88em]
        font-medium
        leading-none
        text-neutral-700
        transition
        hover:border-neutral-400
        hover:bg-[#ece6da]
        hover:text-neutral-900
        focus:outline-none
        focus:ring-1
        focus:ring-neutral-400/40
      `
      : `
        inline-flex items-center align-baseline
        rounded-md
        border border-neutral-700
        bg-neutral-900
        px-3 py-1.5
        text-sm
        text-neutral-200
        transition
        hover:bg-neutral-800
        hover:border-neutral-600
        focus:outline-none
        focus:ring-1
        focus:ring-neutral-500/40
      `

  return (
    <button
      type="button"
      onClick={() => openEntity(entityId)}
      title={entity.name}
      aria-label={`Open entity: ${entity.name}`}
      className={`${baseStyles} ${className}`}
    >
      {label || entity.name}
    </button>
  )
}
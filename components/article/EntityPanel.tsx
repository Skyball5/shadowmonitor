'use client'

import { useEffect, useRef } from 'react'
import { entities } from '@/lib/entities'
import { useEntitySelection } from './EntityContext'
import EntityTag from './EntityTag'

function formatEntityType(type: string) {
  switch (type) {
    case 'company':
      return 'Company'
    case 'regulator':
      return 'Regulator'
    case 'law':
      return 'Law'
    case 'jurisdiction':
      return 'Jurisdiction'
    case 'person':
      return 'Person'
    case 'organization':
      return 'Organization'
    case 'concept':
      return 'Concept'
    default:
      return type
  }
}

export default function EntityPanel() {
  const { selectedEntityId, closeEntity } = useEntitySelection()
  const panelRef = useRef<HTMLDivElement>(null)

  const entity = selectedEntityId ? entities[selectedEntityId] : null

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [selectedEntityId])

  if (!entity) return null

  return (
    <div
      ref={panelRef}
      className="
        bg-neutral-900
        border border-neutral-800
        rounded-2xl
        p-6
        space-y-8
        h-full
        min-h-0
        overflow-y-auto
        overscroll-contain
        pr-2
      "
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-2">
              {formatEntityType(entity.type)}
            </div>

            <h2 className="text-2xl text-neutral-100 leading-tight">
              {entity.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeEntity}
            className="
              text-sm
              text-neutral-500
              hover:text-neutral-300
              transition
            "
          >
            Close
          </button>
        </div>

        <p className="text-neutral-400 leading-relaxed">
          {entity.shortDescription}
        </p>
      </div>

      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Intelligence Brief
        </div>

        <p className="text-neutral-300 leading-relaxed">
          {entity.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Metadata
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between gap-6">
            <span className="text-neutral-500">Jurisdiction</span>
            <span className="text-neutral-300 text-right">
              {entity.jurisdiction || '—'}
            </span>
          </div>

          <div className="flex justify-between gap-6">
            <span className="text-neutral-500">Status</span>
            <span className="text-neutral-300 text-right">
              {entity.status || '—'}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Related Entities
        </div>

        <div className="flex flex-wrap gap-2">
          {entity.relatedEntities?.map((relatedId) => (
            <EntityTag
              key={relatedId}
              entityId={relatedId}
              variant="sidebar"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
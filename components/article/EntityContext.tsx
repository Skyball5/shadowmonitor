'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type EntitySelectionContextValue = {
  selectedEntityId: string | null
  openEntity: (entityId: string) => void
  closeEntity: () => void
}

const EntitySelectionContext = createContext<EntitySelectionContextValue>({
  selectedEntityId: null,
  openEntity: () => {},
  closeEntity: () => {},
})

export function EntitySelectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null)

  const openEntity = (entityId: string) => {
    setSelectedEntityId((current) => (current === entityId ? null : entityId))
  }

  const closeEntity = () => {
    setSelectedEntityId(null)
  }

  const value = useMemo<EntitySelectionContextValue>(
    () => ({
      selectedEntityId,
      openEntity,
      closeEntity,
    }),
    [selectedEntityId]
  )

  return (
    <EntitySelectionContext.Provider value={value}>
      {children}
    </EntitySelectionContext.Provider>
  )
}

export function useEntitySelection() {
  return useContext(EntitySelectionContext)
}
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import EntityPanel from './EntityPanel'
import EntityTag from './EntityTag'
import { useEntitySelection } from './EntityContext'
import type { Article } from '@/data/articles/shared'
import { entities } from '@/lib/entities'



export default function Sidebar({
  activeSection,
  article,
}: {
  activeSection: string
  article?: Article
}) {
  const { selectedEntityId } = useEntitySelection()
  
  const data = article?.sidebarBySection?.[activeSection]
if (!data) return null

  return (
    <div className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col gap-6 overflow-hidden">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="
          bg-neutral-900
          border border-neutral-800
          rounded-2xl
          p-6
          space-y-8
          flex-none
        "
      >
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Focus
          </div>

          <div className="text-amber-400 leading-relaxed">
            {data.focus}
          </div>
        </div>

        <div className="space-y-4">
  <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">
    Intelligence Layer
  </div>

  <div className="flex flex-wrap gap-2">
    {data.entities.map((entityId) => (
      <EntityTag
        key={entityId}
        entityId={entityId}
        variant="sidebar"
      />
    ))}
  </div>
</div>
      </motion.div>

      <div className="flex-1 min-h-0">
        <AnimatePresence>
          {selectedEntityId && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.22 }}
              className="h-full min-h-0"
            >
              <EntityPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
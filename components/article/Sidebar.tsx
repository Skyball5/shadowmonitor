'use client'

import { AnimatePresence, motion } from 'framer-motion'
import EntityPanel from './EntityPanel'
import EntityTag from './EntityTag'
import { useEntitySelection } from './EntityContext'
import type { Article } from '@/data/articles/shared'

const sidebarData: Record<
  string,
  {
    focus: string
    entities: string[]
  }
> = {
  intro: {
    focus: 'Regulatory transition under LOK',
    entities: ['cga', 'lok', 'bcgame', 'law1931', 'adr'],
  },

  'offshore-paradise': {
    focus: 'Collapse of the master-license system',
    entities: ['cga', 'lok', 'bcgame', 'law1931'],
  },

  law1931: {
    focus: 'Insolvency law as structural risk',
    entities: ['law1931', 'bcgame', 'adr'],
  },

  sbgok: {
    focus: 'Bankruptcy litigation ecosystem',
    entities: ['sbgok', 'bijkerk', 'cramm', 'cyberluck', 'trigonon', 'adr'],
  },

  'bankruptcy-as-enforcement': {
    focus: 'Bankruptcy as enforcement mechanism',
    entities: ['gametech', 'dama', 'sbgok'],
  },

  'empty-shells': {
    focus: 'Asset shielding and operator migration',
    entities: ['araxio', 'rightnow', 'bcgame', 'blockdance', 'smallhouse'],
  },

  'collapse-of-sbgok': {
    focus: 'Collapse of player-claim infrastructure',
    entities: ['sbgok', 'bijkerk', 'cramm'],
  },

  'what-happens-next': {
    focus: 'Contradictions inside the reform model',
    entities: ['cga', 'lok', 'law1931', 'bcgame', 'sbgok', 'adr'],
  },
}

export default function Sidebar({
  activeSection,
  article,
}: {
  activeSection: string
  article?: {
    sidebar?: {
      focus: string
      entities: string[]
    }
  }
}) {
  const { selectedEntityId } = useEntitySelection()
  console.log('SIDEBAR ARTICLE:', article)
console.log('SIDEBAR DATA:', article?.sidebar)
  const data = article?.sidebar || sidebarData[activeSection] || sidebarData.intro

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
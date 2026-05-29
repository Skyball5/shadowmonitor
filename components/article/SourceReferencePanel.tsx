'use client'

import SourceMarker from './SourceMarker'

type SourceItem = {
  id: string
  markerLabel: string
  kind: string
  title: string
  date: string
  status: string
  excerpt: string
}

export default function SourceReferencePanel({
  sources,
  activeSourceId,
  onSelectSource,
}: {
  sources: SourceItem[]
  activeSourceId: string
  onSelectSource: (id: string) => void
}) {
  const activeSource =
    sources.find((source) => source.id === activeSourceId) || sources[0]

  if (!activeSource) return null

  return (
    <div className="my-14">
      <div
        className="
          border border-neutral-300
          rounded-xl
          overflow-hidden
          bg-[#f3efe6]
        "
      >
        <div
          className="
            flex items-center justify-between
            gap-4
            px-5 py-3
            border-b border-neutral-300
            bg-[#ece6da]
          "
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-600">
            Source References
          </div>

          <div className="text-xs text-neutral-500">
            Click a marker to inspect the document
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid gap-3 md:grid-cols-3">
            {sources.map((source) => (
              <button
                key={source.id}
                type="button"
                onClick={() => onSelectSource(source.id)}
                className="
                  text-left
                  rounded-lg
                  border
                  px-4 py-4
                  transition
                  bg-[#f7f3ea]
                "
                style={{
                  borderColor:
                    source.id === activeSourceId ? 'rgb(163 163 163)' : 'rgb(214 211 205)',
                  boxShadow:
                    source.id === activeSourceId
                      ? '0 0 0 1px rgba(120,120,120,0.12) inset'
                      : 'none',
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    {source.kind}
                  </div>

                  <SourceMarker
                    label={source.markerLabel}
                    active={source.id === activeSourceId}
                  />
                </div>

                <div className="text-[15px] leading-6 text-neutral-900 mb-2">
                  {source.title}
                </div>

                <div className="text-xs text-neutral-500">
                  {source.date} · {source.status}
                </div>
              </button>
            ))}
          </div>

          <div className="border-l-2 border-neutral-300 pl-6 py-2">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                {activeSource.kind}
              </div>

              <SourceMarker label={activeSource.markerLabel} active />

              <div className="text-xs text-neutral-500">
                {activeSource.date}
              </div>

              <div className="text-xs text-neutral-500">
                {activeSource.status}
              </div>
            </div>

            <div className="text-[18px] leading-snug text-neutral-900 mb-3">
              {activeSource.title}
            </div>

            <div className="text-neutral-700 leading-8 text-[16px] max-w-3xl">
              {activeSource.excerpt}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
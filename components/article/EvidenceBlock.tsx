'use client'

import SourceMarker from './SourceMarker'

export default function EvidenceBlock({
  label,
  source,
  children,
}: {
  label: string
  source: string
  children: React.ReactNode
}) {
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

        {/* HEADER */}

        <div
          className="
            flex items-center justify-between

            px-5 py-3

            border-b border-neutral-300

            bg-[#ece6da]
          "
        >

          <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-600">
            {label}
          </div>

          <div className="flex items-center gap-2">

            <SourceMarker label="Filed Document" />

            <div className="text-xs text-neutral-500">
              {source}
            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="px-8 py-8">

          <div
            className="
              border-l-2 border-neutral-300

              pl-6

              text-[16px]
              leading-8

              text-neutral-700
            "
          >
            {children}
          </div>

        </div>

      </div>

    </div>
  )
}
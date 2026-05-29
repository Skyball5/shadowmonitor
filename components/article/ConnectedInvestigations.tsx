'use client'

type Investigation = {
  title: string
  summary: string
  jurisdictions: string[]
  entities: string[]
}

export default function ConnectedInvestigations({
  investigations,
}: {
  investigations: Investigation[]
}) {
  return (
    <div className="mt-24 pt-12 border-t border-neutral-300">

      {/* HEADER */}

      <div className="mb-10">

        <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
          Connected Investigations
        </div>

        <div className="text-[28px] leading-tight text-neutral-900 max-w-2xl">
          Related reporting connected through jurisdictions, enforcement structures, and operational overlap.
        </div>

      </div>

      {/* ITEMS */}

      <div className="space-y-10">

        {investigations.map((item) => (
          <div
            key={item.title}
            className="
              group

              border border-transparent
              border-l-neutral-300

              pl-6 py-1

              hover:border-l-neutral-500

              transition
            "
          >

            {/* TITLE */}

            <div
              className="
                text-[22px]
                leading-snug

                text-neutral-900

                mb-3

                group-hover:text-black

                transition
              "
            >
              {item.title}
            </div>

            {/* SUMMARY */}

            <div className="text-neutral-700 leading-8 text-[17px] max-w-2xl mb-5">
              {item.summary}
            </div>

            {/* METADATA */}

            <div className="flex flex-wrap gap-6 text-sm text-neutral-500">

              <div className="flex flex-wrap gap-2">

                <span className="uppercase tracking-[0.12em] text-neutral-400">
                  Jurisdictions
                </span>

                <span>
                  {item.jurisdictions.join(', ')}
                </span>

              </div>

              <div className="flex flex-wrap gap-2">

                <span className="uppercase tracking-[0.12em] text-neutral-400">
                  Entities
                </span>

                <span>
                  {item.entities.join(', ')}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
'use client'

export default function TimelineBlock({
  items,
}: {
  items: {
    year: string
    title: string
    description: string
  }[]
}) {
  return (
    <div className="my-20">

      {/* HEADER */}

      <div className="mb-10">

        <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
          Timeline
        </div>

        <div className="text-[28px] leading-tight text-neutral-900">
          Key structural developments
        </div>

      </div>

      {/* ITEMS */}

      <div className="space-y-12">

        {items.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="grid grid-cols-[100px_1fr] gap-10"
          >

            {/* YEAR */}

            <div className="pt-1">

              <div className="text-neutral-500 text-lg">
                {item.year}
              </div>

            </div>

            {/* CONTENT */}

            <div
              className="
                border-l border-neutral-300

                pl-8
                pb-2
              "
            >

              <div className="text-xl text-neutral-900 mb-3">
                {item.title}
              </div>

              <div className="text-neutral-700 leading-8 text-[17px] max-w-2xl">
                {item.description}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
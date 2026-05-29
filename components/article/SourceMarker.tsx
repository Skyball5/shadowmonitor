'use client'

type SourceMarkerProps = {
  label: string
  onClick?: () => void
  active?: boolean
  className?: string
}

export default function SourceMarker({
  label,
  onClick,
  active = false,
  className = '',
}: SourceMarkerProps) {
  const sharedStyles = `
    inline-flex items-center align-baseline

    px-1.5 py-[2px]

    rounded

    border

    text-[11px]
    uppercase
    tracking-[0.14em]

    transition
  `

  const interactiveStyles = `
    cursor-pointer

    ${active
      ? 'border-neutral-400 bg-[#ebe4d8] text-neutral-700'
      : 'border-neutral-300 bg-[#f1ece2] text-neutral-500 hover:border-neutral-400 hover:bg-[#ebe4d8] hover:text-neutral-700'}
  `

  const staticStyles = `
    cursor-default
    border-neutral-300
    bg-[#f1ece2]
    text-neutral-500
  `

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        aria-label={`Open source reference: ${label}`}
        className={`${sharedStyles} ${interactiveStyles} ${className}`}
      >
        {label}
      </button>
    )
  }

  return (
    <span className={`${sharedStyles} ${staticStyles} ${className}`}>
      {label}
    </span>
  )
}
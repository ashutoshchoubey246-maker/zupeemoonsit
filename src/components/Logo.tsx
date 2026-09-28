import { useId } from 'react'

// Brand colours — J green, M gold, gold wordmark (kept from the original logo).
export function LogoMark({ className = '' }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const tile = `jm-tile-${uid}`
  const moon = `jm-moon-${uid}`

  return (
    <svg className={`logo-mark ${className}`.trim()} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={tile} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B3022" />
          <stop offset="1" stopColor="#0A130D" />
        </linearGradient>
        <mask id={moon}>
          <rect width="64" height="64" fill="#fff" />
          <circle cx="19.2" cy="17.6" r="4.7" fill="#000" />
        </mask>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${tile})`} />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="#E6C84A" strokeOpacity="0.24" strokeWidth="1.5" />
      <circle cx="16" cy="20.5" r="5.5" fill="#E6C84A" mask={`url(#${moon})`} />
      <g transform="translate(1 1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 18v19a7 7 0 0 1-14 0" stroke="#3D9A52" />
        <path d="M34 44V18l8 13 8-13v26" stroke="#E6C84A" />
      </g>
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <LogoMark />
      <span className="logo-word">Jupeemoon</span>
    </span>
  )
}

import type { ReactNode } from 'react'

const paths = {
  mobile: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  web: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 8.5h19M5.75 6.25h.01M8.25 6.25h.01" />
    </>
  ),
  enterprise: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  ai: (
    <>
      <path d="M11 3.5l1.9 4.6 4.6 1.9-4.6 1.9L11 16.5l-1.9-4.6L4.5 10l4.6-1.9z" />
      <path d="M18.5 14.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.1 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.1" />
      <circle cx="9.5" cy="20" r="1.25" />
      <circle cx="17" cy="20" r="1.25" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </>
  ),
  design: (
    <>
      <path d="M4 20l3.8-1 11-11a2.1 2.1 0 0 0-3-3l-11 11z" />
      <path d="M13.5 6.5l3 3" />
    </>
  ),
  cloud: <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.75 4.75 0 0 0 7 18.5z" />,
  game: (
    <>
      <path d="M7 7.5h10a4.5 4.5 0 0 1 4.4 5.4l-.8 4a2.6 2.6 0 0 1-4.4 1.3L14 16h-4l-2.2 2.2a2.6 2.6 0 0 1-4.4-1.3l-.8-4A4.5 4.5 0 0 1 7 7.5z" />
      <path d="M8 10.5v3M6.5 12h3M15.5 11h.01M17.5 13h.01" />
    </>
  ),
  rocket: (
    <>
      <path d="M9.5 14.5l-3-3 2-2.5h3.5c2.5-3.5 5.5-5 9-5-.1 3.5-1.5 6.5-5 9v3.5l-2.5 2z" />
      <path d="M5 19c.4-2.2 1.3-3.6 3-4.2M15.5 8.5h.01" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14.6-4.4L4 8" />
      <path d="M4 4v4h4" />
      <path d="M4 13a8 8 0 0 0 14.6 4.4L20 16" />
      <path d="M20 20v-4h-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z" />
      <path d="M8.75 12l2.25 2.25 4.25-4.5" />
    </>
  ),
  education: (
    <>
      <path d="M2.5 9.5L12 5l9.5 4.5L12 14z" />
      <path d="M6.5 11.5V16c3 2.5 8 2.5 11 0v-4.5" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6.5 8 6.5V20H4z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 15l3.5-4 3 2.5L20 7" />
    </>
  ),
  code: <path d="M8.5 7.5L4 12l4.5 4.5M15.5 7.5L20 12l-4.5 4.5M13.5 5l-3 14" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" />
    </>
  ),
  pipeline: (
    <>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="12" r="2.25" />
      <path d="M6 8.25v7.5M8.25 6c5 0 7.5 1.8 8.6 4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13.5h3M8 16.5h6" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  heart: <path d="M20.4 8.8A4.9 4.9 0 0 0 12 5.6a4.9 4.9 0 0 0-8.4 3.2c0 5.3 8.4 11.2 8.4 11.2s8.4-5.9 8.4-11.2z" />,
  bag: (
    <>
      <path d="M5 8h14l-1 12.5H6z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11zM13.5 10h4l3 3v3.5h-7" />
      <circle cx="6.5" cy="17.5" r="1.75" />
      <circle cx="17" cy="17.5" r="1.75" />
    </>
  ),
  bank: <path d="M3 9l9-5 9 5zM4 20h16M6 17v-5M10 17v-5M14 17v-5M18 17v-5" />,
  wrench: (
    <path d="M15.5 3.5a5 5 0 0 0-4.8 6.4l-6.9 6.9a2.1 2.1 0 0 0 3 3l6.9-6.9a5 5 0 0 0 6.4-4.8l-3 3-2.6-.6-.6-2.6z" />
  ),
  wave: <path d="M3 12h1.5M7 8.5v7M10.5 5v14M14 8v8M17.5 10v4M21 12h-1" />,
  avatar: (
    <>
      <circle cx="10" cy="9" r="3.5" />
      <path d="M3.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 6.2a3.6 3.6 0 0 1 0 5.6M19 4a6.6 6.6 0 0 1 0 10" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3 19.5a6 6 0 0 1 12 0M16 5a3.25 3.25 0 0 1 0 6.3M18 14.2a6 6 0 0 1 3 5.3" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

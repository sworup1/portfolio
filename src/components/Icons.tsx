import type { ReactNode } from 'react'

export type IconName = 'arrowUpRight' | 'arrowDown' | 'arrowUp'

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const paths: Record<IconName, ReactNode> = {
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V4" />
      <path d="m6 10 6-6 6 6" />
    </>
  ),
}

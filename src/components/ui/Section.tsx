import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  kicker?: string
  title?: string
  children: ReactNode
}

export function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="section section--bordered">
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

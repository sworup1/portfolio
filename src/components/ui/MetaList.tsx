import type { MetaItem } from '../../data/portfolio'

interface MetaListProps {
  items: MetaItem[]
  className?: string
}

export function MetaList({ items, className = '' }: MetaListProps) {
  return (
    <ul className={`meta-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.label} className="meta-list__row">
          <span className="meta-list__label">{item.label}</span>
          {item.href ? (
            <a className="meta-list__value text-link" href={item.href}>
              {item.value}
            </a>
          ) : (
            <span className="meta-list__value">{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

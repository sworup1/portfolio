import { useEffect, useState } from 'react'
import { navItems, profile } from '../../data/portfolio'

export function Navbar() {
  const [active, setActive] = useState(navItems[0].href.slice(1))
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const { href } of navItems) {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className={`nav__bar ${scrolled ? 'nav__bar--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#about" className="nav__brand">
            {profile.name}
          </a>
          <nav aria-label="Primary">
            <ul className="nav__links">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav__link ${active === href.slice(1) ? 'nav__link--active' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeHref}
                  className="nav__link nav__resume"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={`nav__panel ${open ? 'nav__panel--open' : ''}`}>
        <ul className="nav__panel-list">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav__panel-link" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeHref}
              className="nav__panel-link"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

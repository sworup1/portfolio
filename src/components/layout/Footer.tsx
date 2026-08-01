import { Icon } from '../Icons'
import { profile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name} — {profile.role}</p>
        <a href="#home" className="footer__top">
          Back to top
          <Icon name="arrowUp" size={14} />
        </a>
      </div>
    </footer>
  )
}

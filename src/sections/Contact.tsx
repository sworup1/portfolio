import { profile, socials } from '../data/portfolio'

const externalAttrs = { target: '_blank', rel: 'noreferrer noopener' } as const

export function Contact() {
  return (
    <section id="contact" className="section section--bordered">
      <div className="container">
        <div className="contact">
          <p className="kicker">Contact</p>
          <h2 className="contact__statement">
            Tell me what you’re trying to build. I’ll tell you if I’m the right person
            for it.
          </h2>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact__meta">
            <p>{profile.location} · Open to select projects starting mid-year</p>
            <ul className="contact__socials">
              {socials.map((social) => (
                <li key={social.label}>
                  <a className="text-link" href={social.href} {...externalAttrs}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Emphatic } from '../components/ui/Emphatic'
import { MetaList } from '../components/ui/MetaList'
import { profile, meta } from '../data/portfolio'

export function Hero() {
  const heroMeta = meta.filter((item) => item.label !== 'Availability')
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__topline">
          <p className="kicker">{profile.name} · {profile.role}</p>
        </div>
        <h1 className="hero__title">
          <Emphatic segments={profile.headline} />
        </h1>
        <div className="hero__body">
          <p className="hero__intro">{profile.intro}</p>
          <MetaList items={heroMeta} className="hero__meta" />
        </div>
      </div>
    </section>
  )
}

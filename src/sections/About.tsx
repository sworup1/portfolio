import { Section } from '../components/ui/Section'
import { profile } from '../data/portfolio'

export function About() {
  return (
    <Section id="about" kicker="About" title="The short version">
      <div className="about">
        <p className="about__intro">{profile.intro}</p>
        <div className="about__story">
          {profile.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}

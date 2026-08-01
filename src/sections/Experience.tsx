import { Section } from '../components/ui/Section'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Where I’ve worked">
      <ul className="experience">
        {experience.map((item) => (
          <li key={item.role} className="experience__item">
            <p className="experience__period">{item.period}</p>
            <div>
              <h3 className="experience__role">{item.role}</h3>
              <p className="experience__company">{item.company}</p>
              <p className="experience__summary">{item.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

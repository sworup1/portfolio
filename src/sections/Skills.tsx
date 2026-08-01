import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section section--bordered">
      <div className="container">
        <div className="skills">
          <div className="skills__intro">
            <p className="kicker">Skills</p>
            <h2 className="section__title">Tools I reach for</h2>
            <p className="section__lead">
              A short list of what I use daily. The tools change; the craft doesn’t.
            </p>
          </div>
          <ul className="skills__list">
            {skillGroups.map((group) => (
              <li key={group.title} className="skill">
                <h3 className="skill__title">{group.title}</h3>
                <p className="skill__items">{group.skills.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

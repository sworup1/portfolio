import { Section } from '../components/ui/Section'
import { Emphatic } from '../components/ui/Emphatic'
import { Icon } from '../components/Icons'
import { projects, type Project } from '../data/portfolio'

const externalAttrs = { target: '_blank', rel: 'noreferrer noopener' } as const

function ProjectRow({ project }: { project: Project }) {
  const external = project.href.startsWith('http')
  return (
    <li className="project">
      <div className="project__meta">
        <span>{project.year}</span>
        <span>{project.role}</span>
      </div>
      <div>
        <h3 className="project__name">
          <a href={project.href} {...(external ? externalAttrs : {})}>
            {project.name}
          </a>
        </h3>
        <p className="project__brief">{project.brief}</p>
        <p className="project__outcome">
          <Emphatic segments={project.outcome} />
        </p>
        <p className="project__tech">{project.tech.join(' · ')}</p>
        <a href={project.href} className="project__link" {...(external ? externalAttrs : {})}>
          View project
          <Icon name="arrowUpRight" size={16} className="project__link-icon" />
        </a>
      </div>
    </li>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured">
      <div className="featured__header">
        <p className="featured__kicker">Featured · {project.year}</p>
        <h3 className="featured__name">
          <a href={project.href} {...externalAttrs}>
            {project.name}
          </a>
        </h3>
      </div>
      <div className="featured__body">
        <p className="featured__brief">{project.brief}</p>
        <p className="featured__outcome">
          <Emphatic segments={project.outcome} />
        </p>
        <p className="featured__tech">{project.tech.join(' · ')}</p>
        <a href={project.href} className="featured__link" {...externalAttrs}>
          View project
          <Icon name="arrowUpRight" size={16} className="featured__link-icon" />
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)
  return (
    <Section id="projects" kicker="Selected work" title="What the work did">
      {featured && <FeaturedProject project={featured} />}
      <ul className="projects">
        {rest.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </ul>
    </Section>
  )
}

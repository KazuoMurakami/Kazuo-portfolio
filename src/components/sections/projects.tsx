import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { ReddPreview } from '@/components/redd-preview'
import { BrowserFrame } from '@/components/browser-frame'
import { MigrationPreview } from '@/components/migration-preview'

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="band" aria-labelledby="projects-title">
      <header className="band-head">
        <h2 id="projects-title">
          Projetos recentes{' '}
          <span className="soft">e o que eu fiz em cada um.</span>
        </h2>
        <p>
          Quando o código é de um cliente ou da empresa, mostro o que dá para
          mostrar: telas reais dos sites públicos e um recorte com dados
          fictícios do sistema interno.
        </p>
      </header>

      {featured.map((project, i) => {
        const name = project.shortTitle ?? project.title
        const className =
          project.mock === 'system'
            ? 'case case-wide'
            : i % 2 === 0
              ? 'case case-flip'
              : 'case'
        return (
          <article className={className} key={project.id}>
            <div className="case-copy">
              <div className="case-tags">
                {project.tags.map((tag, t) => (
                  <span key={tag} className={t === 0 ? 'tag' : 'tag tag-soft'}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3>
                <Link href={'/projetos/' + project.id}>{name}</Link>
              </h3>
              <p className="case-kind">{project.discipline}</p>
              <p className="case-text">{project.description}</p>
              <p className="case-stack">
                {project.technologies.slice(0, 5).join(', ')}
              </p>
              {project.metrics && (
                <dl className="metrics">
                  {project.metrics
                    .slice(0, project.mock === 'system' ? 4 : 3)
                    .map((metric) => (
                      <div key={metric.label}>
                        <dt>{metric.label}</dt>
                        <dd>{metric.value}</dd>
                      </div>
                    ))}
                </dl>
              )}
              <div className="case-actions">
                <Link
                  href={'/projetos/' + project.id}
                  className="btn btn-dark btn-sm"
                >
                  Ver detalhes
                  <span className="sr-only"> de {name}</span>
                </Link>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="btn btn-line btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir o site
                    <span className="sr-only">
                      {' '}
                      de {name} (abre em nova aba)
                    </span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <figure className="case-visual">
              {project.mock === 'system' ? (
                <ReddPreview />
              ) : project.mock === 'migration' ? (
                <MigrationPreview />
              ) : (
                project.shots[0] && (
                  <Link
                    href={'/projetos/' + project.id}
                    className="shot-link"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <BrowserFrame
                      {...project.shots[0]}
                      sizes="(max-width: 1023px) 92vw, 700px"
                    />
                  </Link>
                )
              )}
              {project.caption && <figcaption>{project.caption}</figcaption>}
            </figure>
          </article>
        )
      })}

      <div className="others">
        <div className="others-head">
          <h3>Outros projetos</h3>
          <p>Automação, projetos de estudo e trabalhos anteriores.</p>
        </div>
        <ul role="list">
          {others.map((project) => (
            <li key={project.id}>
              <Link href={'/projetos/' + project.id} className="others-title">
                {project.title}
              </Link>
              <span className="others-text">{project.description}</span>
              <span className="others-stack">
                {project.technologies.slice(0, 3).join(', ')}
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

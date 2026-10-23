import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { projects } from '@/lib/projects'
import { Navbar } from '@/components/navbar'
import { ReddPreview } from '@/components/redd-preview'
import { MigrationPreview } from '@/components/migration-preview'
import { BrowserFrame } from '@/components/browser-frame'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }))
}

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const project = projects.find((item) => item.id === params.id)
  return {
    title:
      (project ? project.title : 'Projeto não encontrado') +
      ' | Octavio Murakami',
    description: project?.description,
  }
}

export default function ProjetoPage({ params }: { params: { id: string } }) {
  const project = projects.find((item) => item.id === params.id)
  if (!project) notFound()
  const index = projects.findIndex((item) => item.id === project.id)
  const next = projects[(index + 1) % projects.length]
  const facts = [
    { label: 'Papel', value: project.role || 'Desenvolvimento de software' },
    project.period && { label: 'Período', value: project.period },
    { label: 'Stack', value: project.technologies.slice(0, 5).join(', ') },
    project.commits && { label: 'Commits', value: project.commits },
  ].filter((fact): fact is { label: string; value: string } => !!fact)
  const hasVisual = !!project.mock || project.shots.length > 0

  return (
    <div className="frame">
      <Navbar />
      <main id="main-content">
        <div className="crumb band">
          <Link href="/#projects">
            <ArrowLeft size={17} aria-hidden="true" /> Todos os projetos
          </Link>
        </div>

        <header className="cs-hero band hero-dots">
          <div className="case-tags">
            {project.tags.map((tag, i) => (
              <span key={tag} className={i === 0 ? 'tag' : 'tag tag-soft'}>
                {tag}
              </span>
            ))}
          </div>
          <h1>{project.title}</h1>
          <p className="cs-lead">{project.description}</p>
          {(project.demoUrl || project.github) && (
            <div className="case-actions">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir o site
                  <span className="sr-only"> (abre em nova aba)</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="btn btn-line"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={17} aria-hidden="true" /> Código no GitHub
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              )}
            </div>
          )}
        </header>

        <dl className="cs-facts band">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {hasVisual && (
          <figure className="cs-visual band">
            {project.mock === 'system' ? (
              <ReddPreview />
            ) : project.mock === 'migration' ? (
              <MigrationPreview />
            ) : (
              <div className="cs-gallery">
                {project.shots.map((shot, i) => (
                  <BrowserFrame
                    key={shot.src}
                    {...shot}
                    priority={i === 0}
                    sizes={
                      project.shots.length > 1
                        ? '(max-width: 859px) 92vw, 560px'
                        : '(max-width: 859px) 92vw, 880px'
                    }
                  />
                ))}
              </div>
            )}
            {project.caption && <figcaption>{project.caption}</figcaption>}
          </figure>
        )}

        {project.metrics && (
          <dl className="cs-metrics band">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.context && (
          <section className="cs-block band" aria-labelledby="cs-context">
            <h2 id="cs-context">Contexto</h2>
            <p className="cs-text">{project.context}</p>
          </section>
        )}
        {project.features && (
          <section className="cs-block band" aria-labelledby="cs-features">
            <h2 id="cs-features">O que faz</h2>
            <ul className="arrow-list" role="list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}
        {project.highlights && (
          <section className="cs-block band" aria-labelledby="cs-decisions">
            <h2 id="cs-decisions">Decisões</h2>
            <div className="decisions">
              {project.highlights.map((highlight) => (
                <article key={highlight.title}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {project.sections && (
          <section className="cs-block band" aria-labelledby="cs-technical">
            <h2 id="cs-technical">Detalhes técnicos</h2>
            <div className="technical">
              {project.sections.map((section) => (
                <details key={section.title}>
                  <summary>{section.title}</summary>
                  <ul>
                    {section.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>
        )}

        <Link href={'/projetos/' + next.id} className="next-project band">
          <span>
            <small>Próximo projeto</small>
            <strong>{next.shortTitle ?? next.title}</strong>
          </span>
          <ArrowRight size={32} aria-hidden="true" />
        </Link>
      </main>
      <ContactFooterSection />
    </div>
  )
}

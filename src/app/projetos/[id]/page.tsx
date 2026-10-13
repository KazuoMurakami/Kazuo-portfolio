import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { ReddPreview } from '@/components/redd-preview'
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
    title: project
      ? project.title + ' | Octavio Murakami'
      : 'Projeto não encontrado',
    description: project?.description,
  }
}

export default function ProjetoPage({ params }: { params: { id: string } }) {
  const project = projects.find((item) => item.id === params.id)
  if (!project) notFound()
  const index = projects.findIndex((item) => item.id === project.id)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Navbar />
      <main id="main-content" className="case-page site-shell">
        <Link href="/#projects" className="case-back">
          <ArrowLeft size={17} aria-hidden="true" /> Todos os trabalhos
        </Link>
        <header className="case-header">
          {project.discipline && (
            <p className="case-kind">{project.discipline}</p>
          )}
          <h1>{project.title}</h1>
          <p className="case-lead">{project.description}</p>
          <dl className="case-meta">
            <div>
              <dt>Papel</dt>
              <dd>{project.role || 'Desenvolvimento de software'}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.technologies.join(', ')}</dd>
            </div>
          </dl>
        </header>
        <figure className="case-visual">
          {project.id === 'redd' ? (
            <ReddPreview />
          ) : (
            <div className="case-image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 92vw, 1100px"
                className="object-contain"
              />
            </div>
          )}
          {project.id === 'redd' && (
            <figcaption>
              Recorte ilustrativo com dados fictícios. Alterne entre CRM e
              Produção para ver os dois fluxos.
            </figcaption>
          )}
        </figure>
        {(project.demoUrl || project.github) && (
          <div className="case-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar o site <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código no GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
        {project.context && (
          <section className="case-block" aria-labelledby="case-context">
            <h2 id="case-context">Contexto</h2>
            <p className="case-text">{project.context}</p>
          </section>
        )}
        {project.features && (
          <section className="case-block" aria-labelledby="case-features">
            <h2 id="case-features">O que faz</h2>
            <ul className="case-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}
        {project.highlights && (
          <section className="case-block" aria-labelledby="case-highlights">
            <h2 id="case-highlights">Decisões</h2>
            <div className="case-highlights">
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
          <section className="case-block" aria-labelledby="case-technical">
            <h2 id="case-technical">Detalhes técnicos</h2>
            <div className="case-technical">
              {project.sections.map((section) => (
                <details key={section.title}>
                  <summary>{section.title}</summary>
                  {Array.isArray(section.content) ? (
                    <ul>
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </details>
              ))}
            </div>
          </section>
        )}
        <Link href={'/projetos/' + next.id} className="next-project">
          <span>
            <span className="next-label">Próximo projeto</span>
            <strong>{next.shortTitle || next.title}</strong>
          </span>
          <ArrowRight size={32} aria-hidden="true" />
        </Link>
      </main>
      <ContactFooterSection />
    </>
  )
}

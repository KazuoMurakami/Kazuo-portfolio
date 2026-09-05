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
        <Link href="/#projects" className="text-link case-back">
          <ArrowLeft size={17} aria-hidden="true" /> Todos os trabalhos
        </Link>
        <header className="case-header">
          <span className="eyebrow">
            {project.discipline || project.category} / Estudo de projeto
          </span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="case-meta">
            <div>
              <span className="eyebrow">Atuação</span>
              <p>{project.role || 'Desenvolvimento de software'}</p>
            </div>
            <div>
              <span className="eyebrow">Tecnologias</span>
              <ul className="tech-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>
        <figure
          className={
            'case-visual ' + (project.id === 'redd' ? 'redd-stage' : '')
          }
        >
          {project.id === 'redd' ? (
            <ReddPreview />
          ) : (
            <div className="case-image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 92vw, 1160px"
                className="object-contain"
              />
            </div>
          )}
          <figcaption>
            {project.id === 'redd'
              ? 'Representação ilustrativa dos fluxos. Use CRM e Produção para explorar.'
              : 'Visão do projeto / ' + (project.shortTitle || project.title)}
          </figcaption>
        </figure>
        <div className="case-actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar o site <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código no GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.context && (
          <section className="case-context">
            <span className="eyebrow">01 / O contexto</span>
            <h2>
              Antes do código,
              <br />
              <em>o problema.</em>
            </h2>
            <p>{project.context}</p>
          </section>
        )}
        {project.features && (
          <section className="case-features">
            <span className="eyebrow">O que o sistema faz</span>
            <h2>Da tela à operação.</h2>
            <ul>
              {project.features.map((feature, featureIndex) => (
                <li key={feature}>
                  <span>{String(featureIndex + 1).padStart(2, '0')}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.highlights && (
          <section
            className="case-highlights"
            aria-label="Decisões e destaques"
          >
            {project.highlights.map((highlight) => (
              <article key={highlight.title}>
                <ArrowUpRight size={25} aria-hidden="true" />
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </section>
        )}
        {project.sections && (
          <section className="case-technical">
            <span className="eyebrow">Por dentro do projeto</span>
            <h2>Notas de desenvolvimento.</h2>
            {project.sections.map((section) => (
              <details key={section.title}>
                <summary>
                  {section.title}
                  <span aria-hidden="true">+</span>
                </summary>
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
          </section>
        )}
        <Link href={'/projetos/' + next.id} className="next-project">
          <span>
            <span className="eyebrow">Próximo projeto</span>
            <strong>{next.shortTitle || next.title}</strong>
          </span>
          <ArrowRight size={36} aria-hidden="true" />
        </Link>
      </main>
      <ContactFooterSection />
    </>
  )
}

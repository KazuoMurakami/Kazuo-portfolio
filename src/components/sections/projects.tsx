import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { ReddPreview } from '@/components/redd-preview'

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="projects-section site-shell"
      aria-labelledby="projects-title"
    >
      <header className="section-head">
        <h2 id="projects-title" className="section-title">
          Trabalhos
        </h2>
        <p>
          Os dois sistemas em que trabalho hoje e alguns projetos anteriores.
        </p>
      </header>

      <div className="featured-list">
        {featured.map((project) => (
          <article className="featured-project" key={project.id}>
            <div className="featured-head">
              <h3>
                <Link href={'/projetos/' + project.id}>
                  {project.shortTitle}
                </Link>
              </h3>
              <p>{project.discipline}</p>
            </div>

            <figure className="featured-visual">
              {project.id === 'redd' ? (
                <ReddPreview />
              ) : (
                <div className="site-shot">
                  <div className="site-shot-bar">icecube.com.br</div>
                  <div className="site-shot-image">
                    <Image
                      src={project.image}
                      alt="Página inicial da IceCube, com o catálogo de produtos plásticos personalizados"
                      fill
                      sizes="(max-width: 899px) 92vw, 680px"
                    />
                  </div>
                </div>
              )}
              <figcaption>
                {project.id === 'redd' ? (
                  'Recorte ilustrativo com dados fictícios. Alterne entre CRM e Produção.'
                ) : (
                  <>
                    Página inicial do site público.{' '}
                    <a
                      href={project.demoUrl}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir o site
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </>
                )}
              </figcaption>
            </figure>

            <div className="featured-body">
              <p>{project.description}</p>
              <dl className="project-facts">
                <div>
                  <dt>Papel</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.technologies.slice(0, 5).join(', ')}</dd>
                </div>
              </dl>
              <Link href={'/projetos/' + project.id} className="text-link">
                Ver detalhes do projeto
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="other-projects">
        <h3>Outros projetos</h3>
        <ul>
          {others.map((project) => (
            <li key={project.id}>
              <Link href={'/projetos/' + project.id}>
                <span className="other-title">{project.title}</span>
                <span className="other-description">{project.description}</span>
                <span className="other-stack">
                  {project.technologies.slice(0, 3).join(', ')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

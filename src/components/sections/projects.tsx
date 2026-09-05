import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Plus } from 'lucide-react'
import { projects } from '@/lib/projects'
import { ReddPreview } from '@/components/redd-preview'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section site-shell"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow section-index">
            01 / Trabalhos selecionados
          </span>
          <h2 id="projects-title">
            Onde o código
            <br />
            <em>encontra a rotina.</em>
          </h2>
        </div>
        <p>
          Projetos que acompanho de perto.
          <br />
          Problemas reais, decisões e evolução contínua.
        </p>
      </div>
      <div className="featured-grid">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <article
              className={'featured-project featured-' + project.id}
              key={project.id}
            >
              <div
                className={
                  'project-stage ' +
                  (project.id === 'redd' ? 'redd-stage' : 'ice-stage')
                }
              >
                <div className="stage-label">
                  <span>{project.shortTitle}</span>
                  <span>
                    {project.id === 'redd'
                      ? 'SISTEMA INTERNO'
                      : 'CATÁLOGO → ORÇAMENTO'}
                  </span>
                </div>
                {project.id === 'redd' ? (
                  <ReddPreview />
                ) : (
                  <Link
                    href={'/projetos/' + project.id}
                    className="ice-preview"
                    aria-label="Conhecer o projeto IceCube"
                  >
                    <div className="preview-browser">
                      <span className="browser-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>icecube.com.br</span>
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </div>
                    <div className="ice-image">
                      <Image
                        src={project.image}
                        alt="Página da IceCube com catálogo de produtos plásticos personalizados"
                        fill
                        sizes="(max-width: 759px) 90vw, 42vw"
                      />
                    </div>
                  </Link>
                )}
                <div className="stage-caption">
                  <span>
                    {project.id === 'redd'
                      ? 'Recorte ilustrativo dos fluxos · experimente os botões'
                      : 'Site público + painel administrativo + API'}
                  </span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
              <div className="project-caption">
                <div className="project-number">0{index + 1}</div>
                <div>
                  <span className="eyebrow">{project.discipline}</span>
                  <h3>
                    <Link href={'/projetos/' + project.id}>
                      {project.shortTitle}
                      <ArrowUpRight size={30} aria-hidden="true" />
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                  <ul className="tech-list" aria-label="Tecnologias">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <Link
                    href={'/projetos/' + project.id}
                    className="text-link case-link"
                  >
                    Explorar o projeto{' '}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
      <details className="project-archive">
        <summary>
          <span>
            <span className="eyebrow">Também no meu percurso</span>Outros
            projetos & experimentos
          </span>
          <Plus size={27} aria-hidden="true" />
        </summary>
        <div className="archive-list">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <Link href={'/projetos/' + project.id} key={project.id}>
                <span>{project.title}</span>
                <span>{project.technologies.slice(0, 3).join(' / ')}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
        </div>
      </details>
    </section>
  )
}

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const experience = [
  {
    period: 'JAN 2025 — PRESENTE',
    company: 'REDD Brindes',
    title: 'Analista de Sistemas',
    description:
      'Evolução do sistema interno: interfaces, integrações, automações e recursos para a rotina comercial e de produção.',
    href: '/projetos/redd',
    tag: 'TRABALHO',
  },
  {
    period: 'PROJETO FREELANCE',
    company: 'IceCube',
    title: 'Desenvolvimento full-stack',
    description:
      'Desenvolvimento do catálogo B2B, painel administrativo e API que conectam produtos, clientes e orçamentos.',
    href: '/projetos/6',
    tag: 'FREELANCE',
  },
  {
    period: '2022 — 2024',
    company: 'Universidade São Judas Tadeu',
    title: 'Análise e Desenvolvimento de Sistemas',
    description:
      'Formação em desenvolvimento de software, algoritmos, estruturas de dados e banco de dados.',
    tag: 'FORMAÇÃO',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section site-shell"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow section-index">03 / Percurso</span>
          <h2 id="experience-title">
            Aprender, construir.
            <br />
            <em>E continuar.</em>
          </h2>
        </div>
        <p>
          O trabalho muda.
          <br />A vontade de entender, não.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.company}>
            <div className="experience-date">
              <span className="eyebrow">{item.period}</span>
              <span className="experience-tag">{item.tag}</span>
            </div>
            <div>
              <h3>{item.company}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            {item.href ? (
              <Link
                href={item.href}
                className="round-link"
                aria-label={'Conhecer o projeto ' + item.company}
              >
                <ArrowUpRight size={24} aria-hidden="true" />
              </Link>
            ) : (
              <span className="education-mark" aria-hidden="true">
                ↳
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

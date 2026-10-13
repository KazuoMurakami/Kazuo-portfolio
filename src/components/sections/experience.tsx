import Link from 'next/link'

const experience = [
  {
    period: 'jan. 2025 – atual',
    company: 'REDD Brindes',
    title: 'Analista de sistemas',
    description:
      'Evolução do sistema interno: telas, integrações, automações e recursos para a rotina comercial e de produção.',
    href: '/projetos/redd',
  },
  {
    period: 'Freelance',
    company: 'IceCube',
    title: 'Desenvolvedor full-stack',
    description:
      'Catálogo B2B, painel administrativo e API que conectam produtos, clientes e orçamentos.',
    href: '/projetos/6',
  },
  {
    period: '2022 – 2024',
    company: 'Universidade São Judas Tadeu',
    title: 'Análise e Desenvolvimento de Sistemas',
    description:
      'Desenvolvimento de software, algoritmos, estruturas de dados e banco de dados.',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section site-shell"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="section-title">
        Experiência
      </h2>
      <ol className="experience-list">
        {experience.map((item) => (
          <li key={item.company}>
            <p className="experience-period">{item.period}</p>
            <div>
              <h3>{item.company}</h3>
              <p className="experience-role">{item.title}</p>
              <p className="experience-description">{item.description}</p>
              {item.href && (
                <Link href={item.href} className="text-link">
                  Ver o projeto
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

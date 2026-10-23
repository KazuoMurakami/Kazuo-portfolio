import Link from 'next/link'

const experience = [
  {
    period: 'jan. 2025 – hoje',
    company: 'REDD Brindes',
    title: 'Analista de sistemas',
    description:
      'Desenvolvo o sistema interno da empresa: CRM, orçamentos, pedidos, produção, estoque, expedição e atendimento por WhatsApp. Também refiz o site, que está em fase final de testes.',
    href: '/projetos/redd',
    current: true,
  },
  {
    period: 'mar. – jul. 2026',
    company: 'IceCube',
    title: 'Desenvolvedor full-stack, freelance',
    description:
      'Principal desenvolvedor do site, do painel e da API de uma fabricante de plásticos injetados que vende para empresas por orçamento.',
    href: '/projetos/6',
  },
  {
    period: 'maio – jun. 2026',
    company: 'Inamorei',
    title: 'Desenvolvedor full-stack, com um parceiro',
    description:
      'Cartas de amor digitais pagas por Pix ou cartão, com texto escrito ou revisado por IA. Fiz o painel, a integração com a IA, a confirmação de pagamento e a página da carta.',
    href: '/projetos/inamorei',
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
      className="band"
      aria-labelledby="experience-title"
    >
      <header className="band-head">
        <h2 id="experience-title">Experiência</h2>
        <p>
          Os projetos da IceCube e do Inamorei foram feitos em paralelo ao meu
          trabalho na REDD.
        </p>
      </header>
      <ol className="timeline" role="list">
        {experience.map((item) => (
          <li key={item.company}>
            <p className="timeline-period">
              {item.current && <span className="live-dot" aria-hidden="true" />}
              {item.period}
            </p>
            <div>
              <h3>{item.company}</h3>
              <p className="timeline-role">{item.title}</p>
              <p className="timeline-text">{item.description}</p>
              {item.href && (
                <Link href={item.href} className="text-link">
                  Ver detalhes do projeto
                  <span className="sr-only"> {item.company}</span>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

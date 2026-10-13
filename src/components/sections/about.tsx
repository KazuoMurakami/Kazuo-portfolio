import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const practice = [
  {
    title: 'Interfaces',
    text: 'Catálogos, painéis e telas que uma equipe usa o dia inteiro. Organizo a informação para que a próxima ação fique óbvia.',
    tools: 'React, Next.js, TypeScript, Tailwind CSS',
  },
  {
    title: 'APIs e regras de negócio',
    text: 'Permissões, estados de pedido e os dados por trás de cada tela.',
    tools: 'Node.js, AdonisJS, NestJS, PostgreSQL',
  },
  {
    title: 'Integrações e automação',
    text: 'Fornecedores, atendimento por WhatsApp e tarefas repetitivas que não precisam continuar manuais.',
    tools: 'Python, Redis, n8n, APIs REST',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section site-shell"
      aria-labelledby="about-title"
    >
      <h2 id="about-title" className="section-title">
        Sobre
      </h2>
      <div className="about-grid">
        <figure className="portrait">
          <div className="portrait-image">
            <Image
              src="/profile.png"
              alt="Octavio Murakami"
              fill
              sizes="(max-width: 719px) 92vw, 360px"
            />
          </div>
          <figcaption>Octavio, ou Kazuo no GitHub.</figcaption>
        </figure>
        <div className="about-copy">
          <p className="about-lead">
            Gosto de entender como as coisas funcionam e de fazer as partes de
            um sistema conversarem.
          </p>
          <p>
            Na REDD, isso significa acompanhar um pedido do orçamento à
            expedição e trabalhar em cada etapa: a tela do vendedor, a regra que
            libera a produção, a integração com o fornecedor. Na IceCube,
            desenvolvi o site, o painel administrativo e a API de um catálogo
            B2B.
          </p>
          <p>
            Antes de escrever código, procuro entender o que a pessoa do outro
            lado da tela precisa fazer.
          </p>
          <a
            href="https://www.linkedin.com/in/octavio-murakami/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minha trajetória no LinkedIn
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <dl id="skills" className="practice-list">
            {practice.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>
                  <p>{item.text}</p>
                  <p className="practice-tools">{item.tools}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

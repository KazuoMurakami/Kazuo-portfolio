import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const practice = [
  {
    number: '01',
    title: 'Interfaces para trabalhar.',
    text: 'Catálogos, painéis e telas de operação. Organizo informação e ações para que a próxima etapa fique clara.',
    tools: 'React / Next.js / TypeScript',
  },
  {
    number: '02',
    title: 'O que acontece por trás.',
    text: 'APIs, permissões e regras de negócio. Conecto o que aparece na tela aos dados que sustentam o sistema.',
    tools: 'Node.js / AdonisJS / NestJS / PostgreSQL',
  },
  {
    number: '03',
    title: 'Menos trabalho repetido.',
    text: 'Integrações com fornecedores, atendimento e automações para tarefas que não precisam continuar manuais.',
    tools: 'Python / APIs / Redis / n8n',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="site-shell">
        <span className="eyebrow section-index">02 / Quem está por trás</span>
        <div className="about-grid">
          <figure className="portrait">
            <div className="portrait-image">
              <Image
                src="/profile.png"
                alt="Octavio Murakami"
                fill
                sizes="(max-width: 759px) 70vw, 280px"
                className="object-cover"
              />
            </div>
            <figcaption>
              Octavio, ou Kazuo no GitHub. <span aria-hidden="true">↗</span>
            </figcaption>
            <span className="portrait-sticker" aria-hidden="true">
              olá!
            </span>
          </figure>
          <div className="about-copy">
            <h2 id="about-title">
              Gosto de entender
              <br />
              <em>como as coisas funcionam.</em>
            </h2>
            <p>
              E de fazer as peças conversarem. Hoje, meu trabalho passa por
              sistemas internos na REDD e pelo desenvolvimento freelance da
              IceCube.
            </p>
            <p>
              Entre uma interface, uma integração e uma regra de negócio,
              procuro entender o que a pessoa do outro lado precisa fazer. É
              esse contexto que orienta o que eu construo.
            </p>
            <a
              href="https://www.linkedin.com/in/octavio-murakami/"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mais sobre minha trajetória{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div id="skills" className="practice-list">
          {practice.map((item) => (
            <article key={item.number}>
              <span className="eyebrow">{item.number} / NA PRÁTICA</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="practice-tools">{item.tools}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

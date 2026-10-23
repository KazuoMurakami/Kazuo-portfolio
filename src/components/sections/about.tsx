import Image from 'next/image'

const toolbox = [
  {
    title: 'Interface',
    tools: 'Next.js, React, TypeScript, Tailwind CSS, TanStack Query',
  },
  {
    title: 'API e dados',
    tools: 'Node.js, AdonisJS, NestJS, PostgreSQL, pgvector, MySQL, Redis',
  },
  {
    title: 'Integrações',
    tools: 'WhatsApp, APIs de fornecedores, Pix, Stripe, Claude e DeepSeek',
  },
  {
    title: 'Qualidade',
    tools: 'Playwright, Japa, CI com revisão de pull request, Git',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="about band" aria-labelledby="about-title">
      <figure className="about-photo">
        <div className="about-photo-frame">
          <Image
            src="/profile.png"
            alt="Octavio Murakami"
            fill
            sizes="(max-width: 859px) 320px, 380px"
          />
        </div>
        <figcaption>Octavio, ou Kazuo no GitHub.</figcaption>
      </figure>
      <div className="about-copy">
        <h2 id="about-title">
          Antes de abrir o editor, quero entender como a operação funciona.
        </h2>
        <p>
          Na REDD Brindes, isso significa saber que o laser e o silk têm filas
          próprias antes de desenhar a tela de gravação. Herdei a API de outra
          equipe e hoje cuido dela e do front-end.
        </p>
        <p>
          Gosto de sistemas que a equipe usa o dia inteiro sem precisar pensar
          neles. Para chegar lá, converso com quem está do outro lado da tela e
          mantenho as regras iguais na interface e na API.
        </p>
        <dl className="toolbox">
          {toolbox.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.tools}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

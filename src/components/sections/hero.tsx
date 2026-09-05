import { ArrowDown, ArrowDownRight, ArrowUpRight, Braces } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="hero site-shell" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" /> Desenvolvedor full-stack
        </span>
        <span className="eyebrow hero-edition">
          Portfólio selecionado / 2026
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Software para
            <br />a <em>vida real.</em>
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
          </h1>
          <p>
            Sou Octavio Murakami. Desenvolvo sistemas que fazem parte do dia a
            dia de uma empresa — da primeira conversa com o cliente ao pedido
            que sai da produção.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Conheça meu trabalho{' '}
              <ArrowDownRight size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/KazuoMurakami"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside
          className="workbench"
          aria-label="Minha atuação: interface, regras de negócio e dados"
        >
          <div className="workbench-top">
            <Braces size={22} aria-hidden="true" />
            <span>CADERNO DE TRABALHO / 01</span>
          </div>
          <div className="workbench-title">
            Do clique
            <br />
            <em>ao banco.</em>
          </div>
          <div className="system-layers">
            <div>
              <span>01</span> Interface <span>↗</span>
            </div>
            <div>
              <span>02</span> Regras de negócio <span>↔</span>
            </div>
            <div>
              <span>03</span> Dados & integrações <span>↳</span>
            </div>
          </div>
          <div className="workbench-bottom">
            <span>FRONTEND + BACKEND</span>
            <span aria-hidden="true">↙</span>
          </div>
          <span className="workbench-note">
            É aqui que as pontas se conectam.
          </span>
        </aside>
      </div>
      <div className="hero-bottom">
        <span>
          Atualmente, entre <a href="/projetos/redd">REDD</a> e{' '}
          <a href="/projetos/6">IceCube</a>.
        </span>
        <a href="#projects" className="scroll-cue">
          Role para explorar <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

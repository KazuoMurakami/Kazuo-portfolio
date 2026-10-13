import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="hero site-shell" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero-name">
        <span>Octavio</span> <span>Murakami</span>
      </h1>
      <div className="hero-body">
        <p className="hero-lead">
          Sou desenvolvedor full-stack e trabalho principalmente com sistemas
          internos de empresas: CRM, pedidos, produção, estoque e catálogos B2B.
        </p>
        <p className="hero-now">
          Hoje sou analista de sistemas na{' '}
          <Link href="/projetos/redd" className="text-link">
            REDD Brindes
          </Link>{' '}
          e, como freelancer, desenvolvo o catálogo da{' '}
          <Link href="/projetos/6" className="text-link">
            IceCube
          </Link>
          .
        </p>
        <div className="hero-actions">
          <a
            href="mailto:octaviokazuo12@hotmail.com"
            className="button-primary"
          >
            Mandar um e-mail
          </a>
          <a
            href="https://github.com/KazuoMurakami"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/octavio-murakami/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

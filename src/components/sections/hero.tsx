import Image from 'next/image'
import Link from 'next/link'
import {
  GitCommitHorizontal,
  Mail,
  MessagesSquare,
  MonitorCheck,
} from 'lucide-react'

export function HeroSection() {
  return (
    <section className="band" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero-badges">
          <span className="pill">
            <span className="live-dot" aria-hidden="true" />
            Aberto a projetos e vagas
          </span>
          <span className="pill pill-lime">
            <svg className="flag" viewBox="0 0 20 14" aria-hidden="true">
              <rect width="20" height="14" rx="2" fill="#009c3b" />
              <path d="M10 2 18 7 10 12 2 7z" fill="#ffdf00" />
              <circle cx="10" cy="7" r="2.8" fill="#002776" />
            </svg>
            São Paulo, Brasil
          </span>
        </div>
        <div className="avatar">
          <Image src="/avatar.webp" alt="" width={68} height={68} />
        </div>
        <h1 id="hero-title">
          Construo sistemas que levam o pedido
          <br />
          <span className="grad-text">do orçamento à{' '}entrega</span>
        </h1>
        <p className="hero-lead">
          Sou desenvolvedor full-stack. Na{' '}
          <Link href="/projetos/redd" className="text-link">
            REDD Brindes
          </Link>
          , cuido quase sozinho do sistema interno que a empresa usa todo dia.
          Como freelancer, fui o principal desenvolvedor do catálogo B2B da{' '}
          <Link href="/projetos/6" className="text-link">
            IceCube
          </Link>
          .
        </p>
        <div className="hero-actions">
          <a href="mailto:octaviokazuo12@hotmail.com" className="btn btn-dark">
            <Mail size={17} aria-hidden="true" />
            Mandar um e-mail
          </a>
          <Link href="#projects" className="btn btn-line">
            Ver projetos
          </Link>
        </div>
      </div>
      <ul className="proof" role="list">
        <li>
          <GitCommitHorizontal size={20} aria-hidden="true" />
          <span>
            <strong>1.200+ commits</strong> nestes projetos
          </span>
        </li>
        <li>
          <MonitorCheck size={20} aria-hidden="true" />
          <span>
            <strong>3 sistemas em uso</strong> e 1 em testes
          </span>
        </li>
        <li>
          <MessagesSquare size={20} aria-hidden="true" />
          <span>
            <strong>Contato direto</strong> com quem programa
          </span>
        </li>
      </ul>
    </section>
  )
}

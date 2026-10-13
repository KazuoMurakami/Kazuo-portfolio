import { ArrowUpRight } from 'lucide-react'

export function ContactFooterSection() {
  return (
    <footer
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="site-shell">
        <h2 id="contact-title" className="section-title">
          Contato
        </h2>
        <p className="contact-lead">
          Tem um sistema para evoluir, uma integração para fazer ou uma vaga
          aberta? Me mande um e-mail.
        </p>
        <a className="contact-email" href="mailto:octaviokazuo12@hotmail.com">
          octaviokazuo12@hotmail.com
        </a>
        <div className="contact-links">
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
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Octavio Murakami</span>
          <a href="#main-content">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  )
}

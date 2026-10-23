import { Github, Linkedin } from 'lucide-react'

export function ContactFooterSection() {
  return (
    <footer id="contact" aria-labelledby="contact-title">
      <div className="contact band">
        <h2 id="contact-title">Tem um sistema para tirar do papel?</h2>
        <p>
          Seja um projeto freelance ou uma vaga, me conte por e-mail o que você
          precisa. Eu mesmo respondo.
        </p>
        <a className="contact-email" href="mailto:octaviokazuo12@hotmail.com">
          octaviokazuo12@hotmail.com
        </a>
        <div className="hero-actions">
          <a
            href="https://github.com/KazuoMurakami"
            className="btn btn-line"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/octavio-murakami/"
            className="btn btn-line"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer">
        <span>© {new Date().getFullYear()} Octavio Murakami</span>
        <a href="#main-content">Voltar ao topo</a>
      </div>
    </footer>
  )
}

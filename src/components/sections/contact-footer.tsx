import { ArrowUpRight } from 'lucide-react'

export function ContactFooterSection() {
  return (
    <footer id="contact" className="contact-section">
      <div className="site-shell">
        <div className="contact-top">
          <span className="eyebrow">04 / Próxima conversa</span>
          <span className="contact-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="contact-grid">
          <h2>
            Tem um problema
            <br />
            <em>para resolver?</em>
          </h2>
          <div>
            <p>
              Um sistema para evoluir, uma integração que falta ou um projeto
              saindo do papel. Me conte o que você tem em mente.
            </p>
            <a className="contact-cta" href="mailto:octaviokazuo12@hotmail.com">
              Vamos conversar <ArrowUpRight size={26} aria-hidden="true" />
            </a>
            <a
              className="contact-email"
              href="mailto:octaviokazuo12@hotmail.com"
            >
              octaviokazuo12@hotmail.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Octavio Murakami</span>
          <div>
            <a
              href="https://github.com/KazuoMurakami"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/octavio-murakami/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="#main-content">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

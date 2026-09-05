import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page site-shell">
      <span className="eyebrow">404 / Caminho não encontrado</span>
      <h1>
        Esse projeto
        <br />
        <em>não está por aqui.</em>
      </h1>
      <p>
        Confira os trabalhos selecionados e conheça o que estou construindo.
      </p>
      <Link href="/#projects" className="button-primary">
        <ArrowLeft size={18} aria-hidden="true" /> Voltar aos trabalhos
      </Link>
    </main>
  )
}

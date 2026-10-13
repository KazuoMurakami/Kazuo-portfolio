import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page site-shell">
      <h1>Projeto não encontrado</h1>
      <p>
        O endereço pode ter mudado ou o projeto saiu do portfólio. A lista
        completa está na página inicial.
      </p>
      <Link href="/#projects" className="button-primary">
        <ArrowLeft size={17} aria-hidden="true" /> Ver todos os trabalhos
      </Link>
    </main>
  )
}

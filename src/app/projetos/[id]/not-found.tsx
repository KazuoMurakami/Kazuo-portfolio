import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <div className="frame">
      <Navbar />
      <main id="main-content" className="not-found-page">
        <span className="tag">404</span>
        <h1>Projeto não encontrado</h1>
        <p>
          O endereço pode ter mudado ou o projeto saiu do portfólio. A lista
          completa está na página inicial.
        </p>
        <Link href="/#projects" className="btn btn-dark">
          <ArrowLeft size={17} aria-hidden="true" /> Ver todos os projetos
        </Link>
      </main>
    </div>
  )
}

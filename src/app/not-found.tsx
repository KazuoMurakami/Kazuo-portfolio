import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Página não encontrada | Octavio Murakami',
}

export default function NotFound() {
  return (
    <div className="frame">
      <Navbar />
      <main id="main-content" className="not-found-page">
        <span className="tag">404</span>
        <h1>Página não encontrada</h1>
        <p>
          O endereço pode ter mudado ou ter sido digitado errado. Os projetos e
          o contato estão na página inicial.
        </p>
        <Link href="/" className="btn btn-dark">
          <ArrowLeft size={17} aria-hidden="true" /> Ir para a página inicial
        </Link>
      </main>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Trabalhos', href: '/#projects' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Experiência', href: '/#experience' },
  { label: 'Contato', href: '/#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggle.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 720px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [isOpen])

  return (
    <header className="site-header" ref={header}>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <div className="site-shell header-inner">
        <Link href="/" className="wordmark" onClick={() => setIsOpen(false)}>
          Octavio Murakami
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegação móvel"
        hidden={!isOpen}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

const links = [
  { label: 'Projetos', href: '/#projects' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Contato', href: '/#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggle.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 860px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [isOpen])

  return (
    <>
      {/* Catches taps outside the open menu so they don't reach the page. */}
      {isOpen && (
        <div
          className="menu-scrim"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}
      <header
        className="site-header"
        onBlur={(event) => {
          // Only keyboard focus leaving the header closes it; taps go to the scrim.
          const next = event.relatedTarget as Node | null
          if (next && !event.currentTarget.contains(next)) setIsOpen(false)
        }}
      >
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo
        </a>
        <div className="header-inner">
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="brand"
            aria-label="Octavio Murakami, página inicial"
            onClick={() => setIsOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              OM
            </span>
            <span className="brand-name" aria-hidden="true">
              Octavio
              <br />
              Murakami
            </span>
          </Link>
          <div className="header-actions">
            <a
              href="https://github.com/KazuoMurakami"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/octavio-murakami/"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (abre em nova aba)"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a
              href="mailto:octaviokazuo12@hotmail.com"
              className="btn btn-dark btn-sm"
            >
              <Mail size={16} aria-hidden="true" />
              Mandar um e-mail
            </a>
            <button
              ref={toggle}
              type="button"
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
          <a
            href="mailto:octaviokazuo12@hotmail.com"
            className="btn btn-dark"
            onClick={() => setIsOpen(false)}
          >
            <Mail size={16} aria-hidden="true" />
            Mandar um e-mail
          </a>
        </nav>
      </header>
    </>
  )
}

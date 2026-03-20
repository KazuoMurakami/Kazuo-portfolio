'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Center Nav - Desktop */}
        <div className="hidden md:flex liquid-glass rounded-full px-2 py-2 items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/KazuoMurakami"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors"
          >
            GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden liquid-glass rounded-full p-3"
        >
          <div
            className={`w-5 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}
          />
          <div
            className={`w-5 h-0.5 bg-white mt-1.5 transition-transform ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 liquid-glass rounded-2xl p-4 max-w-7xl mx-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/KazuoMurakami"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

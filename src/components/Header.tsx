'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-50 backdrop-blur-md border-b-2">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center ">
          <Image src="/Subtract.svg" alt="logo" width={50} height={50} />
          <div className="hidden md:flex space-x-8">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#projects">Habilidades</NavLink>
            <NavLink href="/profile">Contatos</NavLink>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className="block text-gray-500 hover:text-gray-950 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

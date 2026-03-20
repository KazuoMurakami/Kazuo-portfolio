'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="text-8xl mb-8 inline-block"
          >
            🕵️
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
            Página não encontrada
          </h1>
          <p className="text-white/60 font-light text-base leading-relaxed mb-10">
            Parece que você se perdeu no caminho. A página que você está
            procurando não existe ou foi movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Página Inicial
          </Link>
          <button
            onClick={() => window.history.back()}
            className="liquid-glass rounded-full px-6 py-3 text-white/80 font-medium hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
        </motion.div>
      </div>
    </div>
  )
}

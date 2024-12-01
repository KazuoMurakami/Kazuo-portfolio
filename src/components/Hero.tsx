'use client'

import { motion } from 'framer-motion'
import { BackgroundLines } from './ui/background-lines'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Octavio Murakami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-accent"
        >
          Desenvolvedor Full-Stack Inovador e Criativo, Transformando Ideias em
          Realidade com Tecnologia.
        </motion.p>
      </BackgroundLines>
    </section>
  )
}

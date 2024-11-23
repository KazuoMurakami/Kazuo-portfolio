'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          John Doe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-accent"
        >
          IT Professional & Full-Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="border border-white px-8 py-3 text-white hover-accent transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

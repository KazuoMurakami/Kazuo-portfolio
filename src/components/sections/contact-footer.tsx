'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export function ContactFooterSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] via-transparent to-transparent z-0" />

      {/* Top Fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center min-h-[400px] justify-center">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white tracking-tight leading-[0.9] mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos criar algo incrível juntos.
        </motion.h2>

        <motion.p
          className="text-white/60 font-light text-sm md:text-base max-w-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Pronto para transformar suas ideias em realidade? Estou empolgado em
          trazer minha experiência e paixão por desenvolvimento web para seu
          próximo projeto.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:octaviokazuo12@hotmail.com"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            octaviokazuo12@hotmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/octavio-murakami/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/KazuoMurakami"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/octavio-murakami/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:octaviokazuo12@hotmail.com"
            className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} Octavio Murakami
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KazuoMurakami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/octavio-murakami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:octaviokazuo12@hotmail.com"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

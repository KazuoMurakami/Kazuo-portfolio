'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { BlurText } from '@/components/blur-text'
import { AnimatedBackground } from '@/components/animated-bg'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-[300px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Badge */}
        <motion.div
          className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-medium">
            Open to Work
          </span>
          <span className="text-white/80 text-sm pr-3">
            Desenvolvedor Full-Stack
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Octavio Murakami"
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif italic text-white leading-[0.85] tracking-[-0.04em] max-w-5xl"
          delay={0.2}
        />

        {/* Subtext */}
        <motion.p
          className="mt-8 text-white/60 font-light text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Desenvolvedor Full-Stack inovador e criativo, transformando ideias em
          realidade com tecnologia. Foco em React, Next.js, Node.js e Python.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Entre em Contato
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KazuoMurakami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/octavio-murakami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

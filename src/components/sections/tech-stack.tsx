'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
]

export function TechStackSection() {
  return (
    <section className="py-16 px-6 bg-black">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-12">
          <span className="text-white/80 text-xs font-medium">
            Tecnologias que domino
          </span>
        </div>

        {/* Tech Names */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="text-2xl md:text-3xl font-serif italic text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

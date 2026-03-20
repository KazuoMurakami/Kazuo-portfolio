'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
          <span className="text-white/80 text-xs font-medium">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-[0.9]">
          Projetos em destaque.
        </h2>
      </div>

      {/* Alternating Project Rows */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Text */}
            <div className="lg:w-1/2 space-y-6">
              <div className="liquid-glass rounded-full px-3 py-1 inline-block">
                <span className="text-white/70 text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="liquid-glass rounded-full px-3 py-1 text-white/80 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href={`/projetos/${project.id}`}
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  Ver detalhes
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white flex items-center gap-2 text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código fonte
                  </a>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

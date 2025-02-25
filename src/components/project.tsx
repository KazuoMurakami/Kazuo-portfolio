import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'
import { projects } from '@/lib/projects'

export function ProjectsSection() {
  return (
    <section className="py-16" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 border-b-4 border-primary inline-block">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Uma seleção dos meus projetos mais recentes e relevantes,
            demonstrando minhas habilidades em desenvolvimento web e mobile.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

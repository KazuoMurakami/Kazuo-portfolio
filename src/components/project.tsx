'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectCard } from './project-card'

interface Project {
  title: string
  description: string
  image: string
  github: string
  category: 'featured' | 'web' | 'mobile'
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Blog',
    description: 'Blog criado com NextJS, Typescript, Prisma e MySQL',
    image: '/blog.png',
    github: 'https://github.com/KazuoMurakami/Post-TECH',
    category: 'featured',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
  },
  {
    title: 'FinanceIA',
    description:
      'Aplicativo de controle financeiro, utilizando NextJS, Prisma, Postgres, Typescript',
    image: '/finance.jpg',
    github: 'https://github.com/KazuoMurakami/fullstackweek-financeai',
    category: 'featured',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'InOrbit',
    description: 'A customer relationship management system built on AWS',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/KazuoMurakami/InOrbit',
    category: 'featured',
    technologies: ['AWS', 'React', 'Node.js'],
  },
]

export function ProjectsSection() {
  const [activeTab] = useState('all')

  const filteredProjects = projects.filter(
    (project) => activeTab === 'all' || project.category === activeTab,
  )

  return (
    <section className="py-16" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Uma seleção dos meus projetos mais recentes e relevantes,
            demonstrando minhas habilidades em desenvolvimento web e mobile.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="gap-3">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="featured">Destaque</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

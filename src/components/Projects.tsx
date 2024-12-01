'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'

interface Project {
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Blog',
    description: 'Blog criado com NextJS, Typescript, Prisma e MySQL',
    image: '/blog.png',
  },
  {
    title: 'FinanceIA',
    description:
      'Aplicativo de controle financeiro, utilizando NextJS, Prisma, Postgres, Typescript',
    image: '/finance.jpg',
  },
  {
    title: 'Cloud-based CRM',
    description: 'A customer relationship management system built on AWS',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-accent overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-accent">{project.description}</p>
            </div>
            <Button className="bg-gray-950 rounded text-white" variant={'link'}>
              Acesse o site/ou o github do projeto
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

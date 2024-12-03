'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Blog',
    description: 'Blog criado com NextJS, Typescript, Prisma e MySQL',
    image: '/blog.png',
    github: 'https://github.com/KazuoMurakami/Post-TECH',
  },
  {
    title: 'FinanceIA',
    description:
      'Aplicativo de controle financeiro, utilizando NextJS, Prisma, Postgres, Typescript',
    image: '/finance.jpg',
    github: 'https://github.com/KazuoMurakami/fullstackweek-financeai',
  },
  {
    title: 'InOrbit',
    description: 'A customer relationship management system built on AWS',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/KazuoMurakami/InOrbit',
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
            <Link
              className="bg-gray-950 rounded text-white p-4 flex justify-center"
              href={project.github}
              target="_blank"
            >
              <span>Acesse o site/ou o github do projeto</span>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link">Detalhes do projeto</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, quibusdam, commodi dolores excepturi recusandae
                debitis in repudiandae error porro id at nostrum fuga veritatis
                dolore animi eligendi, accusantium temporibus quos.
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

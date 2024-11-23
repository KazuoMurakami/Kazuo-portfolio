'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot using Python and machine learning',
    image: '/placeholder.svg?height=400&width=600',
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
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-accent">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

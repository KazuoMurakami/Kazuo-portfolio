'use client'

import { motion } from 'framer-motion'

const skills = [
  'React',
  'Node.js',
  'NextJs',
  'Prisma ORM',
  'Fastify',
  'TypeScript',
]

export function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-accent p-4 text-center hover-accent transition-colors hover:text-white"
        >
          <p className="text-lg cursor-pointer">{skill}</p>
        </motion.div>
      ))}
    </div>
  )
}

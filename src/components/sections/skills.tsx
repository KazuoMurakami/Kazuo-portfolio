'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Database,
  Workflow,
  Layout,
  Bot,
  Globe,
  GitBranch,
} from 'lucide-react'

const skills = [
  {
    icon: Layout,
    title: 'Frontend',
    description: 'React, Next.js, TypeScript, Tailwind CSS, Shadcn UI',
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Node.js, Fastify, Express, API REST, Python',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'PostgreSQL, Prisma ORM, Supabase',
  },
  {
    icon: Workflow,
    title: 'Automação',
    description: 'N8N, Selenium, BeautifulSoup, Pandas, Web Scraping',
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial',
    description: 'OpenAI API, Chatbots, Integração com IA',
  },
  {
    icon: Code2,
    title: 'Linguagens',
    description: 'TypeScript, JavaScript, Python, HTML5, CSS3',
  },
  {
    icon: Globe,
    title: 'Design Responsivo',
    description: 'Mobile-first, Acessibilidade, UX/UI',
  },
  {
    icon: GitBranch,
    title: 'DevOps & Ferramentas',
    description: 'Git, GitHub, ESLint, CI/CD, Prisma Migrations',
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
          <span className="text-white/80 text-xs font-medium">Habilidades</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-[0.9]">
          Competências técnicas.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="liquid-glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <skill.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-serif italic text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-white/60 font-light text-sm">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

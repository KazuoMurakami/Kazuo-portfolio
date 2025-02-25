interface Project {
  title: string
  description: string
  image: string
  github: string
  category: 'featured' | 'web' | 'mobile'
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: 'Blog',
    description: 'Blog criado com NextJS, Typescript, Prisma e MySQL',
    image: '/blog.png',
    github: 'https://github.com/KazuoMurakami/Post-TECH',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
  },
  {
    title: 'FinanceIA',
    description:
      'Aplicativo de controle financeiro, utilizando NextJS, Prisma, Postgres, Typescript',
    image: '/finance.png',
    github: 'https://github.com/KazuoMurakami/fullstackweek-financeai',
    category: 'featured',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Nlw-Nodejs',
    description:
      'O pass.in é uma aplicação de gestão de participantes em eventos presenciais.',
    image: '',
    github: 'https://github.com/KazuoMurakami/Nlw-Nodejs',
    category: 'web',
    technologies: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
]

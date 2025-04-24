export interface Project {
  id: string
  title: string
  description: string
  image: string
  github?: string
  demoUrl?: string
  category: 'back-end' | 'web' | 'mobile'
  technologies: string[]
  features?: string[]
  highlights?: Array<{
    title: string
    description: string
  }>
  sections?: Array<{
    title: string
    content: string | string[]
  }>
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Potence-blog',
    description:
      'Site institucional completo para empresa de brindes promocionais com catálogo de produtos e blog integrado.',
    image: '/pot.png',
    category: 'web',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    features: [
      'Blog informativo sobre brindes promocionais',
      'Painel administrativo completo',
      'Sistema de upload e gerenciamento de imagens',
      'Design responsivo para mobile e desktop',
    ],
    highlights: [
      {
        title: 'Para Visitantes',
        description:
          'Interface intuitiva com catálogo de produtos, filtros por categoria, detalhes de produtos com imagens e blog informativo sobre uso estratégico de brindes.',
      },
      {
        title: 'Para Administradores',
        description:
          'Painel completo para gerenciamento de produtos, categorias personalizáveis, sistema integrado de upload de imagens e controle de publicação.',
      },
    ],
    sections: [
      {
        title: 'Frontend',
        content: [
          'Next.js 14: Framework React com renderização híbrida (SSR/SSG)',
          'TypeScript: Para tipagem estática e melhor manutenção do código',
          'Tailwind CSS: Para estilização moderna e responsiva',
          'Shadcn UI: Componentes de interface reutilizáveis e estilizáveis',
          'React Hook Form: Gerenciamento eficiente de formulários com validação',
          'Zod: Validação de esquemas para dados de formulário',
        ],
      },
      {
        title: 'Backend',
        content: [
          'Next.js API Routes: API REST para interação com o banco de dados',
          'Prisma ORM: Mapeamento objeto-relacional para interação com o banco de dados',
          'PostgreSQL: Banco de dados relacional para armazenamento persistente',
          'NextAuth.js: Sistema de autenticação seguro com múltiplas estratégias',
          'AWS S3: Armazenamento de imagens e arquivos em nuvem',
        ],
      },
      {
        title: 'DevOps',
        content: [
          'ESLint/TypeScript: Garantia de qualidade de código',
          'Prisma Migrations: Controle de versão do esquema de banco de dados',
          'Seed Scripts: Povoamento do banco de dados para desenvolvimento e teste',
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'FinanceIA',
    description:
      'Aplicativo de controle financeiro pessoal com análise de gastos e integração com IA para insights personalizados.',
    image: '/finance.png',
    github: 'https://github.com/KazuoMurakami/fullstackweek-financeai',
    category: 'back-end',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'OpenAI API',
    ],
    features: [
      'Dashboard de controle financeiro',
      'Análise de gastos por categoria',
      'Integração com IA para insights financeiros',
      'Geração de relatórios personalizados',
      'Interface responsiva e intuitiva',
    ],
    highlights: [
      {
        title: 'Gestão Financeira',
        description:
          'Controle completo de receitas e despesas com categorização automática e visualizações gráficas.',
      },
      {
        title: 'Inteligência Artificial',
        description:
          'Análise de padrões de gastos e recomendações personalizadas para melhorar a saúde financeira.',
      },
    ],
  },
  {
    id: '3',
    title: 'Nlw-Nodejs',
    description:
      'Sistema de gestão de participantes para eventos presenciais com check-in e emissão de credenciais.',
    image: '',
    github: 'https://github.com/KazuoMurakami/Nlw-Nodejs',
    category: 'web',
    technologies: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Express'],
    features: [
      'Cadastro e gestão de participantes',
      'Sistema de check-in com QR Code',
      'Emissão de credenciais personalizadas',
      'Relatórios de presença em tempo real',
      'API RESTful para integração com aplicativo móvel',
    ],
    highlights: [
      {
        title: 'Gestão de Eventos',
        description:
          'Sistema completo para gerenciamento de participantes em eventos presenciais com ferramentas de check-in.',
      },
      {
        title: 'Arquitetura Escalável',
        description:
          'Backend desenvolvido com Node.js e TypeScript seguindo princípios de clean architecture para garantir escalabilidade.',
      },
    ],
  },
]

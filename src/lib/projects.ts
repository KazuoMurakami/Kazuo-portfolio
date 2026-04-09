export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demoUrl?: string;
  category: "back-end" | "web" | "mobile";
  technologies: string[];
  features?: string[];
  highlights?: Array<{
    title: string;
    description: string;
  }>;
  sections?: Array<{
    title: string;
    content: string | string[];
  }>;
}

export const projects: Project[] = [
  {
    id: "6",
    title: "IceCube - Plataforma E-commerce B2B",
    description:
      "Plataforma e-commerce B2B completa para fabricante de plásticos injetáveis personalizados. Sistema de orçamentos, painel administrativo e storefront com arquitetura monorepo de 3 projetos independentes.",
    image: "/icecube.png",
    demoUrl: "https://icecube.com.br",
    category: "web",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Supabase S3",
      "Swagger",
    ],
    features: [
      "Storefront público com catálogo de 50+ produtos e sistema de orçamentos",
      "Painel administrativo com CRUD completo, RBAC (4 roles) e dashboard",
      "API REST com autenticação JWT dupla (cliente + admin), rate limiting e Swagger docs",
      "Upload de imagens via Supabase Storage (S3) com organização por pastas",
      "BFF pattern no storefront com cookies httpOnly para segurança",
      "Sistema de carrinho de orçamentos via cookies com TTL de 7 dias",
      "SEO otimizado com SSR, generateMetadata e generateStaticParams",
      "Mock mode para desenvolvimento frontend independente da API",
    ],
    highlights: [
      {
        title: "Arquitetura Monorepo Full-Stack",
        description:
          "3 projetos independentes (Storefront Next.js 16, Admin Panel Next.js 15 + TS, API NestJS 10) comunicando via REST. Cada projeto roda em porta própria com deploys independentes. Padrão BFF no storefront para segurança de autenticação.",
      },
      {
        title: "Sistema de Orçamentos B2B",
        description:
          "Fluxo completo de solicitação de orçamento substituindo carrinho tradicional. Cliente monta lista de produtos com cores e quantidades, solicita orçamento, e acompanha status pela área logada. Admin gerencia, precifica e responde pelo painel.",
      },
      {
        title: "RBAC + JWT Duplo",
        description:
          "Autenticação com dois JWT secrets separados (cliente e admin), guards específicos por tipo de usuário, e sistema RBAC com 4 roles (admin, manager, seller, purchasing) controlando acesso tanto no middleware server-side quanto na sidebar client-side.",
      },
      {
        title: "DX e Produtividade",
        description:
          "Factories genéricas como createCrudApi<T>() e hook useFetch<T>() no admin. Schema Drizzle com camelCase/snake_case automático. Mock mode no storefront para desenvolvimento desacoplado. Swagger auto-gerado para documentação da API.",
      },
    ],
    sections: [
      {
        title: "Storefront (Next.js 16 + JSX)",
        content: [
          "Next.js 16 com App Router, RSC async pages e revalidate para cache ISR",
          "Client Islands pattern: Server Components para SEO + Client Components para interatividade",
          "BFF pattern com route handlers como proxy para API (cookies httpOnly)",
          "React Hook Form + Zod para formulários com máscaras (CPF, CNPJ, CEP, telefone)",
          "Carrinho via cookie JSON com chave única (product_id, color_product_id)",
          "Mock mode automático quando API não está disponível",
        ],
      },
      {
        title: "Admin Panel (Next.js 15 + TypeScript)",
        content: [
          "createCrudApi<T, TCreate, TUpdate>() factory para geração automática de endpoints CRUD",
          "useFetch<T>(path) hook com suporte a skip condicional (path=null)",
          "DataTable genérico com edição inline, exclusão e busca",
          "RBAC em 3 camadas: middleware server-side, permissions.ts e sidebar filtering",
          "Gestão de produtos com upload múltiplo de imagens, variantes e cores",
          "Sistema de orçamentos com timeline de status e precificação",
        ],
      },
      {
        title: "API (NestJS 10 + Drizzle ORM)",
        content: [
          "NestJS com módulos por domínio, DTOs com class-validator e Swagger auto-gerado",
          "Drizzle ORM com PostgreSQL, migrations e schema type-safe",
          "JWT duplo com guards separados (CustomerAuthGuard + AdminAuthGuard)",
          "Soft delete padrão em entidades principais, hard delete em tabelas de junção N:N",
          "Paginação padronizada com paginationMeta(total, page, perPage)",
          "Upload S3 via Supabase Storage com organização por pastas (produtos, banners, etc.)",
          "Rate limiting com ThrottlerGuard e proteção customizada em endpoints de auth",
        ],
      },
      {
        title: "Infraestrutura",
        content: [
          "PostgreSQL como banco principal com schema relacional complexo (25+ entidades)",
          "Supabase Storage (S3-compatible) para assets de imagens",
          "Deploy independente de cada projeto com variáveis de ambiente separadas",
          "Formatação unificada com Prettier (sem semi, single quotes, trailing comma none)",
        ],
      },
    ],
  },
  {
    id: "1",
    title: "Potence-blog",
    description:
      "Site institucional completo para empresa de brindes promocionais com catálogo de produtos e blog integrado.",
    image: "/pot.png",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    features: [
      "Blog informativo sobre brindes promocionais",
      "Painel administrativo completo",
      "Sistema de upload e gerenciamento de imagens",
      "Design responsivo para mobile e desktop",
    ],
    highlights: [
      {
        title: "Para Visitantes",
        description:
          "Interface intuitiva com catálogo de produtos, filtros por categoria, detalhes de produtos com imagens e blog informativo sobre uso estratégico de brindes.",
      },
      {
        title: "Para Administradores",
        description:
          "Painel completo para gerenciamento de produtos, categorias personalizáveis, sistema integrado de upload de imagens e controle de publicação.",
      },
    ],
    sections: [
      {
        title: "Frontend",
        content: [
          "Next.js 14: Framework React com renderização híbrida (SSR/SSG)",
          "TypeScript: Para tipagem estática e melhor manutenção do código",
          "Tailwind CSS: Para estilização moderna e responsiva",
          "Shadcn UI: Componentes de interface reutilizáveis e estilizáveis",
          "React Hook Form: Gerenciamento eficiente de formulários com validação",
          "Zod: Validação de esquemas para dados de formulário",
        ],
      },
      {
        title: "Backend",
        content: [
          "Next.js API Routes: API REST para interação com o banco de dados",
          "Prisma ORM: Mapeamento objeto-relacional para interação com o banco de dados",
          "PostgreSQL: Banco de dados relacional para armazenamento persistente",
          "NextAuth.js: Sistema de autenticação seguro com múltiplas estratégias",
          "AWS S3: Armazenamento de imagens e arquivos em nuvem",
        ],
      },
      {
        title: "DevOps",
        content: [
          "ESLint/TypeScript: Garantia de qualidade de código",
          "Prisma Migrations: Controle de versão do esquema de banco de dados",
          "Seed Scripts: Povoamento do banco de dados para desenvolvimento e teste",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "FinanceIA",
    description:
      "Aplicativo de controle financeiro pessoal com análise de gastos e integração com IA para insights personalizados.",
    image: "/finance.png",
    github: "https://github.com/KazuoMurakami/fullstackweek-financeai",
    category: "back-end",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "OpenAI API",
    ],
    features: [
      "Dashboard de controle financeiro",
      "Análise de gastos por categoria",
      "Geração de relatórios personalizados",
      "Interface responsiva e intuitiva",
    ],
    highlights: [
      {
        title: "Gestão Financeira",
        description:
          "Controle completo de receitas e despesas com categorização automática e visualizações gráficas.",
      },
      {
        title: "Inteligência Artificial",
        description:
          "Análise de padrões de gastos e recomendações personalizadas para melhorar a saúde financeira.",
      },
    ],
  },
  {
    id: "3",
    title: "Nlw-Nodejs",
    description:
      "Sistema de gestão de participantes para eventos presenciais com check-in e emissão de credenciais.",
    image: "/gem.jpg",
    github: "https://github.com/KazuoMurakami/Nlw-Nodejs",
    category: "back-end",
    technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Express"],
    features: [
      "Cadastro e gestão de participantes",
      "Emissão de credenciais personalizadas",
      "Relatórios de presença em tempo real",
      "API RESTful para integração com aplicativo móvel",
    ],
    highlights: [
      {
        title: "Gestão de Eventos",
        description:
          "Sistema completo para gerenciamento de participantes em eventos presenciais com ferramentas de check-in.",
      },
      {
        title: "Arquitetura Escalável",
        description:
          "Backend desenvolvido com Node.js e TypeScript seguindo princípios de clean architecture para garantir escalabilidade.",
      },
    ],
  },
  {
    id: "4",
    title: "Scraper de Produtos",
    description:
      "sistema de automação de cadastro de produtos desenvolvido para a REDD Brindes",
    image: "/erp.jpeg",
    category: "back-end",
    technologies: ["python", "selenium", "beautifulsoup", "pandas"],
    features: [
      "Coletar informações do excel",
      "Coletar informações do site",
      "Preencher informações no sistema ERP",
      "Gerar relatórios de erros",
    ],
    highlights: [
      {
        title: "Cadastro de produto",
        description:
          "sistema de automação de cadastro de produtos desenvolvido para a REDD Brindes. Este aplicativo foi criado para otimizar e automatizar o processo de cadastro de produtos, eliminando tarefas repetitivas, reduzindo o tempo gasto e minimizando erros manuais.",
      },
    ],
  },
  {
    id: "5",
    title: "in.orbit",
    description:
      "Aplicação fullstack de rastreamento de metas semanais com dashboard de progresso, construída durante o NLW Pocket da Rocketseat.",
    image: "/inorbit.svg",
    github: "https://github.com/KazuoMurakami/nlw-pocket",
    category: "web",
    technologies: [
      "React",
      "TypeScript",
      "Fastify",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Radix UI",
      "TanStack React Query",
      "Zod",
    ],
    features: [
      "Cadastro de metas com frequência semanal desejada (1-7x)",
      "Marcação de conclusão com validação de limite semanal",
      "Resumo semanal com progresso por dia da semana",
      "Barra de progresso visual com gradiente",
      "Agendamento de metas para datas específicas",
      "Interface dark mode responsiva",
    ],
    highlights: [
      {
        title: "Queries SQL Avançadas",
        description:
          "Backend utiliza CTEs (Common Table Expressions) encadeadas com funções de agregação JSON do PostgreSQL (JSON_AGG, JSON_BUILD_OBJECT, JSON_OBJECT_AGG) para retornar dados estruturados diretamente do banco.",
      },
      {
        title: "Type-Safety End-to-End",
        description:
          "Validação com Zod tanto no frontend (React Hook Form) quanto no backend (Fastify Type Provider), garantindo tipagem forte em toda a aplicação.",
      },
    ],
    sections: [
      {
        title: "Frontend",
        content: [
          "React 18 com TypeScript e Vite para build rápido",
          "TanStack React Query para cache, invalidação e sincronização de dados",
          "React Hook Form + Zod para formulários performáticos com validação por schema",
          "Radix UI (Dialog, Progress, RadioGroup) como base de componentes acessíveis",
          "Tailwind CSS com Tailwind Variants para sistema de design componentizado",
          "Day.js com locale pt-BR para formatação de datas",
        ],
      },
      {
        title: "Backend",
        content: [
          "Fastify com Zod Type Provider para validação automática de rotas",
          "Drizzle ORM com query builder type-safe e suporte a raw SQL",
          "PostgreSQL via Docker com migrations versionadas pelo Drizzle Kit",
          "CUID2 para geração de IDs distribuídos (alternativa ao UUID)",
          "Arquitetura com separação clara: Routes → Functions → Database",
        ],
      },
    ],
  },
];

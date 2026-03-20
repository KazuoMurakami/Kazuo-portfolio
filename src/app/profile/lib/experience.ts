interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  type: 'trabalho' | 'educação'
  information?: {
    title: string
    description: string
  }[]
  skills?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    type: 'trabalho',
    title: 'Analista de Sistemas',
    company: 'Empresa Redd Brindes',
    period: 'Jan 2025 - Presente',
    description:
      'Desenvolvimento de automações de processos internos e QA do sistema de produção. Implementação de novos recursos no sistema de produção, incluindo integração com APIs de fornecedores para consulta de estoque, precificação, gestão de pedidos e rastreamento de recebimento. Foco em otimizar processos produtivos e aumentar a eficiência operacional do sistema de produção.',
    information: [
      {
        title: 'Criação de um chatbot para consulta de estoque',
        description:
          'Criação de um chatbot para consulta de estoque, utilizando a API do OpenAI para gerar respostas baseadas em informações do estoque. O chatbot foi desenvolvido utilizando N8N, Z-API, Supabase, API de fornecedores e OPENAI.',
      },
      {
        title: 'Adição de features no sistema interno de produção',
        description:
          'Fiquei responsavel em dar manutenção em um sistema utilizado pela empresa onde é gerenciado o controle de entrada de pedido, status de recebimento, status de produção, status de entrega, entre outros. adicionando melhorias como calculadora de preços baseado no estoque do fornecedor, pequenas correções de bugs e melhorias de usabilidade e integração de API de fornecedores.',
      },
      {
        title:
          'Implementação de um dashboard analítico para a equipe de vendas',
        description:
          'Desenvolvi uma rotina automatizada de sincronização de dados entre banco de dados local e sistema de produção, criando um dashboard analítico para a equipe de vendas. A solução permite consulta em tempo real de metas estabelecidas, vendas realizadas, percentual de alcance dos objetivos, histórico mensal de desempenho e projeção de cumprimento das metas.',
      },
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Python',
      'N8N',
      'Z-API',
      'Supabase',
      'OPENAI',
    ],
  },
  {
    type: 'educação',
    title: 'Graduação em Analise e Desenvolvimento de Sistemas',
    company: 'Universidade São Judas Tadeu',
    period: '2022 - 2024',
    description:
      'Formação em algoritmos, estruturas de dados, desenvolvimento de software e sistemas distribuídos, com foco em tecnologias web.',
    information: [
      {
        title: 'Elaboração de uma aplicação web de tutoria',
        description:
          'Elaboração de uma aplicação web de tutoria  para alunos e setoresda instituição, destinado a conectar alunos e setores, treinamento, auxilios para tarefas para melhorar a disposição e aprendizagem dos alunos.',
      },
    ],
    skills: ['JavaScript', 'Python', 'Banco de Dados'],
  },
]

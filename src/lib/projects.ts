export interface Shot {
  src: string
  alt: string
  url: string
  ratio?: string
}

export interface Project {
  id: string
  title: string
  shortTitle?: string
  discipline?: string
  tags: string[]
  description: string
  shots: Shot[]
  // Illustrative mock shown when real screens can't be published.
  mock?: 'system' | 'migration'
  caption?: string
  github?: string
  demoUrl?: string
  technologies: string[]
  featured?: boolean
  role?: string
  period?: string
  commits?: string
  metrics?: Array<{ value: string; label: string }>
  context?: string
  features?: string[]
  highlights?: Array<{ title: string; description: string }>
  sections?: Array<{ title: string; content: string[] }>
}

export const projects: Project[] = [
  {
    id: 'redd',
    title: 'Sistema interno da REDD Brindes',
    shortTitle: 'Sistema da REDD',
    discipline: 'ERP e CRM de uma empresa de brindes corporativos',
    tags: ['Sistema interno', 'Em uso'],
    featured: true,
    description:
      'O ERP e o CRM que levam um pedido do lead no WhatsApp até a fila de gravação e o controle de nota fiscal. Herdei a API de outra equipe e, desde meados de 2025, sou praticamente o único desenvolvedor dela; em 2026 criei do zero a versão nova da interface.',
    role: 'Analista de sistemas. Principal desenvolvedor da API desde meados de 2025 e criador do front-end v2',
    period: 'fev. 2025 – hoje',
    commits: '812 de 952 no front-end e 912 de 1.768 na API',
    shots: [],
    mock: 'system',
    caption:
      'Recorte ilustrativo com dados fictícios: o sistema é interno. Navegue pelas etapas de um pedido.',
    technologies: [
      'Next.js',
      'TypeScript',
      'AdonisJS',
      'PostgreSQL',
      'Redis',
      'TanStack Query',
      'pgvector',
      'Claude e DeepSeek',
    ],
    metrics: [
      { value: '71', label: 'páginas na versão atual da interface' },
      { value: '530', label: 'rotas na API' },
      { value: '511', label: 'dos 515 commits na API desde junho de 2025' },
      { value: '12', label: 'funções de IA configuráveis' },
    ],
    context:
      'Numa empresa de brindes personalizados, um pedido passa por muitas mãos. O lead chega por outros sites, pelo site da empresa ou pelo WhatsApp e vira orçamento, com preço por quantidade e por técnica de gravação. Depois vêm layout e amostra, a compra no fornecedor, a fila de gravação do departamento certo (silk, laser, tampografia), a expedição e a nota fiscal. Vendas, compras, gravação, expedição e fiscal enxergam partes diferentes do mesmo fluxo, cada equipe com o que pode ver e fazer.',
    features: [
      'Kanban de orçamentos em 9 etapas, de Leads a Pós-venda, com arrastar e soltar também no toque e um diálogo obrigatório em cada transição, como o motivo de perda.',
      'Leads de outros sites, do site da empresa e de cadastro manual, com mescla de contatos duplicados e distribuição automática entre os vendedores.',
      'Montador de propostas com preço por faixa de quantidade, gravação por técnica, desconto por alçada e PDF enviado na conversa de WhatsApp do lead.',
      'Central de WhatsApp com um número por vendedor e números compartilhados da recepção, conectados por QR Code.',
      'Bot da recepção no WhatsApp com modos desligado, sombra e ao vivo, que passa a conversa para o vendedor quando não pode responder.',
      'Análise de atendimento por IA: qualidade, temperatura do lead, alertas e tempo de resposta contado só em horário comercial.',
      'Base de conhecimento extraída das conversas, aprovada por um gestor e consultada por busca semântica.',
      'Produtos, preço e estoque de 5 fornecedores sincronizados, com histórico de alta, baixa e promoção.',
      'Fila de gravação por departamento, com leitura de crachá por QR Code para registrar quem trabalhou em cada lote.',
      'Compras, amostras, ocorrências e a fila de solicitações de nota fiscal até a expedição.',
      'Permissões por tela editáveis na própria aplicação, sem deploy.',
    ],
    highlights: [
      {
        title: 'Um bot de WhatsApp que sabe quando não responder',
        description:
          'Antes da IA, filtros barram tentativa de injeção de prompt e conversa fora do assunto; depois, uma guarda rejeita respostas com preço, prazo, estoque ou link fora da base aprovada. O modelo recebe a correção e tenta mais uma vez; se ainda errar, a conversa vai para uma pessoa, com um resumo enviado ao vendedor da carteira.',
      },
      {
        title: 'Conhecimento tirado das conversas, com aprovação humana',
        description:
          'Um job extrai pares de pergunta e resposta das conversas bem avaliadas. Só depois que um gestor aprova, a entrada ganha embedding no pgvector e passa a ser usada pelo bot, que informa quais entradas consultou.',
      },
      {
        title: 'Distribuição de leads sem condição de corrida',
        description:
          'O rodízio escolhe o vendedor com menor carga em relação ao peso dele numa única query com FOR UPDATE SKIP LOCKED, dentro da transação. Leads do mesmo contato em até 30 minutos são mesclados antes da distribuição.',
      },
      {
        title: 'Permissões que não dependem de deploy',
        description:
          'Juntei três checagens de acesso que divergiam entre si (menu, guarda de rota e redirecionamento após o login) num único módulo que nega por padrão. Cada tela tem um identificador, e a matriz papel × tela é editada em Configurações.',
      },
      {
        title: 'Redis com falha planejada',
        description:
          'O rate limit roda num script Lua que confere e incrementa numa única ida ao Redis e, se o Redis cair, responde 503 em produção. Já os caches de lista têm timeout de 100 ms e circuit breaker: com o Redis fora, a consulta vai direto ao Postgres.',
      },
      {
        title: 'Atualização automática no ritmo de cada tela',
        description:
          'Sem WebSocket: cada tela consulta o servidor no intervalo que faz sentido para ela. Mensagens do chat a cada 3 s, aprovação de pedido a cada 10 s, pedidos e compras a cada 60 s.',
      },
      {
        title: 'Da v1 para a v2 do front-end em quatro semanas',
        description:
          'Criei o repositório do front-end v2 em fevereiro de 2026 e, no começo de março, fechei as telas que faltavam da versão anterior: produção com leitor de crachá, preços de gravação, calculadora, ocorrências e reservas de estoque.',
      },
      {
        title: 'Tempo de resposta em horário comercial',
        description:
          'As mensagens de cada conversa são agrupadas em rajadas do cliente, e o tempo até a resposta conta só os segundos dentro do expediente. Uma rotina incremental recalcula apenas as conversas com mensagem nova e alimenta o relatório mensal por vendedor.',
      },
    ],
    sections: [
      {
        title: 'Front-end (Next.js 16)',
        content: [
          'App Router com 71 páginas, 37 módulos de feature e checagem de acesso em três camadas: proxy, cliente e Server Components.',
          'TanStack Query para os dados do servidor (227 chamadas de useQuery e 214 de useMutation) e nuqs para filtros e paginação na URL.',
          'MUI 6 com DataGrid, React Hook Form com Zod e @dnd-kit nos kanbans.',
          'Cliente Axios que renova o token após um 401 e segura as outras requisições na fila enquanto renova.',
          'Testes e2e com Playwright (26 specs, rodados fora do CI) e CI com lint, Prettier e build.',
        ],
      },
      {
        title: 'API (AdonisJS 5)',
        content: [
          'Monólito em camadas: rotas por domínio, controllers, validators, services e repositories, somando 530 rotas HTTP.',
          'PostgreSQL com pgvector, pg_trgm e unaccent; a busca de clientes usa a mesma expressão dos índices trigram e encontra nomes com ou sem acento.',
          'Jobs na fila do próprio Postgres (fiz 12 dos 13), idempotentes por índice único, para IA, PDFs, mídia e preços.',
          'Redis para rate limit atômico, caches com timeout e circuit breaker e cotas diárias.',
          'IA atrás de uma interface única para Claude e DeepSeek, configurável por funcionalidade; em 9 serviços, e-mail, telefone, CPF/CNPJ, CEP e links são mascarados antes do envio.',
          '22 comandos ace, entre rotinas periódicas e importações manuais, e métricas HTTP no formato do Prometheus.',
        ],
      },
      {
        title: 'Integrações',
        content: [
          'WhatsApp pela Evolution API, com webhook autenticado.',
          '5 fornecedores sincronizados (4 APIs e 1 planilha). Fiz a integração mais recente, a da planilha e o histórico de preço com efeito nos kits.',
          '3 feeds XML de outros sites, o site antigo em MySQL e FTP e pedidos vindos de outro ERP.',
          'PDFs de proposta, catálogo e protocolo gerados com Chromium headless.',
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Catálogo B2B da IceCube',
    shortTitle: 'IceCube',
    discipline: 'Catálogo B2B que vende por orçamento',
    tags: ['Freelance', 'No ar'],
    featured: true,
    description:
      'Site, painel e API de uma fabricante de plásticos injetados que vende para empresas por orçamento. Como freelancer, fui o principal desenvolvedor das três aplicações, todas no ar.',
    role: 'Freelancer, principal desenvolvedor do site, do painel e da API',
    period: 'mar. – jul. 2026',
    commits: '197 de 301 nos três repositórios',
    shots: [
      {
        src: '/projects/icecube-home.webp',
        alt: 'Página inicial da IceCube, com banner de produtos plásticos personalizados',
        url: 'icecube.com.br',
      },
      {
        src: '/projects/icecube-product.webp',
        alt: 'Página de produto da IceCube com especificações e o botão Solicitar Orçamento',
        url: 'icecube.com.br/brindes-personalizados',
      },
    ],
    caption: 'Site no ar: página inicial e página de produto.',
    demoUrl: 'https://icecube.com.br',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'Tailwind CSS',
      'Recharts',
      'Supabase Storage',
      'Resend',
    ],
    metrics: [
      { value: '197', label: 'dos 301 commits nos três repositórios' },
      { value: '151', label: 'endpoints na API' },
      { value: '40', label: 'páginas no painel administrativo' },
    ],
    context:
      'A IceCube vende para empresas por orçamento: o comprador cota o mesmo item em quantidades diferentes, e cor e gravação são acertadas no atendimento. Parte dos orçamentos chega por portais de brindes. O site partiu de uma base Next.js 13 herdada, sem API nem painel próprios.',
    features: [
      'Catálogo com categorias, coleções por público e data comemorativa, busca e lançamentos.',
      'Orçamento sem login, com até 3 faixas de quantidade por item, todas a partir da quantidade mínima do produto.',
      'E-mail para a equipe com as faixas pedidas e confirmação para o cliente.',
      'Área do cliente com dados, favoritos e orçamentos.',
      'Painel com 40 páginas: produtos, categorias, banners e o conteúdo editável do site, como depoimentos, FAQs e vídeos.',
      'Gestão de orçamentos com 9 status, origem de cada um e conversão em pedido.',
      'Dashboard com indicadores do mês, taxa de conversão, funil por status e série de 12 meses.',
      'Acesso por cargo no painel (administrador, gerente, vendedor e compras), editável numa matriz.',
      'Orçamentos de dois portais de brindes importados pelo botão Sincronizar ou por um agendamento que se liga por variável de ambiente.',
      'Catálogo de um fornecedor sincronizado dentro do limite diário da API dele.',
      'Fotos de produto convertidas para WebP na hora do upload; banners mantêm o arquivo original.',
    ],
    highlights: [
      {
        title: 'Orçamento com até 3 faixas de quantidade',
        description:
          'Comprador B2B cota o mesmo item em volumes diferentes, como 50, 100 e 500. As três faixas respeitam a quantidade mínima do produto, e só a primeira é obrigatória. Um único hook passou a cuidar das quatro entradas do fluxo, que antes se comportavam de formas diferentes.',
      },
      {
        title: 'Orçamentos dos portais sem duplicata',
        description:
          'Os orçamentos feitos em dois portais de brindes chegam em XML, uma linha por produto. O importador agrupa as linhas, associa cada orçamento ao cliente e grava tudo numa transação. Um índice único por origem e ID externo impede duplicatas, e uma trava evita duas importações ao mesmo tempo.',
      },
      {
        title: 'Fornecedor sincronizado dentro do limite da API',
        description:
          'A API do fornecedor permite 99 acessos por dia. O agendamento, que se liga por variável de ambiente, roda até 6 vezes por dia, e o painel tem um botão para sincronizar na hora. Cada rodada grava em lotes de 500 e marca como descontinuado o que não veio; uma resposta vazia cancela a rodada, para não esvaziar o catálogo.',
      },
      {
        title: 'Consultas em lote na listagem',
        description:
          'A listagem buscava cores, flags e categorias produto a produto: 54 consultas por página. Passaram a ser 3 consultas em lote. Na mesma revisão, restringi o CORS, desliguei o Swagger em produção e parei de expor mensagens internas nos erros 500.',
      },
      {
        title: 'De Next.js 13 com Bootstrap para Next.js 16',
        description:
          'O site começou de uma base herdada com Pages Router e Bootstrap. Passei para App Router, React 19 e Tailwind 4, e o login virou um BFF: o token fica em cookie httpOnly e o middleware confere a assinatura antes de abrir a área do cliente.',
      },
      {
        title: 'Dashboard calculado no banco',
        description:
          'Um único endpoint agrega no Postgres os números do mês contra o anterior, a taxa de conversão, o funil por status e 12 meses de orçamentos. O painel só desenha os gráficos.',
      },
    ],
    sections: [
      {
        title: 'Site (Next.js 16)',
        content: [
          'App Router com Server Components para SEO e componentes de cliente só onde há interação.',
          '6 route handlers como BFF para login, conta, favoritos e orçamentos, com cookie httpOnly.',
          'JSON-LD de Product e BreadcrumbList, domínio canônico com redirect permanente e sitemap com a data real de atualização.',
          'CI com Prettier, ESLint e build, e revisão automática em cada pull request.',
        ],
      },
      {
        title: 'Painel (Next.js 15 + TypeScript)',
        content: [
          '40 páginas construídas sobre a fábrica createCrudApi<T>() e o hook useFetch<T>().',
          'Imagens reordenáveis por arrastar, cores, categorias e SEO por produto.',
          'Dashboard com Recharts e matriz de acesso por cargo.',
        ],
      },
      {
        title: 'API (NestJS + Drizzle ORM)',
        content: [
          '15 módulos, 23 controllers e 151 endpoints REST.',
          'Dois JWT com segredos separados para clientes e administradores.',
          'Rate limit global e mais estrito no login e na recuperação de senha.',
          'Rotinas agendadas, que se ligam por variável de ambiente, para importar orçamentos e sincronizar o fornecedor.',
          'Conversão de orçamento em pedido numa transação, recusada se o orçamento já foi finalizado.',
        ],
      },
    ],
  },
  {
    id: 'inamorei',
    title: 'Inamorei, cartas de amor digitais',
    shortTitle: 'Inamorei',
    discipline: 'Produto web com pagamento e IA',
    tags: ['Produto', 'No ar'],
    featured: true,
    description:
      'Cartas de amor digitais com fotos, música e contador do tempo juntos, que construí com um parceiro. Quem compra monta a carta em 4 passos, paga R$ 9,90 por Pix ou cartão sem criar conta e recebe um link para presentear.',
    role: 'Desenvolvimento full-stack com um parceiro. Fiz o painel, a IA, os webhooks de pagamento, a página da carta e o sistema visual',
    period: 'maio – jun. 2026',
    commits: '26 de 38',
    shots: [
      {
        src: '/projects/inamorei-home.webp',
        alt: 'Página inicial do Inamorei com o título Transforme o seu amor em uma página inesquecível',
        url: 'inamorei.com.br',
      },
      {
        src: '/projects/inamorei-wizard.webp',
        alt: 'Primeiro passo da criação da carta: nomes do casal e escolha entre os templates Soft & Dreamy e Midnight',
        url: 'inamorei.com.br/criar-carta-de-amor',
      },
    ],
    caption: 'Página inicial e primeiro passo da criação da carta, no ar.',
    demoUrl: 'https://www.inamorei.com.br',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'AbacatePay',
      'DeepSeek',
      'Upstash Redis',
      'Framer Motion',
    ],
    metrics: [
      { value: 'R$ 9,90', label: 'pagamento único, Pix ou cartão' },
      { value: '4', label: 'semanas até a primeira versão' },
      { value: '17', label: 'correções de segurança rastreadas no código' },
    ],
    context:
      'Presente digital costuma ser compra por impulso, e exigir cadastro atrapalha a venda. O Inamorei entrega uma página de presente montada em minutos, paga uma vez e enviada como link. Por trás, o problema é cobrar e publicar para um comprador anônimo, confirmando o pagamento por dois caminhos sem publicar a carta duas vezes.',
    features: [
      'Criação da carta em 4 passos com preview ao vivo: nomes e template, data, carta, música, fotos e roleta.',
      'Texto da carta escrito ou melhorado por IA em 4 tons: romântico, poético, leve e profundo.',
      'Busca de música no YouTube, só com vídeos que podem ser incorporados.',
      'Até 6 fotos por carta.',
      'Checkout sem cadastro: Pix com QR Code e Copia e Cola ou cartão pelo Stripe.',
      'Página da carta com retrospectiva estilo Stories, envelope que abre, contador do tempo juntos e player.',
      'Programa de afiliados com login pelo Google, comissão por faixas e saque via Pix.',
      'Painel administrativo com indicadores, funil de conversão e cartas recentes.',
      'Página inicial em português e inglês com dados estruturados, sitemap e llms.txt.',
      'Rotina diária que apaga as cartas que ficaram em rascunho.',
    ],
    highlights: [
      {
        title: 'Webhooks de pagamento verificados sem SDK',
        description:
          'Nos webhooks do Pix e do cartão, o HMAC-SHA256 é calculado sobre o corpo cru da requisição, comparado em tempo constante e aceito só dentro de uma janela de 5 minutos, contra replay.',
      },
      {
        title: 'Confirmação de pagamento sem publicar duas vezes',
        description:
          'A carta pode ser liberada pelo webhook ou pela consulta de status que o checkout faz a cada 3 s. O evento só é marcado como processado depois de concluído, então uma falha no meio volta no retry, e as atualizações condicionais impedem a publicação dupla.',
      },
      {
        title: 'Uma IA que só escreve cartas',
        description:
          'O texto de quem usa vai delimitado como conteúdo, não como instrução. A resposta é limpa e descartada se parecer recusa ou meta-resposta, e cada IP pode pedir no máximo 8 textos à IA por hora.',
      },
      {
        title: 'A retrospectiva para quem recebe',
        description:
          'Até 8 slides, conforme o conteúdo da carta, com barra de progresso, toque para avançar, segurar para pausar, atalhos de teclado e respeito à preferência de movimento reduzido.',
      },
      {
        title: 'Um sistema visual próprio',
        description:
          '18 tokens de cor, três famílias tipográficas e componentes de marca como selo de cera, carimbo, polaroid e textura de papel, usados na página inicial, na criação e na carta.',
      },
      {
        title: 'Correções de segurança rastreáveis',
        description:
          'Dezessete itens de uma auditoria de segurança estão citados por ID no código, ao lado do que os resolve: CSP e mais 6 headers, 9 limites de taxa por IP e o sufixo dos links gerado com crypto.randomBytes.',
      },
    ],
    sections: [
      {
        title: 'Arquitetura',
        content: [
          'Monólito Next.js 16 organizado por domínio: criação, carta, pagamento, afiliados e admin.',
          'Supabase Postgres; toda escrita passa pelo servidor, em Server Actions, rotas e webhooks.',
          'Rate limit com Upstash Redis em 9 pontos, CSP e mais 6 headers de segurança.',
        ],
      },
      {
        title: 'Pagamentos',
        content: [
          'Pix pela AbacatePay e cartão pelo Stripe Payment Element, chamados via REST.',
          'Webhooks verificados por HMAC e status consultado a cada 3 s até abrir a carta.',
        ],
      },
    ],
  },
  {
    id: 'site-redd',
    title: 'Novo site da REDD Brindes',
    shortTitle: 'Site da REDD',
    discipline: 'Site novo com os mesmos endereços do antigo',
    tags: ['Site público', 'Em testes'],
    featured: true,
    description:
      'Refiz o site da REDD, um catálogo de brindes que vende por orçamento. Mantive os endereços e os títulos das páginas antigas para não perder o que o Google já conhece. A versão nova está em testes e ainda não substituiu a antiga.',
    role: 'Autor de todos os 8 commits, portando as regras do PHP antigo',
    period: 'out. 2026',
    commits: '8 de 8',
    shots: [],
    mock: 'migration',
    caption:
      'Exemplo ilustrativo do relatório do script de comparação. O site novo está em testes e ainda não substituiu o antigo.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'MySQL',
      'sharp',
    ],
    metrics: [
      { value: '3', label: 'travas contra escrita no banco do sistema' },
      { value: '8 + 5', label: 'redirecionamentos e repasses ao site antigo' },
      { value: '48', label: 'produtos por página, com o resto ao rolar' },
    ],
    context:
      'O site antigo, em PHP, já tem tráfego orgânico, e o banco dele é o MySQL que outros sistemas da empresa também usam. Refazer tinha duas restrições: manter as URLs e os títulos que o Google já conhece e não gravar nada nesse banco. O que o PHP gravava, como carrinho e orçamentos, passou para o navegador e para o e-mail.',
    features: [
      'Catálogo com as mesmas rotas do PHP: coleções, tipos, categorias, subcategorias, busca e filtro de preço no caminho.',
      'Listagens com scroll infinito de 48 em 48; a primeira página vem do servidor e um link real para a próxima continua no HTML para o Google.',
      'Página de produto com galeria, especificações, quantidade mínima e produtos do mesmo tipo.',
      'Orçamento salvo no navegador, com até 3 quantidades por item e o mínimo de cada produto conferido de novo no servidor.',
      'Formulário de orçamento que valida o CNPJ, preenche o endereço pelo CEP e manda a confirmação por e-mail para o cliente.',
      'Busca com autocomplete a partir de 2 letras, com foto e código do produto.',
      'Sitemaps com os mesmos nomes do site antigo, robots.txt e dados estruturados de organização, produto e navegação.',
      'Página 404 com busca e atalhos para as coleções.',
      'Endpoint de imagens compatível com o antigo, redimensionando com sharp.',
    ],
    highlights: [
      {
        title: 'Regras de URL e título portadas do PHP',
        description:
          'Portei para TypeScript as funções do PHP que geram slugs e títulos, incluindo detalhes como o strtolower do PHP, que só altera letras ASCII. Os comentários do código apontam os 14 arquivos .inc.php de origem.',
      },
      {
        title: 'Banco do sistema com três travas contra escrita',
        description:
          'O site lê o MySQL que outros sistemas da empresa também usam. A consulta só aceita leitura, cada conexão abre em modo somente leitura e múltiplos comandos ficam desligados. A entrada do usuário entra sempre por placeholder.',
      },
      {
        title: 'Redirect e 404 nas rotas antigas',
        description:
          'Slug errado leva com redirect permanente para a URL canônica, produto desativado leva para a listagem do tipo e endereço inexistente devolve 404. URLs antigas com caracteres em latin1, que o Next recusaria, são convertidas e redirecionadas.',
      },
      {
        title: 'Scroll infinito que o Google consegue seguir',
        description:
          'A primeira página de cada listagem vem pronta do servidor e as seguintes chegam conforme a pessoa rola. O gatilho é um link real para a próxima página, então quem não rola também alcança todos os produtos.',
      },
      {
        title: 'Cache escolhido para manter os status HTTP',
        description:
          'Usei o ISR clássico em vez do cache novo do Next 16 para garantir redirects e 404 corretos nas rotas antigas. As consultas ao banco ficam em cache por uma hora.',
      },
      {
        title: 'Um script para a troca do domínio',
        description:
          'O compare.mjs pede o mesmo caminho ao site antigo e ao novo e lista as diferenças de status, redirect, title, canonical e H1. Faz 4 requisições por vez, com pausa de 300 ms, para não pesar no servidor de produção.',
      },
    ],
    sections: [
      {
        title: 'Arquitetura',
        content: [
          'Next.js 16 com App Router, Server Components e ISR.',
          'Pool mysql2 somente leitura, com 23 funções de consulta em cache.',
          'Port para TypeScript das regras de slug, título e leitura das rotas do PHP; os comentários citam 14 arquivos .inc.php como origem.',
          '8 redirects permanentes e 5 rewrites para o servidor antigo nos arquivos ainda não migrados.',
        ],
      },
      {
        title: 'Interface',
        content: [
          'Zustand com persistência para o orçamento e os favoritos.',
          'TanStack Query no autocomplete e no scroll infinito; TanStack Form nos formulários.',
          'Server Actions com Zod e nodemailer para o envio dos formulários.',
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Cadastro automático de produtos',
    tags: ['Automação'],
    description:
      'Automação do cadastro de produtos no ERP da REDD Brindes, a partir de planilhas e do site dos fornecedores.',
    shots: [
      {
        src: '/erp.jpeg',
        alt: 'Janela do programa de automação: planilha de entrada, pasta de destino, fornecedores marcados e log de execução',
        url: 'Automação de cadastro (app desktop)',
      },
    ],
    caption:
      'Janela do programa, com caminhos e nomes de fornecedores desfocados.',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    features: [
      'Lê as informações dos produtos em planilhas Excel.',
      'Completa os dados com o site do fornecedor.',
      'Preenche o cadastro no ERP.',
      'Gera um relatório com os erros encontrados.',
    ],
    highlights: [
      {
        title: 'Cadastro de produto sem digitação',
        description:
          'Automação feita para a REDD Brindes. Lê os dados de planilhas e do site do fornecedor e preenche o cadastro no ERP, tirando da equipe uma tarefa repetitiva e sujeita a erro.',
      },
    ],
  },
  {
    id: '1',
    title: 'Site e blog da Potence',
    tags: ['Site institucional'],
    description:
      'Site institucional para uma empresa de brindes promocionais, com catálogo de produtos, blog e painel administrativo.',
    shots: [
      {
        src: '/pot.png',
        alt: 'Página inicial do site da Potence, com o título Mundo dos Brindes',
        url: 'Site da Potence',
        ratio: '1298 / 498',
      },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    features: [
      'Blog sobre o uso de brindes promocionais.',
      'Painel administrativo para produtos, categorias e publicações.',
      'Upload e gerenciamento de imagens.',
      'Layout responsivo para celular e desktop.',
    ],
    highlights: [
      {
        title: 'Para quem visita',
        description:
          'Catálogo com filtros por categoria, página de produto com imagens e um blog sobre o uso de brindes.',
      },
      {
        title: 'Para quem administra',
        description:
          'Painel para cadastrar produtos e categorias, enviar imagens e controlar o que está publicado.',
      },
    ],
    sections: [
      {
        title: 'Front-end',
        content: [
          'Next.js 14 com renderização no servidor e páginas estáticas.',
          'Tailwind CSS e Shadcn UI.',
          'React Hook Form com Zod nos formulários.',
        ],
      },
      {
        title: 'Back-end',
        content: [
          'API Routes do Next.js com Prisma e PostgreSQL.',
          'Autenticação com NextAuth.js.',
          'Imagens armazenadas no AWS S3.',
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'in.orbit',
    tags: ['Projeto de estudo'],
    description:
      'Controle de metas semanais com resumo de progresso, feito no NLW Pocket da Rocketseat.',
    shots: [],
    github: 'https://github.com/KazuoMurakami/nlw-pocket',
    technologies: [
      'React',
      'TypeScript',
      'Fastify',
      'Drizzle ORM',
      'PostgreSQL',
      'Tailwind CSS',
      'Radix UI',
      'TanStack Query',
      'Zod',
    ],
    features: [
      'Cadastro de metas com a frequência semanal desejada, de 1 a 7 vezes.',
      'Marcação de conclusão respeitando o limite da semana.',
      'Resumo semanal com o progresso de cada dia.',
    ],
    highlights: [
      {
        title: 'SQL que já devolve o JSON pronto',
        description:
          'O back-end usa CTEs encadeadas com JSON_AGG, JSON_BUILD_OBJECT e JSON_OBJECT_AGG do PostgreSQL para montar o resumo da semana direto no banco.',
      },
      {
        title: 'Tipos de ponta a ponta',
        description:
          'Zod valida os formulários no front-end e as rotas no Fastify, com o mesmo formato de dados nos dois lados.',
      },
    ],
  },
  {
    id: '2',
    title: 'FinanceIA',
    tags: ['Projeto de estudo'],
    description:
      'Controle financeiro pessoal com relatórios de gastos gerados por IA.',
    shots: [
      {
        src: '/finance.png',
        alt: 'Montagem com telas do FinanceIA: dashboard, transações e plano',
        url: 'github.com/KazuoMurakami/fullstackweek-financeai',
      },
    ],
    github: 'https://github.com/KazuoMurakami/fullstackweek-financeai',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'OpenAI API',
    ],
    features: [
      'Dashboard de receitas e despesas.',
      'Gastos por categoria.',
      'Relatórios gerados com a API da OpenAI.',
    ],
  },
  {
    id: '3',
    title: 'Check-in de eventos',
    tags: ['Projeto de estudo'],
    description:
      'API para gerenciar participantes de eventos presenciais, com check-in e emissão de credenciais.',
    shots: [],
    github: 'https://github.com/KazuoMurakami/Nlw-Nodejs',
    technologies: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Express'],
    features: [
      'Cadastro de participantes por evento.',
      'Emissão de credenciais.',
      'Check-in na entrada do evento.',
    ],
  },
]

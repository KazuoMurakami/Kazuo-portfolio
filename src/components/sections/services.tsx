import { Store, Workflow, Boxes } from 'lucide-react'

const mail = 'mailto:octaviokazuo12@hotmail.com?subject='

const services = [
  {
    icon: Boxes,
    tag: 'AdonisJS',
    title: 'Sistemas internos',
    text: 'Junto num sistema só o que hoje está espalhado em planilhas e no WhatsApp, e cada equipe vê apenas o que precisa.',
    items: [
      'CRM e funil',
      'Pedidos e compras',
      'Filas de produção',
      'Estoque',
      'Acesso por cargo',
      'Painéis de metas',
    ],
    subject: 'Sistema interno',
    topic: 'sistemas internos',
  },
  {
    icon: Store,
    tag: 'Next.js',
    title: 'Catálogos B2B',
    text: 'Faço o site onde o cliente monta a lista de produtos e a sua equipe cuida de cada pedido de orçamento no painel.',
    items: [
      'Catálogo com filtros',
      'Pedido de orçamento',
      'Painel administrativo',
      'SEO técnico',
      'Área do cliente',
      'Migração de site',
    ],
    subject: 'Catálogo B2B',
    topic: 'catálogos B2B',
  },
  {
    icon: Workflow,
    tag: 'WhatsApp',
    soft: true,
    title: 'Integrações e automação',
    text: 'Ligo o sistema ao WhatsApp, a fornecedores e a meios de pagamento, e tiro da equipe o trabalho repetitivo.',
    items: [
      'Atendimento por WhatsApp',
      'Preço e estoque de fornecedores',
      'Pagamento por Pix',
      'Assistentes de IA',
      'Tarefas agendadas',
      'Importação de orçamentos',
    ],
    subject: 'Integração',
    topic: 'integrações e automação',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="band" aria-labelledby="services-title">
      <header className="band-head">
        <h2 id="services-title">
          O que eu faço{' '}
          <span className="soft">para empresas que vendem por orçamento.</span>
        </h2>
        <p>
          Trabalho perto de quem usa o sistema: vendas, compras, produção e
          expedição. É nessa conversa que aparecem as regras que o código
          precisa seguir.
        </p>
      </header>
      <div className="services">
        {services.map((service, i) => (
          <article className="service" key={service.title}>
            <div className="service-top">
              <service.icon size={24} aria-hidden="true" />
              <span className={service.soft ? 'tag tag-soft' : 'tag'}>
                {service.tag}
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul className="arrow-list" role="list">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={mail + encodeURIComponent(service.subject)}
              className={i === 0 ? 'btn btn-grad' : 'btn btn-line'}
            >
              Mandar um e-mail
              <span className="sr-only"> sobre {service.topic}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

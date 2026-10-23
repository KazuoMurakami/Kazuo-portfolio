'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import {
  CircleCheck,
  Circle,
  ClipboardList,
  Factory,
  FileText,
  House,
  MessageCircle,
  ShoppingCart,
  SquareKanban,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'

// Step, status and menu labels follow the real system; every company, number and address is fictional.
const steps = [
  { id: 'chat', label: 'Lead no WhatsApp' },
  { id: 'crm', label: 'Orçamento' },
  { id: 'order', label: 'Pedido' },
  { id: 'production', label: 'Gravação' },
  { id: 'shipping', label: 'Expedição e NF' },
] as const
type Step = (typeof steps)[number]['id']

const nav: { label: string; icon: LucideIcon; step?: Step }[] = [
  { label: 'Início', icon: House },
  { label: 'Leads', icon: Users },
  { label: 'Chat', icon: MessageCircle, step: 'chat' },
  { label: 'Orçamentos', icon: SquareKanban, step: 'crm' },
  { label: 'Pedidos', icon: ClipboardList, step: 'order' },
  { label: 'Compras', icon: ShoppingCart },
  { label: 'Produção', icon: Factory, step: 'production' },
  { label: 'Expedição', icon: Truck, step: 'shipping' },
  { label: 'Fila NF', icon: FileText },
]

function Checks({ items }: { items: [string, boolean][] }) {
  return (
    <ul className="mock-checks">
      {items.map(([label, done]) => (
        <li key={label} data-done={done}>
          {done ? (
            <CircleCheck size={15} aria-label="Feito" />
          ) : (
            <Circle size={15} aria-label="Pendente" />
          )}
          {label}
        </li>
      ))}
    </ul>
  )
}

const board = [
  {
    title: 'Follow-up inicial',
    count: 7,
    cards: [
      [
        'Agência Norte',
        'Garrafa térmica 500 ml, 300 un.',
        'Quente',
        'chip-alert',
      ],
      ['Studio Prisma', 'Kit de boas-vindas, 80 un.', 'Morno', 'chip-warn'],
    ],
  },
  {
    title: 'Negociação',
    count: 5,
    cards: [
      ['Clínica Vida', 'Caneta metálica, 1.000 un.', 'Parado há 4 dias', ''],
      ['Rede Sabor', 'Avental com bordado, 120 un.', 'Frio', ''],
    ],
  },
  {
    title: 'Layout',
    count: 3,
    cards: [
      [
        'Escola Horizonte',
        'Ecobag de algodão, 500 un.',
        'Prova enviada',
        'chip-lime',
      ],
    ],
  },
]

const queue = [
  [
    '4821',
    'Garrafa térmica 500 ml',
    'Laser',
    'Gravação iniciada',
    'chip-lime',
    'Hoje',
    'chip-warn',
  ],
  [
    '4817',
    'Caneca de porcelana',
    'Sublimação',
    'Pré-checagem',
    '',
    'Hoje',
    'chip-warn',
  ],
  [
    '4809',
    'Ecobag de algodão',
    'Silk',
    'Atraso do fornecedor',
    'chip-alert',
    'Atrasado',
    'chip-alert',
  ],
  [
    '4802',
    'Caneta metálica',
    'Tampografia',
    'Gravação finalizada',
    'chip-ok',
    'Sexta',
    '',
  ],
]

const panels: Record<Step, JSX.Element> = {
  chat: (
    <>
      <div className="mock-head">
        <div>
          <p className="mock-title">Chat</p>
          <p>Chip da recepção, conectado por QR Code</p>
        </div>
        <span className="chip">Bot em modo sombra</span>
      </div>
      <div className="mock-chat">
        <ul className="mock-threads">
          <li data-active="true">
            <strong>Agência Norte</strong>
            <span>Preciso de 300 garrafas com a logo</span>
          </li>
          <li>
            <strong>Clínica Vida</strong>
            <span>Vocês gravam em caneta metálica?</span>
          </li>
          <li>
            <strong>Escola Horizonte</strong>
            <span>Recebi a prova, aprovado!</span>
          </li>
        </ul>
        <div className="mock-messages">
          <p className="bubble">
            Oi! Preciso de 300 garrafas térmicas com a nossa logo para um evento
            em novembro.
          </p>
          <p className="bubble bubble-me">
            Consigo te mandar o orçamento hoje. A gravação pode ser a laser?
          </p>
          <p className="bubble">Pode sim. Chega até o dia 20?</p>
          <span className="chip chip-lime mock-event">
            Lead criado e distribuído pelo rodízio
          </span>
        </div>
      </div>
    </>
  ),
  crm: (
    <>
      <div className="mock-head">
        <div>
          <p className="mock-title">Orçamentos</p>
          <p>9 etapas, de Leads a Pós-venda</p>
        </div>
        <span className="chip">72% da meta do mês</span>
      </div>
      <div
        className="mock-board"
        tabIndex={0}
        role="group"
        aria-label="Quadro de orçamentos"
      >
        {board.map((column) => (
          <div className="mock-col" key={column.title}>
            <p className="mock-col-title">
              {column.title}
              <span>{column.count}</span>
            </p>
            {column.cards.map(([name, item, chip, tone]) => (
              <div className="mock-card" key={name}>
                <strong>{name}</strong>
                <p>{item}</p>
                <span className={tone ? 'chip ' + tone : 'chip'}>{chip}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  ),
  order: (
    <>
      <div className="mock-head">
        <div>
          <p className="mock-title">Pedido 10.482</p>
          <p>Agência Norte, entrega até 20/11</p>
        </div>
        <span className="chip chip-lime">Pedido em preparo</span>
      </div>
      <div className="mock-split">
        <div
          className="mock-table-wrap"
          tabIndex={0}
          role="group"
          aria-label="Itens do pedido"
        >
          <table className="mock-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qtd.</th>
                <th>Gravação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Garrafa térmica 500 ml</td>
                <td>300</td>
                <td>Laser, 1 cor</td>
              </tr>
              <tr>
                <td>Caixa kraft</td>
                <td>300</td>
                <td>Sem gravação</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mock-card">
          <strong>Status da compra</strong>
          <Checks
            items={[
              ['Chegada do fornecedor', true],
              ['Pré-checagem', true],
              ['Desembalagem', false],
              ['Departamento de gravação', false],
            ]}
          />
        </div>
      </div>
    </>
  ),
  production: (
    <>
      <div className="mock-head">
        <div>
          <p className="mock-title">Fila de gravação</p>
          <p>Por técnica, ordenada pelo prazo</p>
        </div>
        <span className="chip chip-alert">1 atrasado</span>
      </div>
      <div
        className="mock-table-wrap"
        tabIndex={0}
        role="group"
        aria-label="Fila de gravação"
      >
        <table className="mock-table">
          <thead>
            <tr>
              <th className="mock-hide-xs">Compra</th>
              <th>Produto</th>
              <th className="mock-hide-sm">Técnica</th>
              <th>Status</th>
              <th className="mock-hide-xs">Prazo</th>
            </tr>
          </thead>
          <tbody>
            {queue.map(
              ([id, product, technique, status, tone, due, dueTone]) => (
                <tr key={id}>
                  <td className="mock-hide-xs">{id}</td>
                  <td>{product}</td>
                  <td className="mock-hide-sm">{technique}</td>
                  <td>
                    <span className={tone ? 'chip ' + tone : 'chip'}>
                      {status}
                    </span>
                  </td>
                  <td className="mock-hide-xs">
                    {dueTone ? (
                      <span className={'chip ' + dueTone}>{due}</span>
                    ) : (
                      due
                    )}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  ),
  shipping: (
    <>
      <div className="mock-head">
        <div>
          <p className="mock-title">Expedição</p>
          <p>Pedido 10.482, Agência Norte</p>
        </div>
        <span className="chip chip-ok">Pedido pronto para entrega</span>
      </div>
      <div className="mock-split">
        <div className="mock-card">
          <strong>Entrega</strong>
          <p>Av. Exemplo, 1000, São Paulo, SP</p>
          <dl className="mock-kv">
            <div>
              <dt>Envio</dt>
              <dd>Transportadora</dd>
            </div>
            <div>
              <dt>Volumes</dt>
              <dd>3 caixas</dd>
            </div>
            <div>
              <dt>Nota fiscal</dt>
              <dd>Solicitada</dd>
            </div>
          </dl>
        </div>
        <div className="mock-card">
          <strong>Status do pedido</strong>
          <Checks
            items={[
              ['Pedido em preparo', true],
              ['Pedido pronto para entrega', true],
              ['Pedido em rota de entrega', false],
              ['Pedido entregue', false],
            ]}
          />
        </div>
      </div>
    </>
  ),
}

export function ReddPreview() {
  const [step, setStep] = useState<Step>('chat')
  const id = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const last = steps.length - 1
    const target =
      event.key === 'ArrowRight'
        ? (index + 1) % steps.length
        : event.key === 'ArrowLeft'
          ? (index + last) % steps.length
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : -1
    if (target < 0) return
    event.preventDefault()
    setStep(steps[target].id)
    tabs.current[target]?.focus()
  }

  return (
    <div className="mock-wrap">
      <div
        className="mock-steps"
        role="tablist"
        aria-label="Etapas de um pedido no sistema"
      >
        {steps.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${item.id}`}
            aria-selected={step === item.id}
            aria-controls={`${id}-panel`}
            tabIndex={step === item.id ? 0 : -1}
            onClick={() => setStep(item.id)}
            onKeyDown={(event) => onKeyDown(event, i)}
          >
            <span>{i + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="mock">
        <div className="mock-bar" aria-hidden="true">
          <span className="mock-logo">Sistema interno</span>
          <span className="mock-search">Buscar no menu... Ctrl+K</span>
          <span className="mock-user">OM</span>
        </div>
        <div className="mock-app">
          <div className="mock-nav" aria-hidden="true">
            {nav.map((item) => (
              <span key={item.label} data-active={item.step === step}>
                <item.icon size={15} />
                {item.label}
              </span>
            ))}
          </div>
          <div
            key={step}
            className="mock-main"
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${step}`}
            tabIndex={0}
          >
            {panels[step]}
          </div>
        </div>
      </div>
    </div>
  )
}

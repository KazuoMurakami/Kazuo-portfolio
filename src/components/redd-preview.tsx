'use client'

import { useId, useState } from 'react'
import {
  ArrowRight,
  LayoutDashboard,
  MessageSquare,
  Package,
  Rows3,
} from 'lucide-react'

const views = {
  crm: {
    label: 'CRM',
    heading: 'Cada conversa, um próximo passo.',
    columns: [
      {
        title: 'Em negociação',
        name: 'Kit de boas-vindas',
        detail: 'Personalização definida',
        tag: 'Orçamento',
      },
      {
        title: 'Aprovação',
        name: 'Garrafas personalizadas',
        detail: 'Layout em análise',
        tag: 'Comercial',
      },
      {
        title: 'Pedido',
        name: 'Brindes para evento',
        detail: 'Pronto para a operação',
        tag: 'Aprovado',
      },
    ],
  },
  production: {
    label: 'Produção',
    heading: 'Do pedido à próxima etapa.',
    columns: [
      {
        title: 'Recebimento',
        name: 'Conferência dos itens',
        detail: 'Entrada na operação',
        tag: 'Receber',
      },
      {
        title: 'Produção',
        name: 'Gravação e montagem',
        detail: 'Fila de personalização',
        tag: 'Produzir',
      },
      {
        title: 'Expedição',
        name: 'Conferência de saída',
        detail: 'Entrega e nota fiscal',
        tag: 'Expedir',
      },
    ],
  },
}
type View = keyof typeof views

export function ReddPreview() {
  const [view, setView] = useState<View>('crm')
  const id = useId()
  const active = views[view]
  return (
    <div className="redd-preview">
      <div className="preview-browser">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>REDD / espaço de trabalho</span>
        <span className="preview-online">●</span>
      </div>
      <div className="redd-app">
        <div className="preview-sidebar" aria-hidden="true">
          <b>
            r<span>.</span>
          </b>
          <LayoutDashboard size={15} />
          <MessageSquare size={15} />
          <Package size={15} />
          <Rows3 size={15} />
          <span className="sidebar-avatar">OM</span>
        </div>
        <div className="preview-body">
          <div className="preview-heading">
            <span>VISÃO DA OPERAÇÃO</span>
            <span>REDD BRINDES</span>
          </div>
          <p className="preview-title">{active.heading}</p>
          <div
            className="preview-switch"
            role="group"
            aria-label="Explorar os fluxos da REDD"
          >
            {(Object.keys(views) as View[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={view === key}
                aria-controls={id}
                onClick={() => setView(key)}
              >
                {views[key].label}
              </button>
            ))}
          </div>
          <div
            className="preview-kanban"
            id={id}
            aria-live="polite"
            aria-atomic="true"
          >
            {active.columns.map((column, index) => (
              <div className="kanban-column" key={column.title}>
                <div className="kanban-title">
                  <i />
                  {column.title}
                </div>
                <div className="kanban-card">
                  <span className="kanban-index">
                    0{index + 1} <ArrowRight size={12} aria-hidden="true" />
                  </span>
                  <strong>{column.name}</strong>
                  <p>{column.detail}</p>
                  <span className="kanban-tag">{column.tag}</span>
                </div>
                <div className="kanban-placeholder" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

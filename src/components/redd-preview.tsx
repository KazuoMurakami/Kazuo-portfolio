'use client'

import { useId, useState } from 'react'
import { LayoutDashboard, MessageSquare, Package, Rows3 } from 'lucide-react'

const views = {
  crm: {
    label: 'CRM',
    heading: 'Funil comercial',
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
    heading: 'Fila de produção',
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
      <div className="preview-bar">
        <span>Sistema REDD</span>
        <span className="preview-user" aria-hidden="true">
          OM
        </span>
      </div>
      <div className="redd-app">
        <div className="preview-sidebar" aria-hidden="true">
          <LayoutDashboard size={16} />
          <MessageSquare size={16} />
          <Package size={16} />
          <Rows3 size={16} />
        </div>
        <div className="preview-body">
          <div className="preview-top">
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
                  <span>{index + 1}</span>
                  {column.title}
                </div>
                <div className="kanban-card">
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

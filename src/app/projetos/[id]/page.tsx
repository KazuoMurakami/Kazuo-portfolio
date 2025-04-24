// Import necessário para Next.js
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default async function ProjetoPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  // Busca o projeto diretamente do array
  const projeto = projects.find((p) => p.id === id)

  if (!projeto) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Botão voltar */}
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Voltar para projetos</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Lado esquerdo - Imagem do projeto */}
        <div className="relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 p-2">
          {projeto.image ? (
            <Image
              src={projeto.image}
              alt={projeto.title}
              fill
              className="w-full h-auto rounded-lg object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-[400px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
              <span className="text-white/50 text-lg">
                Imagem não disponível
              </span>
            </div>
          )}
        </div>

        {/* Lado direito - Informações do projeto */}
        <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20"
                >
                  {projeto.category}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold tracking-tight">
                {projeto.title}
              </h1>

              <p className="text-muted-foreground text-lg">
                {projeto.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-2.5 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {projeto.github && (
                <Button asChild variant="outline" className="gap-2">
                  <Link
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Ver código fonte
                  </Link>
                </Button>
              )}

              {projeto.demoUrl ? (
                <Button asChild className="gap-2">
                  <Link
                    href={projeto.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver demonstração
                  </Link>
                </Button>
              ) : (
                <Button asChild className="gap-2">
                  Sem demonstração disponível
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Features do projeto */}
      {projeto.features && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Principais funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projeto.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights - Pontos de destaque */}
      {projeto.highlights && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projeto.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border-l-4 border-primary"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Seções técnicas - Frontend, Backend, etc */}
      {projeto.sections && (
        <div className="mt-12 space-y-10">
          {projeto.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3" />
                        <p className="text-slate-700 dark:text-slate-200">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-slate-700 dark:text-slate-200">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default async function ProjetoPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const projeto = projects.find((p) => p.id === id)

  if (!projeto) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top gradient */}
      <div
        className="fixed top-0 left-0 right-0 h-[200px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      <div className="container mx-auto px-6 py-12 max-w-5xl relative z-20">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center mb-12 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para projetos</span>
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
            {projeto.image ? (
              <Image
                src={projeto.image}
                alt={projeto.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-white/30 text-sm">
                  Imagem não disponível
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="liquid-glass rounded-full px-3 py-1 w-fit">
              <span className="text-white/70 text-xs font-medium">
                {projeto.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-[0.9]">
              {projeto.title}
            </h1>

            <p className="text-white/60 font-light text-base leading-relaxed">
              {projeto.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {projeto.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="liquid-glass rounded-full px-3 py-1 text-white/80 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {projeto.github && (
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 w-fit"
                >
                  <Github className="h-4 w-4" />
                  Ver código fonte
                </a>
              )}
              {projeto.demoUrl && (
                <a
                  href={projeto.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2 w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver demonstração
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        {projeto.features && (
          <div className="mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
              <span className="text-white/80 text-xs font-medium">
                Funcionalidades
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight leading-[0.9] mb-8">
              Principais recursos.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projeto.features.map((feature, index) => (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-5 flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-white/60 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 font-light text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        {projeto.highlights && (
          <div className="mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
              <span className="text-white/80 text-xs font-medium">
                Destaques
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight leading-[0.9] mb-8">
              O que torna especial.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projeto.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-8 border-l-2 border-white/20"
                >
                  <h3 className="text-lg font-serif italic text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Sections */}
        {projeto.sections && (
          <div className="space-y-12">
            {projeto.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
                  <span className="text-white/80 text-xs font-medium">
                    {section.title}
                  </span>
                </div>
                <div className="liquid-glass rounded-2xl p-8">
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0" />
                          <p className="text-white/70 font-light text-sm">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/70 font-light text-sm">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

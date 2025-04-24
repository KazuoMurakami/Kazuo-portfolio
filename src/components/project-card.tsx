import { ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'

interface ProjectCardProps {
  id: string
  title: string
  image: string
  github?: string
  category?: string
  technologies?: string[]
}

export function ProjectCard({
  id,
  title,
  image,
  github,
  category,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border p-1 transition-all hover:border-primary ">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={image || '/finance.jpg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {title} - <span className="text-sm font-light">{category}</span>
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <Badge
              key={tech}
              className="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {github && (
            <Link
              href={github}
              className="inline-flex items-center gap-1 text-sm hover:text-primary"
            >
              <Github className="h-4 w-4" />
              Código fonte
            </Link>
          )}

          <Link
            href={`/projetos/${id}`}
            className="inline-flex items-center gap-1 text-sm hover:text-primary"
          >
            <ArrowUpRight className="h-4 w-4" />
            Ver projeto
          </Link>
        </div>
      </div>
    </div>
  )
}

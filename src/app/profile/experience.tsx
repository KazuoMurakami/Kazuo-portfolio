import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  type: 'trabalho' | 'educação'
  skills?: string[]
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      type: 'trabalho',
      title: 'Analista de Sistemas',
      company: 'Empresa Redd Brindes',
      period: 'Jan 2025 - Presente',
      description:
        'Responsável pelo desenvolvimento de automações de processos internos e analista QA de sistemas.',
      skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Python'],
    },
    {
      type: 'educação',
      title: 'Graduação em Analise e Desenvolvimento de Sistemas',
      company: 'Universidade São Judas Tadeu',
      period: '2022 - 2024',
      description:
        'Formação em algoritmos, estruturas de dados, desenvolvimento de software e sistemas distribuídos, com foco em tecnologias web.',
      skills: ['JavaScript', 'Python', 'Banco de Dados'],
    },
    // Você pode adicionar mais experiências aqui
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Experiência Profissional
      </h2>

      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            className="bg-white border-l-4 hover:shadow-lg transition-shadow duration-300"
            style={{
              borderLeftColor:
                experience.type === 'trabalho' ? '#3b82f6' : '#10b981',
            }}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-lg flex items-center gap-1 mt-1">
                    {experience.type === 'trabalho' ? (
                      <Briefcase className="h-4 w-4" />
                    ) : (
                      <GraduationCap className="h-4 w-4" />
                    )}
                    {experience.company}
                  </CardDescription>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {experience.period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              {experience.skills && (
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

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

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      type: 'trabalho',
      title: 'Analista de Sistemas',
      company: 'Empresa Redd Brindes',
      period: 'Jan 2025 - Presente',
      description:
        'Responsável pelo desenvolvimento de automações de processos internos e analista QA de sistemas.',
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
      skills: ['JavaScript', 'Python', 'Banco de Dados'],
    },
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
              {experience.information && (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full p-8"
                  defaultValue="1"
                >
                  {experience.information.map((info, i) => (
                    <AccordionItem key={i} value={info.title}>
                      <AccordionTrigger className="">
                        {info.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-gray-500 p-2">
                        {info.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
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

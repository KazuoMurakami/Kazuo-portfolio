'use client'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'
import { experiences } from './lib/experience'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export function Experience() {
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
                  <CardDescription className="text-lg flex items-center gap- mt-2">
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
                <div className="flex flex-col gap-2 my-4">
                  {experience.information.map((info, i) => (
                    <div key={i}>
                      <Separator
                        className="my-2 bg-gray-600"
                        orientation="horizontal"
                      />
                      <h3
                        className={cn(
                          'text-lg font-bold mb-4',
                          experience.type === 'trabalho'
                            ? 'text-blue-400'
                            : 'text-green-400',
                        )}
                      >
                        {info.title}
                      </h3>
                      <p className="text-gray-500">{info.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {experience.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-white bg-black/80 p-2"
                    >
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

'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skills } from './Skills'
import { Projects } from './Projects'

export function SkillsAndProjects() {
  return (
    <section id="skills-and-projects" className="py-20 px-4">
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <Skills />
          </TabsContent>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { TechStackSection } from '@/components/sections/tech-stack'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export default function Home() {
  return (
    <main className="bg-black overflow-visible">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactFooterSection />
    </main>
  )
}

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </>
  )
}

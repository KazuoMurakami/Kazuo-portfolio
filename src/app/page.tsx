import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { ProjectsSection } from '@/components/sections/projects'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export default function Home() {
  return (
    <div className="frame">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <div className="band band-spacer" aria-hidden="true" />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </div>
  )
}

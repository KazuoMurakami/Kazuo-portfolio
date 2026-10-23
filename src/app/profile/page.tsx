import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export const metadata: Metadata = { title: 'Sobre | Octavio Murakami' }

export default function ProfilePage() {
  return (
    <div className="frame">
      <Navbar />
      <main id="main-content">
        <h1 className="profile-heading">Octavio Murakami</h1>
        <AboutSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </div>
  )
}

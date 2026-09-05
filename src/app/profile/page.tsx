import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactFooterSection } from '@/components/sections/contact-footer'

export const metadata: Metadata = { title: 'Sobre | Octavio Murakami' }

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="profile-page">
        <h1 className="site-shell profile-heading">
          Prazer, <em>Octavio.</em>
        </h1>
        <AboutSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </>
  )
}

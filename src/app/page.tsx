import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SkillsAndProjects } from '@/components/SkillsAndProjects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SkillsAndProjects />
        <Contact />
      </main>
    </div>
  )
}

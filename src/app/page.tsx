import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SkillsAndProjects } from '@/components/skill-and-project'

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

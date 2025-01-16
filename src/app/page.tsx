import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsSection } from '@/components/project'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <Contact />
      </main>
    </div>
  )
}

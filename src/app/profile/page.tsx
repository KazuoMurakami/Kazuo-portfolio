import { Header } from '@/components/Header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function DeveloperPortfolio() {
  return (
    <>
      <Header />
      <div className=" bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <main className="max-w-4xl mx-auto space-y-8 mt-10">
          {/* Header Section */}
          <header className="text-center">
            <Avatar className="size-40 mx-auto mb-4 ">
              <AvatarImage src="/profile.png" alt="Octavio Murakami" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-gray-900">
              Octavio Murakami
            </h1>
            <p className="text-xl text-gray-600">Professional Web Developer</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/KazuoMurakami"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/octavio-murakami/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="otaviokazuo12@hotmail.com"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </header>

          {/* About Section */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Estou sempre em busca de novos desafios e oportunidades para
                expandir meus conhecimentos e habilidades. Com uma sólida
                experiência em TypeScript, JavaScript e frameworks modernos como
                Next.js, estou pronto para contribuir com projetos inovadores e
                de alta qualidade. Meu objetivo é ingressar na área de TI e
                colaborar com equipes dinâmicas para criar soluções eficientes e
                impactantes.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML5</Badge>
                <Badge>CSS3</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Fastify</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Git</Badge>
                <Badge>Responsive Design</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Entre em contato!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Pronto para transformar suas ideias em realidade? Estou
                empolgado em trazer minha experiência e paixão por
                desenvolvimento web para seu próximo projeto. Vamos criar algo
                incrível juntos! Você pode me contatar em:
              </p>
              <p className="font-semibold mt-2">octaviokazuo12@hotmail.com</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}

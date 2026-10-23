import './globals.css'
// eslint-disable-next-line camelcase
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'

// eslint-disable-next-line camelcase
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-display',
})

// eslint-disable-next-line camelcase
const body = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export const metadata = {
  title: 'Octavio Murakami | Desenvolvedor full-stack',
  description:
    'Desenvolvedor full-stack em São Paulo. Sistemas internos, catálogos B2B e integrações para empresas que vendem por orçamento. Aberto a projetos e vagas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${display.variable} ${body.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  )
}

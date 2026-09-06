import './globals.css'
// eslint-disable-next-line camelcase
import { Instrument_Serif, Barlow } from 'next/font/google'

// eslint-disable-next-line camelcase
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-heading',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
})

export const viewport = {
  colorScheme: 'dark',
  themeColor: '#040d12',
}

export const metadata = {
  title: 'Octavio Murakami | Desenvolvimento Full-Stack',
  description:
    'Sistemas para a vida real. Conheça meu trabalho com CRM e operação na REDD, e-commerce B2B na IceCube, interfaces, APIs e integrações.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${instrumentSerif.variable} ${barlow.variable} dark scroll-smooth`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}

import './globals.css'
// eslint-disable-next-line camelcase
import { Barlow, Barlow_Semi_Condensed } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

// eslint-disable-next-line camelcase
const barlowDisplay = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

export const viewport = {
  colorScheme: 'dark',
  themeColor: '#040d12',
}

export const metadata = {
  title: 'Octavio Murakami | Desenvolvedor full-stack',
  description:
    'Desenvolvedor full-stack. Sistemas internos, CRM e operação na REDD Brindes e o catálogo B2B da IceCube.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${barlow.variable} ${barlowDisplay.variable} dark scroll-smooth`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}

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
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Octavio Murakami | Full-Stack Developer',
  description:
    'Desenvolvedor Full-Stack inovador e criativo, transformando ideias em realidade com tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${instrumentSerif.variable} ${barlow.variable} scroll-smooth`}
    >
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}

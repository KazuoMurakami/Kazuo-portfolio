import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'John Doe - IT Professional Portfolio',
  description:
    'Minimalist portfolio showcasing the skills and projects of John Doe, an IT Professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}

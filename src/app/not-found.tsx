'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Home, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="text-8xl mb-4 inline-block"
            >
              🕵️
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Oops! Página não encontrada
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Parece que você se perdeu no caminho. A página que você está
              procurando não existe ou foi movida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Tente pesquisar aqui..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="w-full sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Link href="/" className="flex items-center justify-center">
                  <Home className="mr-2 h-4 w-4" />
                  Página Inicial
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-1/2 border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                <Link
                  href="#"
                  onClick={() => router.back()}
                  className="flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="bg-gray-50 px-8 py-4">
          <p className="text-center text-gray-600">
            Se você acredita que isso é um erro, por favor{' '}
            <Link href="/contato" className="text-blue-500 hover:underline">
              entre em contato
            </Link>{' '}
            com nossa equipe de suporte.
          </p>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-2xl"
      >
        <div className="p-8">
          <motion.div
            className="w-64 h-64 mx-auto mb-8"
            animate={{ rotate: isHovering ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF0066"
                d="M47.7,-57.2C59.5,-47.3,65.5,-30.9,67.2,-14.6C68.9,1.8,66.3,18.1,58.5,31.3C50.7,44.5,37.6,54.7,22.1,62.3C6.6,69.9,-11.3,75,-27.2,71.1C-43.1,67.3,-57,54.5,-65.2,38.9C-73.4,23.3,-75.8,4.9,-71.2,-11.7C-66.5,-28.3,-54.8,-43.1,-41.1,-53.2C-27.4,-63.2,-11.7,-68.5,3.4,-72.5C18.5,-76.5,36.9,-79.1,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Oops! Algo deu errado
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Não se preocupe, estamos trabalhando para resolver o problema.
          </motion.p>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-100 rounded-lg p-4 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Detalhes do Erro
              </h3>
              <p className="text-gray-600 break-all">
                {error.message || 'Ocorreu um erro inesperado.'}
              </p>
              {error.digest && (
                <p className="text-sm text-gray-500 mt-2">
                  ID do Erro: {error.digest}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={reset}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Tentar Novamente
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-2 border-purple-500 text-purple-500 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500 hover:text-white"
          >
            <Link href="/profile">Voltar para a Página Inicial</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

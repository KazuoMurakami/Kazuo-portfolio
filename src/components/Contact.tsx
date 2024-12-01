'use client'

import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-transparent border border-accent rounded-none focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-transparent border border-accent rounded-none focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-3 py-2 bg-transparent border border-accent rounded-none focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

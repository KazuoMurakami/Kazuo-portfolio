'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experiences } from '@/app/profile/lib/experience'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.02] to-black z-0" />

      {/* Top Fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4">
            <span className="text-white/80 text-xs font-medium">
              Trajetória
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-[0.9]">
            Experiência profissional.
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="liquid-glass rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                    {exp.type === 'trabalho' ? (
                      <Briefcase className="w-5 h-5 text-white" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif italic text-white">
                      {exp.title}
                    </h3>
                    <p className="text-white/60 text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="liquid-glass rounded-full px-3 py-1 text-white/70 text-xs font-medium w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Information items */}
              {exp.information && (
                <div className="space-y-4 mb-6">
                  {exp.information.map((info, i) => (
                    <div key={i} className="border-t border-white/10 pt-4">
                      <h4 className="text-white font-medium text-sm mb-2">
                        {info.title}
                      </h4>
                      <p className="text-white/50 font-light text-sm leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="liquid-glass rounded-full px-3 py-1 text-white/80 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ImageSlot } from './ImageSlot'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">Academic Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Item */}
        <div className="space-y-16 lg:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <ImageSlot
                src="/kprcas.jpeg"
                alt="KPRCAS Campus"
                caption="KPR COLLEGE OF ARTS, SCIENCE AND RESEARCH - TAMIL NADU / INDIA"
                subcaption="Academic Campus & Incubation Facilities"
                aspectRatio="aspect-[16/10]"
              />
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 block mb-2">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">
                  Bachelor of Science — Artificial Intelligence and Machine Learning (B.Sc. AIML)
                </h3>
                <p className="text-base text-gray-400 font-light mb-4">
                  KPR College of Arts, Science and Research (KPRCAS), Tamil Nadu, India
                </p>
                <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded font-mono text-xs text-zinc-400 mb-6">
                  Department: Artificial Intelligence and Machine Learning
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    Key Focus Areas
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                    Programming, Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    Learning Interests
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                    Intelligent systems, Generative AI, full-stack web applications, AI agents, and workflow automation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

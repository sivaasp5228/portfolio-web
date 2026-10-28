import { motion } from 'framer-motion'
import { ImageSlot } from './ImageSlot'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">About Me</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <ImageSlot
              src="me.png"
              alt="Profile or Academic Visual"
              caption="FOUNDER - BROSTER GROUPS"
              subcaption="• A Global Parenting Agency"
              aspectRatio="aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
              Building Technology. Creating Experiences. Leading Ideas.
            </h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              I'm an aspiring technologist, entrepreneur, and event strategist passionate about creating memorable experiences and innovative solutions. I enjoy planning events, coordinating teams, and bringing people together through creativity, collaboration, and strategic execution.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed font-light">
              Alongside event management, I explore AI, software development, and automation to transform ideas into reality. My vision is to combine technology and human connection to create impactful events, meaningful experiences, and innovative ventures.
            </p>
          </motion.div>
        </div>

        {/* Big Statement Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32 py-12 border-y border-zinc-800/80"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 block mb-6">
            Core Philosophy
          </span>
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "THINK ENTREPRENEUR"<br />
            <span className="text-white underline underline-offset-8">BECOME ENTREPRENEUR</span><br />
          </h2>
          <p className="mt-8 text-sm font-mono text-gray-500 tracking-widest uppercase">
            BUILD. INNOVATE. EXECUTE. REPEAT.
          </p>
        </motion.div>

        {/* Second Block: Communities & Teamwork */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div
            {...fadeInUp}
            className="flex flex-col justify-center space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Community & Innovation
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">
              Creating Experiences. Building the Future.
            </h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              I'm an entrepreneur and event enthusiast passionate about planning impactful events, bringing people together, and turning creative ideas into memorable experiences at about planning impactful events, bringing people together, and turning creative ideas into memorable experiences.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed font-light">
              Alongside event management, I explore AI and software development to build innovative solutions. I aim to bridge technology, creativity, and human connection to create meaningful impact.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <ImageSlot
              src="mee.png"
              alt="Hackathons & Project Collaborations"
              caption="CO-FOUNDER INNOVATE GRAPHICZ"
              subcaption="• Digital Branding Agency"
              aspectRatio="aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

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
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">About Sivaa</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <ImageSlot
              alt="Profile or Academic Visual"
              caption="KPR COLLEGE OF ARTS, SCIENCE AND RESEARCH - TAMIL NADU / INDIA"
              subcaption="Department of Artificial Intelligence & Machine Learning"
              aspectRatio="aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
              Aspiring AI & Software Developer solving real-world problems.
            </h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              I'm an aspiring AI and software developer who believes technology should solve real problems, simplify complex processes, and create opportunities for innovation.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed font-light">
              My journey combines programming, web development, AI-powered automation, entrepreneurship, and teamwork. I have worked on academic projects, AI prototypes, hackathon solutions, and digital products while continuously improving my technical and problem-solving abilities.
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
            BUILD. INNOVATE. AUTOMATE. REPEAT.
          </p>
        </motion.div>

        {/* Second Block: Communities & Teamwork */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex flex-col justify-center space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Community & Innovation
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">
              Beyond Coding: Innovation & Collaboration
            </h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
              Beyond coding, I actively participate in technology communities, internships, hackathons, and collaborative projects. Through my involvement with Innovate Graphicz and Team INNOVATRIX, I have explored product development, branding, research, teamwork, and presenting innovative ideas.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed font-light">
              My goal is to become a skilled AI engineer and software developer capable of building intelligent, scalable, and impactful technology solutions.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <ImageSlot
              alt="Hackathons & Project Collaborations"
              caption="TEAM INNOVATRIX & INNOVATE GRAPHICZ"
              subcaption="Incubated under KPR Incubation Hub • Product Ideation & Hackathons"
              aspectRatio="aspect-[4/3]"
            />
          </motion.div>
        </div>

        {/* Third Block: Journey & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <ImageSlot
              alt="AI Workflow & Development"
              caption="FULL STACK ARCHITECTURE & AI AGENTS"
              subcaption="Intelligent Systems & Scalable Product Engineering"
              aspectRatio="aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-2">
                Development Journey
              </span>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 font-light">
                I believe becoming a strong developer is about continuous learning, consistent practice, and building real projects. My journey focuses on strengthening Java & Python, mastering DSA, building full-stack platforms, and integrating Generative AI & agentic pipelines.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-2">
                Career Goals
              </span>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-light">
                I aspire to work at the intersection of Artificial Intelligence, software engineering, and automation — contributing to AI engineering, full-stack systems, Generative AI applications, and research-driven innovation to solve real problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

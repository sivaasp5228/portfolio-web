import { motion } from 'framer-motion'

const contactPoints = [
  { label: 'GITHUB', value: 'github.com/sivaasp5228', href: 'https://github.com/sivaasp5228' },
  { label: 'LINKEDIN', value: 'Connect on LinkedIn', href: 'https://linkedin.com' },
  { label: 'LOCATION', value: 'Tamil Nadu, India', href: '#' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">Let's Connect</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          GET IN TOUCH
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Statement & Description */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-3xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-6">
            LET'S TURN INNOVATIVE IDEAS<br />
            INTO WORKING SOLUTIONS.
          </h3>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-4">
            I'm always interested in connecting with developers, founders, researchers, mentors, and technology enthusiasts who enjoy building meaningful products. Whether it's an AI idea, a software project, a hackathon, or an opportunity to collaborate, I'm open to learning and creating together.
          </p>
          <p className="text-xs font-mono text-zinc-500 tracking-[0.25em] uppercase">
            BUILD. INNOVATE. AUTOMATE. REPEAT.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-0 max-w-2xl">
          {contactPoints.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-xs sm:text-sm text-gray-400 font-mono tracking-widest">
                {contact.label}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-300 font-light group-hover:text-white transition-colors">
                  {contact.value}
                </span>
                <span className="text-gray-500 group-hover:text-white transition-colors">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-xs font-mono text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Direct Reach & Channels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:contact@sivaasp.dev"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4 font-light"
            >
              contact@sivaasp.dev
            </a>
            <a
              href="https://github.com/sivaasp5228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4 font-light"
            >
              GitHub / sivaasp5228
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4 font-light"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} SIVAA SP. All rights reserved.
          </p>
          <p>
            Tamil Nadu, India • B.Sc. AIML (KPRCAS)
          </p>
        </motion.footer>
      </div>
    </section>
  )
}

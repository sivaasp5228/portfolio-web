import { motion } from 'framer-motion'

interface Credential {
  title: string
  issuer: string
  type: string
  details?: string
}

const credentials: Credential[] = [
  {
    title: 'Beginner SEO Certification',
    issuer: 'HubSpot Academy',
    type: 'Industry Certification',
    details: 'Digital strategy, search engine optimization fundamentals, and ranking visibility.',
  },
  {
    title: 'AI & Data, IBM Z Skills, Modernization & Security Badges',
    issuer: 'IBM Learning',
    type: 'Professional Learning Badges',
    details: 'Foundational enterprise computing, artificial intelligence pipelines, data governance, and cloud security.',
  },
  {
    title: 'DSA Codeverse Achievement Credential',
    issuer: 'NxtWave CCBP 4.0 Academy',
    type: 'Competitive Coding Credential',
    details: 'Rank 32/700 in foundational Data Structures and Algorithms competitive challenge.',
  },
  {
    title: 'AI Tools & Automation Practical Credential',
    issuer: 'EFOS',
    type: 'Internship Completion',
    details: 'Hands-on project work in chatbot integration, AI media workflows, and productivity pipelines.',
  },
  {
    title: 'Full Stack Web Development Credential',
    issuer: 'Thiranex',
    type: 'Internship Completion',
    details: 'Frontend architecture, responsive design, JavaScript programming, and full-stack integration.',
  },
  {
    title: 'Database Management Systems (DBMS)',
    issuer: 'NPTEL',
    type: 'Academic Certification Course',
    details: 'Relational data modeling, SQL query architecture, normalization, and database indexing.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">
            Credentials & Badges
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          CERTIFICATIONS &<br />LEARNING
        </motion.h2>

        {/* Credentials Grid */}
        <div className="space-y-0">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.title + cred.issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                    {cred.type}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                    {cred.details}
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="text-xs font-mono text-zinc-400 border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 rounded">
                    {cred.issuer}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

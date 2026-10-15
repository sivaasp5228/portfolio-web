import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Artificial Intelligence & Generative AI',
    skills: [
      'Generative AI & LLMs',
      'Gemini API Integration',
      'AI Workflow Automation',
      'Prompt Engineering',
      'AI Chatbots & Agents',
      'Document Intelligence',
      'Speech-to-Text & Transcriptions',
      'Vector Databases & Embeddings',
    ],
  },
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'Python Flask',
      'REST API Integration',
    ],
  },
  {
    title: 'Databases & Cloud Platforms',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Firebase Firestore',
      'Supabase',
      'MongoDB Atlas',
      'Git & GitHub',
      'Vercel & Netlify',
    ],
  },
  {
    title: 'AI & Productivity Tools',
    skills: [
      'ChatGPT',
      'Google Gemini',
      'Claude',
      'Gamma AI',
      'Grok AI',
      'Canva AI',
      'Google Veo Flow',
      'ElevenLabs',
    ],
  },
  {
    title: 'Professional & Leadership Skills',
    skills: [
      'Problem Solving',
      'Team Collaboration',
      'Leadership',
      'Creative Thinking',
      'Presentation & Communication',
      'Research & Analysis',
      'Adaptability',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          TECHNICAL<br />& CORE SKILLS
        </motion.h2>

        {/* Categorized Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: catIdx * 0.08 }}
              className="border-t border-gray-800 pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-4">
                  <h3 className="text-xs uppercase font-mono tracking-[0.25em] text-gray-400">
                    {cat.title}
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-3 group py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                        <span className="text-base sm:text-lg text-gray-300 font-light group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
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

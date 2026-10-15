import { motion } from 'framer-motion'
import { ImageSlot } from './ImageSlot'

interface ExperienceItem {
  role: string
  organization: string
  type: string
  period?: string
  location?: string
  description: string
  highlights: string[]
  tags: string[]
  link?: string
  linkLabel?: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Tools & Automation Intern',
    organization: 'EFOS',
    type: 'Internship',
    period: '2026',
    location: 'Virtual',
    description:
      'Participated in a structured internship focused on exploring state-of-the-art AI productivity tools, chatbot architectures, and automated media pipelines.',
    highlights: [
      'Explored AI-powered productivity and automation tools',
      'Integrated a Chatbase custom chatbot into live web applications',
      'Worked with AI video-generation workflows including Google Veo Flow, Grok Imagine, and ElevenLabs',
      'Completed assigned practical technical challenges and live project deliverables',
    ],
    tags: ['AI Automation', 'Chatbase', 'Google Veo Flow', 'ElevenLabs', 'Productivity AI'],
    link: 'https://nexoraai-efos.netlify.app/',
    linkLabel: 'View NexoraAI Practical Work',
  },
  {
    role: 'Full Stack Web Development Intern',
    organization: 'Thiranex',
    type: 'Internship',
    period: 'Practical Track',
    location: 'Tamil Nadu, India',
    description:
      'Completed a practical full-stack web development internship focused on strengthening real-world web architecture, styling, and application engineering.',
    highlights: [
      'Frontend web development and responsive UI design',
      'Website structure, modern semantic HTML, and CSS styling',
      'Core JavaScript and programming fundamentals',
      'Full-stack development concepts and building practical user experiences',
    ],
    tags: ['Web Development', 'Frontend', 'JavaScript', 'UI/UX', 'Full Stack'],
  },
  {
    role: 'Co-Founder & Tech Lead',
    organization: 'Innovate Graphicz',
    type: 'Student Initiative • Incubated under KPR Incubation Hub',
    period: 'Present',
    location: 'KPRCAS Incubation Hub',
    description:
      'A student-led digital branding and web initiative incubated under the KPR Incubation Hub, combining creativity, technology, and impact-first digital strategies.',
    highlights: [
      'Web application development and responsive website delivery',
      'Graphic, logo, and brand identity design for businesses',
      'Digital branding and growth consultancy using AI-assisted creative workflows',
      'Video editing, social media management, and sustainability-aligned digital reach',
    ],
    tags: ['Digital Branding', 'Web Development', 'Creative Tech', 'Entrepreneurship', 'AI Workflows'],
  },
  {
    role: 'Lead Project Collaborator',
    organization: 'Team INNOVATRIX',
    type: 'Hackathon & Technology Collective',
    period: 'Active',
    location: 'KPRCAS / Inter-College',
    description:
      'Active collaboration on competitive hackathons and innovative technology prototypes spanning AI, document intelligence, research systems, and web tools.',
    highlights: [
      'Collaborative product development and rapid MVP prototyping',
      'Technical problem-solving and AI API integrations',
      'Project coordination, team ideation, and live jury presentations',
      'Secured Top 10 at EFOS SkillUp & Runner-Up at Aqua Tech GenAI Hackathon',
    ],
    tags: ['Team INNOVATRIX', 'Hackathons', 'Rapid Prototyping', 'AI Engineering'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">
            Career & Leadership
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EXPERIENCE &<br />LEADERSHIP
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.role + exp.organization}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-10 md:py-14 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Left Column - Role & Organization */}
                <div className="lg:col-span-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                    {exp.type}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.organization}
                  </p>
                  {exp.location && (
                    <p className="text-xs font-mono text-gray-600 mt-2 uppercase tracking-wider">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Highlights */}
                <div className="lg:col-span-5">
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base font-light">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2">
                        <span className="text-zinc-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-500 border border-zinc-800 rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-gray-300 transition-colors underline underline-offset-4"
                    >
                      <span>{exp.linkLabel || 'View Work'}</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ImageSlot } from './ImageSlot'

interface Project {
  number: string
  title: string
  subtitle: string
  description: string
  features: string[]
  technologies: string[]
  liveDemo?: string
  team?: string
  imageCaption?: string
  src?: string
}


const projects: Project[] = [
  {
    number: '01',
    title: 'KPRCAS Website Development',
    subtitle: 'Institutional Website & Digital Experience',
    src: '/kprcas.png',
    liveDemo:'https://kprcas.ac.in',
    description:
      'Contributed as a UI & Media Associate, supporting website interface design, visual content development, and digital presentation to enhance the colleges online presence and user experience.',
    features: [
      'Institutional information and content presentation',
      'Responsive website design across devices',
      'Structured navigation and user experience',
      'Modern UI design and reusable components',
      'Improved digital accessibility and usability',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Web Design',
    ],
    imageCaption: 'KPRCAS — INSTITUTIONAL DIGITAL EXPERIENCE',
  },
  {
    number: '02',
    title: 'EnrollAI Platform',
    subtitle: 'Intelligent Enrollment & Lead Management',
    src: '/enroll.png',
    liveDemo:'https://enroll-ai-efos.vercel.app/',
    description:
      'A full-stack enrollment management platform designed to streamline institutional admissions workflows through an intuitive administrative dashboard, data visualization, and automation-ready integrations.',
    features: [
      'Administrative dashboard and analytics',
      'Enrollment and lead management interface',
      'Interactive data visualization and charts',
      'Firebase integration architecture',
      'Google Sheets synchronization and n8n automation planning',
    ],
    technologies: [
      'React 18',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
      'n8n',
    ],
    imageCaption: 'ENROLLAI — ENROLLMENT INTELLIGENCE DASHBOARD',
  },
  {
    number: '03',
    title: 'LegalEase',
    subtitle: 'AI-Powered Legal Document Intelligence',
    team: 'Team INNOVATRIX',
    src: "/legal.png",
    liveDemo: "https://legalease-innovatrix.streamlit.app/",
    description:
      'An AI-powered legal document analysis application that helps users understand complex legal documents and extract meaningful information from uploaded PDF files through an accessible web interface.',
    features: [
      'Legal document upload and analysis',
      'PDF-based document processing',
      'AI-assisted extraction of important clauses',
      'Simplified presentation of complex legal terminology',
      'Interactive web-based user interface',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'Generative AI',
      'Gemini API',
      'PDF Processing',
    ],
    imageCaption: 'LEGALEASE — AI-POWERED LEGAL INTELLIGENCE',
  },
  {
    number: '04',
    title: 'Innovate Graphicz Website',
    subtitle: 'Digital Branding & Creative Agency Platform',
    src: "/ig.png",
    liveDemo: "https://www.innovategraphicz.tech",
    description:
      'A digital presence for Innovate Graphicz, a student-led creative agency focused on branding, digital marketing, design, and technology-driven business growth.',
    features: [
      'Creative agency brand presentation',
      'Digital branding and service showcase',
      'Responsive website experience',
      'Portfolio and project presentation',
      'Business-focused user experience',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'SUpabase',
    ],
    imageCaption: 'INNOVATE GRAPHICZ — DIGITAL BRANDING AGENCY',
  },
  {
    number: '05',
    title: 'Rotaract Club of KPRCAS Website',
    subtitle: 'Community Engagement & Club Digital Platform',
    src: "/rac.png",
    liveDemo: "https://rac-2026.vercel.app/",
    description:
      'A dedicated website concept for the Rotaract Club of KPRCAS, designed to strengthen its digital presence, showcase community initiatives, and communicate club activities, events, and social impact.',
    features: [
      'Club identity and mission presentation',
      'Events and activities showcase',
      'Community service initiative highlights',
      'Member engagement and participation information',
      'Responsive design for accessible browsing',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
    ],
    imageCaption: 'ROTARACT KPRCAS — COMMUNITY & EVENT EXPERIENCE',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' },
}

export function Projects() {
  return (
    <section id="selected-work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">
            Selected Work
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          SELECTED WORK
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
              className="border-t border-gray-800 py-10 md:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Column 1: Index Number, Title, Team */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 block mb-2">
                      PROJECT {project.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mb-3">
                      {project.subtitle}
                    </p>
                    {project.team && (
                      <span className="inline-block text-xs font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 border border-zinc-800 rounded mb-4">
                        {project.team}
                      </span>
                    )}
                  </div>

                  {/* Image Slot for this project */}
                  <div className="mt-6">
                    <ImageSlot
                      src={project.src}
                      alt={`${project.title} Screenshot`}
                      caption={project.imageCaption || `${project.title.toUpperCase()} INTERFACE`}
                      aspectRatio="aspect-[16/10]"
                    />
                  </div>
                </div>

                {/* Column 2: Description, Features, Tech, Live Demo */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base font-light">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-3">
                        Key Features
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2"
                          >
                            <span className="text-zinc-600 mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="mb-8">
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-3">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs text-gray-400 border border-zinc-800 rounded-full font-mono bg-zinc-900/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link (Live Demo) */}
                  {project.liveDemo && (
                    <div className="pt-4 border-t border-zinc-900">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors underline underline-offset-8 font-mono uppercase tracking-wider"
                      >
                        <span>Launch Live Demo</span>
                        <span>↗</span>
                      </a>
                    </div>
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

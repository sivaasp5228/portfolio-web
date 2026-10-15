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
}

const projects: Project[] = [
  {
    number: '01',
    title: 'LegalEase',
    subtitle: 'AI-Powered Legal Document Intelligence',
    team: 'Team INNOVATRIX',
    description:
      'An AI-based legal document analysis application designed to help users understand complex legal documents and extract meaningful, structured information from uploaded PDF files.',
    features: [
      'Legal document upload and analysis',
      'PDF-based document processing',
      'AI-assisted extraction of critical clauses',
      'Simplified presentation of complex legal terms',
      'Interactive web-based interface',
    ],
    technologies: ['Python', 'Streamlit', 'Generative AI', 'PDF Processing'],
    liveDemo: 'https://legalease-innovatrix.streamlit.app/',
    imageCaption: 'LEGALEASE — STREAMLIT & GENAI PLATFORM',
  },
  {
    number: '02',
    title: 'Innoflow AI',
    subtitle: 'Autonomous Workflow Optimizer',
    description:
      'An AI-powered workflow intelligence concept designed to analyze processes, identify operational bottlenecks and inefficiencies, and provide automated decision intelligence.',
    features: [
      'Process mining and workflow discovery',
      'Workflow analysis and optimization',
      'AI-assisted decision intelligence',
      'Gemini API integration',
      'Automated workflow recommendations',
    ],
    technologies: ['React.js', 'Python', 'Gemini API', 'AI Workflow Tools'],
    imageCaption: 'INNOFLOW AI — WORKFLOW DISCOVERY ENGINE',
  },
  {
    number: '03',
    title: 'EnrollAI',
    subtitle: 'Intelligent Enrollment Management Platform',
    description:
      'A full-stack web application designed to simplify institutional enrollment workflows and deliver a structured, real-time administrative intelligence dashboard.',
    features: [
      'Administrative dashboard and analytics',
      'Enrollment and lead management interface',
      'Data visualization components & charts',
      'Firebase backend architecture planning',
      'Google Sheets synchronization & n8n automation',
    ],
    technologies: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'n8n'],
    imageCaption: 'ENROLLAI — DASHBOARD & WORKFLOW AUTOMATION',
  },
  {
    number: '04',
    title: 'AI Meeting-to-Execution Operator',
    subtitle: 'Meeting Intelligence & Action Extraction',
    description:
      'An end-to-end AI system transforming raw audio/video meeting recordings into structured, searchable transcripts, action items, and actionable outcomes.',
    features: [
      'Audio and video pipeline processing',
      'Speech transcription & speaker diarization',
      'Transcript chunking & semantic organization',
      'Vector storage and embeddings generation',
      'Action-item extraction and meeting intelligence',
    ],
    technologies: ['Python', 'OpenAI APIs', 'LangChain', 'MoviePy', 'ChromaDB', 'Speech Pipelines'],
    imageCaption: 'MEETING-TO-EXECUTION — VECTOR EMBEDDING PIPELINE',
  },
  {
    number: '05',
    title: 'BookMyShow Console Application',
    subtitle: 'OOP & Data Structures Booking Engine',
    description:
      'A robust Java console application demonstrating object-oriented programming fundamentals and data structure design through a simulated movie ticketing workflow.',
    features: [
      'Administrative seat and screen management',
      'Two-dimensional seat-map matrix handling',
      'Structured booking and ticketing operations',
      'Clean OOP architecture & state encapsulation',
    ],
    technologies: ['Java', 'OOP', 'Data Structures', '2D Arrays'],
    imageCaption: 'BOOKMYSHOW — CONSOLE OOP SYSTEM',
  },
  {
    number: '06',
    title: 'AI Research Workflow System',
    subtitle: 'Intelligent Research & Report Automation',
    description:
      'An AI-assisted workflow designed to accelerate information synthesis, structured research gathering, and document preparation using cutting-edge productivity AI.',
    features: [
      'Prompt-based deep research synthesis',
      'Structured information organization',
      'Automated slide and report preparation',
      'Cross-tool productivity pipelines',
    ],
    technologies: ['ChatGPT', 'Google Gemini', 'Gamma AI', 'Prompt Workflows'],
    imageCaption: 'AI RESEARCH — WORKFLOW PIPELINE',
  },
  {
    number: '07',
    title: 'AI Paper & Report Generator',
    subtitle: 'Citation Intelligence Hackathon Project',
    team: 'Team INNOVATRIX — Runner-Up at Aqua Tech Foundation Hackathon',
    description:
      'A Generative AI hackathon innovation focused on automating research-paper and formal report generation with an emphasis on citation-aware, verifiable drafting.',
    features: [
      'Citation-aware content generation',
      'Automated research paper drafting',
      'Structured academic formatting',
      'Contextual fact and reference verification',
    ],
    technologies: ['Generative AI', 'Python', 'LLMs', 'Citation Engine'],
    imageCaption: 'CITATION INTELLIGENCE — REPORT GENERATOR',
  },
  {
    number: '08',
    title: 'Smart Campus Event Management',
    subtitle: 'Coordinated Campus Digital Experience',
    team: 'NANO Hackathon — CITE Spotlight 2026',
    description:
      'A campus-focused digital workflow platform making event organization, schedule coordination, and student participation structured and intuitive.',
    features: [
      'Campus event coordination dashboard',
      'Digital registration and check-in workflows',
      'Student participation analytics',
      'User-friendly responsive interfaces',
    ],
    technologies: ['Web Technologies', 'Event Workflows', 'UI/UX Design'],
    imageCaption: 'CAMPUS MANAGEMENT — DIGITAL PLATFORM',
  },
  {
    number: '09',
    title: 'Multimodal Evidence Review System',
    subtitle: 'Vision-Language Model & Rule Engine',
    description:
      'A technical research prototype exploring a hybrid Vision-Language Model (VLM) and deterministic rule-engine approach to validating multimodal visual evidence.',
    features: [
      'Visual evidence image and text analysis',
      'Model-based reasoning combined with rule validation',
      'Structured audit logs and JSON output generation',
      'Automated evaluation pipelines',
    ],
    technologies: ['Vision-Language Models', 'Python', 'Rule Engines', 'Multimodal AI'],
    imageCaption: 'MULTIMODAL EVIDENCE — VLM VALIDATION PIPELINE',
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
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">
            Featured Portfolio
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          FEATURED<br />PROJECTS
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

                  {/* Blank Image Slot for this project */}
                  <div className="mt-6">
                    <ImageSlot
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

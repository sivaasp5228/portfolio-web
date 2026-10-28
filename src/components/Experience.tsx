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
    role: 'Founder & CEO',
    organization: 'BROSTER GROUPS',
    type: 'Entrepreneurship & Leadership',
    period: 'Present',
    location: 'Coimbatore, Tamil Nadu, India',
    description:
      'Leading BROSTER GROUPS with a vision to build an innovative business ecosystem spanning technology, entrepreneurship, creative industries, and future ventures.',
    highlights: [
      'Developing the long-term vision and strategic direction of the group',
      'Exploring opportunities across technology, business, and innovation',
      'Driving business development and strategic partnerships',
      'Building a foundation for scalable ventures and collaborative growth',
    ],
    tags: [
      'Entrepreneurship',
      'Strategic Leadership',
      'Business Development',
      'Innovation',
    ],
  },
  {
    role: 'Co-Founder',
    organization: 'INNOVATE GRAPHICZ',
    type: 'A Digital Branding Agency',
    period: 'Present',
    location: 'Tiruppur, Tamil Nadu, India',
    description:
      'Co-founded a student-led digital branding and creative agency focused on helping businesses strengthen their digital presence through design, technology, and strategic branding.',
    highlights: [
      'Contributing to business strategy and agency development',
      'Supporting website development and digital experiences',
      'Exploring branding, graphic design, and creative solutions',
      'Contributing to digital marketing and client-focused initiatives',
    ],
    tags: [
      'Entrepreneurship',
      'Digital Branding',
      'Web Development',
      'Creative Technology',
    ],
  },
  {
    role: 'Board Member',
    organization: 'ENTREPRENEURSHIP DEVELOPMENT CELL',
    type: 'Student Leadership',
    period: 'Present',
    location: 'KPRCAS, Tamil Nadu, India',
    description:
      'Contributing to the entrepreneurship ecosystem by supporting initiatives that encourage innovation, startup awareness, and entrepreneurial thinking among students.',
    highlights: [
      'Supporting entrepreneurship-focused initiatives',
      'Encouraging student innovation and startup awareness',
      'Collaborating on entrepreneurial activities and initiatives',
      'Contributing to a culture of creativity and business thinking',
    ],
    tags: [
      'Entrepreneurship',
      'Student Leadership',
      'Innovation',
      'Community Building',
    ],
  },
  {
    role: 'Student Coordinator',
    organization: 'CENTER FOR INNOVATION AND TALENT EMPOWERMENT',
    type: 'Student Coordination & Leadership',
    period: 'Present',
    location: 'KPRCAS, Tamil Nadu, India',
    description:
      'Serving as a student coordinator, supporting innovation-driven initiatives, student collaboration, and activities focused on identifying and developing student talent.',
    highlights: [
      'Coordinating student-focused initiatives and activities',
      'Supporting communication and collaboration among participants',
      'Encouraging innovation and talent development',
      'Contributing to the planning and execution of initiatives',
    ],
    tags: [
      'Student Coordination',
      'Leadership',
      'Communication',
      'Innovation',
    ],
  },
  {
    role: 'Web Service Chair',
    organization: 'ROTARACT CLUB OF KPRCAS',
    type: 'Club Leadership & Community Service',
    period: 'Present',
    location: 'KPRCAS, Tamil Nadu, India',
    description:
      'Contributing to the club’s digital presence and web-related initiatives while supporting communication, event visibility, and community engagement through technology.',
    highlights: [
      'Supporting the club’s website and digital presence',
      'Showcasing club activities, events, and service initiatives',
      'Contributing to digital communication and content presentation',
      'Using technology to support member and community engagement',
    ],
    tags: [
      'Web Development',
      'Digital Communication',
      'Event Promotion',
      'Community Engagement',
    ],
  },
  {
    role: 'UI & Media Associate',
    organization: 'KPRCAS Website Development Team',
    type: 'Website Development & Media',
    period: '5 Months',
    location: 'KPRCAS, Tamil Nadu, India',
    description:
      'Contributed to the college website development team as a UI & Media Associate, supporting user interface design and media-related activities to strengthen the institution’s digital presence.',
    highlights: [
      'Contributed to website UI design and visual presentation',
      'Supported digital media and visual content development',
      'Helped maintain a consistent visual identity across website content',
      'Collaborated with the team on institutional digital experiences',
    ],
    tags: [
      'UI Design',
      'Digital Media',
      'Visual Communication',
      'Web Development',
    ],
  },
  {
    role: 'AI Tools & Automation Intern',
    organization: 'EFOS.in',
    type: 'Internship',
    period: '1.5 Months',
    location: 'Virtual',
    description:
      'Participated in a practical internship focused on AI-powered productivity tools, chatbot integration, and generative AI workflows for digital applications and media creation.',
    highlights: [
      'Explored AI-powered productivity and automation tools',
      'Integrated a Chatbase chatbot into a live web application',
      'Experimented with AI media-generation workflows',
      'Completed practical assignments and project deliverables',
    ],
    tags: [
      'AI Automation',
      'Chatbase',
      'Generative AI',
      'AI Media Tools',
      'Productivity AI',
    ],
    link: 'https://enroll-ai-efos.vercel.app/',
    linkLabel: 'View EnrollAI Practical Work',
  },
];

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
          EXPERIENCE & LEADERSHIP
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

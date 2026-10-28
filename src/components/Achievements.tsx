import { motion } from 'framer-motion'

interface Achievement {
  title: string
  organizer: string
  result: string
  year: string
  description: string
  team?: string
  link?: string
}

const achievements: Achievement[] = [
  {
    title: 'Peridhinum Peridhu Kel — 2nd Edition',
    organizer: 'Mission Millionaire Club & Gnana Sanjeevanam Gurukulam',
    result: 'Volunteer & Host',
    year: '2026',
    description:
      'Volunteered and hosted the second edition of "Peridhinum Peridhu Kel" at Le Méridien, Coimbatore, supporting event hosting and audience engagement.',
    team: 'Event Operations',
  },
  {
    title: 'Mission One - From Job Seekers to Job Creators',
    organizer: 'EDC, KPRCAS',
    result: 'Event Organizer',
    year: '2026',
    description:
      'Organized the "Mission One" Mass Entrepreneurship Rally, promoting entrepreneurial thinking and the transition from job seekers to job creators.',
    team: 'EDC KPRCAS',
  },
  {
    title: 'Founders Summit 2026 - The Voice of Grassroots',
    organizer: 'EDC, KPRCAS',
    result: 'Organizer & Execution Team',
    year: '2026',
    description:
      'Organized and executed Founders Summit 2026, "The Voice of Grassroots," focused on bringing grassroots entrepreneurial voices into the spotlight.',
    team: 'EDC KPRCAS',
  },
  {
    title: 'Illuminate Workshop 2026',
    organizer: 'EDC KPRCAS × IIT Bombay E-Cell',
    result: 'Event Organizer',
    year: '2026',
    description:
      'Organized the Illuminate Workshop 2026 in collaboration with IIT Bombay E-Cell, supporting entrepreneurship-focused learning and engagement.',
    team: 'EDC KPRCAS',
  },
  {
    title: 'Eureka 2026 - Startup Pitch',
    organizer:
      'EDC KPRCAS × B.Com IT × CITE × KPRCAS Incubation Hub × IIT Bombay E-Cell',
    result: 'Event Organizer',
    year: '2026',
    description:
      'Organized Eureka 2026, a startup pitch event conducted in collaboration with B.Com IT, CITE, KPRCAS Incubation Hub, and IIT Bombay E-Cell.',
    team: 'EDC KPRCAS',
  },
  {
    title: 'Think Entrepreneur, Become Entrepreneur',
    organizer: 'EDC, KPRCAS',
    result: 'Campaign Organizer',
    year: '2026',
    description:
      'Organized the "Think Entrepreneur, Become Entrepreneur" social media campaign to promote entrepreneurial awareness and inspire aspiring entrepreneurs.',
    team: 'EDC KPRCAS',
  },
  {
    title: 'Algorhythm 2026',
    organizer: 'SOISDS, KPRCAS',
    result: 'Technical Coordinator',
    year: '2026',
    description:
      'Served as Technical Coordinator for Algorhythm 2026, conducted in collaboration with SOISDS, KPRCAS, and CITE, KPRCAS, coordinating technical operations and supporting the smooth execution of the event.',
    team: 'SOISDS, KPRCAS',
  },
  {
    title: 'Idea to Impact — National-Level Hackathon',
    organizer: 'NxtWave Academy',
    result: 'Finalist',
    year: '2026',
    description:
      'Participated in the Idea to Impact national-level offline hackathon held in Hyderabad, reaching the finalist stage and reprented KPRCAS on a national stage.',
    team: 'Team ZENOVATRIX',
  },
  {
    title: 'GEN AI Hackathon Workshop',
    organizer: 'Aqua Tech Foundation × CITE, KPRCAS',
    result: 'Runner-Up',
    year: '2026',
    description:
      'Secured Runner-Up in a three-day Generative AI hackathon workshop conducted by Aqua Tech Foundation and CITE at KPRCAS.',
    team: 'Team INNOVATRIX',
  },
  {
    title: 'Hacksprint 2.0',
    organizer: 'Karpagam Academy of Higher Education (KAHE)',
    result: 'National-Level Hackathon Finalist',
    year: '2026',
    description:
      'Reached the finalist stage of Hacksprint 2.0, a national-level hackathon conducted at Karpagam Academy of Higher Education, Coimbatore.',
    team: 'Team INNOVATRIX',
  },
  {
    title: 'RAC-A-THON - 24-Hour Hackathon',
    organizer: 'Rotaract Club of KPRCAS',
    result: 'Best Male Coder',
    year: '2025',
    description:
      'Recognized as Best Male Coder for technical performance in the 24-hour RAC-A-THON conducted at KPRCAS.',
    team: 'Team Quantum Draft',
  },
  {
    title: 'RAC-A-THON - 24-Hour Hackathon',
    organizer: 'Rotaract Club of KPRCAS',
    result: 'Runner-Up - ₹2,500 Cash Prize',
    year: '2025',
    description:
      'Secured Runner-Up in the 24-hour RAC-A-THON and received a cash prize of ₹2,500 at KPRCAS.',
    team: 'Team Quantum Draft',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase font-mono">
            Competitive Milestones
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          ACHIEVEMENTS
        </motion.h2>

        {/* Achievements List */}
        <div className="space-y-0">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                      {item.result}
                    </span>
                    {item.team && (
                      <span className="text-xs font-mono text-zinc-500">
                        {item.team}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-mono mt-1 uppercase tracking-wider">
                    {item.organizer}
                  </p>
                  <p className="text-sm text-gray-400 mt-3 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-500 tracking-widest self-start md:self-auto">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}

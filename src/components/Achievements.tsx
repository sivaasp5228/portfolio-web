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
    title: 'EFOS SkillUp Hackathon 2026',
    organizer: 'EFOS',
    result: 'Top 9 Position (Top 10 Finalist)',
    year: '2026',
    description:
      'Participated as Team INNOVATRIX, achieving a Top 9 finish among competitive teams and earning selection for the EFOS Free Six-Week Virtual Internship Program.',
    team: 'Team INNOVATRIX',
  },
  {
    title: 'GEN AI Hackathon',
    organizer: 'Aqua Tech Foundation',
    result: 'Runner-Up Award',
    year: '2025',
    description:
      'Developed and demonstrated an AI paper and report generation system with citation intelligence, earning Runner-Up honours.',
    team: 'Team INNOVATRIX',
  },
  {
    title: 'Hacksprint 2.0',
    organizer: 'National Hackathon Series',
    result: '36-Hour Hackathon Participant',
    year: '2025',
    description:
      'Collaborated intensively in a 36-hour continuous sprint with Team INNOVATRIX to architect and pitch an innovative technology solution.',
    team: 'Team INNOVATRIX',
  },
  {
    title: 'NANO HACKATHON — CITE Spotlight 2026',
    organizer: 'CITE Spotlight',
    result: 'Campus Innovation Finalist',
    year: '2026',
    description:
      'Ideated and prototyped a Smart Campus Event Management solution for streamlined collegiate events and student engagement.',
    team: 'Campus Innovation',
  },
  {
    title: 'DSA Codeverse Challenge',
    organizer: 'NxtWave CCBP 4.0 Academy',
    result: 'Rank 32 / 700 Participants',
    year: '2025',
    description:
      'Completed the intensive competitive programming challenge, securing 32nd rank among 700 coders and earning the DSA achievement credential.',
  },
]

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
          HACKATHONS &<br />ACHIEVEMENTS
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

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background / Image Slot - Blank for future photo */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
        {/* Subtle grid and dark gradient backdrop */}
        <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero.png"
          alt="Bruce Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 md:pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="w-full max-w-6xl">
          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-gray-500 uppercase">
            CO FOUNDER • WEB DEVELOPER • TECH TRAINER
            </span>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[16vw] sm:text-[13vw] md:text-hero">
              <span className="block text-white">SIVAA SP</span>
              <span className="block text-gray-400">PORTFOLIO</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl"
            >
              <div className="md:col-span-6 mt-22">
                <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                  Building intelligent solutions. Automating workflows. Turning startup ideas into impact solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-gray-500">
                  <span className="px-2 py-0.5 border border-zinc-800 rounded">Generative AI</span>
                  <span className="px-2 py-0.5 border border-zinc-800 rounded">Full Stack</span>
                  <span className="px-2 py-0.5 border border-zinc-800 rounded">AI Agents</span>
                  <span className="px-2 py-0.5 border border-zinc-800 rounded">Workflow Automation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

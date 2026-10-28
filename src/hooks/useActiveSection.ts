import { useState, useEffect, useRef } from 'react'

const sections = [
  'about',
  'expertise',
  'selected-work',
  'experience',
  'achievements',
  'education',
  'contact',
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('about')
  const manualLockUntil = useRef<number>(0)

  const setManualActiveSection = (sectionId: string) => {
    setActiveSection(sectionId)
    // Lock scroll tracking for 900ms while smooth scrolling completes
    manualLockUntil.current = Date.now() + 900
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // If user recently clicked a nav item, ignore scroll events until smooth scroll settles
      if (Date.now() < manualLockUntil.current) {
        return
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false

          if (Date.now() < manualLockUntil.current) {
            return
          }

          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const docHeight = document.documentElement.scrollHeight

          // 1. Bottom of page: if scrolled near the bottom, activate the last section ('contact')
          if (scrollY + windowHeight >= docHeight - 80) {
            setActiveSection(sections[sections.length - 1])
            return
          }

          // 2. Top of page: if near top (e.g. Hero), activate 'about'
          if (scrollY < 180) {
            setActiveSection(sections[0])
            return
          }

          // 3. Middle sections: find the section covering the 35% trigger line
          const triggerLine = windowHeight * 0.35

          let current = sections[0]
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId)
            if (!el) continue

            const rect = el.getBoundingClientRect()
            // If the section encompasses the trigger line
            if (rect.top <= triggerLine && rect.bottom > triggerLine) {
              current = sectionId
              break
            }
            // Fallback for fast scrolling
            if (rect.top <= triggerLine) {
              current = sectionId
            }
          }

          setActiveSection(current)
        })
        ticking = true
      }
    }

    // Run once on mount to establish correct initial active section
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return { activeSection, setActiveSection: setManualActiveSection }
}

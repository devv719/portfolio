import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

// ── Fade-in wrapper ───────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Tags ──────────────────────────────────────────────────────────────
const currentInterests = [
  "Frontend Development",
  "Interactive Design",
  "Mathematics",
  "Running",
  "Motorcycles",
  "Films & Music",
]

const ExperienceSection = () => {
  return (
    <div className="h-auto bg-primary text-white flex flex-col pt-36 pb-20">
      <div className="container mx-auto">
        {/* ── Section title ─────────────────────────────────────────── */}
        <Reveal>
          <h1 className="text-2xl font-bold uppercase tracking-wide mb-20 font-pop">
            Beyond Code
          </h1>
        </Reveal>

        {/* ── College + timeline ────────────────────────────────────── */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-6">
              <h2 className="text-3xl md:text-5xl font-pop font-light tracking-tight">
                Computer Engineering
              </h2>
              <span className="text-lg md:text-xl text-white/40 font-pop whitespace-nowrap">
                2024 — Present
              </span>
            </div>
            <p className="text-xl md:text-2xl text-white/50 font-pop font-light">
              Conceicao Rodrigues College of Engineering, Bandra
            </p>
          </div>
        </Reveal>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <Reveal delay={0.15}>
          <div className="w-full h-px bg-white/[0.06] mb-16" />
        </Reveal>

        {/* ── Main statement ───────────────────────────────────────── */}
        <Reveal delay={0.2}>
          <p className="text-3xl md:text-5xl font-pop font-light leading-snug md:leading-tight tracking-tight mb-16 max-w-4xl">
            Still figuring things out.
            <br />
            <span className="text-white/30">Still building.</span>
          </p>
        </Reveal>

        {/* ── The real stuff ───────────────────────────────────────── */}
        <Reveal delay={0.25}>
          <div className="space-y-8 mb-20 max-w-4xl">
            <p className="text-lg md:text-xl text-white/50 font-pop font-light leading-relaxed">
              Somewhere between engineering, creativity and curiosity.
            </p>
            
            <p className="text-lg md:text-xl text-white/50 font-pop font-light leading-relaxed">
              I enjoy creating digital experiences that feel alive — interfaces with motion, personality and intention. Most days you'll find me switching between code, music, Pinterest boards and ideas that randomly turn into projects.
            </p>
            
            <p className="text-lg md:text-xl text-white/50 font-pop font-light leading-relaxed">
              Beyond technology, I'm fascinated by patterns and systems. Mathematics has always been one of the things that keeps me curious — from elegant solutions to the way it quietly explains the world around us.
            </p>
            
            <p className="text-lg md:text-xl text-white/50 font-pop font-light leading-relaxed">
              I've also always been drawn to aviation. There's something inspiring about aircraft engineering, flight and the idea of pushing beyond limits through innovation and precision.
            </p>
            
            <p className="text-lg md:text-xl text-white/50 font-pop font-light leading-relaxed">
              When I'm away from a screen, you'll probably find me running, listening to music, exploring new films, looking at motorcycles, or collecting visual inspiration for future projects.
            </p>
          </div>
        </Reveal>

        {/* ── Current Interests ────────────────────────────────────── */}
        <Reveal delay={0.5}>
          <h3 className="text-sm uppercase tracking-[0.3em] text-white/25 font-pop mb-8">
            Current Interests
          </h3>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="flex flex-wrap gap-4 mb-20 max-w-4xl">
            {currentInterests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(168, 130, 255, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <span className="text-base md:text-lg text-white/60 font-pop border border-white/[0.08] rounded-lg px-5 py-2.5 cursor-none hover:text-white/80 hover:border-white/15 transition-all duration-300">
                  • {interest}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Closing line ─────────────────────────────────────────── */}
        <Reveal delay={0.85}>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-white/20 font-pop font-light italic">
              Always learning.
            </p>
            <p className="text-xl md:text-2xl text-white/20 font-pop font-light italic">
              Always chasing the next idea.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default ExperienceSection

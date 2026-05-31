import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PinspirImage from "../assets/pinspiration.png"
import FrankOceanImage from "../assets/frank-ocean.png"
import WakeUpSidImage from "../assets/wake-up-sid.png"
import EuphoriaImage from "../assets/euphoria.png"
import MotorbikesImage from "../assets/motorbikes.png"

// ══════════════════════════════════════════════════════════════════════
// PINTEREST BOARD DATA — UNIFORM 5-CARD EDITORIAL LAYOUT
// ══════════════════════════════════════════════════════════════════════
const boardsData = [
  {
    id: "pinspiration",
    title: "Pinspiration",
    description: "A collection of visuals, ideas and aesthetics that inspire my creativity.",
    url: "https://www.pinterest.com/devvv0793/pinspiration/",
    image: PinspirImage,
    accentColor: "#b892ff",
    glowColor: "rgba(184, 146, 255, 0.2)",
  },
  {
    id: "frank-ocean",
    title: "Frank Ocean",
    description: "Music, moods, visuals and everything inspired by Frank Ocean.",
    url: "https://www.pinterest.com/devvv0793/frank-flippin-ocean/",
    image: FrankOceanImage,
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    id: "wake-up-sid",
    title: "Wake Up Sid",
    description: "Coming-of-age energy, nostalgia, city life and personal growth.",
    url: "https://www.pinterest.com/devvv0793/wake-up-sid/",
    image: WakeUpSidImage,
    accentColor: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.15)",
  },
  {
    id: "euphoria",
    title: "Euphoria",
    description: "Fashion, emotion, cinematography and visual storytelling.",
    url: "https://www.pinterest.com/devvv0793/euphoria/",
    image: EuphoriaImage,
    accentColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.2)",
  },
  {
    id: "motorbikes",
    title: "Motorbikes",
    description: "Speed, engineering, freedom and motorcycle culture.",
    url: "https://www.pinterest.com/devvv0793/motorbikes/",
    image: MotorbikesImage,
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.2)",
  },
]

// ── Reveal wrapper ────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
          transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Modal Component ───────────────────────────────────────────────────
const BoardModal = ({ board, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full overflow-hidden border border-white/10"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: `inset 0 0 40px ${board.glowColor}, 0 0 40px ${board.glowColor}`,
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 space-y-6 p-6 md:p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Preview Image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative h-64 md:h-80 rounded-xl overflow-hidden"
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${board.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-pop font-light text-white">
                    {board.title}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <p className="text-base md:text-lg text-white/70 font-pop font-light leading-relaxed">
                    {board.description}
                  </p>
                </motion.div>

                {/* View on Pinterest Button */}
                <motion.a
                  href={board.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-pop font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm3.5 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm3.5 6.5c2.33 0 4.31-1.46 5.14-3.5h-10.28c.83 2.04 2.81 3.5 5.14 3.5z" />
                  </svg>
                  View on Pinterest
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Uniform Board Card Component ───────────────────────────────────────
const BoardCard = ({ board, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-xl overflow-hidden cursor-pointer h-56 md:h-64 lg:h-72 group block w-full border-none bg-transparent p-0"
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={board.image}
            alt={board.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay gradient — dark at bottom */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Glassmorphism glow border */}
        <motion.div
          className="absolute inset-0 z-[2] rounded-xl pointer-events-none"
          initial={false}
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 30px ${board.glowColor}, 0 0 30px ${board.glowColor}`
              : `inset 0 0 0px transparent`,
            borderColor: isHovered
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.05)",
          }}
          style={{ border: "1px solid" }}
          transition={{ duration: 0.4 }}
        />

        {/* Content at bottom */}
        <div className="absolute inset-0 z-[3] flex flex-col justify-end p-4 md:p-5 lg:p-6">
          {/* Text content */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="space-y-1 mb-3"
          >
            <p className="text-xs md:text-sm text-white/60 font-pop font-light">
              Pinterest Board
            </p>
          </motion.div>

          {/* Title */}
          <motion.h3
            animate={{
              marginBottom: isHovered ? "0.75rem" : "0",
            }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl font-pop font-light text-white"
          >
            {board.title}
          </motion.h3>

          {/* Description — appears on hover */}
          <motion.p
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-xs md:text-sm text-white/70 font-pop font-light overflow-hidden"
          >
            {board.description}
          </motion.p>
        </div>
      </motion.button>

      {/* Modal */}
      <BoardModal board={board} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// ── Main Visual Archive Component ──────────────────────────────────────
const VisualArchive = () => {
  return (
    <div className="h-auto bg-primary text-white flex flex-col pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="container mx-auto w-full px-4 md:px-0">
        {/* Header */}
        <Reveal className="mb-8">
          <div className="space-y-2 mb-16">
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide font-pop">
              VISUAL ARCHIVE
            </h1>
            <p className="text-base md:text-lg text-white/50 font-pop font-light">
              A collection of moods, memories and inspiration.
            </p>
          </div>
        </Reveal>

        {/* 5-Card Uniform Grid */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
            {boardsData.map((board, index) => (
              <BoardCard key={board.id} board={board} index={index} />
            ))}
          </div>
        </Reveal>

        {/* Pinterest Profile Button */}
        <Reveal delay={0.2} className="flex justify-center">
          <motion.a
            href="https://www.pinterest.com/devvv0793/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-full text-white font-pop font-light text-sm md:text-base hover:border-white/40 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm3.5 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm3.5 6.5c2.33 0 4.31-1.46 5.14-3.5h-10.28c.83 2.04 2.81 3.5 5.14 3.5z" />
            </svg>
            Follow @devvv0793
          </motion.a>
        </Reveal>
      </div>
    </div>
  )
}

export default VisualArchive

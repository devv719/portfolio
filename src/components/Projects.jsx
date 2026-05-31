import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DOCTORSImage from "../assets/doctors.jpeg"
import FORMSImage from "../assets/forms.jpeg"
import GULLYGUIDEImage from "../assets/gullyguide.png"
import DROWSYImage from "../assets/drowsy.png"

const projects = [
  {
    id: 1,
    title: "RetireSahi",
    description: "AI-powered retirement planning platform helping users visualize and plan long-term financial goals.",
    image: FORMSImage,
    tech: ["React", "Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/devvv0793/RetireSahi",
    live: null,
  },
  {
    id: 2,
    title: "GullyGuide",
    description: "Location-aware recommendation platform that helps users discover nearby places and experiences.",
    image: GULLYGUIDEImage,
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/devvv0793/GullyGuide",
    live: null,
  },
  {
    id: 3,
    title: "Drowsy",
    description: "Driver drowsiness detection system using computer vision and facial landmark tracking for road safety.",
    image: DROWSYImage,
    tech: ["Python", "OpenCV", "TensorFlow", "React"],
    github: "https://github.com/devvv0793/Drowsy",
    live: null,
  },
  {
    id: 4,
    title: "DentArt",
    description: "Modern dental laboratory website focused on premium branding and user experience.",
    image: DOCTORSImage,
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    github: "https://github.com/devvv0793/DentArt",
    live: "https://dentart-zeta.vercel.app/",
  },
  {
    id: 5,
    title: "MediCare",
    description: "Healthcare-focused platform designed to simplify patient interactions and medical services.",
    image: FORMSImage,
    tech: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/devvv0793/MediCare",
    live: null,
  },
]


function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      )
    } else if (info.offset.x < -swipeThreshold) {
      setActiveIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  return (
    <div className="bg-primary py-16 min-h-screen flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl font-bold uppercase tracking-wide mb-8 font-pop">
          PROJECTS
        </h1>

        <div className="flex-grow flex flex-col lg:flex-row gap-8">
          {/* Project Showcase */}
          <div className="w-full md:w-[50%] h-[50vh] md:h-[80vh] relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 700, damping: 80 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
                <div className="absolute bg-gradient-to-t from-black via-transparent to-transparent inset-0 flex flex-col items-start justify-end p-4 sm:p-8 rounded-3xl">
                  <h2 className="text-white text-3xl md:text-5xl mb-1 sm:mb-2 font-bold">
                    {projects[activeIndex].title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-lg mb-3 sm:mb-4 max-w-xl">
                    {projects[activeIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[activeIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-white border border-white px-3 py-1 rounded-full text-xs md:text-sm font-pop"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={projects[activeIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-full text-xs md:text-sm font-pop font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.a>
                    {projects[activeIndex].live && (
                      <motion.a
                        href={projects[activeIndex].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-full text-xs md:text-sm font-pop font-semibold hover:bg-purple-700 transition-colors"
                      >
                        Live Demo ↗
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project List */}
          <div className="w-full md:w-[45%] min-h-min p-4 md:p-8 flex flex-col justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h1
                  className={`text-white text-4xl md:text-5xl font-pop mb-4 cursor-pointer flex items-center gap-2 ${
                    index === activeIndex
                      ? "opacity-100 font-thin"
                      : "opacity-30 hover:opacity-50"
                  } transition-opacity`}
                >
                  {project.title}{" "}
                  {index === activeIndex && <span className="font-pop animate-spin-slow">✹</span>}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectShowcase

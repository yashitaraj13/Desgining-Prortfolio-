import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/30 to-[#8B5CF6]/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Abstract Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3B82F6] rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Floating Cards Silhouettes */}
        <motion.div
          className="absolute top-32 right-20 w-48 h-32 bg-gradient-to-br from-[#1F2937]/50 to-[#111827]/50 rounded-xl border border-[#3B82F6]/10 backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-40 h-28 bg-gradient-to-br from-[#1F2937]/40 to-[#111827]/40 rounded-lg border border-[#8B5CF6]/10 backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            rotate: [3, -3, 3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        /* {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="px-5 py-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full text-sm font-medium backdrop-blur-sm shadow-lg shadow-[#3B82F6]/10">
            UI/UX Designer
          </div>
        </motion.div> */

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 max-w-5xl mx-auto leading-[1.1] font-bold tracking-tight">
            <span className="text-[#E5E7EB]">Crafting</span>
            <br />
            <span 
              className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent relative inline-block"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
              }}
            >
              Digital Experiences
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed mb-12 font-light"
        >
          Transforming ideas into beautiful, user-centered designs.
          <br />
          <span className="text-[#6B7280]">Specializing in UI/UX, mobile apps, and digital branding.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full font-semibold shadow-lg shadow-[#3B82F6]/50 hover:shadow-xl hover:shadow-[#3B82F6]/60 transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="group relative px-8 py-4 bg-[#1F2937] text-[#E5E7EB] rounded-full font-semibold border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 hover:bg-gradient-to-r hover:from-[#1F2937] hover:to-[#3B82F6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/30 overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/20 to-[#3B82F6]/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#3B82F6]/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

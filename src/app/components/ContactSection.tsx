import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=yashitaraj04@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Yashita,",
    color: "#EF4444",
    label: "Send an email",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yashita-raj",
    color: "#3B82F6",
    label: "View Profile",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yashitaraj13",
    color: "#E5E7EB",
    label: "View Projects",
  },
];

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative bg-[#111827] border-t border-gray-800/50 py-20 overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 font-bold">
            Let's Work Together
          </h4>
          <p className="text-[#9CA3AF] mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it
            and discuss how we can create something amazing
            together.
          </p>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="mailto:yashita@designer.com"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#3B82F6]/50 hover:shadow-2xl hover:shadow-[#3B82F6]/70 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
            {/* Animated gradient overlay */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </a>
        </motion.div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-[#6B7280] text-sm mb-6 uppercase tracking-wider">
            Connect With Me
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 p-5 bg-[#1F2937]/70 hover:bg-[#1F2937] rounded-2xl border border-gray-800/50 hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-2 min-w-[140px]"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                }}
                whileHover={{
                  boxShadow: `0 20px 40px -12px ${link.color}40`,
                }}
              >
                {/* Icon with glow */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    style={{ backgroundColor: link.color }}
                  />
                  <div
                    className="relative p-4 bg-[#111827] rounded-full border border-gray-800 group-hover:border-current transition-colors duration-300"
                    style={{
                      color: link.color,
                      bg: "#0B0F1A",
                      borderColor: "inherit",
                    }}
                  >
                    <link.icon 
                      className="
                      w-7 h-7
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_12px_currentColor]
                      "
                       style={{ color: link.color }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="text-center">
                  <p
                    className="text-[#E5E7EB] font-medium text-sm mb-1 group-hover:text-current transition-colors duration-300"
                    style={{ color: "inherit" }}
                  >
                    {link.name}
                  </p>
                  <p className="text-[#9CA3AF] text-xs tracking-wide">
                    {link.label}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${link.color}, transparent 70%)`,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#6B7280] text-sm">
            © 2024 Yashita Raj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

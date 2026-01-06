import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { FilterBar } from "./components/FilterBar";
import { HeroSection } from "./components/HeroSection";
import { ContactSection } from "./components/ContactSection";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  year: string;
  link: string; 
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aquamarine – Medical E-Commerce Website",
    description:
      "A responsive medical e-commerce website designed for browsing and purchasing healthcare products with clear categorization and a professional, trust-focused UI.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design",
    tags: ["UI/UX", "E-Commerce", "Healthcare"],
    year: "2024",
    link: "https://www.figma.com/design/IsWpreJ5LU7z1TbGCHG6Q0/Medical-Ecommerce-Website?t=ERZRsZlXTFtFUHpy-1",
  },

  {
    id: 2,
    title: "Sweet Tooth – Bakery Mobile App",
    description:
      "A visually rich bakery mobile app featuring product listings, food detail screens, and smooth ordering flow designed for an engaging user experience.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mobile App",
    tags: ["UI/UX", "Mobile App", "Food"],
    year: "2024",
    link: "https://www.figma.com/design/ghmiqiZEUEmMFLMEG49ZYH/Bakery-Menu?t=ERZRsZlXTFtFUHpy-1",
  },

  {
    id: 3,
    title: "Aqua Aware – Water Management App",
    description:
      "A sustainability-focused mobile application that helps users track daily water usage, view analytics, and build conservation habits aligned with SDG 6.",
    image: "https://images.unsplash.com/photo-1523867574998-1a336b6ded04?auto=format&fit=crop&w=1080&q=80",
    category: "Mobile App",
    tags: ["UI/UX", "Sustainability", "Mobile App"],
    year: "2025",
    link: "https://www.figma.com/design/Jt5y8UzVmr3K8oxzEx9Wuo/Water-app?node-id=0-1&t=ERZRsZlXTFtFUHpy-1",
  },

  {
    id: 4,
    title: "AlmaMate – Student Companion App",
    description:
      "A student-centric mobile application designed to assist with academic tracking, guidance, and daily student needs through a clean and friendly interface.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1080&q=80",
    category: "Mobile App",
    tags: ["UI/UX", "Education", "Mobile App"],
    year: "2025",
    link: "https://www.figma.com/design/ikiKVdHNR6XJ520AyCQ80t/Projects?t=ERZRsZlXTFtFUHpy-1",
  },

  {
    id: 5,
    title: "Women in Action – Social Cause Website",
    description:
      "A purpose-driven website promoting women empowerment, awareness campaigns, and community initiatives through impactful storytelling and structured layouts.",
    image: "https://plus.unsplash.com/premium_photo-1661488569775-2f16dbefca71?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design",
    tags: ["UI/UX", "Social Impact", "Awareness"],
    year: "2025",
    link: "https://www.figma.com/design/8WnyAegIu4KrllTEVjSxka/Website-on-Social-Cause?t=ERZRsZlXTFtFUHpy-1",
  },

{
  id: 6,
  title: "Fitness Tracker Web Platform",
  description:
    "A modern fitness tracking website designed to monitor workouts, health metrics, and user progress through clear dashboards and intuitive data visualizations.",
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1080&q=80",
  category: "Web Design",
  tags: ["UI/UX", "Health", "Web Platform"],
  year: "2025",
  link: "https://www.figma.com/design/dcFMoe9mVoM4blj7KHo9RP/Fitness-Tracker?node-id=0-1&t=JVRU97jYKg0sWZQB-1",
}
];


const categories = ["All Projects", "Web Design", "Mobile App"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Header */}
      <header className="bg-[#111827]/80 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex flex-col">
  <h1 className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-[#60A5FA] via-[#7C9BFF] to-[#A78BFA] bg-clip-text text-transparent">
    Yashita Raj
  </h1>
  <span
  className="
    mt-1 inline-flex w-fit items-center
    px-3 py-1 rounded-full
    text-xs font-medium uppercase tracking-wider
    text-[#93C5FD]
    bg-[#1E3A8A]/30
    border border-[#60A5FA]/40
    backdrop-blur-sm
    shadow-[0_0_18px_rgba(96,165,250,0.25)]
  "
>
  UI/UX Designer
</span>
</div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl mb-4 text-[#E5E7EB] font-bold">Featured Projects</h3>
          <p className="text-[#9CA3AF] text-lg">Explore my latest design work</p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              tags={project.tags}
              year={project.year}
              link={project.link} 
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9CA3AF]">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

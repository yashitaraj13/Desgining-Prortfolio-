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
    image: "https://images.unsplash.com/photo-1580281657521-9b09d20f0c42?auto=format&fit=crop&w=1080&q=80",
    category: "Web Design",
    tags: ["UI/UX", "E-Commerce", "Healthcare"],
    year: "2024",
    link: "https://www.figma.com/file/XXXX",
  },

  {
    id: 2,
    title: "Sweet Tooth – Bakery Mobile App",
    description:
      "A visually rich bakery mobile app featuring product listings, food detail screens, and smooth ordering flow designed for an engaging user experience.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1080&q=80",
    category: "Mobile App",
    tags: ["UI/UX", "Mobile App", "Food"],
    year: "2024",
    link: "https://www.figma.com/file/XXXX",
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
    link: "https://www.figma.com/file/XXXX",
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
    link: "https://www.figma.com/file/XXXX",
  },

  {
    id: 5,
    title: "Women in Action – Social Cause Website",
    description:
      "A purpose-driven website promoting women empowerment, awareness campaigns, and community initiatives through impactful storytelling and structured layouts.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80",
    category: "Web Design",
    tags: ["UI/UX", "Social Impact", "Awareness"],
    year: "2025",
    link: "https://www.figma.com/file/XXXX",
  },

  {
    id: 6,
    title: "Fitness Tracker Mobile App",
    description:
      "A modern fitness tracking mobile app concept designed to monitor workouts, health data, and user progress with intuitive data visualization.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1080&q=80",
    category: "Mobile App",
    tags: ["UI/UX", "Health", "Mobile App"],
    year: "2025",
    link: "https://www.figma.com/file/XXXX",
  },
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
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#3B82F6]" />
            <h1 className="text-xl text-[#E5E7EB] font-semibold">Yashita Raj</h1>
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
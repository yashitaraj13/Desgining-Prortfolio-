import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  year: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  tags,
  year,
  link,
}: ProjectCardProps) {
  return (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block focus:outline-none focus:ring-2 focus:ring-[#3B82F6] rounded-2xl"
  >
    <Card className="group overflow-hidden border border-gray-800/50 bg-[#111827] shadow-lg hover:shadow-2xl hover:shadow-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-500 cursor-pointer rounded-2xl">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-[#3B82F6]/0 group-hover:bg-[#3B82F6]/10 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full p-4 shadow-lg shadow-[#3B82F6]/50">
            <ExternalLink className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-[#3B82F6]/10 text-[#3B82F6] hover:bg-[#3B82F6]/20 border border-[#3B82F6]/20 font-medium">
            {category}
          </Badge>
          <span className="text-sm text-[#6B7280]">{year}</span>
        </div>
        
        <h3 className="text-xl mb-3 text-[#E5E7EB] group-hover:text-[#3B82F6] transition-colors duration-300 font-semibold">
          {title}
        </h3>
        
        <p className="text-[#9CA3AF] text-sm mb-5 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 bg-[#1F2937] text-[#9CA3AF] rounded-lg border border-gray-800/50 hover:border-[#3B82F6]/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
    </a>
  );
}
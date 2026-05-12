"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SmartBiz ERP System",
      category: "Enterprise Software",
      description: "Modern AI-powered ERP platform featuring inventory management, POS, advanced analytics, and real-time notifications. Built for cross-platform availability.",
      techStack: ["Spring Boot", "React", "React Native", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      color: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Folo.grpx",
      category: "Branding Agency",
      description: "Custom identity systems and creative digital solutions for modern businesses. Combining high-end design with conversion-optimized web presence.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      color: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "AI Business Tools",
      category: "SaaS Application",
      description: "Suite of automation dashboards and smart analytics tools featuring AI assistant integrations to streamline operational workflows.",
      techStack: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      color: "from-emerald-600/20 to-teal-600/20"
    },
    {
      title: "Premium Branding Systems",
      category: "Creative Design",
      description: "Comprehensive logo systems, UI designs, and social media branding packages tailored for high-growth tech startups.",
      techStack: ["Illustrator", "Photoshop", "After Effects", "Figma"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      color: "from-orange-600/20 to-red-600/20"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md">A selection of my recent projects combining robust engineering with premium design aesthetics.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/10"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-500`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 bg-[#050505]/80 backdrop-blur-md border-t border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                      <Github size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

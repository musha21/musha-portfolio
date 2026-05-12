"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Freelance & Independent Projects",
      period: "2024 - Present",
      description: "Architecting and developing full-stack web applications, AI-integrated tools, and ERP systems using Next.js, Spring Boot, and MySQL. Focusing on high-performance and scalable code architectures.",
      glowColor: "bg-blue-500"
    },
    {
      role: "Founder & Creative Lead",
      company: "Folo.grpx",
      period: "2023 - Present",
      description: "Established a creative agency focused on premium branding, UI/UX design, and digital identity. Delivered custom visual solutions that elevate brand presence across digital platforms.",
      glowColor: "bg-purple-500"
    },
    {
      role: "Remote Graphic Designer",
      company: "VSoft Technologies",
      period: "2024",
      description: "Collaborated remotely to produce high-quality digital assets, marketing materials, and cohesive brand designs tailored for tech-focused clients.",
      glowColor: "bg-pink-500"
    },
    {
      role: "Junior Graphic Designer",
      company: "Binory Digital Tech Solution",
      period: "2024",
      description: "Started professional journey focusing on foundational design principles, social media graphics, and brand consistency in a fast-paced agency environment.",
      glowColor: "bg-cyan-500"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node */}
                <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-[#050505] ${exp.glowColor} group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow`}></div>

                <div className="glass p-8 rounded-2xl border-white/5 group-hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-lg text-gray-400 font-medium">{exp.company}</h4>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

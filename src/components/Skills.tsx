"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaGithub, FaPaintBrush, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-400" size={24} />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "React Native", icon: <FaReact className="text-blue-300" /> },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500" size={24} />,
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-gray-400" /> },
      ]
    },
    {
      title: "Database & DevOps",
      icon: <FaDatabase className="text-yellow-500" size={24} />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "VPS Deployment", icon: <FaDatabase className="text-purple-400" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
      ]
    },
    {
      title: "Creative",
      icon: <FaPaintBrush className="text-pink-500" size={24} />,
      skills: [
        { name: "Branding", icon: <FaPaintBrush className="text-pink-400" /> },
        { name: "UI/UX Design", icon: <FaPaintBrush className="text-purple-400" /> },
        { name: "Logo Design", icon: <FaPaintBrush className="text-orange-400" /> },
        { name: "Motion Graphics", icon: <FaPaintBrush className="text-blue-400" /> },
      ]
    },
    {
      title: "AI & Future Tech",
      icon: <FaRobot className="text-cyan-400" size={24} />,
      skills: [
        { name: "AI Systems", icon: <FaRobot className="text-cyan-400" /> },
        { name: "Automation", icon: <FaRobot className="text-blue-400" /> },
        { name: "Smart ERP", icon: <FaRobot className="text-purple-400" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#020202]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020202] to-[#020202]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient-light">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive toolkit spanning from pixel-perfect creative design to robust backend engineering and AI integration.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-gray-300 transition-colors cursor-default"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

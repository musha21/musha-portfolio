"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Code2, Cloud, Shield } from "lucide-react";

const skills = [
  { name: "React", icon: <Layout className="w-8 h-8" />, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Spring Boot", icon: <Server className="w-8 h-8" />, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "MySQL", icon: <Database className="w-8 h-8" />, color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Cloud", icon: <Cloud className="w-8 h-8" />, color: "text-sky-400", bg: "bg-sky-400/10" },
  { name: "Architecture", icon: <Shield className="w-8 h-8" />, color: "text-purple-400", bg: "bg-purple-400/10" },
];

export default function Skills() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft gradient background matching reference image middle section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-50/50 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Floating "Coins/Icons" mimicking the reference image */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16 perspective-1000">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl bg-white border border-slate-100 backdrop-blur-md relative overflow-hidden group`}
              style={{
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)"
              }}
            >
              <div className={`absolute inset-0 ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`relative z-10 ${skill.color} mb-2`}>
                {skill.icon}
              </div>
              <span className="text-xs font-semibold text-slate-600 relative z-10">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Tech Stack
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            A simple <span className="font-light text-slate-500">approach to complex</span> <br className="hidden md:block"/>
            enterprise systems
          </h2>

          <p className="text-slate-500 text-lg md:text-xl font-light">
            Building scalable business solutions doesn&apos;t require unnecessary complexity. It&apos;s easy to use and accessible for businesses who want to streamline their operations.
          </p>

          <div className="mt-10">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 mx-auto">
              View Stack
              <div className="w-8 h-4 bg-white/20 rounded-full ml-2 relative">
                 <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Cpu } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "Present",
      title: "Founder & Creative Technologist",
      company: "Folo.grpx",
      description: "Leading a branding and design agency, delivering custom identity systems and creative digital solutions.",
      icon: <Briefcase size={18} className="text-purple-400" />
    },
    {
      year: "Current",
      title: "Full Stack Software Engineer",
      company: "Freelance / Open Source",
      description: "Building modern AI-powered systems, ERP solutions, and responsive web applications using Next.js, Spring Boot, and more.",
      icon: <Cpu size={18} className="text-blue-400" />
    },
    {
      year: "2024",
      title: "Graphic Designer",
      company: "VSoft Technologies (Remote) & Binory Digital",
      description: "Started my journey focusing on pixel-perfect designs, UI/UX, and motion graphics before transitioning to engineering.",
      icon: <User size={18} className="text-pink-400" />
    },
    {
      year: "Current",
      title: "Computer Science Student",
      company: "University",
      description: "Focusing deeply on AI, algorithms, and software architecture to build the future of intelligent systems.",
      icon: <GraduationCap size={18} className="text-green-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Creative Technologist</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I am <span className="text-white font-medium">Mohammad Musharraf</span>, a Full Stack Software Engineer and Designer with a unique background that bridges the gap between aesthetics and functionality.
              </p>
              <p>
                Starting my career as a graphic designer, I developed a keen eye for branding and UI/UX. As I transitioned into software engineering, I brought this creative foundation with me, allowing me to build applications that are not only powerful but also visually stunning.
              </p>
              <p>
                Today, as the founder of <span className="text-purple-400 font-medium">Folo.grpx</span> and an AI-focused Computer Science student, I specialize in building intelligent ERP systems, modern web apps, and cohesive brand identities that help businesses thrive in the digital age.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border-white/5 hover:border-purple-500/30 transition-colors">
                <h4 className="text-3xl font-bold text-white mb-2">2+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="glass p-6 rounded-2xl border-white/5 hover:border-blue-500/30 transition-colors">
                <h4 className="text-3xl font-bold text-white mb-2">20+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">My Journey</h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-transparent">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(147,51,234,0.3)] z-10">
                    {item.icon}
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl border-white/5 group-hover:border-purple-500/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">{item.year}</span>
                    </div>
                    <div className="text-sm text-blue-400 mb-3">{item.company}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

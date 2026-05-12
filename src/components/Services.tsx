"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, PenTool, Layout, Database, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "Building scalable, high-performance web applications using modern frameworks like Next.js and Spring Boot.",
      icon: <Code2 size={24} className="text-blue-400" />
    },
    {
      title: "Mobile App Development",
      description: "Creating seamless cross-platform mobile experiences with React Native for iOS and Android.",
      icon: <Smartphone size={24} className="text-purple-400" />
    },
    {
      title: "Branding & Identity Design",
      description: "Crafting memorable brand identities, logo systems, and visual guidelines that resonate with your audience.",
      icon: <PenTool size={24} className="text-pink-400" />
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive, conversion-focused user interfaces with premium glassmorphism and modern aesthetics.",
      icon: <Layout size={24} className="text-cyan-400" />
    },
    {
      title: "ERP System Development",
      description: "Developing custom, AI-powered Enterprise Resource Planning tools tailored to streamline business operations.",
      icon: <Database size={24} className="text-green-400" />
    },
    {
      title: "AI-Based Solutions",
      description: "Integrating smart automations, predictive analytics, and AI assistants to future-proof your digital products.",
      icon: <Sparkles size={24} className="text-yellow-400" />
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#020202]">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Delivering end-to-end digital solutions that bridge the gap between powerful engineering and stunning design.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

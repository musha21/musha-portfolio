"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradients similar to reference image top section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass w-fit text-sm text-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
              The growth of your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                business starts here
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light">
              Full Stack Software Engineer focused on SaaS, ERP systems, AI-powered applications, and modern UI/UX design. Building scalable solutions that matter.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">
                View My Work
                <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-3 ml-2">
                <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphism Card mimicking the reference UI element */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden aspect-[4/3] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              {/* Optional: Add an abstract image or code snippet graphic here */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-50 mix-blend-overlay" />

              <div className="relative z-20">
                <div className="glass px-4 py-2 rounded-xl mb-4 w-fit text-xs font-semibold uppercase tracking-wider text-blue-200">
                  Featured Project
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise SaaS Platform</h3>
                <p className="text-slate-300 text-sm">Next.js • Spring Boot • MySQL</p>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Performance Score</p>
                    <p className="text-xl font-bold text-white">99/100</p>
                  </div>
                  <button className="p-2 rounded-full bg-white text-black">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

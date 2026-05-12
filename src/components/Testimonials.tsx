"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Mohammad's ability to blend high-end design with robust engineering is rare. He delivered an ERP system that not only works flawlessly but looks incredible.",
      author: "Sarah Johnson",
      role: "Operations Director",
      company: "TechFlow Inc."
    },
    {
      content: "The brand identity Folo.grpx created for us completely transformed our market presence. They understand the intersection of technology and design perfectly.",
      author: "Michael Chen",
      role: "Startup Founder",
      company: "Innovate AI"
    },
    {
      content: "Exceptional attention to detail and a deep understanding of modern web technologies. Mohammad is a true full-stack talent who delivers beyond expectations.",
      author: "David Williams",
      role: "CTO",
      company: "CloudScale"
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-gradient">Feedback</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Don&apos;t just take my word for it. Here&apos;s what people I&apos;ve worked with have to say.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={48} />

              <div className="relative z-10">
                <p className="text-gray-300 italic mb-8 leading-relaxed">&quot;{test.content}&quot;</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{test.author}</h4>
                    <p className="text-sm text-gray-500">{test.role}, {test.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Enterprise Architecture",
    role: "System Design",
    text: "Implemented scalable microservices architecture using Spring Boot, reducing latency by 40% and improving overall system reliability for high-volume transactions.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    className: "md:col-span-1 md:row-span-2 aspect-[3/4] bg-slate-100"
  },
  {
    name: "AI-Powered Analytics",
    role: "Full Stack Implementation",
    text: "Since switching to our custom SaaS solution, clients have seen steady growth without the stress. Built with Next.js and integrated with predictive modeling APIs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    className: "md:col-span-1 aspect-square bg-white"
  },
  {
    name: "Modern UI/UX",
    role: "Frontend Development",
    text: "Transformed legacy interfaces into responsive, accessible, and intuitive experiences using React, Tailwind CSS, and Framer Motion.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    className: "md:col-span-1 md:row-span-2 aspect-[3/4] bg-slate-50"
  }
];

export default function GridSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What I&apos;ve Built</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden relative group p-8 flex flex-col justify-end shadow-sm border border-slate-100 ${item.className}`}
            >
              {/* If it's the tall card style, use an image background, else use a small avatar */}
              {item.className.includes('row-span-2') ? (
                <>
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/20 transition-colors" />
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="relative z-20 mt-auto">
                    <p className="text-white font-medium mb-1 drop-shadow-md">{item.name}</p>
                    <p className="text-white/80 text-sm drop-shadow-md">{item.role}</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col h-full justify-between bg-white z-10">
                   <div className="w-12 h-12 rounded-full overflow-hidden mb-6 bg-slate-200">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                   </div>
                   <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                     &quot;{item.text}&quot;
                   </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

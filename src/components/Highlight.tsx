"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Highlight() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
      {/* Background simulating the landscape/mountain background from reference */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744626753-eba7bc811b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-900/40 to-transparent mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
              Full control is <br/>
              <span className="font-light text-slate-300">in your hands</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="glass-dark p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full -mr-16 -mt-16" />

              <p className="text-slate-200 text-sm leading-relaxed mb-8 relative z-10">
                A custom-built solution that leverages modern AI algorithms and efficient data structures. A targeted approach to capital management and resource planning for enterprise applications.
              </p>

              <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors relative z-10 w-fit">
                Learn more
                <span className="bg-slate-100 p-1 rounded-full ml-2">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, GitCommit, Trophy } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "20+", icon: <Code size={20} /> },
  { label: "GitHub Commits", value: "1,500+", icon: <GitCommit size={20} /> },
  { label: "Learning Hours", value: "2,000+", icon: <BookOpen size={20} /> },
  { label: "Hackathons Won", value: "3", icon: <Trophy size={20} /> },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-panel group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              {/* Fallback image if no photo provided */}
              <div className="w-full h-full bg-[#0a0f25] flex items-center justify-center">
                <span className="text-6xl font-space font-bold text-gradient-primary opacity-50">N.AI</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm font-space text-primary font-semibold tracking-wider uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Passionate about <span className="text-gradient">Artificial Intelligence</span></h3>
            
            <div className="space-y-4 text-muted text-lg mb-8">
              <p>
                I am an aspiring AI & LLM Engineer with a deep passion for building intelligent systems. My journey started with a curiosity about how machines learn and has evolved into a dedicated pursuit of advancing AI technologies.
              </p>
              <p>
                My current focus lies in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and developing autonomous AI agents. I believe in writing clean, efficient code and creating scalable architectures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-xl border border-border flex items-center space-x-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

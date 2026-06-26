"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "May 2025 - Present",
    description: "Developing and deploying RAG pipelines for internal documentation search. Fine-tuning open-source LLMs for domain-specific tasks and improving retrieval accuracy by 35%.",
    skills: ["Python", "LangChain", "LLaMA", "ChromaDB"]
  },
  {
    role: "Machine Learning Researcher",
    company: "University AI Lab",
    location: "Remote",
    period: "Jan 2024 - April 2025",
    description: "Researched efficient fine-tuning methods (LoRA, QLoRA) for large language models. Published findings in the university journal and presented at the annual tech symposium.",
    skills: ["PyTorch", "Hugging Face", "Research", "Data Analysis"]
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Global",
    period: "Jun 2023 - Dec 2023",
    description: "Built custom web applications and integrated AI APIs (OpenAI, Anthropic) for various clients to automate customer support and content generation workflows.",
    skills: ["React", "Next.js", "Node.js", "OpenAI API"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-space text-primary font-semibold tracking-wider uppercase mb-2"
          >
            Career Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-start mb-12 group">
                {/* Timeline Line & Dot */}
                <div className="absolute left-0 md:left-1/2 md:-ml-px h-full w-0.5 bg-border top-0 group-last:h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
                </div>

                {/* Content Left (Date & Location) */}
                <div className="md:w-1/2 md:pr-12 text-left md:text-right mb-4 md:mb-0 pt-1">
                  <div className="flex flex-col md:items-end text-muted">
                    <span className="flex items-center space-x-2 font-medium text-white mb-1">
                      <Calendar size={16} className="text-primary" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-sm">
                      <span>{exp.location}</span>
                      <MapPin size={14} className="text-secondary hidden md:block" />
                    </span>
                  </div>
                </div>

                {/* Content Right (Details) */}
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-panel p-6 rounded-2xl group-hover:border-primary/30 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <h5 className="text-primary font-medium mb-4 flex items-center space-x-2">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </h5>
                    <p className="text-muted text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 text-xs bg-white/5 text-white/80 rounded-md border border-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
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

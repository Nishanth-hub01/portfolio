"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "An advanced conversational AI built using LangChain and OpenAI, capable of contextual memory and multi-turn conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Python", "LangChain", "OpenAI"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "RAG Question Answering",
    description: "Enterprise-grade document intelligence using Retrieval-Augmented Generation to answer queries based on PDF uploads.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "FastAPI", "Pinecone", "LLaMA 3"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Resume Analyzer",
    description: "A tool that parses resumes, analyzes skills against job descriptions, and provides ATS optimization suggestions using NLP.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Hugging Face", "React", "Spacy"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "Medical Vision AI",
    description: "Deep learning model for detecting anomalies in X-ray images using Vision Transformers (ViT) with 94% accuracy.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    tags: ["PyTorch", "ViT", "Flask"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm font-space text-primary font-semibold tracking-wider uppercase mb-2"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link href="https://github.com" className="flex items-center space-x-2 text-primary hover:text-white transition-colors group">
              <span>View all projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group glass-panel rounded-2xl overflow-hidden flex flex-col ${
                project.featured ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? "w-full aspect-video md:aspect-auto md:w-1/2 md:h-auto" : "w-full aspect-video"}`}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className={`p-8 flex flex-col justify-center ${project.featured ? "md:w-1/2" : "w-full"}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Code2 size={18} />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center space-x-2 text-sm font-medium hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

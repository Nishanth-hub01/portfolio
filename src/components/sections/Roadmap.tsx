"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    phase: "Foundation",
    status: "completed",
    items: ["Python Advanced Concepts", "Linear Algebra & Calculus", "Data Structures & Algorithms", "SQL & Relational Databases"],
  },
  {
    phase: "Machine Learning Core",
    status: "completed",
    items: ["Scikit-Learn & Pandas", "Supervised & Unsupervised Learning", "Neural Networks Basics", "Model Evaluation Metrics"],
  },
  {
    phase: "Deep Learning & NLP",
    status: "in-progress",
    items: ["PyTorch / TensorFlow", "Computer Vision Fundamentals", "Transformers Architecture", "Hugging Face Ecosystem"],
  },
  {
    phase: "Advanced AI Systems",
    status: "upcoming",
    items: ["LLM Fine-Tuning (LoRA)", "RAG Pipelines", "AI Agents Integration", "Model Deployment (MLOps)"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-space text-primary font-semibold tracking-wider uppercase mb-2"
          >
            Learning Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Roadmap</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`glass-panel p-6 rounded-2xl border-t-4 ${
                phase.status === "completed" 
                  ? "border-t-primary" 
                  : phase.status === "in-progress" 
                  ? "border-t-secondary" 
                  : "border-t-muted/30"
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                {phase.status === "completed" && <CheckCircle2 className="text-primary" size={24} />}
                {phase.status === "in-progress" && <Clock className="text-secondary animate-pulse" size={24} />}
                {phase.status === "upcoming" && <Circle className="text-muted" size={24} />}
                <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
              </div>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      phase.status === "completed" ? "bg-primary" :
                      phase.status === "in-progress" ? "bg-secondary" : "bg-muted"
                    }`} />
                    <span className={`text-sm ${
                      phase.status === "completed" ? "text-white" :
                      phase.status === "in-progress" ? "text-white/90 font-medium" : "text-muted"
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

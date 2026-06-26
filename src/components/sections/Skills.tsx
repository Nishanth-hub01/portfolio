"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", progress: 90 },
      { name: "Deep Learning", progress: 85 },
      { name: "NLP", progress: 88 },
      { name: "Transformers", progress: 82 },
      { name: "LLMs", progress: 95 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", progress: 88 },
      { name: "TensorFlow", progress: 75 },
      { name: "Hugging Face", progress: 92 },
      { name: "LangChain", progress: 85 },
      { name: "FastAPI", progress: 80 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", progress: 95 },
      { name: "Java", progress: 75 },
      { name: "C++", progress: 70 },
      { name: "JavaScript/TypeScript", progress: 85 },
    ],
  },
  {
    title: "Web & Cloud",
    skills: [
      { name: "React/Next.js", progress: 85 },
      { name: "Docker", progress: 80 },
      { name: "AWS", progress: 70 },
      { name: "PostgreSQL", progress: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-space text-primary font-semibold tracking-wider uppercase mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-6 text-white">{category.title}</h4>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

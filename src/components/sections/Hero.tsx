"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "AI & LLM Engineer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1; // Since we only have one text, this will always be 0
      
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] z-[-1] opacity-30 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full mix-blend-screen filter blur-[70px] md:blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-secondary rounded-full mix-blend-screen filter blur-[70px] md:blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full mix-blend-screen filter blur-[70px] md:blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 inline-block mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-space tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="text-white">Nishanth</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 sm:h-16 md:h-20 mb-6 flex items-center justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gradient-primary">
            {text}
            <span className="animate-pulse border-r-2 border-primary ml-1 h-full"></span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent applications using Machine Learning, Deep Learning, NLP, and Large Language Models.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-white text-background font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: <Code2 size={24} />, href: "https://github.com" },
            { icon: <Briefcase size={24} />, href: "https://linkedin.com" },
            { icon: <Mail size={24} />, href: "mailto:hello@nishanth.ai" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors hover:scale-110 duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

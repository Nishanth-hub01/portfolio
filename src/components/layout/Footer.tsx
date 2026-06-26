import { Code2, Briefcase, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-3xl font-space font-bold text-gradient-primary inline-block mb-4 tracking-tighter">
              Nishanth<span className="text-white">.AI</span>
            </Link>
            <p className="text-muted mb-6 max-w-sm">
              Building intelligent applications using Machine Learning, Deep Learning, NLP, and Large Language Models.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com" target="_blank" className="p-2 glass rounded-full hover:text-primary transition-colors">
                <Code2 size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-2 glass rounded-full hover:text-primary transition-colors">
                <Briefcase size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted">
                <Mail size={16} className="text-primary" />
                <span>hello@nishanth.ai</span>
              </li>
              <li className="flex items-center space-x-3 text-muted text-sm mt-4">
                Available for freelance opportunities and full-time roles.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nishanth. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#home" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <span>Back to top</span>
              <ChevronUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

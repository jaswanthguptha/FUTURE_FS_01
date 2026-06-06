import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg gradient-text">Jaswanth Guptha</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Passionate about Artificial Intelligence, Data Science, and Full Stack Development.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="text-sm text-white/30 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:jaswanthguptha083@gmail.com" className="flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                jaswanthguptha083@gmail.com
              </a>
              <a href="https://github.com/jaswanthguptha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/t-jaswanth-guptha-5056aa328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Thammandru Jaswanth Guptha. All rights reserved.
          </p>
          <p className="text-xs text-white/20 flex items-center gap-1">
            Designed and Developed by <span className="text-primary">Thammandru Jaswanth Guptha</span>
            <Heart className="w-3 h-3 text-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}

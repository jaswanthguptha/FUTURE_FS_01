import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollPosition } from '../hooks/useAnimations';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = navLinks.find((l) => l.href === `#${id}`);
            if (link) setActive(link.label);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 lg:h-18 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleClick('#home'); }}>
            <Code2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text">JG</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  active === link.label
                    ? 'text-primary bg-primary/10'
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-20 px-6 lg:hidden transition-opacity duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                  active === link.label
                    ? 'text-primary bg-primary/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                style={{ animation: `fadeInLeft 0.3s ease-out ${i * 0.05}s both` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

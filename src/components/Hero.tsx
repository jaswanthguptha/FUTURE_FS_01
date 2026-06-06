import { useState } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown, MapPin, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { useTypingEffect, useParticleCanvas } from '../hooks/useAnimations';
import ProfileImage from './ProfileImage';

const titles = [
  'AI & Data Science Student',
  'Full Stack Developer',
  'Future Data Engineer',
  'Problem Solver',
  'Technology Enthusiast',
];

const stats = [
  { value: '2+', label: 'Projects Built' },
  { value: 'B.Tech', label: 'AI & Data Science' },
  { value: '2028', label: 'Graduation Year' },
];

export default function Hero() {
  const typingText = useTypingEffect(titles);
  const canvasRef = useParticleCanvas();
  const [downloadError, setDownloadError] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setDownloadError(false);
      const response = await fetch('/resume/resume.pdf');
      if (!response.ok) throw new Error('File not found');
      const blob = await response.blob();
      if (blob.size === 0) throw new Error('File is empty');
      if (!blob.type.includes('pdf')) throw new Error('Invalid PDF');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Thammandru_Jaswanth_Guptha_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      setDownloadError(true);
      console.error('Download failed:', err);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow" />

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left" style={{ animationDelay: '0.3s' }}>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-white/70 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Available for Internships & Projects</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Name */}
            <h1 className="font-extrabold tracking-tight leading-[1.05] mb-5">
              <span className="block text-white/70 text-xl sm:text-2xl font-medium mb-1">Hi there, I'm</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl gradient-text">Thammandru</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">Jaswanth Guptha</span>
            </h1>

            {/* Typing */}
            <div className="text-lg sm:text-xl lg:text-2xl font-medium text-white/80 mb-5 h-8 sm:h-9">
              <span className="text-primary">
                {typingText}
                <span className="animate-pulse text-accent ml-0.5 font-light">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-white/40 max-w-lg mx-auto lg:mx-0 mb-3 italic">
              "Building Intelligent Solutions Through Data and Code."
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-white/35 mb-8 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="btn-primary group"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <Mail className="w-4 h-4" />
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={handleDownloadCV}
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #0891B2)' }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
              <a href="https://github.com/jaswanthguptha" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/t-jaswanth-guptha-5056aa328" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {downloadError && (
              <div className="mt-6 max-w-md mx-auto lg:mx-0 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-400">Resume file not found or corrupted.</p>
                  <p className="text-xs text-red-300/70 mt-1">Please contact me directly or try again later.</p>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-white/35 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <ProfileImage />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 animate-fade-in"
          style={{ animationDelay: '1.5s' }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <div className="animate-bounce-down">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

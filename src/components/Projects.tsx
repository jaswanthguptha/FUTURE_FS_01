import { ExternalLink, Github, ArrowUpRight, Stethoscope, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const projects = [
  {
    title: 'MediPredict AI',
    description: 'An AI-powered healthcare prediction platform that helps users analyze symptoms and receive intelligent health-related insights using machine learning and predictive analytics.',
    features: ['AI-powered health prediction', 'Symptom analysis', 'Smart recommendations', 'Healthcare dashboard', 'Responsive interface', 'Fast prediction results'],
    tech: ['HTML', 'CSS', 'JavaScript', 'AI/ML'],
    demo: 'https://medipredict-26.youware.app',
    github: '#',
    icon: Stethoscope,
    gradient: 'from-primary/20 to-cyan-500/20',
  },
  {
    title: 'LeafSense AI',
    description: 'An AI-powered plant disease detection platform that analyzes plant leaf images and identifies diseases using machine learning techniques for faster crop health monitoring.',
    features: ['Plant disease detection', 'AI image analysis', 'Crop health monitoring', 'Fast diagnosis', 'Responsive design', 'User-friendly interface'],
    tech: ['Python', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://leafsense-ai-virid.vercel.app/',
    github: '#',
    icon: Leaf,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/3 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real-world applications built with AI, machine learning, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card-hover overflow-hidden group ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-dark-900/40" />
                <div className="relative z-10 animate-wiggle">
                  <project.icon className="w-16 h-16 text-white/80" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark-900/60 backdrop-blur-sm z-20">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.slice(0, 4).map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/40">{f}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md border border-white/10 text-white/60">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-4 py-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

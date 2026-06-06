import { Brain, Code2, Database, Lightbulb, Rocket, Target } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const highlights = [
  { icon: Brain, title: 'AI & Data Science', desc: 'B.Tech student specializing in Artificial Intelligence and Data Science with a deep passion for intelligent systems.' },
  { icon: Code2, title: 'Full Stack Development', desc: 'Building scalable, modern web applications from frontend to backend with cutting-edge technologies.' },
  { icon: Database, title: 'Data Engineering', desc: 'Aspiring Data Engineer focused on building robust data pipelines and transforming raw data into actionable insights.' },
  { icon: Lightbulb, title: 'Problem Solver', desc: 'Dedicated to solving real-world problems using technology, data analysis, and creative thinking.' },
  { icon: Rocket, title: 'Continuous Learner', desc: 'Always exploring emerging technologies, frameworks, and methodologies to stay ahead of the curve.' },
  { icon: Target, title: 'Goal-Oriented', desc: 'Driven by clear objectives: becoming a Full Stack Developer and Data Engineer who delivers impactful solutions.' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Driven by <span className="gradient-text">Curiosity</span> & <span className="gradient-text">Code</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A passionate B.Tech student in Artificial Intelligence and Data Science, committed to building intelligent solutions and scalable applications that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card-hover p-6 group ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

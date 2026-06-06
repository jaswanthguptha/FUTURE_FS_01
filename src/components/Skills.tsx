import { useState } from 'react';
import { Code2, Server, Brain, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const tabs = [
  {
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Java', color: '#ED8B00' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#FFFFFF' },
      { name: 'SQL', color: '#4479A1' },
    ],
  },
  {
    label: 'AI & Data Science',
    icon: Brain,
    skills: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Pandas', color: '#150458' },
      { name: 'NumPy', color: '#013243' },
      { name: 'Matplotlib', color: '#11557C' },
      { name: 'Machine Learning', color: '#FF6F00' },
      { name: 'Power BI', color: '#F2C811' },
      { name: 'Microsoft Excel', color: '#217346' },
    ],
  },
  {
    label: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#FFFFFF' },
      { name: 'VS Code', color: '#007ACC' },
      { name: 'Google Colab', color: '#F9AB00' },
      { name: 'Jupyter Notebook', color: '#F37626' },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Technologies and tools I work with to build intelligent, scalable, and modern solutions.
          </p>
        </div>

        <div className={inView ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-primary/15 text-primary border border-primary/30 shadow-lg shadow-primary/10'
                    : 'glass text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div
            key={active}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
            style={{ animation: 'fadeInUp 0.3s ease-out' }}
          >
            {tabs[active].skills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-card-hover p-5 flex flex-col items-center gap-3 group animate-scale-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                >
                  {skill.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

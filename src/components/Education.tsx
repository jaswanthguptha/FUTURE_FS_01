import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const education = [
  {
    institution: 'Vignan Institute of Information Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Artificial Intelligence and Data Science',
    period: '2024 - 2028',
    status: 'Currently Pursuing',
    location: 'Visakhapatnam, Andhra Pradesh',
    highlight: 'Specializing in AI & Data Science',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (12th)',
    branch: 'Mathematics, Physics, Chemistry',
    period: '2022 - 2024',
    score: '89.4%',
    location: 'Andhra Pradesh',
    highlight: 'Academic Excellence',
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'SSC (10th)',
    branch: 'Secondary School Certificate',
    period: '2022',
    score: '79%',
    location: 'Andhra Pradesh',
    highlight: 'Strong Foundation',
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Education</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A consistent academic record building a strong foundation in science, technology, and data-driven thinking.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`relative pl-20 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-dark-900 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-white/40 text-sm">{edu.branch}</p>
                    </div>
                    {edu.score && (
                      <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-lg shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">{edu.score}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.status && (
                    <span className="inline-block mt-3 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {edu.status}
                    </span>
                  )}

                  <p className="mt-2 text-xs text-white/30 italic">{edu.highlight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`flex justify-center mt-12 ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

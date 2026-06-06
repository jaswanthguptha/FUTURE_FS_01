import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-dark-900 transition-opacity duration-600 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="relative">
        <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="relative flex items-center gap-3 animate-scale-in">
          <div className="animate-spin-slow">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold gradient-text">Jaswanth Guptha</span>
            <span className="text-xs text-white/50 tracking-widest uppercase">Loading Portfolio</span>
          </div>
        </div>

        <div className="mt-8 h-0.5 bg-white/5 rounded-full overflow-hidden w-[200px]">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-[slideRight_2s_ease-in-out_forwards]"
            style={{ animation: 'slideRight 2s ease-in-out forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

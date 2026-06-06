import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

export default function Contact() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Let's connect and build innovative solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className={`space-y-6 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card-hover p-5 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Email</p>
                <a href="mailto:jaswanthguptha083@gmail.com" className="text-white hover:text-primary transition-colors text-sm">
                  jaswanthguptha083@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card-hover p-5 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                <a href="tel:+918985392330" className="text-white hover:text-accent transition-colors text-sm">
                  +91 8985392330
                </a>
              </div>
            </div>

            <div className="glass-card-hover p-5 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-white/70 text-sm">Official Colony, Gajuwaka, Visakhapatnam, AP, India</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/jaswanthguptha" target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex flex-col items-center gap-2 group">
                <Github className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/t-jaswanth-guptha-5056aa328" target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex flex-col items-center gap-2 group">
                <Linkedin className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className={inView ? 'animate-fade-in-right' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                {sent ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

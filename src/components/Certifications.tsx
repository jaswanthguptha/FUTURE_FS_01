import { useState } from 'react';
import { Plus, Award } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import CertificationCard, { type Certificate } from './CertificationCard';
import CertificateModal from './CertificateModal';

const STORAGE_KEY = 'portfolio_certificates_v2';

function loadCerts(): Certificate[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Certificate[];
  } catch {
    // ignore
  }
  return [];
}

function saveCerts(certs: Certificate[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
  } catch {
    // ignore
  }
}

export default function Certifications() {
  const { ref, inView } = useInView();
  const [certs, setCerts] = useState<Certificate[]>(loadCerts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Certificate | undefined>(undefined);

  const openAdd = () => { setEditing(undefined); setModalOpen(true); };
  const openEdit = (cert: Certificate) => { setEditing(cert); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setEditing(undefined); };

  const handleSave = (cert: Certificate) => {
    const updated = editing
      ? certs.map((c) => (c.id === cert.id ? cert : c))
      : [...certs, cert];
    setCerts(updated);
    saveCerts(updated);
  };

  const handleDelete = (id: string) => {
    const updated = certs.filter((c) => c.id !== id);
    setCerts(updated);
    saveCerts(updated);
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Credentials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Industry-recognized certifications validating expertise in AI, data science, and full stack development.
          </p>
        </div>

        {certs.length === 0 ? (
          /* ── Empty state ── */
          <div
            className={`flex flex-col items-center justify-center py-20 gap-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center">
              <Award className="w-10 h-10 text-white/20" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-white/60">No certificates added yet.</h3>
              <p className="text-sm text-white/35 max-w-sm">
                Add your certificates to showcase your achievements and skills.
              </p>
            </div>
            <button onClick={openAdd} className="btn-primary group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Add Certificate
            </button>
          </div>
        ) : (
          /* ── Populated state ── */
          <>
            <div
              className={`flex justify-center mb-10 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.15s' }}
            >
              <button onClick={openAdd} className="btn-primary group">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Add Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, i) => (
                <div
                  key={cert.id}
                  className={inView ? 'animate-fade-in' : 'opacity-0'}
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  <CertificationCard cert={cert} onEdit={openEdit} onDelete={handleDelete} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {modalOpen && (
        <CertificateModal
          initial={editing}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

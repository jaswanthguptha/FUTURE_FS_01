import { ExternalLink, Award, Calendar, Hash, Pencil, Trash2 } from 'lucide-react';

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  imageUrl: string;
}

interface Props {
  cert: Certificate;
  onEdit: (cert: Certificate) => void;
  onDelete: (id: string) => void;
}

export default function CertificationCard({ cert, onEdit, onDelete }: Props) {
  return (
    <div className="glass-card-hover overflow-hidden group flex flex-col h-full">
      {/* Certificate image */}
      <div className="relative h-44 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden shrink-0">
        {cert.imageUrl ? (
          <img
            src={cert.imageUrl}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ imageRendering: 'auto' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Award className="w-16 h-16 text-primary/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
        <div className="absolute top-3 right-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-2.5 py-1">
          <span className="text-xs font-semibold text-primary">Certified</span>
        </div>

        {/* Edit / Delete overlay */}
        <div className="absolute top-3 left-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onEdit(cert)}
            className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/30 transition-all"
            title="Edit"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onDelete(cert.id)}
            className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-red-400 hover:bg-red-500/20 transition-all"
            title="Delete"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card body — only rendered when metadata exists */}
      {(cert.title || cert.organization || cert.date || cert.credentialId || cert.verifyUrl) && (
        <div className="p-5 flex flex-col flex-1 gap-3">
          {cert.title && (
            <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
              {cert.title}
            </h3>
          )}

          <div className="flex flex-col gap-1.5 text-xs text-white/40">
            {cert.organization && (
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                <span className="truncate">{cert.organization}</span>
              </div>
            )}
            {cert.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent/60 shrink-0" />
                <span>{cert.date}</span>
              </div>
            )}
            {cert.credentialId && (
              <div className="flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-secondary/60 shrink-0" />
                <span className="truncate font-mono">{cert.credentialId}</span>
              </div>
            )}
          </div>

          {cert.verifyUrl && cert.verifyUrl !== '#' && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Verify Certificate
            </a>
          )}
        </div>
      )}
    </div>
  );
}

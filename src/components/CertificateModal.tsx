import { useState, FormEvent, useRef } from 'react';
import { X, Upload, Plus, Save } from 'lucide-react';
import type { Certificate } from './CertificationCard';

interface Props {
  initial?: Certificate;
  onSave: (cert: Certificate) => void;
  onClose: () => void;
}

export default function CertificateModal({ initial, onSave, onClose }: Props) {
  const [imageUrl, setImageUrl] = useState(initial?.imageUrl ?? '');
  const fileRef = useRef<HTMLInputElement>(null);
  const isEdit = Boolean(initial);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImageUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      id: initial?.id ?? crypto.randomUUID(),
      title: '',
      organization: '',
      date: '',
      credentialId: '',
      verifyUrl: '',
      imageUrl,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: 'rgba(5,8,22,0.88)', backdropFilter: 'blur(14px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-card w-full max-w-md animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              {isEdit ? <Save className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{isEdit ? 'Edit Certificate' : 'Add Certificate'}</h2>
              <p className="text-xs text-white/40">Upload your certificate image</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Image upload */}
          <div
            onClick={() => fileRef.current?.click()}
            className={`relative border-2 border-dashed rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${imageUrl ? 'border-primary/40' : 'border-white/10 hover:border-primary/30'}`}
          >
            {imageUrl ? (
              <div className="relative h-56">
                <img src={imageUrl} alt="Certificate preview" className="w-full h-full object-contain bg-dark-800" style={{ imageRendering: 'auto' }} />
                <div className="absolute inset-0 bg-dark-900/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white font-medium flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" /> Change Image
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-44 flex flex-col items-center justify-center gap-3 text-white/30 hover:text-white/50 transition-colors">
                <Upload className="w-8 h-8" />
                <span className="text-sm">Click to upload certificate image</span>
                <span className="text-xs text-white/20">PNG, JPG, WEBP supported</span>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />

          {/* Actions */}
          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 btn-outline justify-center py-2.5 text-sm">
              Cancel
            </button>
            <button type="submit" disabled={!imageUrl} className="flex-1 btn-primary justify-center py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
              {isEdit ? <><Save className="w-4 h-4" /> Save</> : <><Plus className="w-4 h-4" /> Add</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

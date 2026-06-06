const PROFILE_IMAGE = '/WhatsApp_Image_2026-06-06_at_10.41.17_AM.jpeg';

export default function ProfileImage() {
  return (
    <div className="relative flex-shrink-0">
      {/* Ambient glow */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/25 blur-3xl animate-pulse-glow" />

      {/* Gradient border ring */}
      <div
        className="absolute -inset-[3px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 40%, #8B5CF6 70%, #3B82F6 100%)',
          borderRadius: '50%',
          animation: 'gradientSpin 6s linear infinite',
          padding: '3px',
        }}
      />

      {/* Inner dark ring to separate border from photo */}
      <div
        className="absolute -inset-[3px] rounded-full bg-dark-900"
        style={{ margin: '3px', borderRadius: '50%' }}
      />

      {/* Profile photo — crisp, no blur */}
      <div
        className="relative rounded-full overflow-hidden animate-float-y"
        style={{
          width: 'clamp(180px, 32vw, 320px)',
          height: 'clamp(180px, 32vw, 320px)',
          imageRendering: 'auto',
        }}
      >
        <img
          src={PROFILE_IMAGE}
          alt="Thammandru Jaswanth Guptha"
          width={640}
          height={640}
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 12%',
            display: 'block',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Floating badge icons */}
      <div className="absolute -top-2 -right-2 w-11 h-11 glass-card rounded-xl flex items-center justify-center shadow-lg animate-float-y" style={{ animationDelay: '0.4s' }}>
        <span className="text-lg select-none">🤖</span>
      </div>
      <div className="absolute -bottom-2 -left-2 w-11 h-11 glass-card rounded-xl flex items-center justify-center shadow-lg animate-float-y-delay">
        <span className="text-lg select-none">📊</span>
      </div>
      <div className="absolute top-1/2 -right-8 w-10 h-10 glass-card rounded-xl flex items-center justify-center shadow-lg animate-float-x">
        <span className="text-base select-none">💻</span>
      </div>
      <div className="absolute top-1/4 -left-8 w-10 h-10 glass-card rounded-xl flex items-center justify-center shadow-lg animate-float-y" style={{ animationDelay: '1.2s' }}>
        <span className="text-base select-none">🧠</span>
      </div>

      <style>{`
        @keyframes gradientSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

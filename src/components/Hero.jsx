import ImageWithFallback from './ImageWithFallback';
import ArchFrame from './ArchFrame';
import Divider from './Divider';
import { mandal, invitationDates } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden bg-temple-gate px-6 pt-9 pb-6 text-cream">
      {/* garland with hanging bells */}
      <div className="relative z-10 flex items-center gap-2" aria-hidden="true">
        <span className="text-lg opacity-80">🔔</span>
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-gold-100/80" />
        ))}
        <span className="text-lg opacity-80">🔔</span>
      </div>

      {/* logo */}
      <div className="relative z-10 mt-4 flex flex-col items-center gap-2 animate-fadeUp">
        <ImageWithFallback
          src="/images/image1.png"
          alt="Ganpati Mandal Logo"
          icon="🪔"
          className="h-16 w-16 rounded-full ring-2 ring-gold-200/70 shadow-card overflow-hidden bg-cream"
          imgClassName="h-full w-full object-contain p-1"
        />
        <p className="font-english text-[10px] tracking-wide text-cream/70">
          {mandal.shortName} <span className="opacity-70">— {mandal.fullName}</span>
        </p>
      </div>

      {/* title block */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2 mt-6 max-w-md">
        <p className="font-hindi text-xs text-gold-100/90">॥ श्री गणेशाय नमः ॥</p>
        <h1 className="font-display leading-tight text-[2.5rem] sm:text-[2.9rem] text-cream drop-shadow">
          गणपति बप्पा मोरया
        </h1>
        <p className="font-hindi font-semibold text-lg text-gold-100">आपको सादर आमंत्रण है</p>
        <p className="font-english text-xs text-cream/70">You are cordially invited</p>
      </div>

      {/* illustrated arch */}
      <div className="relative z-10 mt-6">
        <ArchFrame tone="light" />
      </div>

      <Divider className="relative z-10 my-4 text-gold-200" />

      <div className="relative z-10 inline-flex flex-col items-center gap-1 rounded-2xl bg-cocoa-900/30 backdrop-blur px-6 py-3 border border-gold-200/40">
        <span className="font-hindi text-lg font-semibold text-gold-100">{invitationDates.hindi}</span>
        <span className="font-english text-xs text-cream/70">{invitationDates.english}</span>
      </div>

      {/* scroll discoverability cue */}
      <a
        href="#invitation"
        className="relative z-10 mt-7 flex flex-col items-center gap-1 text-cream/80 hover:text-cream transition-colors animate-gentleBounce"
        aria-label="नीचे और जानकारी देखें"
      >
        <span className="font-hindi text-sm">नीचे देखें</span>
        <span className="text-lg" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

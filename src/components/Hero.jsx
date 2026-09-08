import ImageWithFallback from './ImageWithFallback';
import Divider from './Divider';
import { mandal, invitationDates } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden bg-temple-texture px-6 pt-10 pb-6">
      {/* Decorative top arch */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-marigold-200/40 to-transparent"
        aria-hidden="true"
      />

      {/* Mandal name */}
      <div className="relative z-10 flex flex-col items-center gap-3 animate-fadeUp">
        <ImageWithFallback
          src="/images/image1.png"
          alt="Ganpati Mandal Logo"
          icon="🪔"
          className="h-20 w-20 rounded-full ring-4 ring-marigold-300/60 shadow-card overflow-hidden bg-sandal"
          imgClassName="h-full w-full object-contain p-1"
        />
        <p className="font-english text-[11px] tracking-wide text-maroon-500/80">
          {mandal.shortName} <span className="opacity-60">— {mandal.fullName}</span>
        </p>
      </div>

      {/* Center hero content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-md">
        <div
          className="w-16 h-16 rounded-full bg-marigold-200/50 animate-floatSlow flex items-center justify-center text-3xl"
          aria-hidden="true"
        >
          🐘
        </div>

        <h1 className="font-display text-maroon-700 leading-tight text-[2.6rem] sm:text-[3rem]">
          गणपति बप्पा मोरया
        </h1>

        <div className="flex flex-col items-center gap-1">
          <p className="font-hindi font-semibold text-xl text-maroon-600">आपको सादर आमंत्रण है</p>
          <p className="font-english text-sm text-maroon-500/70">You are cordially invited</p>
        </div>

        <Divider />

        <div className="mt-1 inline-flex flex-col items-center gap-1 rounded-2xl bg-white/70 backdrop-blur px-6 py-3 shadow-card border border-marigold-200">
          <span className="font-hindi text-lg font-semibold text-vermilion">{invitationDates.hindi}</span>
          <span className="font-english text-xs text-maroon-500/70">{invitationDates.english}</span>
        </div>
      </div>

      {/* Scroll discoverability cue */}
      <a
        href="#invitation"
        className="relative z-10 mt-8 flex flex-col items-center gap-1 text-maroon-500/80 hover:text-maroon-600 transition-colors animate-gentleBounce"
        aria-label="नीचे और जानकारी देखें"
      >
        <span className="font-hindi text-sm">नीचे देखें</span>
        <span className="text-lg" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

import { useState } from 'react';

export default function IntroGate({ onOpen }) {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    window.setTimeout(onOpen, 550);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-temple-gate transition-opacity duration-500 ${
        closing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* concentric mandala rings */}
      <div className="absolute mandala-ring w-[280px] h-[280px]" aria-hidden="true" />
      <div className="absolute mandala-ring w-[360px] h-[360px]" aria-hidden="true" />
      <div className="absolute mandala-ring w-[440px] h-[440px]" aria-hidden="true" />

      <button
        type="button"
        onClick={handleOpen}
        className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-b from-gold-200 to-gold-500 text-cocoa-800 shadow-glow animate-ringPulse active:scale-95 transition-transform"
      >
        <span className="font-hindi font-semibold text-lg leading-tight">गणपति नमः</span>
        <span className="my-1 text-xs opacity-70" aria-hidden="true">
          ✦
        </span>
        <span className="font-english text-[10px] tracking-[0.2em] uppercase opacity-80">Tap to open</span>
      </button>

      <p className="relative z-10 mt-10 font-hindi text-cream/80 text-sm animate-fadeUp">
        निमंत्रण खोलने हेतु स्पर्श करें
      </p>
    </div>
  );
}

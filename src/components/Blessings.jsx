import { useState, useRef } from 'react';
import GanpatiEmblem from './GanpatiEmblem';
import Divider from './Divider';

const PETAL_EMOJIS = ['🌸', '🌼', '🏵️', '🌺'];

export default function Blessings() {
  const [petals, setPetals] = useState([]);
  const idRef = useRef(0);

  const showerFlowers = () => {
    const batch = Array.from({ length: 14 }).map(() => {
      idRef.current += 1;
      return {
        id: idRef.current,
        left: Math.random() * 90 + 5, // percent
        drift: Math.round((Math.random() - 0.5) * 80),
        delay: Math.random() * 0.4,
        emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
      };
    });
    setPetals((prev) => [...prev, ...batch]);
    window.setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !batch.some((b) => b.id === p.id)));
    }, 2200);
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 bg-temple-shrine text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-300 font-medium">आशीर्वाद</p>
      <h2 className="font-display text-3xl text-cream mt-2">बप्पा का आशीर्वाद</h2>
      <Divider className="my-4 text-gold-400" />
      <p className="font-hindi text-cream/70 text-sm max-w-xs mx-auto">
        स्पर्श करें और बप्पा के चरणों में श्रद्धा से पुष्प अर्पित करें
      </p>

      <div className="relative mt-9 flex justify-center">
        {/* petal shower overlay */}
        <div className="pointer-events-none absolute inset-x-0 -top-4 h-[340px] overflow-hidden">
          {petals.map((p) => (
            <span
              key={p.id}
              className="petal"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                '--drift': `${p.drift}px`,
              }}
              aria-hidden="true"
            >
              {p.emoji}
            </span>
          ))}
        </div>

        <div className="relative rounded-full bg-gold-400/10 p-8 shadow-glow animate-floatSlow">
          <GanpatiEmblem tone="cream" className="w-40 h-44" />
        </div>
      </div>

      <button
        type="button"
        onClick={showerFlowers}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 text-cocoa-800 font-hindi font-semibold px-7 py-3.5 shadow-button active:scale-[0.98] transition-transform"
      >
        🌸 पुष्पांजलि अर्पित करें
      </button>
    </section>
  );
}

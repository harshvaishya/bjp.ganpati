import GanpatiEmblem from './GanpatiEmblem';

export default function ArchFrame({ tone = 'gold' }) {
  const isDark = tone === 'dark';

  return (
    <div className="relative flex flex-col items-center">
      {/* garland strip */}
      <div className="flex items-center gap-1.5 mb-2" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${isDark ? 'bg-gold-300' : 'bg-gold-500'}`}
            style={{ opacity: 0.55 + (i % 3) * 0.15 }}
          />
        ))}
      </div>

      <div
        className={`relative flex items-end justify-center rounded-t-[9999px] rounded-b-2xl px-8 pt-8 pb-4 border-2 ${
          isDark ? 'border-gold-400/50 bg-cocoa-800/60' : 'border-gold-500/60 bg-gold-50/70'
        } shadow-glow`}
        style={{ width: 220, height: 250 }}
      >
        {/* pillars */}
        <span
          className={`absolute left-1 top-6 bottom-2 w-2 rounded-full ${isDark ? 'bg-gold-500/40' : 'bg-gold-400/50'}`}
          aria-hidden="true"
        />
        <span
          className={`absolute right-1 top-6 bottom-2 w-2 rounded-full ${isDark ? 'bg-gold-500/40' : 'bg-gold-400/50'}`}
          aria-hidden="true"
        />

        {/* kalash pots either side */}
        <span className="absolute -left-3 bottom-0 text-2xl" aria-hidden="true">
          🪔
        </span>
        <span className="absolute -right-3 bottom-0 text-2xl" aria-hidden="true">
          🪔
        </span>

        <GanpatiEmblem tone={isDark ? 'cream' : 'gold'} className="w-32 h-36" />
      </div>
    </div>
  );
}

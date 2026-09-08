import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import Divider from './Divider';
import { organizers } from '../data/content';

export default function Organizers() {
  const [index, setIndex] = useState(0);
  const person = organizers[index];

  const go = (delta) => {
    setIndex((prev) => (prev + delta + organizers.length) % organizers.length);
  };

  return (
    <section className="px-6 py-16 bg-temple-texture text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-600 font-medium">निमंत्रक</p>
      <h2 className="font-display text-3xl text-cocoa-700 mt-2">मुख्य कार्यकर्ता</h2>
      <Divider className="my-5" />
      <p className="font-hindi text-cocoa-600 text-sm max-w-xs mx-auto">
        गणपति बप्पा के स्वागत हेतु आप सभी सादर उपस्थित रहें
      </p>

      <div className="max-w-xs mx-auto mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="पिछला कार्यकर्ता"
          className="shrink-0 h-11 w-11 rounded-full bg-white border border-gold-200 shadow-card flex items-center justify-center text-cocoa-700 text-lg active:scale-95 transition-transform"
        >
          ‹
        </button>

        <div className="flex flex-col items-center gap-3 w-48">
          <ImageWithFallback
            src={person.image}
            alt={person.nameEn}
            icon="🙏"
            className="h-32 w-32 rounded-full ring-4 ring-gold-200 shadow-card overflow-hidden bg-white"
            imgClassName="h-full w-full object-cover"
          />
          <div>
            <p className="font-hindi font-semibold text-cocoa-700 text-[16px] leading-snug">श्री. {person.nameHi}</p>
            <p className="font-english text-[11px] text-cocoa-500/60">{person.nameEn}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="अगला कार्यकर्ता"
          className="shrink-0 h-11 w-11 rounded-full bg-white border border-gold-200 shadow-card flex items-center justify-center text-cocoa-700 text-lg active:scale-95 transition-transform"
        >
          ›
        </button>
      </div>

      {/* dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="कार्यकर्ता चुनें">
        {organizers.map((o, i) => (
          <button
            key={o.nameEn}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={o.nameEn}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-gold-500' : 'w-2.5 bg-gold-200'}`}
          />
        ))}
      </div>
    </section>
  );
}

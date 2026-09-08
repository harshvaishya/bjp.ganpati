import { useState } from 'react';
import Divider from './Divider';
import { timeline, invitationDates } from '../data/content';

export default function Timeline() {
  const [openDay, setOpenDay] = useState(1); // day 1 open by default so first-time visitors see how it works

  return (
    <section className="px-6 py-16 bg-temple-texture text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-600 font-medium">कार्यक्रम</p>
      <h2 className="font-display text-3xl text-cocoa-700 mt-2">उत्सव का मंगल प्रवास</h2>
      <Divider className="my-4" />
      <p className="font-hindi text-cocoa-600 text-[15px] max-w-xs mx-auto">
        {invitationDates.hindi} तक हर मंगल क्षण की जानकारी यहाँ है।
      </p>

      <div className="relative max-w-sm mx-auto mt-10">
        {/* garland stem */}
        <div className="absolute left-1/2 top-3 bottom-3 -translate-x-1/2 w-0.5 bg-gold-300" aria-hidden="true" />
        <span className="absolute left-1/2 -top-1 -translate-x-1/2 text-xl" aria-hidden="true">
          🌼
        </span>
        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 text-xl" aria-hidden="true">
          🌼
        </span>

        <div className="flex flex-col gap-7 py-6">
          {timeline.map((day, idx) => {
            const isLeft = idx % 2 === 0;
            const isOpen = openDay === day.day;
            const label = day.events.length > 0 ? day.events[0].titleHi : day.note;

            return (
              <div key={day.day} className="relative">
                <div className={`flex items-center ${isLeft ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                  <button
                    type="button"
                    onClick={() => setOpenDay(isOpen ? null : day.day)}
                    aria-expanded={isOpen}
                    className={`font-hindi text-sm sm:text-[15px] font-semibold px-4 py-2.5 rounded-full shadow-card transition-colors ${
                      isOpen ? 'bg-cocoa-700 text-cream' : 'bg-white text-cocoa-700 border border-gold-200'
                    }`}
                  >
                    {label}
                  </button>
                </div>

                {/* node dot on the stem */}
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-cream"
                  aria-hidden="true"
                />

                {isOpen && (
                  <div className="mt-3 mx-auto max-w-[240px] rounded-2xl bg-white border border-gold-200 shadow-card px-4 py-3 animate-fadeUp">
                    <p className="font-hindi font-semibold text-cocoa-700">{day.date}</p>
                    {day.events.length > 0 ? (
                      <ul className="mt-1.5 space-y-1.5">
                        {day.events.map((event) => (
                          <li key={event.titleHi} className="flex items-center justify-between gap-3">
                            <span className="font-hindi text-cocoa-700 text-[14px]">🪔 {event.titleHi}</span>
                            <span className="font-hindi text-vermilion text-xs font-medium whitespace-nowrap">
                              {event.timeHi}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1.5 font-hindi text-cocoa-500/80 text-[13px]">✨ {day.note}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="font-hindi text-xs text-cocoa-500/70 mt-6">स्पर्श करें · जानकारी देखें</p>
    </section>
  );
}

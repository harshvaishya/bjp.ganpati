import Divider from './Divider';
import { timeline, invitationDates } from '../data/content';

export default function Timeline() {
  return (
    <section className="px-6 py-16 bg-temple text-center">
      <p className="font-hindi text-sm tracking-wide text-marigold-600 font-medium">कार्यक्रम</p>
      <h2 className="font-display text-3xl text-maroon-700 mt-2">गणपति उत्सव कार्यक्रम</h2>
      <Divider className="my-4" />
      <p className="font-hindi text-maroon-600 text-[15px]">{invitationDates.hindi} तक आपका हार्दिक स्वागत है।</p>

      <ol className="relative max-w-md mx-auto mt-10 text-left">
        {/* vertical connecting line */}
        <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-marigold-200" aria-hidden="true" />

        {timeline.map((day) => (
          <li key={day.day} className="relative pl-16 pb-9 last:pb-0">
            <div
              className="absolute left-0 top-0 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-maroon-600 text-temple shadow-card"
              aria-hidden="true"
            >
              <span className="text-[10px] font-english leading-none opacity-80">दिन</span>
              <span className="font-hindi font-bold text-lg leading-none">{day.day}</span>
            </div>

            <div className="rounded-2xl bg-white border border-marigold-100 shadow-card px-4 py-4">
              <p className="font-hindi font-semibold text-maroon-700">{day.date}</p>

              {day.events.length > 0 ? (
                <ul className="mt-2 space-y-2">
                  {day.events.map((event) => (
                    <li key={event.titleHi} className="flex items-start justify-between gap-3">
                      <span className="font-hindi text-maroon-700 text-[15px]">🪔 {event.titleHi}</span>
                      <span className="font-hindi text-vermilion text-sm whitespace-nowrap font-medium">
                        {event.timeHi}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 font-hindi text-maroon-500/70 text-[14px]">✨ {day.note}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

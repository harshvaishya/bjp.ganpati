import ImageWithFallback from './ImageWithFallback';
import Divider from './Divider';
import { organizers } from '../data/content';

export default function Organizers() {
  return (
    <section className="px-6 py-16 bg-sandal text-center">
      <p className="font-hindi text-sm tracking-wide text-marigold-600 font-medium">आयोजक</p>
      <h2 className="font-display text-3xl text-maroon-700 mt-2">मुख्य कार्यकर्ता</h2>
      <Divider className="my-5" />

      <div className="max-w-md mx-auto grid grid-cols-3 gap-3 sm:gap-6 mt-8">
        {organizers.map((person) => (
          <div key={person.nameEn} className="flex flex-col items-center gap-3">
            <ImageWithFallback
              src={person.image}
              alt={person.nameEn}
              icon="🙏"
              className="h-20 w-20 sm:h-28 sm:w-28 rounded-full ring-4 ring-marigold-200 shadow-card overflow-hidden bg-white"
              imgClassName="h-full w-full object-cover"
            />
            <div>
              <p className="font-hindi font-semibold text-maroon-700 text-[15px] leading-snug">{person.nameHi}</p>
              <p className="font-english text-[11px] text-maroon-500/60">{person.nameEn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

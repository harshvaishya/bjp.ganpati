import Divider from './Divider';
import { location } from '../data/content';

export default function Location() {
  const content = (
    <>
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-marigold-100 text-2xl"
        aria-hidden="true"
      >
        📍
      </div>
      <p className="font-hindi font-semibold text-xl text-maroon-700 mt-4">{location.nameHi}</p>
      <p className="font-english text-sm text-maroon-500/70 mt-1">{location.nameEn}</p>
      {location.mapsUrl && (
        <span className="mt-4 inline-block font-hindi text-sm text-vermilion font-medium underline underline-offset-4">
          मानचित्र पर देखें (Open in Google Maps)
        </span>
      )}
    </>
  );

  return (
    <section className="px-6 py-16 bg-sandal text-center">
      <p className="font-hindi text-sm tracking-wide text-marigold-600 font-medium">स्थान</p>
      <h2 className="font-display text-3xl text-maroon-700 mt-2">कहाँ आना है</h2>
      <Divider className="my-5" />

      <div className="max-w-sm mx-auto rounded-2xl bg-white border border-marigold-100 shadow-card px-6 py-8">
        {location.mapsUrl ? (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`${location.nameHi} — Google Maps पर खोलें`}
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </section>
  );
}

import Divider from './Divider';
import { location } from '../data/content';

export default function Location() {
  const query = encodeURIComponent(`${location.nameHi} ${location.address}`.trim());
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const openUrl = location.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className="px-6 py-16 bg-cream text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-600 font-medium">स्थान</p>
      <h2 className="font-display text-3xl text-cocoa-700 mt-2">कार्यक्रम स्थल</h2>
      <Divider className="my-5" />
      <p className="font-hindi text-cocoa-600 text-sm max-w-xs mx-auto">
        गणपति बप्पा के दर्शनार्थ आपके सहर्ष स्वागत हेतु पता यहाँ दिया गया है।
      </p>

      <div className="max-w-sm mx-auto mt-7 rounded-2xl overflow-hidden shadow-card border border-gold-200">
        <iframe
          title="कार्यक्रम स्थल — Google Maps"
          src={embedSrc}
          className="w-full h-52 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="bg-white px-6 py-6">
          <p className="font-hindi font-semibold text-xl text-cocoa-700">{location.nameHi}</p>
          <p className="font-english text-sm text-cocoa-500/70 mt-1">{location.nameEn}</p>
          {location.address && <p className="font-hindi text-sm text-cocoa-600 mt-2">{location.address}</p>}

          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 text-cocoa-800 font-hindi font-semibold px-7 py-3 shadow-button active:scale-[0.98] transition-transform"
          >
            📍 Open Maps
          </a>

          <p className="font-hindi text-xs text-cocoa-500/70 mt-4">
            आपकी सपरिवार उपस्थिति उत्सव की शोभा बढ़ाएगी
          </p>
        </div>
      </div>
    </section>
  );
}

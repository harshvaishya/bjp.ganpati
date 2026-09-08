import { footer, mandal } from '../data/content';

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-cocoa-900 text-center">
      <p className="font-hindi text-cream/70 text-sm">
        {mandal.shortName} — {mandal.fullName}
      </p>
      <p className="font-english text-cream/40 text-[11px] mt-2">{footer.craftedByEn}</p>
    </footer>
  );
}

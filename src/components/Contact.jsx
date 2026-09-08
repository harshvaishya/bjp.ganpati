import Divider from './Divider';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section className="px-6 py-16 bg-cocoa-700 text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-300 font-medium">संपर्क</p>
      <h2 className="font-display text-3xl text-cream mt-2">संपर्क करें</h2>
      <Divider className="my-5 text-gold-300" />

      <p className="font-hindi text-lg text-cream">{contact.name}</p>
      <p className="font-english text-base text-gold-200 mt-1 tracking-wide">{contact.phoneDisplay}</p>

      <div className="max-w-sm mx-auto mt-8 flex flex-col gap-4">
        <a
          href={`tel:${contact.phoneTel}`}
          className="flex items-center justify-center gap-3 rounded-2xl bg-gold-400 text-cocoa-800 font-hindi font-semibold text-lg py-4 shadow-button active:scale-[0.98] transition-transform"
        >
          <span aria-hidden="true">📞</span>
          कॉल करें
        </a>
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white font-hindi font-semibold text-lg py-4 shadow-button active:scale-[0.98] transition-transform"
        >
          <span aria-hidden="true">💬</span>
          WhatsApp पर संपर्क करें
        </a>
      </div>
    </section>
  );
}

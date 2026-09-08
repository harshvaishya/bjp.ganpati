import Divider from './Divider';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section className="px-6 py-16 bg-maroon-700 text-center">
      <p className="font-hindi text-sm tracking-wide text-marigold-300 font-medium">संपर्क</p>
      <h2 className="font-display text-3xl text-temple mt-2">संपर्क करें</h2>
      <Divider className="my-5 text-marigold-300" />

      <p className="font-hindi text-lg text-temple">{contact.name}</p>
      <p className="font-english text-base text-marigold-200 mt-1 tracking-wide">{contact.phoneDisplay}</p>

      <div className="max-w-sm mx-auto mt-8 flex flex-col gap-4">
        <a
          href={`tel:${contact.phoneTel}`}
          className="flex items-center justify-center gap-3 rounded-2xl bg-marigold-400 text-maroon-800 font-hindi font-semibold text-lg py-4 shadow-button active:scale-[0.98] transition-transform"
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

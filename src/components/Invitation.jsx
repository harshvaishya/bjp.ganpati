import Divider from './Divider';
import { family, invitationDates } from '../data/content';

export default function Invitation() {
  return (
    <section id="invitation" className="px-6 py-16 bg-cream text-center">
      <p className="font-hindi text-sm tracking-wide text-gold-600 font-medium">प्रेमपूर्वक आमंत्रण</p>
      <h2 className="font-display text-3xl text-cocoa-700 mt-2">{family.name}</h2>
      <Divider className="my-5" />

      <div className="max-w-md mx-auto space-y-4">
        <p className="font-hindi text-lg leading-relaxed text-cocoa-700">
          हम आपको सादर आमंत्रित करते हैं।
          <br />
          {invitationDates.hindi} तक हमारे घर पधारकर गणपति बप्पा के दर्शन एवं उत्सव में सम्मिलित हों।
        </p>
        <p className="font-english text-sm leading-relaxed text-cocoa-500/70">
          We warmly invite you to visit our home from {invitationDates.english} and celebrate Ganesh Chaturthi
          with us.
        </p>
      </div>
    </section>
  );
}

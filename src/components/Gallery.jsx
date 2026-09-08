import ImageWithFallback from './ImageWithFallback';
import Divider from './Divider';
import { gallery } from '../data/content';

export default function Gallery() {
  const [featured, ...rest] = gallery;

  return (
    <section className="px-6 py-16 bg-temple text-center">
      <p className="font-hindi text-sm tracking-wide text-marigold-600 font-medium">झलकियाँ</p>
      <h2 className="font-display text-3xl text-maroon-700 mt-2">तस्वीरों की झलक</h2>
      <Divider className="my-5" />

      <div className="max-w-md mx-auto space-y-3">
        {featured && (
          <ImageWithFallback
            src={featured.image}
            alt={featured.altEn}
            icon="📷"
            className="w-full aspect-[16/9] rounded-2xl shadow-card overflow-hidden"
            imgClassName="w-full h-full object-cover"
          />
        )}

        <div className="grid grid-cols-2 gap-3">
          {rest.map((item, i) => (
            <ImageWithFallback
              key={item.image + i}
              src={item.image}
              alt={item.altEn}
              icon="📷"
              className="w-full aspect-[3/4] rounded-2xl shadow-card overflow-hidden"
              imgClassName="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

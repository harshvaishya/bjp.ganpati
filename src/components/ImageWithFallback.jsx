import { useState } from 'react';

/**
 * Renders /images/imageN.jpg but never breaks the page if the file
 * hasn't been added yet — falls back to a soft decorative placeholder
 * instead of a broken-image icon. Once you drop the real file into
 * public/images/, it will show automatically (see README.md).
 */
export default function ImageWithFallback({ src, alt, className = '', imgClassName = '', icon = '🕉️' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-marigold-100 to-marigold-200 text-maroon-500 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-3xl opacity-70" aria-hidden="true">
          {icon}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
    />
  );
}

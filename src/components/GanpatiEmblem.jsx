/**
 * A simple, original iconographic emblem of Ganesha — flat silhouette
 * style, similar to the kind of clip-art motif used on invitation
 * cards. Not a reproduction of any specific artwork/photo.
 */
export default function GanpatiEmblem({ className = '', tone = 'gold' }) {
  const fill = tone === 'gold' ? '#dcac41' : '#f8ecd2';
  const shade = tone === 'gold' ? '#a8721f' : '#e6c15c';

  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label="गणपति बप्पा">
      {/* crown */}
      <path d="M100 8 L118 34 L100 26 L82 34 Z" fill={shade} />
      <circle cx="100" cy="10" r="6" fill={shade} />

      {/* head */}
      <ellipse cx="100" cy="62" rx="34" ry="32" fill={fill} />

      {/* ears */}
      <ellipse cx="52" cy="70" rx="24" ry="30" fill={fill} />
      <ellipse cx="148" cy="70" rx="24" ry="30" fill={fill} />
      <ellipse cx="52" cy="70" rx="12" ry="17" fill={shade} opacity="0.5" />
      <ellipse cx="148" cy="70" rx="12" ry="17" fill={shade} opacity="0.5" />

      {/* trunk */}
      <path
        d="M92 82 C90 100, 108 108, 104 128 C101 142, 86 146, 84 158"
        stroke={shade}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* tusk */}
      <path d="M118 88 L128 100" stroke="#fff8ea" strokeWidth="6" strokeLinecap="round" />

      {/* eyes */}
      <circle cx="86" cy="58" r="4" fill={shade} />
      <circle cx="114" cy="58" r="4" fill={shade} />

      {/* body */}
      <path
        d="M56 128 C56 108, 144 108, 144 128 L150 176 C150 196, 130 208, 100 208 C70 208, 50 196, 50 176 Z"
        fill={fill}
      />

      {/* belly band */}
      <path d="M62 152 Q100 168 138 152" stroke={shade} strokeWidth="5" fill="none" opacity="0.6" />

      {/* seated base / lotus */}
      <path
        d="M40 208 Q100 226 160 208 L160 214 Q100 232 40 214 Z"
        fill={shade}
        opacity="0.8"
      />
    </svg>
  );
}

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'ganpati-music-preference';

/**
 * Safe background-music controller.
 *
 * Rules it follows (see README.md "Audio behaviour"):
 *  - Never attempts to autoplay with sound on page load (browsers block
 *    this anyway, and it would be confusing for guests opening from WhatsApp).
 *  - Music only starts after the visitor taps the music button (a real
 *    user gesture), so play() is always allowed by the browser.
 *  - If the tab/page is hidden (app backgrounded, phone locked, user
 *    switches tabs), music is paused immediately.
 *  - Music resumes automatically ONLY if the visitor had it playing
 *    right before the page was hidden, during the same visit — never
 *    "because they came back", and never on a fresh page load.
 *  - The on/off preference is remembered in localStorage purely so the
 *    button can show the right icon/label next time — it never triggers
 *    autoplay by itself.
 */
export function useBackgroundMusic(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const wasPlayingBeforeHide = useRef(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'none';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  useEffect(() => {
    function handleVisibilityChange() {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Page backgrounded / tab switched / phone locked: always pause,
        // and remember whether it was playing so we know whether to
        // resume later in *this same visit*.
        wasPlayingBeforeHide.current = !audio.paused;
        audio.pause();
        setIsPlaying(false);
      } else if (wasPlayingBeforeHide.current) {
        // Only resume if the visitor had intentionally started it before.
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false)); // fail silently, never force it
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setHasInteracted(true);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      wasPlayingBeforeHide.current = false;
      try {
        localStorage.setItem(STORAGE_KEY, 'off');
      } catch {
        /* localStorage unavailable — not essential, ignore */
      }
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          wasPlayingBeforeHide.current = true;
          try {
            localStorage.setItem(STORAGE_KEY, 'on');
          } catch {
            /* ignore */
          }
        })
        .catch(() => {
          // Autoplay/permission failure: fail gracefully, keep UI in "off" state.
          setIsPlaying(false);
        });
    }
  };

  return { isPlaying, toggle, hasInteracted };
}

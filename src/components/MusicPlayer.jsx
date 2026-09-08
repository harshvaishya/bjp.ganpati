import { useBackgroundMusic } from '../hooks/useBackgroundMusic';

export default function MusicPlayer() {
  const { isPlaying, toggle, hasInteracted } = useBackgroundMusic('/audio/background.mp3');

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {!hasInteracted && (
        <span className="font-hindi text-[11px] bg-white/90 text-maroon-700 px-3 py-1.5 rounded-full shadow-card animate-fadeUp">
          🎵 संगीत चलाएं
        </span>
      )}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'संगीत रोकें (Pause music)' : 'संगीत चलाएं (Play music)'}
        className="h-14 w-14 rounded-full bg-maroon-700 text-marigold-200 shadow-button flex items-center justify-center text-2xl active:scale-95 transition-transform"
      >
        <span aria-hidden="true">{isPlaying ? '🔊' : '🔈'}</span>
      </button>
    </div>
  );
}

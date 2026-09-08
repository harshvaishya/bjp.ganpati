export default function Divider({ className = '' }) {
  return (
    <div className={`motif-divider text-gold-500 ${className}`} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default function Divider({ className = '' }) {
  return (
    <div className={`motif-divider text-marigold-500 ${className}`} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

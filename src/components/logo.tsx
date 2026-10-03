// Simple geometric mark: a square with one corner clipped, read as a wing edge (kuro-ba).
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-6 shrink-0 text-accent"
      >
        <polygon points="0,0 24,0 24,13 11,24 0,24" fill="currentColor" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        Kuroba
      </span>
    </span>
  );
}

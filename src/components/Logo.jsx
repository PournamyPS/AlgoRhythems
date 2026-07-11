export default function Logo({ size = 40, showWordmark = true, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="18" fill="url(#rb-grad)" fillOpacity="0.15" />
        <rect x="0.5" y="0.5" width="63" height="63" rx="17.5" stroke="url(#rb-grad)" strokeOpacity="0.4" />
        <path d="M14 40 L14 24 L22 24 L22 40" stroke="#7c5cfc" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 46 L28 14 L36 14 L36 46" stroke="#22d3ee" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 38 L42 26 L50 26 L50 38" stroke="#9b8cff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="rb-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c5cfc" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark && (
        <span className="font-heading text-xl font-bold tracking-tight text-white">
          Rhythm<span className="text-violet-400">Bridge</span>
        </span>
      )}
    </div>
  );
}

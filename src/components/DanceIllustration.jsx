import { motion } from "framer-motion";

// Signature visual: a dancer's silhouette translating a soundwave into
// concentric visual pulses — the core metaphor of RhythmBridge.
export default function DanceIllustration() {
  const bars = [18, 34, 22, 46, 30, 52, 26, 40, 20, 32];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 420 460"
        className="h-full w-full max-w-md"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fig-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9b8cff" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="ripple-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c5cfc" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7c5cfc" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ambient pulse rings emanating from the dancer, standing in for sound-as-vibration */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="210"
            cy="230"
            r="60"
            fill="none"
            stroke="url(#fig-grad)"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            initial={{ r: 60, opacity: 0.5 }}
            animate={{ r: [60, 190], opacity: [0.5, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: i * 1.05,
              ease: "easeOut",
            }}
          />
        ))}

        {/* dancer silhouette — simplified, mid-motion pose */}
        <motion.g
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <path
            d="M210 96c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z"
            fill="url(#fig-grad)"
          />
          <path
            d="M210 138c-14 0-25 10-27 24l-10 64c-1 8 5 15 13 15 6 0 12-4 13-11l9-46 6 30-8 92c-1 9 6 17 15 17s16-7 17-16l7-70 14 62c2 9 11 15 20 12 8-2 13-11 11-20l-19-84c-3-13-9-24-19-31l-11-8c-9-6-19-10-31-10z"
            fill="url(#fig-grad)"
            opacity="0.92"
          />
        </motion.g>

        {/* soundwave bars bridging into the figure — the "rhythm bridge" */}
        <g transform="translate(30, 260)">
          {bars.map((h, idx) => (
            <motion.rect
              key={idx}
              x={idx * 15}
              width="7"
              rx="3.5"
              fill={idx % 3 === 0 ? "#22d3ee" : "#9b8cff"}
              initial={{ height: h, y: 60 - h }}
              animate={{ height: [h, h * 1.8, h], y: [60 - h, 60 - h * 1.8, 60 - h] }}
              transition={{
                duration: 1.1 + (idx % 4) * 0.15,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: idx * 0.08,
              }}
            />
          ))}
        </g>

        {/* accessible "eye" cue — visual rhythm, not sound-dependent */}
        <g transform="translate(300, 320)" opacity="0.9">
          <circle cx="0" cy="0" r="22" fill="none" stroke="#4fe0dd" strokeWidth="2" strokeOpacity="0.5" />
          <path
            d="M-14 0c4-8 10-13 14-13s10 5 14 13c-4 8-10 13-14 13s-10-5-14-13z"
            fill="none"
            stroke="#4fe0dd"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="4.5" fill="#4fe0dd" />
        </g>
      </svg>
    </div>
  );
}

import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, comingSoon, onClick, accent = "violet" }) {
  const interactive = !comingSoon;

  const accentClasses =
    accent === "cyan"
      ? "from-cyan-500/20 to-cyan-500/0 text-cyan-300"
      : "from-violet-500/20 to-violet-500/0 text-violet-300";

  return (
    <motion.div
      whileHover={interactive ? { y: -6 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      onClick={interactive ? onClick : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : -1}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick?.();
            }
          : undefined
      }
      aria-disabled={comingSoon || undefined}
      className={`glass group relative flex h-full flex-col justify-between overflow-hidden rounded-xl3 p-6 transition-shadow ${
        interactive
          ? "cursor-pointer hover:shadow-glow focus-visible:shadow-glow"
          : "opacity-90"
      }`}
    >
      {comingSoon && (
        <span className="badge-soon absolute right-5 top-5">Coming Soon</span>
      )}
      <div>
        <div
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClasses} ring-1 ring-inset ring-white/10`}
        >
          <Icon className="h-5.5 w-5.5" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>

      {interactive && (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-transform group-hover:translate-x-1">
          Open
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </motion.div>
  );
}

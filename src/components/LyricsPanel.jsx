import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lyricsTimed } from "../data/sampleData.js";

export default function LyricsPanel({ isPlaying, resetKey }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lineRefs = useRef([]);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [resetKey]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (!isPlaying) return;

    const advance = (i) => {
      const { duration } = lyricsTimed[i % lyricsTimed.length];
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % lyricsTimed.length);
      }, duration);
    };
    advance(activeIndex);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, activeIndex, resetKey]);

  useEffect(() => {
    const el = lineRefs.current[activeIndex];
    if (el && containerRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex]);

  return (
    <div className="glass flex h-full flex-col rounded-none border-l border-white/5 p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300/80">
        Lyrics
      </p>
      <div
        ref={containerRef}
        className="scrollbar-thin flex-1 space-y-4 overflow-y-auto pr-1"
      >
        {lyricsTimed.map((l, i) => {
          const active = i === activeIndex;
          return (
            <div key={i} ref={(el) => (lineRefs.current[i] = el)}>
              <AnimatePresence mode="wait">
                <motion.p
                  animate={{
                    opacity: active ? 1 : 0.35,
                    scale: active ? 1 : 0.97,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`font-heading leading-snug transition-colors ${
                    active
                      ? "text-xl font-semibold text-white sm:text-2xl"
                      : "text-base font-medium text-slate-500"
                  }`}
                  style={
                    active
                      ? {
                          background:
                            "linear-gradient(90deg, #c9bfff, #7dd8ee)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : undefined
                  }
                >
                  {l.line}
                </motion.p>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

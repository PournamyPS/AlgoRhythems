import { motion } from "framer-motion";

export default function BeatMarker({ color, duration, size = 40 }) {
  return (
    <motion.div
      initial={{ top: "-10%", opacity: 0 }}
      animate={{ top: "100%", opacity: 1 }}
      exit={{ scale: 1.7, opacity: 0, transition: { duration: 0.28, ease: "easeOut" } }}
      transition={{ duration, ease: [0.33, 0, 0.2, 1] }}
      className="absolute -translate-x-1/2"
      style={{ width: size }}
    >
      {/* motion-blur trail */}
      <div
        className="absolute left-1/2 top-[-64px] h-16 w-2.5 -translate-x-1/2 rounded-full opacity-50 blur-[6px]"
        style={{
          background: `linear-gradient(to bottom, transparent, ${color})`,
        }}
      />
      {/* core marker */}
      <div
        className="relative rounded-xl"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 35% 30%, ${color}ee, ${color}99)`,
          boxShadow: `0 0 4px 1px ${color}aa, 0 0 22px 4px ${color}66`,
        }}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function ImpactRipple({ color }) {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0.65 }}
      animate={{ scale: 2.4, opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="pointer-events-none absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        border: `2px solid ${color}`,
        boxShadow: `0 0 18px 2px ${color}88`,
      }}
    />
  );
}

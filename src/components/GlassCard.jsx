import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", tilt = true }) {
  return (
    <motion.div
      whileHover={tilt ? { rotateX: 3, rotateY: -4, y: -8 } : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`gradient-border glass-card ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

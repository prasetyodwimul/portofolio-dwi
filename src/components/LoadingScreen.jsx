import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[80] grid place-items-center bg-coal"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="mx-auto h-16 w-16 rounded-full border-2 border-stone-700 border-t-amber-300 shadow-glow"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-amber-200"
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}

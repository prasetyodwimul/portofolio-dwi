import { motion } from "framer-motion";

const accentMap = {
  amber: "from-amber-200 to-amber-500",
  emerald: "from-emerald-200 to-emerald-500"
};

export default function SkillBadge({ name, level, accent = "amber", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-stone-200/10 bg-stone-100/[0.04] p-4"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-semibold text-stone-100">{name}</span>
        <span className="text-xs text-stone-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-stone-900/70">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.15, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${accentMap[accent]} shadow-glow`}
        />
      </div>
    </motion.div>
  );
}

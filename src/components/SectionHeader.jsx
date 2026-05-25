import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mx-auto mb-12 max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p>
      <h1 className="font-heading text-4xl font-bold leading-tight text-stone-50 md:text-6xl">{title}</h1>
      {description && <p className="mt-5 text-base leading-8 text-stone-300 md:text-lg">{description}</p>}
    </motion.div>
  );
}

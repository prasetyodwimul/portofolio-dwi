import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 7 + (index % 6)
}));

export default function BackgroundScene() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      setParallax({
        x: (event.clientX / window.innerWidth - 0.5) * 24,
        y: (event.clientY / window.innerHeight - 0.5) * 24
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(246,169,59,0.11),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(52,211,153,0.07),transparent_30%),linear-gradient(135deg,#10100f_0%,#171313_38%,#21152a_68%,#12110f_100%)]" />
      <motion.div
        animate={{ x: parallax.x, y: parallax.y }}
        className="absolute -left-24 top-20 h-48 w-[34rem] -rotate-12 bg-gradient-to-r from-amber-300/[0.14] via-amber-200/[0.06] to-transparent blur-3xl animate-float"
      />
      <motion.div
        animate={{ x: -parallax.x, y: -parallax.y }}
        className="absolute right-[-12rem] top-48 h-56 w-[42rem] rotate-12 bg-gradient-to-r from-transparent via-emerald-300/[0.08] to-amber-200/[0.04] blur-3xl animate-float"
      />
      <motion.div
        animate={{ x: parallax.x * -0.6, y: parallax.y * 0.8 }}
        className="absolute bottom-[-8rem] left-1/3 h-64 w-[46rem] -rotate-6 bg-gradient-to-r from-stone-700/[0.18] via-amber-300/[0.05] to-emerald-300/[0.06] blur-3xl"
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-amber-200/50"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -28, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="noise-layer" />
    </div>
  );
}

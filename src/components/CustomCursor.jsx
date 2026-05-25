import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 rounded-full border border-amber-200/70 mix-blend-screen md:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 450, damping: 32, mass: 0.35 }}
    />
  );
}

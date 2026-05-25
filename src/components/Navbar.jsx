import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Keahlian", path: "/skills" },
  { label: "Proyek", path: "/projects" },
  { label: "Pengalaman", path: "/experience" },
  { label: "Prestasi", path: "/achievement" },
  { label: "Kontak", path: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive ? "bg-amber-300/[0.15] text-amber-200" : "text-stone-300 hover:bg-stone-100/[0.08] hover:text-stone-50"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 md:px-5 ${
          scrolled
            ? "border-stone-200/[0.15] bg-coal/70 shadow-glow backdrop-blur-2xl"
            : "border-stone-200/10 bg-stone-900/25 backdrop-blur-xl"
        }`}
      >
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 font-heading font-black text-coal">
            PD
          </span>
          <span className="hidden font-heading text-sm font-bold text-stone-100 sm:block">Prasetyo Dwi</span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-stone-200/10 bg-stone-100/[0.08] text-xl text-stone-100 lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-stone-200/10 bg-coal/90 p-3 shadow-glow backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

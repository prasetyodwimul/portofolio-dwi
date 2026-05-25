import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export default function Button({ children, to, href, variant = "primary", className = "", icon = true }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60";
  const styles =
    variant === "secondary"
      ? "border border-stone-300/[0.15] bg-stone-200/5 text-stone-100 hover:border-amber-300/40 hover:bg-amber-300/10"
      : "bg-gradient-to-r from-amber-200 to-amber-500 bg-[length:200%_200%] text-coal shadow-glow animate-gradient hover:scale-[1.03]";
  const content = (
    <>
      <span>{children}</span>
      {icon && <HiArrowRight className="text-lg transition group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href || "#"} className={`${base} ${styles} ${className}`}>
      {content}
    </a>
  );
}

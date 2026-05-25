import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projectFilters, projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.categories.includes(active))),
    [active]
  );

  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="Proyek"
          title="Portofolio proyek lintas platform"
          description="Kumpulan proyek web, mobile, backend, dan Unity yang menunjukkan kemampuan saya dalam merancang serta membangun solusi teknologi."
        />
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                active === filter
                  ? "border-amber-200/50 bg-amber-300/20 text-amber-100 shadow-glow"
                  : "border-stone-200/10 bg-stone-100/[0.04] text-stone-300 hover:border-amber-200/35"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <motion.div key={project.title} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}

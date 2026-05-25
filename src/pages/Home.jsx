import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaRocket } from "react-icons/fa";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

const roles = ["Web Developer", "Mobile Developer", "Backend Enthusiast", "Creative Technologist"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [profileImageReady, setProfileImageReady] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let cursor = 0;
    setText("");
    const typing = window.setInterval(() => {
      cursor += 1;
      setText(current.slice(0, cursor));
      if (cursor === current.length) {
        window.clearInterval(typing);
        window.setTimeout(() => setRoleIndex((value) => (value + 1) % roles.length), 1400);
      }
    }, 55);
    return () => window.clearInterval(typing);
  }, [roleIndex]);

  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex rounded-full border border-amber-200/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100"
            >
              Portfolio Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl font-black leading-[1.04] text-stone-50 md:text-7xl"
            >
              Halo, saya Prasetyo Dwi Mulyono
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl font-semibold text-stone-200 md:text-2xl"
            >
              Mahasiswa Teknologi Rekayasa Informatika Industri
              <span className="mt-3 block min-h-9 bg-gradient-to-r from-amber-100 to-amber-400 bg-clip-text font-heading text-3xl font-bold text-transparent md:text-4xl">
                {text}
                <span className="text-amber-200">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-300"
            >
              Saya berfokus pada pengembangan website, aplikasi mobile, backend, database, dan teknologi interaktif.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button to="/projects">Lihat Proyek</Button>
              <Button to="/contact" variant="secondary">
                Hubungi Saya
              </Button>
            </motion.div>
          </div>

          <GlassCard className="relative overflow-hidden p-6 md:p-8">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-amber-300/15 blur-2xl" />
            <div className="relative">
              <div className="mx-auto grid aspect-square max-w-sm place-items-center rounded-[2rem] border border-stone-200/10 bg-gradient-to-br from-stone-100/10 to-stone-100/[0.02]">
                {profileImageReady ? (
                  <img
                    src="/profil.jpg"
                    alt="Prasetyo Dwi Mulyono"
                    onError={() => setProfileImageReady(false)}
                    className="h-48 w-48 rounded-full border border-amber-200/30 object-cover shadow-glow md:h-56 md:w-56"
                  />
                ) : (
                  <div className="grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 text-center font-heading text-6xl font-black text-coal shadow-glow">
                    PD
                  </div>
                )}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Fokus", "Web & Mobile"],
                  ["Domisili", "Bandung"],
                  ["Pendekatan", "Project-Based Learning"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-stone-200/10 bg-coal/[0.35] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{label}</p>
                    <p className="mt-2 font-semibold text-stone-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [FaCode, "Web & Mobile", "Mengembangkan antarmuka yang responsif, terstruktur, dan nyaman digunakan."],
            [FaDatabase, "Backend & Data", "Merancang alur data, database, API, dan fitur CRUD dengan struktur yang mudah dikembangkan."],
            [FaRocket, "Interactive Tech", "Mengeksplorasi Unity, VR, dan teknologi interaktif untuk mendukung pengalaman digital."]
          ].map(([Icon, title, body], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <GlassCard className="h-full p-6">
                <Icon className="mb-5 text-3xl text-amber-200" />
                <h2 className="font-heading text-2xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-stone-300">{body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <SectionHeader
          eyebrow="Featured Work"
          title="Pilihan proyek terbaik"
          description="Beberapa karya yang merepresentasikan fokus saya pada web, mobile, backend, dan pengalaman interaktif."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Button to="/projects">Lihat Semua Proyek</Button>
          <Button to="/contact" variant="secondary">
            Diskusi Kolaborasi
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}

import { FaMedal, FaStar, FaTrophy } from "react-icons/fa";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function Achievement() {
  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="Prestasi"
          title="Prestasi dan pencapaian"
          description="Prestasi akademik dan pengalaman proyek menjadi bukti bahwa proses yang konsisten dapat menghasilkan capaian yang bermakna."
        />
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard className="relative overflow-hidden p-8 md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
              <FaTrophy className="relative text-6xl text-amber-200 drop-shadow" />
              <p className="relative mt-8 text-sm font-bold uppercase tracking-[0.28em] text-amber-200">
                National Winner
              </p>
              <h2 className="relative mt-3 font-heading text-4xl font-black leading-tight text-stone-50 md:text-6xl">
                Juara 1 Nasional Lomba Matematika saat SMA
              </h2>
              <p className="relative mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Capaian ini memperkuat kemampuan berpikir analitis, menyusun strategi, dan menyelesaikan masalah secara
                terukur.
              </p>
            </GlassCard>
          </Reveal>
          <div className="grid gap-5">
            {[
              [FaMedal, "Prestasi Akademik", "Terbiasa menghadapi tantangan logika dan pemecahan masalah."],
              [FaStar, "Pengembangan Proyek", "Menerjemahkan ide menjadi aplikasi web, mobile, backend, dan Unity."],
              [FaTrophy, "Orientasi Berkembang", "Menjadikan setiap proyek sebagai ruang belajar, evaluasi, dan peningkatan kualitas."]
            ].map(([Icon, title, body], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <GlassCard className="p-6" tilt={false}>
                  <div className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-300/[0.15] text-xl text-amber-200">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold">{title}</h3>
                      <p className="mt-2 leading-7 text-stone-300">{body}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

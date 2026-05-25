import { FaGraduationCap, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="About"
          title="Profil dan latar belakang"
          description="Saya mempelajari teknologi melalui pendekatan produk, logika sistem, dan pengalaman pengguna."
        />
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard className="p-7 md:p-9">
              <p className="text-lg leading-9 text-stone-300">
                Halo, saya Prasetyo Dwi Mulyono, mahasiswa Teknologi Rekayasa Informatika Industri di Politeknik
                Manufaktur Bandung. Saya memiliki minat pada pengembangan teknologi, khususnya web development, mobile
                app development, backend, database, dan Internet of Things. Saya terbiasa mempelajari hal baru,
                berkolaborasi dalam tim, serta mengembangkan solusi yang relevan dan bermanfaat.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [FaMapMarkerAlt, "Asal", "Bandung"],
                  [FaGraduationCap, "Pendidikan", "Politeknik Manufaktur Bandung"],
                  [FaUsers, "Nilai", "Kolaboratif dan konsisten"]
                ].map(([Icon, label, value]) => (
                  <div key={label} className="rounded-2xl bg-stone-100/[0.04] p-5">
                    <Icon className="mb-4 text-2xl text-amber-200" />
                    <p className="text-sm text-stone-400">{label}</p>
                    <p className="mt-2 font-semibold text-stone-100">{value}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-7 md:p-9">
              <h2 className="font-heading text-3xl font-bold">Profil Singkat</h2>
              <div className="mt-7 space-y-5">
                {[
                  ["Sekolah sebelumnya", "SMAS Kartika XIX-1 Bandung"],
                  ["Minat teknologi", "Web, mobile, backend, database, IoT, dan Unity"],
                  [
                    "Organisasi",
                    "Pramuka Ambalan Walangsungsang Rarasantang, Kelompok Ilmiah Remaja, dan HIMAMO"
                  ],
                  ["Prinsip belajar", "Konsisten, terbuka terhadap evaluasi, dan berorientasi pada pengembangan diri"]
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-stone-200/10 pb-5 last:border-none">
                    <p className="text-sm uppercase tracking-[0.18em] text-amber-200">{label}</p>
                    <p className="mt-2 leading-7 text-stone-300">{value}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

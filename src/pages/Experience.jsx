import { FaBullhorn, FaChalkboardTeacher, FaCodeBranch, FaFlask, FaPeopleCarry } from "react-icons/fa";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

const timeline = [
  {
    title: "Fondasi akademik dan kompetisi",
    meta: "SMAS Kartika XIX-1 Bandung",
    body: "Membangun kebiasaan belajar yang konsisten, aktif dalam kegiatan sekolah, serta mengasah kemampuan analisis dan pemecahan masalah.",
    icon: FaFlask
  },
  {
    title: "Organisasi dan kepemimpinan",
    meta: "Pramuka Ambalan Walangsungsang Rarasantang dan Kelompok Ilmiah Remaja",
    body: "Aktif dalam kegiatan organisasi sekolah yang melatih kedisiplinan, kerja sama tim, komunikasi, dan kemampuan menyusun kegiatan secara terarah.",
    icon: FaPeopleCarry
  },
  {
    title: "Hubungan Masyarakat HIMAMO",
    meta: "HIMAMO",
    body: "Berperan sebagai Humas dalam berbagai kegiatan, termasuk Foto Jurusan AE, Wisuda Malam, EXCPO, POMFEST, PMPO 26, serta AE Care AE Share. Pengalaman ini memperkuat kemampuan komunikasi, koordinasi, dan pengelolaan informasi kegiatan.",
    icon: FaBullhorn
  },
  {
    title: "Pengembangan proyek teknologi",
    meta: "Web, mobile, backend, dan Unity",
    body: "Mengembangkan sistem pemesanan makanan, sistem lelang, aplikasi mobile, aplikasi e-commerce makanan dan minuman, serta simulasi VR.",
    icon: FaCodeBranch
  },
  {
    title: "Presentasi dan kolaborasi",
    meta: "Kampus dan tim proyek",
    body: "Membiasakan diri mempresentasikan ide, mendemonstrasikan fitur, menerima evaluasi, dan mengembangkan solusi bersama tim.",
    icon: FaChalkboardTeacher
  }
];

export default function Experience() {
  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="Pengalaman"
          title="Pengalaman dan proses pengembangan"
          description="Pengalaman organisasi, proyek, dan presentasi membentuk cara kerja saya yang terstruktur, kolaboratif, dan berorientasi pada peningkatan berkelanjutan."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-300 via-stone-500 to-emerald-300 md:block" />
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="relative md:pl-14">
                    <div className="absolute left-0 top-7 hidden h-8 w-8 rounded-full border border-amber-200/50 bg-coal shadow-glow md:grid md:place-items-center">
                      <span className="h-2 w-2 rounded-full bg-amber-200" />
                    </div>
                    <GlassCard className="p-6 md:p-8" tilt={false}>
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-300/[0.15] text-2xl text-amber-200">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">{item.meta}</p>
                          <h2 className="mt-2 font-heading text-2xl font-bold text-stone-50">{item.title}</h2>
                          <p className="mt-3 leading-7 text-stone-300">{item.body}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

const contacts = [
  { label: "Email", value: "prasetyodwimul@gmail.com", icon: FaEnvelope, href: "mailto:prasetyodwimul@gmail.com" },
  {
    label: "GitHub",
    value: "github.com/prasetyodwimul",
    icon: FaGithub,
    href: "https://github.com/prasetyodwimul"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prasetyo-dwi-mulyono-6b05ba319",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prasetyo-dwi-mulyono-6b05ba319/"
  },
  {
    label: "Instagram",
    value: "@prasssssssss_",
    icon: FaInstagram,
    href: "https://www.instagram.com/prasssssssss_/"
  }
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="Kontak"
          title="Terbuka untuk diskusi dan kolaborasi"
          description="Silakan hubungi saya untuk kebutuhan kolaborasi, diskusi proyek, atau pertukaran ide seputar pengembangan teknologi."
        />
        <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <GlassCard className="p-6 md:p-8" tilt={false}>
              <form className="grid gap-5">
                {[
                  ["Nama", "text", "Nama lengkap"],
                  ["Email", "email", "email@domain.com"]
                ].map(([label, type, placeholder]) => (
                  <label key={label} className="grid gap-2">
                    <span className="text-sm font-semibold text-stone-300">{label}</span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="rounded-2xl border border-stone-200/10 bg-coal/[0.45] px-4 py-4 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/50"
                    />
                  </label>
                ))}
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-stone-300">Pesan</span>
                  <textarea
                    rows="6"
                    placeholder="Tuliskan pesan atau kebutuhan proyek..."
                    className="resize-none rounded-2xl border border-stone-200/10 bg-coal/[0.45] px-4 py-4 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/50"
                  />
                </label>
                <Button href="mailto:prasetyodwimul@gmail.com" className="w-full sm:w-fit">
                  Kirim Pesan
                </Button>
              </form>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-6 md:p-8">
              <h2 className="font-heading text-3xl font-bold">Informasi Kontak</h2>
              <p className="mt-4 leading-7 text-stone-300">
                Email dapat digunakan sebagai kanal utama untuk menghubungi saya. Informasi media sosial dapat
                disesuaikan dengan akun resmi yang digunakan.
              </p>
              <div className="mt-7 grid gap-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="group flex items-center gap-4 rounded-2xl border border-stone-200/10 bg-stone-100/[0.04] p-4 transition hover:border-amber-200/40 hover:bg-amber-300/10"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300/[0.15] text-xl text-amber-200 transition group-hover:scale-110">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-sm text-stone-400">{contact.label}</span>
                        <span className="block break-all font-semibold text-stone-100">{contact.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

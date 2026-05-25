import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import SkillBadge from "../components/SkillBadge";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <PageTransition>
      <section className="container-shell min-h-screen pt-36">
        <SectionHeader
          eyebrow="Keahlian"
          title="Kompetensi teknis"
          description="Keterampilan pada antarmuka, backend, mobile, dan teknologi interaktif yang dikembangkan melalui latihan terstruktur dan proyek nyata."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <GlassCard key={group.category} className="p-6 md:p-8" tilt={false}>
              <h2 className="font-heading text-3xl font-bold text-stone-50">{group.category}</h2>
              <div className="mt-6 grid gap-4">
                {group.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accent={group.accent}
                    delay={groupIndex * 0.08 + index * 0.04}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

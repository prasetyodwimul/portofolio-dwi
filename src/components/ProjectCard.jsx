import GlassCard from "./GlassCard";
import Button from "./Button";

export default function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <GlassCard className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className={`rounded-2xl bg-gradient-to-br ${project.glow} p-4 text-2xl text-coal shadow-glow`}>
          <Icon />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {project.categories.map((category) => (
            <span key={category} className="rounded-full border border-stone-200/10 px-3 py-1 text-xs text-stone-300">
              {category}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-heading text-2xl font-bold text-stone-50">{project.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-stone-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full bg-stone-100/[0.08] px-3 py-1 text-xs font-medium text-amber-100">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="#" className="min-h-10 px-4 py-2" icon={false}>
          Demo
        </Button>
        <Button href="#" variant="secondary" className="min-h-10 px-4 py-2" icon={false}>
          GitHub
        </Button>
      </div>
    </GlassCard>
  );
}

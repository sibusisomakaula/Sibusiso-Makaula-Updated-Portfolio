import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The languages, frameworks, and practices I use to build reliable full-stack applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

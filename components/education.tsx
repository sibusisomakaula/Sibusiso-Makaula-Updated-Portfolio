import { GraduationCap, Languages } from "lucide-react"
import { academicProjects, education, languages } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Background"
          title="Education & academic work"
          description="Formal qualification and the team-based academic projects that shaped my full-stack foundation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-1">
            {education.map((item) => (
              <div key={item.qualification} className="rounded-2xl border border-border bg-card/50 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{item.qualification}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <p className="mt-3 font-mono text-xs text-primary">{item.period}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Languages className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-tight">Languages</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ol className="relative space-y-6 border-l border-border pl-6">
              {academicProjects.map((project) => (
                <li key={project.name} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <div className="rounded-2xl border border-border bg-card/50 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold leading-tight">{project.name}</h3>
                      <span className="font-mono text-xs text-primary">{project.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{project.org}</p>
                    <ul className="mt-4 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

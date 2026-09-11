import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Things I built"
          title="Featured projects"
          description="Real applications shipped with live demos — spanning AI-powered analytics, content generation, and practical tools built with collaborative teams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{project.role}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    aria-label={`${project.name} source code on GitHub`}
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                    aria-label={`${project.name} live demo`}
                  >
                    Live demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>

              <div className="mt-4 rounded-xl border border-border/70 bg-secondary/40 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">My role</p>
                <p className="text-sm leading-relaxed text-foreground/90">{project.contributions}</p>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

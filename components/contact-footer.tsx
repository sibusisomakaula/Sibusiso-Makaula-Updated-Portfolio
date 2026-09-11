import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

export function ContactFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Get in touch</p>
          <h2 className="mt-2 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
            I&apos;m actively looking for junior developer opportunities where I can contribute, learn, and grow.
            Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Phone className="h-4 w-4 text-primary" />
              {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4 text-primary" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

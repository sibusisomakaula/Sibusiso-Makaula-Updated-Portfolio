import { Award, ExternalLink } from "lucide-react"
import { certificates } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Verified programmes completed in artificial intelligence and applied AI skills."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert) => (
            <article
              key={cert.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/40"
            >
              {/* Certificate image — replace the placeholder file in /public/certificates with the real scan */}
              <div className="relative aspect-[1.55/1] w-full overflow-hidden border-b border-border bg-secondary/40">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.name} certificate`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground backdrop-blur">
                  Placeholder — add your certificate
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-tight">{cert.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  Verify
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Award, ExternalLink, Eye } from "lucide-react"
import type { Certificate } from "@/lib/portfolio-data"
import { featuredCertificate, bootcamp } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

function isExternal(url: string) {
  return url.startsWith("http")
}

function CredentialLink({ url, label }: { url: string; label: string }) {
  const external = isExternal(url)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {external ? "Verify" : label}
      {external ? <ExternalLink className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
    </a>
  )
}

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/40">
      <div className="relative aspect-[1.4/1] w-full overflow-hidden border-b border-border bg-secondary/40">
        <img
          src={cert.image || "/placeholder.svg"}
          alt={`${cert.name} certificate`}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="font-display text-sm font-semibold leading-snug text-balance">{cert.name}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
        </div>
        <CredentialLink url={cert.credentialUrl} label="View" />
      </div>
    </article>
  )
}

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Verified programmes completed in artificial intelligence and applied AI skills."
        />

        {/* Featured specialization */}
        <article className="group grid overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/40 md:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[1.4/1] w-full overflow-hidden border-b border-border bg-secondary/40 md:border-b-0 md:border-r">
            <img
              src={featuredCertificate.image || "/placeholder.svg"}
              alt={`${featuredCertificate.name} certificate`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold leading-tight text-balance">
                {featuredCertificate.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{featuredCertificate.issuer}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A five-course specialization covering practical AI foundations, productivity with AI tools, prompt
              design, and responsible AI use.
            </p>
            <CredentialLink url={featuredCertificate.credentialUrl} label="View certificate" />
          </div>
        </article>

        {/* Bootcamp programme */}
        <div className="mt-14">
          <div className="mb-6 flex flex-col gap-2">
            <h3 className="font-display text-lg font-semibold text-balance">{bootcamp.name}</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{bootcamp.description}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {bootcamp.courses.length} course certificates · {bootcamp.issuer}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bootcamp.courses.map((cert) => (
              <CertificateCard key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

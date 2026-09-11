type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-pretty text-muted-foreground">{description}</p> : null}
    </div>
  )
}

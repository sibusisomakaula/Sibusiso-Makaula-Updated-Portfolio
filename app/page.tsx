import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Education } from "@/components/education"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
      </main>
      <ContactFooter />
    </div>
  )
}

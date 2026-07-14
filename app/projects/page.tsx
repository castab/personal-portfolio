import { ProjectCard } from '@/components/ProjectCard'
import { ProjectListItem } from '@/components/ProjectListItem'
import { Container, PageIntro } from '@/components/ui'
import { earlierProjects, featuredProjects } from '@/lib/projects'

export const metadata = {
  title: 'Projects | Brayan Castaneda'
}

export default function ProjectsPage() {
  return (
    <main className="py-10">
      <Container>
        <PageIntro eyebrow="notable work" title="Project notes, experiments, and engineering background." summary="A collection of software, embedded systems, and hardware projects that shaped how I think about practical engineering work." maxWidth="max-w-none" />

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">Current works</h2>
          <p className="mt-3 text-slate-400">What I&apos;ve been building lately, from public templates to full-stack apps to problems I ran into around the house.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">Earlier works</h2>
          <p className="mt-3 text-slate-400">Past projects that have rotated out of the spotlight, kept here as the engineering background that still shapes how I work.</p>
          <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
            {earlierProjects.map((project) => (
              <ProjectListItem key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}

import { ExternalLinkButton, InlineLink, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Self-Hosted PostgreSQL 18 for Railway | Brayan Castaneda'
}

export default function PostgresRailwayTemplatesPage() {
  return (
    <ProjectShell>
      <ProjectHero
        eyebrow="public work"
        title="Self-Hosted PostgreSQL 18 for Railway"
        summary="A production-ready, SSL-enabled Postgres 18 deployment template published to Railway's marketplace during the window when no official option existed."
        image="/images/postgres-railway.svg"
        imageAlt="Abstract illustration of a primary database replicating to smaller nodes"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLinkButton href="https://github.com/castab/postgres-18-ssl">Source on GitHub</ExternalLinkButton>
        <ExternalLinkButton href="https://railway.com/deploy/postgresql-18-1">Deploy on Railway</ExternalLinkButton>
      </div>

      <section className="mt-16 space-y-8">
        <TextBlock title="Filling a gap">
          <p>
            When PostgreSQL 18 shipped, Railway didn&apos;t yet offer a self-hosted template for it, and the community templates that existed were showing low deployment success rates. Rather than wait, I built and published a template that worked reliably on the first deploy, so anyone on the platform could run Postgres 18 with one click.
          </p>
        </TextBlock>

        <TextBlock title="Standing on the official template">
          <p>
            I didn&apos;t set out to invent anything new here. The template is closely modeled on Railway&apos;s own official Postgres image, and the real work was in making Postgres 18 correct on the platform: SSL enabled out of the box, and handling the version&apos;s breaking change to the data directory layout, which moved from <code>/var/lib/postgresql/data</code> to <code>/var/lib/postgresql/18/docker</code>.
          </p>
          <p>
            That data directory change is subtle but destructive: you can&apos;t upgrade an existing database just by bumping the image tag and restarting. The README documents this loudly, with backup and migration guidance, so nobody loses data to an innocent-looking version bump.
          </p>
        </TextBlock>

        <TextBlock title="Adoption">
          <p>
            The template found real users. Enough other Railway customers have deployed it that the marketplace kickbacks from those deployments have fully covered my own Railway usage since launch, and by my math, will keep covering it for the foreseeable future. For a small piece of public infrastructure packaging, that&apos;s a satisfying feedback loop: build the thing you needed, and it pays for the platform you built it on.
          </p>
        </TextBlock>

        <TextBlock title="A Citus cluster follow-up">
          <p>
            With the Postgres 18 template working, I applied the same approach to distributed Postgres: a <InlineLink href="https://github.com/castab/citus-postgres-17-ssl">Citus cluster template</InlineLink> that deploys one coordinator and two worker nodes (scalable to twenty) communicating over Railway&apos;s private network, running Postgres 17 with Citus 13.2. Workers discover and register themselves with the coordinator automatically, so a horizontally scalable cluster comes up without manual wiring. It&apos;s a much more niche need and far less popular, but it&apos;s <InlineLink href="https://railway.com/deploy/citus-postgres-17-cluster">deployable with the same single click</InlineLink>.
          </p>
        </TextBlock>

        <TextBlock title="Built to be superseded">
          <p>
            Railway now ships a native Postgres 18 offering, which is the right outcome. The template existed to cover a gap, not to compete with the platform. I expect its usage to taper off, and eventually the repository will be archived. It did its job during the window it was needed, and that was the point.
          </p>
        </TextBlock>
      </section>
    </ProjectShell>
  )
}

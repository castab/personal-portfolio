import { ExternalLinkButton, InlineLink, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Workout Tracker PWA | Brayan Castaneda'
}

export default function WorkoutTrackerPage() {
  return (
    <ProjectShell>
      <ProjectHero
        eyebrow="full-stack web app"
        title="Workout Tracker PWA"
        summary="An installable, offline-capable workout logger built to replace the pencil and notepad I kept carrying around the gym, deployed with proper development and production environments."
        image="/images/workout-tracker.svg"
        imageAlt="Abstract illustration of a phone showing workout sets and a rising progress line, next to a dumbbell"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLinkButton href="https://github.com/castab/workout-tracker">Source on GitHub</ExternalLinkButton>
        <ExternalLinkButton href="https://workout.supernettech.app">Production</ExternalLinkButton>
        <ExternalLinkButton href="https://dev.workout.supernettech.app">Development</ExternalLinkButton>
      </div>

      <section className="mt-16 space-y-8">
        <TextBlock title="Retiring the gym notepad">
          <p>
            For a long time, my workout tracking system was a pencil and a notepad that I had to remember to carry around the gym. This app replaced it with something that lives on my phone: quick workout creation, an active workout screen for logging exercises and sets, and the nice-to-haves paper never gave me, like recalling my previous starting weight for an exercise and browsing past workouts.
          </p>
          <p>
            Because it gets used mid-workout, the design is mobile-first with fast data entry, large tap targets, and low-friction editing. Exercises support flexible metrics, so reps, weight, time, distance, and laps all fit the same logging flow.
          </p>
        </TextBlock>

        <TextBlock title="Real environments, like real software">
          <p>
            The app runs on Vercel with a Supabase-hosted Postgres database behind a Prisma ORM, built on the Next.js App Router with TypeScript and Tailwind. Unlike a typical side project, it has separate development and production deployments: changes land at <InlineLink href="https://dev.workout.supernettech.app">dev.workout.supernettech.app</InlineLink> first, and only promote to production at <InlineLink href="https://workout.supernettech.app">workout.supernettech.app</InlineLink> once they have proven out.
          </p>
          <p>
            It&apos;s a single-user app today, so visiting either environment lands on a login screen. The development environment additionally sits behind Vercel&apos;s deployment protection.
          </p>
        </TextBlock>

        <TextBlock title="An app without the app store">
          <p>
            It&apos;s implemented as a progressive web app, a sort of makeshift native app: in Chrome or Firefox it&apos;s installable to the home screen, and a service worker with network-first caching keeps it usable for a period even with no internet connection. Logged sets queue up in IndexedDB and sync when a connection returns, which matters in a gym that is effectively a cellular dead zone.
          </p>
        </TextBlock>

        <TextBlock title="What's next">
          <p>
            The plan is basic metrics on top of the data it already collects: plotting weight and endurance progression over time, like watching lat pulldown set weights climb alongside max reps.
          </p>
          <p>
            The single-user model is also on its way out. The next iteration adds multiple users through an admin-initiated invite system, rather than open self-signup, so the app can grow past just me without giving up the control a password-protected notebook replacement started with.
          </p>
        </TextBlock>
      </section>
    </ProjectShell>
  )
}

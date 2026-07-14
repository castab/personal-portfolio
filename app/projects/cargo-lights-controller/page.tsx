import { ExternalLinkButton, ProjectHero, ProjectShell, TextBlock } from '@/components/ProjectPage'

export const metadata = {
  title: 'Factory-Style Cargo Bed Lights | Brayan Castaneda'
}

export default function CargoLightsControllerPage() {
  return (
    <ProjectShell>
      <ProjectHero
        eyebrow="automotive electronics"
        title="Factory-Style Cargo Bed Lights"
        summary="A small ATtiny85 controller that retrofits cargo bed lighting onto a truck that never shipped with it, built to match the factory look and feel as closely as possible."
        image="/images/cargo-lights.svg"
        imageAlt="Abstract illustration of a pickup truck with a cargo lamp lighting the bed and a small microcontroller chip"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLinkButton href="https://github.com/castab/cargo-lights-controller">Source on GitHub</ExternalLinkButton>
      </div>

      <section className="mt-16 space-y-8">
        <TextBlock title="Why it exists">
          <p>
            My truck didn&apos;t come with the factory cargo bed lights. Not just the lamps: the button, the wiring harness, and even the ports and logic to control the lights were all missing, so adding the factory hardware alone wouldn&apos;t have brought the feature to life. If I wanted cargo lighting that looked and behaved like it came from the factory, I had to build the brains myself.
          </p>
        </TextBlock>

        <TextBlock title="The controller the truck never had">
          <p>
            The replacement brain is an ATtiny85 running a small Arduino sketch. A momentary push button, debounced in software, toggles the bed lights through a logic-level MOSFET that switches the 12V LED strips, and a status LED mirrors the light state so you can tell at a glance whether the bed is lit.
          </p>
          <p>
            The details are what sell the factory feel. Instead of snapping on and off, the lights fade smoothly over a quarter second, and a ten-minute auto-timeout shuts them down if they&apos;re left on, so a forgotten button press can&apos;t drain the battery overnight.
          </p>
        </TextBlock>

        <TextBlock title="Living in a truck bed">
          <p>
            The install has to survive the real world: the controller lives in a weatherproofed enclosure, draws from a fused 12V accessory connection, and grounds to the chassis. The goal from the start was, as the README puts it, factory-quality cargo lighting control without factory pricing, but with factory-like (or better) function.
          </p>
        </TextBlock>
      </section>
    </ProjectShell>
  )
}

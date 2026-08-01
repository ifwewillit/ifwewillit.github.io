import { Section } from "../../components/Section";

const dishes = [
  {
    image: "/images/springs-first-breath.jpg",
    alt: "Spring's First Breath - charred leek ash gnocchi with sweet pea purée",
    title: "Spring's First Breath",
    body: "Charred leek ash gnocchi, sweet pea purée, black garlic gel, micro radish, lemon air. A whisper of spring. Vibrant, airy, and soulful.",
  },
  {
    image: "/images/mi-tierra.jpg",
    alt: "Mi Tierra - duck leg confit with Mole Colorado",
    title: "Mi Tierra",
    body: "Duck leg confit, Mole Colorado, blue corn grit cake, pickled red onion, pepita dust. A soulful bridge between Mexican tradition and the American Southwest.",
  },
  {
    image: "/images/fire-and-foie.jpg",
    alt: "Fire & Foie - foie gras ice cream with financier",
    title: "Fire & Foie",
    body: "Foie gras ice cream, warm financier, burnt honey gastrique, charred grapes, crispy chicken skin. A study in contrast. Heat meets chill, sweet meets savor.",
  },
];

export function Kitchen() {
  return (
    <>
      <header className="page-header">
        <div className="container-narrow">
          <h1>This Is Me</h1>
          <p className="lede">I'm Will.</p>
        </div>
      </header>

      <Section width="narrow">
        <div className="prose">
          <p>
            I grew up outside. Hiking, mountaineering, long days where preparation mattered and
            shortcuts showed up fast. Being in the outdoors teaches you early that some things are
            non-negotiable. You plan, you respect conditions, and you don't fake competence.
          </p>
          <p>That mindset stuck.</p>
          <p>
            I'm drawn to things done properly. Craft over convenience. Fewer decisions, made well.
            If something is worth doing, it's worth doing right. Otherwise, don't do it at all.
          </p>
          <p>
            I have a deep appreciation for the finer things in life, not as status symbols, but as
            proof of care. Well-made tools. Thoughtful design. Food, architecture, systems,
            experiences that show intention. Quality is visible when you know what to look for.
          </p>
          <p>
            I care about clarity. About removing noise until only what matters remains. I don't
            chase trends. I refine fundamentals. Whether I'm building something, cooking,
            traveling, or solving a problem, the goal is the same: make it durable,
            understandable, and honest.
          </p>
          <p>
            The outdoors still grounds me. Mountains, water, quiet spaces where scale resets
            perspective. They remind you that you are small, time is long, and most things aren't
            worth rushing.
          </p>
          <p>
            I cook because it's one of many places these principles show up. Not because it
            defines me, but because it rewards discipline and attention. The same standards apply
            everywhere else.
          </p>
          <p>
            This site is where my personal interests live. Ideas, projects, observations. No
            branding. No performance. Just the things I care about and the standards I try to live
            by.
          </p>
        </div>
      </Section>

      <Section title="How I Move Through the World" width="narrow">
        <div className="case-section" style={{ paddingTop: 0 }}>
          <h3>Principles I Default To</h3>
          <ul>
            <li>Do it right or don't do it</li>
            <li>Preparation beats intensity</li>
            <li>Quality reveals itself over time</li>
            <li>Simplicity is earned, not assumed</li>
            <li>Respect systems that don't care about your ego</li>
          </ul>
        </div>
        <div className="case-section" style={{ paddingTop: 0 }}>
          <h3>What I'm Drawn To</h3>
          <ul>
            <li>Mountains and big landscapes</li>
            <li>Well-designed tools and spaces</li>
            <li>Thoughtful food and shared meals</li>
            <li>Clear thinking and clean execution</li>
            <li>Experiences that feel intentional</li>
          </ul>
        </div>
        <div className="case-section" style={{ paddingTop: 0 }}>
          <h3>What I Avoid</h3>
          <ul>
            <li>Performative effort</li>
            <li>Overcomplication</li>
            <li>Shortcuts that create debt</li>
            <li>Noise disguised as innovation</li>
          </ul>
        </div>
      </Section>

      <Section title="A Few True Things" width="narrow">
        <div className="prose">
          <p>I trust people who prepare.</p>
          <p>I'd rather do fewer things exceptionally well than many things halfway.</p>
          <p>I believe most mistakes happen upstream.</p>
          <p>I notice craftsmanship quickly.</p>
          <p>I value calm competence.</p>
        </div>
      </Section>

      <Section
        title="In the Kitchen"
        intro="2025 FavChef Semifinalist. Modern American chef with desert bones."
      >
        <div className="prose" style={{ marginBottom: "var(--space-8)" }}>
          <p>
            I paid for college working as a chef. The discipline transferred: build systems that
            don't depend on heroics. Document everything. Remove what doesn't earn its place.
          </p>
          <p>
            I cook from the Sonoran desert tradition I grew up with, filtered through years of
            professional technique. Chiles, citrus, smoke. Clean flavors, honest ingredients,
            nothing on the plate that doesn't belong there.
          </p>
        </div>
        <div className="grid-3">
          {dishes.map((dish) => (
            <div className="card" key={dish.title} style={{ padding: 0, overflow: "hidden" }}>
              <picture>
                <source srcSet={dish.image.replace(/\.jpg$/, ".webp")} type="image/webp" />
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  style={{ aspectRatio: "4 / 3", objectFit: "cover", width: "100%" }}
                />
              </picture>
              <div style={{ padding: "var(--space-6)" }}>
                <h3 style={{ marginBottom: "var(--space-2)" }}>{dish.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
                  {dish.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

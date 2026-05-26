import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { seedData } from "@/lib/seed-data";

export function VibeSection() {
  return (
    <section id="vibe" className="py-16 sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            {seedData.vibe.eyebrow}
          </p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
            {seedData.vibe.heading}
          </h2>
        </Reveal>
        <Reveal className="space-y-5" delay={0.08}>
          {seedData.vibe.copy.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-lg leading-8 text-[#6f5a48]">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>

      <div className="section-shell mt-10 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        {seedData.vibe.images.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.08}>
            <ImageSlot
              image={image}
              className={index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
              sizes={index === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

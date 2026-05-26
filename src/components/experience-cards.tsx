import { Coffee, Leaf, Sprout, UtensilsCrossed } from "lucide-react";

import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { seedData } from "@/lib/seed-data";

const icons = {
  utensils: UtensilsCrossed,
  coffee: Coffee,
  leaf: Leaf,
  sprout: Sprout,
};

export function ExperienceCards() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="experience-heading">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            What to expect
          </p>
          <h2 id="experience-heading" className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
            Brunch energy, coffee comfort, and a little garden quiet.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seedData.experiences.map((experience, index) => {
            const Icon = icons[experience.icon as keyof typeof icons];

            return (
              <Reveal as="article" key={experience.title} delay={index * 0.06}>
                <Card className="h-full overflow-hidden">
                  <ImageSlot
                    image={experience.image}
                    className="aspect-[4/3] rounded-b-none"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <CardContent>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d9e6cf] text-[#466842]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2d2119]">{experience.title}</h3>
                    <p className="mt-3 text-pretty text-sm leading-6 text-[#6f5a48]">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

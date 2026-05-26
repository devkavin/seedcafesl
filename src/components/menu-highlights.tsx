import { Camera, Utensils } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { seedData } from "@/lib/seed-data";

export function MenuHighlights() {
  return (
    <section id="menu" className="bg-[#fffaf0] py-16 sm:py-20" aria-labelledby="menu-heading">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
              {seedData.menu.eyebrow}
            </p>
            <h2 id="menu-heading" className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
              {seedData.menu.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-lg leading-8 text-[#6f5a48]">
              From folded egg croissants and smoothie bowls to Vietnamese iced coffee and sweet treats, Seed keeps the menu bright, comforting and easy to come back to.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {seedData.menu.categories.map((category, index) => (
            <Reveal as="article" key={category.title} delay={index * 0.06}>
              <Card className="h-full bg-[#fbf6ea]/86">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#2d2119]">{category.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#6f5a48]">{category.summary}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9e6cf] text-[#466842]">
                      <Utensils className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <ul className="grid gap-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#3a271c]">
                        <span className="h-2 w-2 rounded-full bg-[#b87949]" aria-hidden="true" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col gap-4 rounded-lg border border-[#d8c7b1] bg-white/64 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-sm font-semibold leading-6 text-[#5b493a]">
            {seedData.menu.note}
          </p>
          <a
            href={seedData.links.instagram}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            <Camera className="h-4 w-4" aria-hidden="true" />
            Follow Seed
          </a>
        </Reveal>
      </div>
    </section>
  );
}

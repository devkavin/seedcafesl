import { Heart, MessageCircle, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { seedData } from "@/lib/seed-data";

const icons = [Heart, MessageCircle, Sparkles];

export function SocialProof() {
  return (
    <section className="bg-[#d9e6cf]/42 py-16 sm:py-20" aria-labelledby="social-heading">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            {seedData.socialProof.eyebrow}
          </p>
          <h2 id="social-heading" className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
            {seedData.socialProof.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {seedData.socialProof.cards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Reveal as="article" key={card} delay={index * 0.06}>
                <Card className="h-full bg-white/72">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fffaf0] text-[#b87949]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-pretty text-xl font-bold leading-8 text-[#2d2119]">
                      {card}
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

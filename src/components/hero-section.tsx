import { ArrowDown, Camera } from "lucide-react";

import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { seedData } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [primaryAction, secondaryAction] = seedData.hero.actions;

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-8 sm:pt-12 lg:pb-20">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            {seedData.hero.eyebrow}
          </p>
          <h1 className="text-balance max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-[#2d2119] sm:text-6xl lg:text-7xl">
            {seedData.hero.headline}
          </h1>
          <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-[#6f5a48] sm:text-xl">
            {seedData.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={primaryAction.href} className={buttonVariants({ variant: "primary", size: "lg" })}>
              {primaryAction.label}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={secondaryAction.href}
              target={secondaryAction.external ? "_blank" : undefined}
              rel={secondaryAction.external ? "noreferrer" : undefined}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <Camera className="h-4 w-4" aria-hidden="true" />
              {secondaryAction.label}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {seedData.hero.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#e6d8c5] bg-white/58 px-4 py-2 text-sm font-semibold text-[#5b493a]"
              >
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.12}>
          <div className="relative">
            <ImageSlot
              image={seedData.hero.image}
              priority
              className="seed-shadow aspect-[5/4] border border-white/80"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
            <div className="absolute -bottom-4 left-4 right-4 grid gap-2 rounded-lg border border-[#e6d8c5] bg-white/88 p-4 shadow-[0_18px_42px_rgba(58,39,28,0.14)] backdrop-blur sm:left-auto sm:w-72">
              <p className="text-xs font-bold tracking-[0.18em] text-[#466842] uppercase">
                Today at Seed
              </p>
              <p className="text-pretty text-sm leading-6 text-[#5b493a]">
                Brunch plates, coffee, smoothie bowls and leafy Horton Place calm.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section-shell mt-12 border-t border-[#e6d8c5] pt-6">
        <div className="grid gap-3 text-sm font-semibold text-[#6f5a48] sm:grid-cols-3">
          {[
            seedData.business.hoursShort,
            seedData.business.address,
            seedData.business.tagline,
          ].map((detail) => (
            <p key={detail} className={cn("text-pretty", detail === seedData.business.address && "sm:text-center")}>
              {detail}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

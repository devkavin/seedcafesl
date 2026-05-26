import { Camera, Clock, MapPin, Phone, Share2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { seedData } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

const actionIcons = [MapPin, Camera, Share2, Phone];

export function VisitSection() {
  return (
    <section id="visit" className="py-16 sm:py-20" aria-labelledby="visit-heading">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            {seedData.visit.eyebrow}
          </p>
          <h2 id="visit-heading" className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
            {seedData.visit.heading}
          </h2>
          <p className="text-pretty mt-5 text-lg leading-8 text-[#6f5a48]">
            {seedData.visit.copy}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="overflow-hidden bg-[#fffaf0]">
            <CardContent className="grid gap-6 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white/66 p-5">
                  <MapPin className="mb-4 h-6 w-6 text-[#466842]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#2d2119]">Address</h3>
                  <p className="mt-2 text-pretty leading-7 text-[#6f5a48]">
                    {seedData.business.address}
                  </p>
                </div>
                <div className="rounded-lg bg-white/66 p-5">
                  <Clock className="mb-4 h-6 w-6 text-[#466842]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#2d2119]">Opening hours</h3>
                  <p className="mt-2 text-pretty leading-7 text-[#6f5a48]">
                    {seedData.business.hours}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {seedData.visit.actions.map((action, index) => {
                  const Icon = actionIcons[index];
                  const enabled = Boolean(action.href);
                  const className = cn(
                    buttonVariants({ variant: index === 0 ? "primary" : "secondary" }),
                    "w-full",
                    !enabled && "cursor-not-allowed opacity-60",
                  );

                  return enabled ? (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className={className}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {action.label}
                    </a>
                  ) : (
                    <span
                      key={action.label}
                      className={className}
                      aria-disabled="true"
                      title={action.disabledReason}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {action.label}
                    </span>
                  );
                })}
              </div>

              <div className="rounded-lg border border-[#e6d8c5] bg-white/56 p-5">
                <p className="text-sm font-bold tracking-[0.14em] text-[#466842] uppercase">
                  Phone
                </p>
                <p className="mt-2 text-lg font-semibold text-[#3a271c]">
                  {seedData.business.phoneDisplay}
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Camera, Share2 } from "lucide-react";

import { seedData } from "@/lib/seed-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6d8c5] bg-[#3a271c] py-10 text-[#fffaf0]">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
        <div>
          <a href="#home" className="flex items-center gap-3" aria-label="Seed Cafe home">
            <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
              <Image
                src={seedData.business.logo}
                alt="Seed Cafe logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-base font-bold tracking-[0.12em] uppercase">
                {seedData.business.name}
              </span>
              <span className="text-sm text-[#eadcc6]">{seedData.business.tagline}</span>
            </span>
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-[#d9e6cf] uppercase">
            Visit
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#eadcc6]">
            {seedData.business.address}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#eadcc6]">
            {seedData.business.hours}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-[#d9e6cf] uppercase">
            Social
          </h2>
          <div className="mt-3 flex gap-3">
            <a
              href={seedData.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
              aria-label="Seed Cafe on Instagram"
            >
              <Camera className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={seedData.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
              aria-label="Seed Cafe on Facebook"
            >
              <Share2 className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { seedData } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6d8c5]/80 bg-[#fbf6ea]/86 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Seed Cafe home">
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm">
            <Image
              src={seedData.business.logo}
              alt="Seed Cafe logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            <span className="block text-base font-bold tracking-[0.12em] text-[#3a271c] uppercase">
              {seedData.business.name}
            </span>
            <span className="hidden text-xs font-medium text-[#6f5a48] sm:block">
              {seedData.business.shortAddress}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[#e6d8c5] bg-white/48 p-1 lg:flex" aria-label="Primary navigation">
          {seedData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#5b493a] transition hover:bg-[#d9e6cf] hover:text-[#2d2119]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={seedData.headerCta.href}
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "shrink-0")}
        >
          {seedData.headerCta.label}
        </a>
      </div>
    </header>
  );
}

import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { seedData } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

const gallerySpans = [
  "md:row-span-2 md:aspect-auto",
  "md:aspect-[4/3]",
  "md:aspect-[4/3]",
  "md:col-span-2 md:aspect-[16/7]",
  "md:aspect-[4/3]",
  "md:aspect-[4/3]",
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-20" aria-labelledby="gallery-heading">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#466842] uppercase">
            {seedData.gallery.eyebrow}
          </p>
          <h2 id="gallery-heading" className="text-balance mt-4 text-4xl font-black leading-tight text-[#2d2119] sm:text-5xl">
            {seedData.gallery.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {seedData.gallery.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.04} className={cn("min-h-[220px]", gallerySpans[index])}>
              <ImageSlot
                image={image}
                className="h-full min-h-full"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

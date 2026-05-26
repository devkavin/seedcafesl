import Image from "next/image";
import { ImageIcon, Sprout } from "lucide-react";

import { publicImageExists } from "@/lib/image-utils";
import type { SeedImage } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  image: SeedImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

const toneClasses = {
  green: "from-[#d9e6cf] via-[#fffaf0] to-[#b7c99d]",
  clay: "from-[#f1d3c4] via-[#fffaf0] to-[#d99d7c]",
  sky: "from-[#dcecf0] via-[#fffaf0] to-[#d9e6cf]",
  cream: "from-[#fffaf0] via-[#fbf6ea] to-[#eadcc6]",
};

export function ImageSlot({
  image,
  className,
  imageClassName,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fill = true,
}: ImageSlotProps) {
  const exists = publicImageExists(image.src);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {exists ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          className={cn(
            "placeholder-grain flex h-full min-h-[220px] w-full flex-col justify-between bg-linear-to-br p-5",
            toneClasses[image.tone ?? "cream"],
          )}
          role="img"
          aria-label={`${image.alt}. Image to be added.`}
        >
          <div className="flex items-center justify-between text-[#466842]">
            <Sprout className="h-6 w-6" aria-hidden="true" />
            <ImageIcon className="h-5 w-5 opacity-70" aria-hidden="true" />
          </div>
          <div>
            <p className="max-w-52 text-lg font-semibold text-[#3a271c]">
              {image.caption ?? "Seed Cafe image"}
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6f5a48]">
              Replace this slot with approved Seed Cafe photography.
            </p>
          </div>
        </div>
      )}
      {image.caption ? (
        <div className="absolute bottom-3 left-3 rounded-full bg-white/82 px-3 py-1 text-xs font-semibold text-[#3a271c] shadow-sm backdrop-blur">
          {image.caption}
        </div>
      ) : null}
    </div>
  );
}

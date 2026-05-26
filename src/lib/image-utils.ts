import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicImageExists(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return true;
  }

  const normalized = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(join(process.cwd(), "public", normalized));
}

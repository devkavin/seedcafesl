import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicImageExists(src: string) {
  const normalized = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(join(process.cwd(), "public", normalized));
}

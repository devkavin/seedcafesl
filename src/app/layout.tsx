import type { Metadata } from "next";
import { publicImageExists } from "@/lib/image-utils";
import "./globals.css";

const openGraphImage = publicImageExists("/images/seed/hero.jpg")
  ? "/images/seed/hero.jpg"
  : "/images/seed/logo-placeholder.png";

export const metadata: Metadata = {
  title: "Seed Cafe Colombo | Brunch, Coffee & Garden Cafe",
  description:
    "A warm Colombo cafe website for brunch, coffee, smoothie bowls, fresh plates, and slow mornings at Horton Place.",
  metadataBase: new URL("https://seedcafesl.com"),
  openGraph: {
    title: "Seed Cafe Colombo | Brunch, Coffee & Garden Cafe",
    description:
      "Brunch, coffee, smoothie bowls, fresh plates, and slow mornings at Horton Place in Colombo.",
    url: "https://seedcafesl.com",
    siteName: "Seed Cafe Colombo",
    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: "Seed Cafe brunch table in Colombo",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seed Cafe Colombo | Brunch, Coffee & Garden Cafe",
    description:
      "Brunch, coffee, smoothie bowls, fresh plates, and slow mornings at Horton Place in Colombo.",
    images: [openGraphImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

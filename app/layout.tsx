import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Every route here sits behind middleware auth. Without this, pages with no
// dynamic APIs get statically prerendered and CloudFront caches them with a
// long s-maxage, serving cache hits straight from the edge and skipping the
// origin (and therefore skipping middleware) entirely.
export const dynamic = "force-dynamic";

const mojangles = localFont({
    src: '../public/fonts/mojangles.ttf',
    variable: '--font-mojangles',
})

export const metadata: Metadata = {
  title: "Minecraft Server Dashboard",
  description: "For connellboyce.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mojangles.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

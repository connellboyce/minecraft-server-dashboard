import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siratul Islam | Software Engineer",
  description:
    "Siratul Islam | Software Engineer & Physics Student | Expert in SvelteKit, Next.js, Flutter & Full-Stack Development. Bronze Medalist at University Physics Competition 2024 & Harvard CS50x Certified. Passionate about AI, open-source contributions, and building scalable web/mobile apps. Explore my projects, skills, and achievements at sirat.me.",
  keywords: [
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "SvelteKit",
    "Next.js",
    "ASP.NET Core",
  ],
  metadataBase: new URL("https://www.sirat.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Siratul Islam | Software Engineer",
    description:
      "Siratul Islam | Software Engineer & Physics Student | Expert in SvelteKit, Next.js, Flutter & Full-Stack Development. Bronze Medalist at University Physics Competition 2024 & Harvard CS50x Certified. Passionate about AI, open-source contributions, and building scalable web/mobile apps. Explore my projects, skills, and achievements at sirat.me.",
    url: "https://www.sirat.me",
    type: "website",
    images: [
      {
        url: "https://www.sirat.me/og-image.png",
        alt: "Siratul Islam | Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

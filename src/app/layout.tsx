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
  title: "Siratul Islam | Embedded Systems | Open Source",
  description:
    "Siratul Islam | Embedded Systems Engineer & Open Source Enthusiast",
  keywords: [
    "Sirat",
    "Siratul Islam",
    "Embedded Systems",
    "Operating Systems",
    "Security",
    "FIDO2",
    "Real-time Systems",
    "Open Source",
    "Portfolio",
  ],
  metadataBase: new URL("https://www.sirat.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Siratul Islam | Embedded Systems | Open Source",
    description:
      "Siratul Islam | Embedded Systems Engineer & Open Source Enthusiast",
    url: "https://www.sirat.me",
    type: "website",
    images: [
      {
        url: "https://www.sirat.me/og-image.png",
        alt: "Siratul Islam | Embedded Systems Engineer",
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

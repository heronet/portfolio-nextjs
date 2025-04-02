import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siratul Islam",
  description:
    "Welcome to the official website of Siratul Islam. I am a fullstack Software Engineer",
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
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  openGraph: {
    title: "Siratul Islam",
    description:
      "Welcome to the official website of Siratul Islam. I am a fullstack Software Engineer",
    url: "https://www.sirat.me",
    type: "website",
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
      </body>
    </html>
  );
}

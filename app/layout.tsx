import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdoabozena7.github.io/Instafolio"),
  title: "Abdelrahman Abozena | AI and Data Science Engineer",
  description:
    "AI-driven software engineer focused on LLM agents, machine learning systems, and scalable backend APIs.",
  keywords:
    "Abdelrahman Abozena, AI Engineer, Data Science Engineer, Machine Learning, LLM Agents, Multi-Agent Systems, Backend Engineer, Node.js, Python, TypeScript, Portfolio",
  authors: [{ name: "Abdelrahman Abozena" }],
  creator: "Abdelrahman Abozena",
  publisher: "Abdelrahman Abozena",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abdelrahman Abozena - AI and Data Science Engineer",
    description:
      "AI-driven software engineer building LLM agents, machine learning systems, and backend platforms.",
    url: "https://abdoabozena7.github.io/Instafolio",
    siteName: "Abdelrahman Abozena Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Abozena - AI and Data Science Engineer",
    description:
      "AI engineer specializing in machine learning pipelines, LLM agents, and backend systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

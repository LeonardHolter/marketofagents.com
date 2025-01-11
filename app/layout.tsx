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
  title: "Market Of Agents",
  description: "The Official Marketplace for AI Agents",
  keywords:
    "AI agents, marketplace, artificial intelligence, buy AI agents, sell AI tools",
  author: "Market Of Agents Team",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
  openGraph: {
    title: "Market Of Agents",
    description: "The Official Marketplace for AI Agents",
    type: "website",
    url: "https://marketofagents.com",
    images: [
      {
        url: "/MOALogo.jpeg",
        alt: "Market Of Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Of Agents",
    description: "The Official Marketplace for AI Agents",
    image: "/MOALogo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="AI agents, marketplace, artificial intelligence, buy AI agents, sell AI tools"
        />
        <meta name="author" content="Market Of Agents Team" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Market Of Agents" />
        <meta
          property="og:description"
          content="The Official Marketplace for AI Agents"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marketofagents.com" />
        <meta property="og:image" content="/MOALogo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Market Of Agents" />
        <meta
          property="twitter:description"
          content="The Official Marketplace for AI Agents"
        />
        <meta property="twitter:image" content="/MOALogo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

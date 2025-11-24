import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/providers/theme-provider";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "Next.js",
    "NextUI",
    "Tailwind CSS",
    "Sigma",
    "Sigma UI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "spidy",
      url: "https://x.com/spidy",
    },
  ],
  creator: "spidyui-inc",
  alternates: {
    canonical: "https://spidy-blond.vercel.app/",
    types: {
      "application/rss+xml": [
        { url: "https://spidy-blond.vercel.app/feed.xml", title: "RSS Feed" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${GeistMono.className} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

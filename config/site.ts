export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sigma UI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://sigma-ui.com/sigma-ui.jpg",
  author: "Ayush Mehrotra",
  email: "ayusmehrotra007@gmail.com",
  siteUrl: "https://sigma-ui.com",
  creator: "@sigma-ui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sigma-ui.com",
    siteName: "SigmaUI ",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://sigma-ui.com/sigma-ui.jpg",
        width: 1200,
        height: 630,
        alt: "SigmaUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SigmaUI (Previously NextUI) - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://sigma-ui.com/sigma-ui.jpg",
    creator: "@sigma-ui",
  },
  links: {
    github: "https://github.com/mrayushmehrotra/sigma-ui/",
    twitter: "https://x.com/sigma-ui",
    docs: "https://sigma-ui.com",
    portfolio: "https://ayush-mehrotra-portfolio-two.vercel.app/",
  },
};

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David | Full-Stack & AI Web Developer",
  description:
    "David is a full-stack developer specializing in modern web apps, AI integrations, Supabase backends, and SaaS MVP development.",
  keywords: [
    "Full-Stack Developer",
    "AI Web Apps",
    "Supabase Developer",
    "SaaS MVP",
    "Next.js Developer",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "David" }],
  creator: "David",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://david-portfolio.vercel.app",
    title: "David | Full-Stack & AI Web Developer",
    description:
      "David is a full-stack developer specializing in modern web apps, AI integrations, Supabase backends, and SaaS MVP development.",
    siteName: "David Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David | Full-Stack & AI Web Developer",
    description:
      "David is a full-stack developer specializing in modern web apps, AI integrations, Supabase backends, and SaaS MVP development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


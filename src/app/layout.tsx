import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import fonts
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CurtainReveal } from "@/components/CurtainReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Rehman | Flutter-Focused Full-Stack Engineer",
  description: "Flutter-focused full-stack engineer building scalable backend systems with Java. Based in Pakistan, open to remote work, witty and slightly sarcastic.",
  keywords: ["Ali Rehman", "Flutter Developer Pakistan", "Full Stack Developer Pakistan", "Java Backend Developer", "Spring Boot", "Next.js"],
  authors: [{ name: "Ali Rehman", url: "https://alirehman.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alirehman.dev",
    title: "Ali Rehman | Flutter-Focused Full-Stack Engineer",
    description: "Flutter-focused full-stack engineer building scalable backend systems with Java. Based in Pakistan, open to remote work.",
    siteName: "Ali Rehman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Rehman | Flutter-Focused Full-Stack Engineer",
    description: "Flutter-focused full-stack engineer building scalable backend systems with Java.",
    creator: "@iam9trogen",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Rehman",
  url: "https://alirehman.dev",
  jobTitle: "Full-Stack Engineer",
  sameAs: [
    "https://github.com/alirehman-x",
    "https://www.linkedin.com/in/aly-rehman",
    "https://x.com/iam9trogen",
  ],
  knowsAbout: [
    "Flutter",
    "Next.js",
    "React",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: Wrapped children with CurtainReveal and structural components here if preferred,
  // or keep them in page.tsx. The standard Next.js pattern often puts Navbar/Footer in layout
  // for persistence, but page.tsx approach is also valid for simple one-pagers.
  // Given the previous page.tsx structure, we'll keep the logic consistent but update metadata.

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Default to dark as requested (premium feel)
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

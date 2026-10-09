import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Huma Tech - Your World of Technology, Simplified",
  description: "Huma Tech provides easy-to-understand technology news, guides, reviews and useful information for technology users worldwide.",
  keywords: ["technology", "tech news", "AI", "mobile", "gadgets", "software", "reviews", "how-to"],
  authors: [{ name: "Huma Tech" }],
  openGraph: {
    title: "Huma Tech - Your World of Technology, Simplified",
    description: "Huma Tech provides easy-to-understand technology news, guides, reviews and useful information for technology users worldwide.",
    url: "https://humatech.com",
    siteName: "Huma Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huma Tech - Your World of Technology, Simplified",
    description: "Huma Tech provides easy-to-understand technology news, guides, reviews and useful information for technology users worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

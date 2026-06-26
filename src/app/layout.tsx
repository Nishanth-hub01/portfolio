import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishanth | AI & LLM Engineer",
  description: "Portfolio of Nishanth, an aspiring AI & LLM Engineer building intelligent applications using Machine Learning, Deep Learning, NLP, and Large Language Models.",
  openGraph: {
    title: "Nishanth | AI & LLM Engineer",
    description: "Portfolio of Nishanth, an aspiring AI & LLM Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30 selection:text-primary-content">
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

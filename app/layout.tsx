import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manuelbiolatiri.me"),
  title: "Emmanuel Biolatiri — Senior Software Engineer",
  description:
    "Senior Software Engineer building payment, platform and wallet infrastructure. Manchester, UK.",
  keywords: [
    "Emmanuel Biolatiri",
    "Senior Software Engineer",
    "Backend Architecture",
    "Distributed Systems",
    "Payment Systems",
    "Platform Infrastructure",
    "walletKit",
    "Apple Wallet",
    "Google Wallet",
    "Manchester"
  ],
  authors: [{ name: "Emmanuel Biolatiri", url: "https://manuelbiolatiri.me" }],
  creator: "Emmanuel Biolatiri",
  alternates: {
    canonical: "https://manuelbiolatiri.me",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://manuelbiolatiri.me",
    siteName: "Emmanuel Biolatiri",
    title: "Emmanuel Biolatiri — Senior Software Engineer",
    description:
      "Senior Software Engineer building payment, platform and wallet infrastructure. Explore → Design → Build → Ship → Operate → Scale.",
  },
  twitter: {
    card: "summary",
    title: "Emmanuel Biolatiri — Senior Software Engineer",
    description:
      "Senior Software Engineer building payment, platform and wallet infrastructure.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans flex flex-col selection:bg-[var(--accent)] selection:text-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}

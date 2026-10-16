import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://labs.manuelbiolatiri.me"),
  title: "Labs | Emmanuel Biolatiri",
  description: "Independent product experiments in personal styling, digital wallets and modern software.",
  alternates: { canonical: "https://labs.manuelbiolatiri.me" },
  openGraph: {
    title: "Biolatiri / Labs",
    description: "Experiments, made tangible.",
    url: "https://labs.manuelbiolatiri.me",
  },
};

export default function LabsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

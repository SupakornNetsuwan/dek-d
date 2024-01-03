import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Dek-D Novel",
  description: "Light novels for everyone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html >
      <body className={prompt.className}>{children}</body>
    </html>
  );
}

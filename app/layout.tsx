import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "Nexaurro | Digital Service Provider",
  description:
    "Nexaurro helps brands accelerate growth through digital marketing, web development, UI/UX design, and business solutions."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-body bg-[#050714] text-white`}>
        {children}
      </body>
    </html>
  );
}

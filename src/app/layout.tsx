import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { GalleryHorizontal, Home, Phone } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-nav";
import Footer from "@/components/ui/footer";

const navItems = [
  {
    name: "Home",
    link: "#Home",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Sobre",
    link: "#Sobre",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#Projects",
    icon: (
      <GalleryHorizontal className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#Contact",
    icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

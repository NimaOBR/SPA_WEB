import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corner Pure | Medical Devices & General Trading - Erbil",
  description: "Pioneers in importation and distribution of essential medical supplies, disposable medical devices, pharmaceuticals, and health products in Erbil, Kurdistan & Iraq.",
  keywords: ["Medical Devices", "Corner Pure", "Erbil Medical", "Healthcare Supply Iraq", "Surgical Instruments", "Pharmaceutical Distribution"],
  authors: [{ name: "Whispher Code Team" }],
  creator: "Corner Pure",
  publisher: "Corner Pure",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cornerpure.com',
    title: 'Corner Pure | Medical Devices & General Trading',
    description: 'Leading medical devices and pharmaceutical supplier based in Empire World, Erbil.',
    siteName: 'Corner Pure',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Corner Pure Medical Equipments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corner Pure | Medical Devices & General Trading',
    description: 'Pioneers in medical supplies and pharmaceutical distribution in Erbil.',
    images: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#070a11] text-white antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
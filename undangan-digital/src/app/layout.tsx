import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ngunduh Mantu Danang & Alin",
  description: "Undangan Digital Ngunduh Mantu Danang & Alin. Minggu, 2 Agustus 2026. Gg. Prenjak 01 RT 05/01, Kuncen Lama, Ungaran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} font-sans antialiased bg-[#FFFFF0] text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}


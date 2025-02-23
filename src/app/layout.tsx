"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

// Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add weights as per your design needs
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>Whiplano</title></head>
      <body
        className={`${poppins.className} antialiased`}
      >
        {/* <Header /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

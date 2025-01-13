"use client";

import { Button } from "@/components/ui/button"; // ShadCN Button Component

export default function Explore() {
  return (
    <div className="py-16 bg-gradient-to-r from-[#DB2777] to-[#FE658F] text-white text-center px-6">
      <h2 className="text-4xl font-extrabold mb-6">
        Explore the Future of Creation with Whiplano
      </h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        Join Whiplano today and unlock a new world of creative ownership and
        collaboration! Whether you&apos;re an author, artist, or fan, Whiplano empowers you
        to shape, share, and profit from the creative works you love—all while
        supporting the original creators. Don&apos;t just consume creativity; be part of it.
      </p>
      <Button
        className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#DB2777]"
      >
        Get Started Now &gt;
      </Button>
    </div>
  );
}

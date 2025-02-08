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
  className="bg-white text-[#DB2777] hover:bg-gray-100 px-6 py-3 text-lg rounded-lg"
  onClick={() => {
    const url = "https://app.whiplano.com/signup";
    
    if (window.innerWidth <= 768) {
      // Open in a new tab for mobile and tablet
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // Open as a popup for larger screens
      window.open(url, "_blank", "width=1000,height=1000,left=500,top=50,noopener,noreferrer");
    }
  }}
>
  Get Started Now &gt;
</Button>

    </div>
  );
}

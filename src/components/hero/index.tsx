"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen bg-[#FE658F] text-white flex items-center">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6">
        {/* Right Section: Image */}
        <div className="flex justify-center">
          <Image
            src="/whiplano-reading.png"
            alt="Whiplano Mascot"
            width={578}
            height={578}
            className="rounded-lg"
          />
        </div>

        {/* Left Section: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl sm:text-[82px] font-extrabold tracking-tight leading-tight mb-6">
            Welcome to <br /> Whiplano
          </h1>
          <p className="text-2xl font-medium leading-relaxed">
            Solana Radar Hackathon <br />
            Green Track Winners, 2024!
          </p>
        </div>
      </div>
    </section>
  );
}

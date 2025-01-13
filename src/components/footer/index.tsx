"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-4 mb-10">
          <Image src="/logo.png" alt="Whiplano Logo" width={40} height={40} />
          <h3 className="text-2xl font-bold">Whiplano</h3>
        </div>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium">About Us</p>
              <p className="text-sm font-medium">How it Works</p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-medium">For Investors</p>
            <p className="text-sm font-medium">White Paper</p>
            <p className="text-sm font-medium">Pitch Deck</p>
            <p className="text-sm font-medium">Branding Kit</p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-medium">Press & Awards</p>
            <p className="text-sm font-medium">Impressum</p>
            <p className="text-sm font-medium">Privacy Policy</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 items-center">
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/telegram.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

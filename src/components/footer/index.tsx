"use client";

import Link from "next/link";
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
              <p className="text-sm font-medium"><Link href="/about">About Us</Link></p>
                <p className="text-sm font-medium"><Link href="/how-it-works">How it Works</Link></p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-medium"><Link href="/for-investors">For Investors</Link></p>
            <p className="text-sm font-medium"><Link href="">White Paper</Link></p>
            <p className="text-sm font-medium"><Link href="/pitch-deck">Pitch Deck</Link></p>
            <p className="text-sm font-medium"><Link href="">Branding Kit</Link></p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-medium"><Link href="/press-and-awards">Press & Awards</Link></p>
            <p className="text-sm font-medium"><Link href="/impressum">Impressum</Link></p>
            <p className="text-sm font-medium"><Link href="/privacy-policy">Privacy Policy</Link></p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 items-center">
            <Link href="/contact" title="Mail">
            <Image
              src="/mail.svg"
              alt="Mail"
              width={40}
              height={24}
              className="cursor-pointer"
            />
            </Link>
            <a href="https://discord.gg/CrVabKU2Av" target="blank" title="Discord">
            <Image
              src="/discord.svg"
              alt="Discord"
              width={29}
              height={24}
              className="cursor-pointer"
            />
            </a>
            <a href="https://x.com/Whiplano" target="blank" title="Twitter">
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            </a>
            <a href="https://t.me/realwhiplano" target="blank" title="Telegram" >
            <Image
              src="/telegram.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

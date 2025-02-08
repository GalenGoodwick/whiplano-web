"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"; // Ensure ShadCN Button is installed and configured
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FE658F] to-[#000000] text-white">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-8">How it Works</h2>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/whipano-flow.png"
            alt="Whiplano Flow"
            width={900}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Button */}
        
      </div>
      <div className="px-10 flex justify-end">
          <Button
            className="bg-white text-[#DB2777] hover:bg-gray-100 px-6 py-3 text-lg rounded-lg"
          >
           <Link href="/contact">Contact Us &gt;</Link>
          </Button>
        </div>
    </section>
  );
}

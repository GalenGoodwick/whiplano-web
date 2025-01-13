"use client";

import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col gap-16 px-6">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <Image
              src="/about-pepper1.png"
              alt="Our Vision"
              width={602}
              height={602}
              className="w-full max-w-sm"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-4 text-[#C81E8A]">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-sm">
              To create a vibrant community-driven ecosystem where creators,
              investors, and the community thrive in alignment and work together
              to achieve mutual success. As a result, creative projects will
              receive the full support they deserve, and all involved will see a
              positive impact on free expression and quality-of-life.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left">
          <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <Image
              src="/about-pepper2.png"
              alt="Our Mission"
              width={602}
              height={602}
              className="w-full max-w-sm"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center max-w-sm">
            <h2 className="text-4xl font-extrabold mb-4 text-[#C81E8A]">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To establish a marketplace of ideas where intellectual property
              meets the blockchain as Tradable Rights Seeds (TRS). TRS empowers
              creators not only to sell the rights to their works but also to
              secure the legacy of that creative work to a fan base that can
              legally acquire the right to build upon it. Whiplano provides a
              dynamic solution that empowers freedom as the base for the economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

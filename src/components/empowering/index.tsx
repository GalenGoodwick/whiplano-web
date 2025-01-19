import React from "react";

const EmpoweringSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-12 px-6 md:px-16 py-12 mt-10">
      {/* Left Text Section */}
      <div className="text-pink-500 text-center md:text-left flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-bold ">
          Empowering</h1> 
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Creators &</h1> 
          <h1 className="text-4xl md:text-5xl font-bold mt-6">Communities</h1>
        
      </div>

      {/* Right Content Section */}
      <div
        className="bg-white border border-pink-500 rounded-2xl py-6 md:py-24 px-6 md:px-10 shadow-md max-w-[666px] w-full"
        style={{ maxWidth: "666px" }}
      >
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Whiplano isn’t just a platform; it’s a movement toward freedom,
          collaboration, and mutual profitability. By empowering creators,
          engaging fans, and providing investors with a reliable model,
          Whiplano is pioneering a community-driven economy based on Solana’s
          blockchain technology where intellectual property is no longer a
          monopoly but a shared, evolving creation. Join us in rewriting the
          rules of creativity.
        </p>
        <div className="mt-6 flex justify-start">
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-full shadow hover:opacity-90 transition">
            Learn More &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;

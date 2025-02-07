"use client";
import HowItWorksText from "@/components/how-it-work-text";

export default function HowItWorks() {
  return (
    <> 
      {/* <Header /> */}
        <div className="bg-white">
          <div className="bg-black py-9"></div>
          <h1 className=" flex flex-col items-center text-6xl font-extrabold my-10 text-[#C81E8A]">How It Works</h1>
          <hr className="w-1/2 border-t-2 border-gray-300 my-4 mx-auto" />
          <div><HowItWorksText/></div>
        </div>
      {/* <Footer /> */}
    </>
  );
}
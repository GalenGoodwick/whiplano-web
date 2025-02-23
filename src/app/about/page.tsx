"use client";
import AboutText from "@/components/aboutus-text";

export default function AboutUs() {
  return (
    <> 
      {/* <Header /> */}
        <div className="bg-white">
          <div className="bg-black py-9"></div>
          <h1 className=" flex flex-col items-center text-6xl font-extrabold my-10 text-[#C81E8A]">About Whiplano</h1>
          <hr className="w-1/2 border-t-2 border-gray-300 my-4 mx-auto" />
          <div><AboutText/></div>
        </div>
      {/* <Footer /> */}
    </>
  );
}
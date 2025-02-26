"use client";
import CA from "@/components/ca";

export default function ca() {
  return (
    <> 
      {/* <Header /> */}
        <div className="bg-gradient-to-r from-[#DB2777] to-[#FE658F]">
          <div className="bg-gradient-to-r from-[#DB2777] to-[#FE658F] py-9"></div>
          <h1 className=" flex flex-col items-center md:text-center text-6xl font-extrabold my-10 text-white mx-5">WHIPLANO (TRS) <br />Redefining Digital Ownership</h1>
          <hr className="w-1/2 border-t-2 border-gray-300 my-4 mx-auto" />
          <div><CA/></div>
        </div>
      {/* <Footer /> */}
    </>
  );
}
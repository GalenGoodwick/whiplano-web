"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-[#FE658F] py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Contact Us</h2>
          <p className="text-white text-lg mb-12 max-w-4xl mx-auto">
            Do you want to be a creator or invest in the future of Whiplano? Our
            team will be in touch within two business days.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          {/* Left Side - Form */}
          <div className="flex-1 w-full">
            <form className="flex flex-col space-y-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="border border-[#FE658F] rounded-md w-full px-4 py-2"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border border-[#FE658F] rounded-md w-full px-4 py-2"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="border border-[#FE658F] rounded-md w-full px-4 py-2 h-24"
                />
              </div>

              {/* Submit Button */}
              <Button className="bg-[#DB2777] text-white hover:bg-[#B3298A] px-6 py-2 rounded-md">
                Submit
              </Button>
            </form>
          </div>

          {/* Right Side - Image and Info */}
          <div className="flex-1 flex flex-col items-center space-y-6">
            <Image
              src="/WhiplanoReading2.png"
              alt="Whiplano Reading"
              width={578}
              height={578}
              className="w-full max-w-sm"
            />
            <div className="text-right md:text-left">
              <p className="text-sm font-medium text-gray-700 flex items-center justify-end md:justify-start">
                <span className="mr-2">📍</span> 543 Lewis Island K, 6956
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center justify-end md:justify-start mt-2">
                <span className="mr-2">📞</span> +2014 4040 3010
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center justify-end md:justify-start mt-2">
                <span className="mr-2">✉️</span> hello@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

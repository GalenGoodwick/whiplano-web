"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-[#DB2777]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Whiplano Logo"
              width={40}
              height={40}
              className="mr-3"
            />
          </Link>
          <Link href="/">
            <div
              className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Whiplano
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="/">
              <div
                className={`text-sm font-medium ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Home
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`text-sm font-medium ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                About
              </div>
            </Link>
            <Link href="/how-it-works">
              <div
                className={`text-sm font-medium ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                How It Works
              </div>
            </Link>
          </nav>

          {/* Button */}
          <Button
            className={`px-4 py-2 text-sm rounded-full ${
              isScrolled
                ? "bg-white text-[#DB2777] hover:bg-gray-100"
                : "bg-[#7B1E7A] text-white hover:bg-[#B3298A]"
            }`}
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <Cross1Icon className="h-6 w-6 text-white" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#DB2777] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white">
          {/* Logo */}
          <Link href="/">
            <div className="text-xl font-bold text-white">Whiplano</div>
          </Link>
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="p-2"
          >
            <Cross1Icon className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="mt-4 space-y-4 px-4">
          <Link href="/">
            <div className="block text-lg font-medium text-white hover:text-gray-200">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="block text-lg font-medium text-white hover:text-gray-200">
              About
            </div>
          </Link>
          <Link href="/how-it-works">
            <div className="block text-lg font-medium text-white hover:text-gray-200">
              How It Works
            </div>
          </Link>
        </nav>
        <div className="mt-6 px-4">
          <Button
            variant="default"
            className="w-full bg-white text-[#DB2777] hover:bg-gray-100"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}

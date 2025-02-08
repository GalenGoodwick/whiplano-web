import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button Component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // ShadCN Card Components
import { Pencil, Users, Briefcase } from "lucide-react"; // Icons
import Link from "next/link";

const WhiplanoSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#FE658F] to-[#000000] text-white py-16 px-6 md:px-16 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Whiplano is for:
        </h2>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Creators */}
        <div className="relative max-w-[352px]">
          {/* Outer Border */}
          <div className="absolute -inset-2 rounded-[40px] border border-white"></div>
          {/* Inner Card */}
          <Card className="relative bg-white text-center rounded-[40px] shadow-lg right-5 top-3">
            <CardHeader>
              <Pencil className="mx-auto text-pink-500 w-12 h-12 mb-4" />
              <CardTitle className="text-pink-500 text-xl font-bold">
                Creators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                In traditional publishing, creators face low royalties,
                restrictive control, long delays, and compromises to their
                artistic vision. Whiplano ensures their work isn&apos;t shelved or
                modified without their input.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Card 2: Fans */}
        <div className="relative max-w-[352px]">
          {/* Outer Border */}
          <div className="absolute -inset-2 rounded-[40px] border border-white"></div>
          {/* Inner Card */}
          <Card className="relative bg-white text-center rounded-[40px] shadow-lg right-5 top-3">
            <CardHeader>
              <Users className="mx-auto text-orange-400 w-12 h-12 mb-4" />
              <CardTitle className="text-orange-400 text-xl font-bold">
                Fans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Fans who want to contribute or build upon the work they love but
                are legally restricted now have a solution. Whiplano creates a
                deeper connection between creators and audiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Card 3: Investors */}
        <div className="relative max-w-[352px]">
          {/* Outer Border */}
          <div className="absolute -inset-2 rounded-[40px] border border-white"></div>
          {/* Inner Card */}
          <Card className="relative bg-white text-center rounded-[40px] shadow-lg right-5 top-3">
            <CardHeader>
              <Briefcase className="mx-auto text-pink-500 w-12 h-12 mb-4" />
              <CardTitle className="text-pink-500 text-xl font-bold">
                Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                Many Web3 investments are speculative with little intrinsic
                value. Whiplano offers safer investments tied directly to
                creative production, ensuring profitability and reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90">
        <Link href="/how-it-works">Learn More &gt;</Link>
        </Button>
      </div>
    </section>
  );
};

export default WhiplanoSection;

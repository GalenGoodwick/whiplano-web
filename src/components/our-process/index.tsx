"use client";

import { Button } from "@/components/ui/button"; // ShadCN Button Component
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // ShadCN Card Component
import Link from "next/link";
export default function OurProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12 text-[#DB2777]">
          Our Simple, Powerful Process
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-[40px] border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">
                1
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">
                Join the Community
              </CardDescription>
              <p className="text-sm text-gray-500 mt-5">
                Sign up and become a part of the Whiplano community. Create your
                profile and connect with like-minded individuals.
              </p>
            </CardHeader>

          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-[40px] border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">
                2
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">
                Collaborate on Projects
              </CardDescription>
              <p className="text-sm text-gray-500 mt-5">
                Engage with projects that interest you. Contribute your skills
                and ideas to thelp advance the development.
              </p>
            </CardHeader>
            
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-[40px] border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">
                3
              </CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">
                Share the Reward
              </CardDescription>
              <p className="text-sm text-gray-500 mt-5">
                When a project succeeds, everyone involved shares in the
                benefits. Enjoy the collective success and watch your
                contributions pay off.
              </p>
            </CardHeader>
            
          </Card>
        </div>

        {/* Schedule Button */}
        <div className="flex justify-end max-w-5xl mx-auto">
          <Button className="bg-gradient-to-r from-[#FE658F] to-[#DB2777] text-white px-6 py-3 rounded-lg text-lg" >
             
            <Link href="https://discord.gg/CrVabKU2Av" target="blank">Join our discord server! &gt;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

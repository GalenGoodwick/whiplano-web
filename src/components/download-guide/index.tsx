"use client";

import { Button } from "@/components/ui/button"; // ShadCN Button Component
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // ShadCN Card Component


export default function DownloadGuides() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12 text-[#DB2777]">Head on to our Guides</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-3xl border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">1</CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">WIP</CardDescription>
              <p className="text-sm text-gray-500 mt-5">Will be updated when Beta is out</p>
            </CardHeader>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-3xl border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">2</CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">WIP</CardDescription>
              <p className="text-sm text-gray-500 mt-5">Will be updated when Beta is out</p>
            </CardHeader>
            
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center max-w-[316px] mx-auto rounded-3xl border border-[#DB2777]">
            <CardHeader>
              <CardTitle className="text-6xl font-bold text-[#DB2777] mb-10">3</CardTitle>
              <CardDescription className="text-lg font-medium text-gray-700 mb-5">WIP</CardDescription>
              <p className="text-sm text-gray-500 mt-5">Will be updated when Beta is out</p>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>

        {/* Schedule Button */}
        <div className="flex justify-end max-w-5xl mx-auto">
          <Button className="bg-gradient-to-r from-[#FE658F] to-[#DB2777] text-white px-6 py-3 rounded-lg text-lg">
            Schedule A Call &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}

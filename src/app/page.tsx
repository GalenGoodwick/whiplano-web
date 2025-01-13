"use client";

import DownloadGuides from "@/components/download-guide";
import Explore from "@/components/explore";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-worlks";
import VisionMission from "@/components/vissionMisson";

export default function Home() {
  return (
    <> 
      {/* <Header /> */}
      <Hero />
      <VisionMission />
      <HowItWorks />
      <DownloadGuides />
      <Explore />
      {/* <Footer /> */}
    </>
  );
}

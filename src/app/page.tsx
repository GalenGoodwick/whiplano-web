"use client";

import EmpoweringSection from "@/components/empowering";
import Explore from "@/components/explore";
import Hero from "@/components/hero";

import OurProcessSection from "@/components/our-process";
import VisionMission from "@/components/vissionMisson";
import WhiplanoSection from "@/components/whiplano-for";

export default function Home() {
  return (
    <> 
      {/* <Header /> */}
      <Hero />
      <VisionMission />
      <EmpoweringSection />
      <WhiplanoSection />
      <OurProcessSection />
      <Explore />
      {/* <Footer /> */}
    </>
  );
}

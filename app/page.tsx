import Hero from "@/components/Hero";
import Features from "@/components/layout/Features";
import Integrations from "@/components/Integrations";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";

const page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Integrations />
      <Testimonials />
      <Stats />
      <CTABanner />
    </>
  );
};

export default page;

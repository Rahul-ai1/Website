import { Hero } from "@/components/sections/home/hero";
import { WhatWeDo } from "@/components/sections/home/what-we-do";
import { OurApproach } from "@/components/sections/home/our-approach";
import { Industries } from "@/components/sections/home/industries";
import { WhyKomfram } from "@/components/sections/home/why-komfram";
import { TrustStatement } from "@/components/sections/home/trust-statement";
import { BlogPreview } from "@/components/sections/home/blog-preview";
import { FinalCTA } from "@/components/shared/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurApproach />
      <Industries />
      <WhyKomfram />
      <TrustStatement />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}

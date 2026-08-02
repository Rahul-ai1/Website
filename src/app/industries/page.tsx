import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import { industriesData } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Komfram delivers technology solutions built for manufacturing, retail, wholesale & distribution, healthcare, education, logistics, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Built for Every Industry"
        description="Every industry has different operational challenges. We tailor our ERP, AI, and cloud solutions to fit the way your business actually runs."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesData.map((industry, i) => (
              <FadeIn key={industry.slug} delay={i * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <industry.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-slate-muted">{industry.overview}</p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import { solutionsData } from "@/lib/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Enterprise technology solutions across ERP, AI automation, cloud, business intelligence, system integration, and managed support.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Technology Solutions That Drive Business Results"
        description="Every solution is designed to simplify operations and create measurable business outcomes — from strategy through long-term support."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsData.map((solution, i) => (
              <FadeIn key={solution.slug} delay={i * 0.05}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <solution.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-slate-muted">
                    {solution.shortDescription}
                  </p>
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

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Engagement Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Discover → Design → Deliver → Optimize
            </h2>
            <p className="mt-4 text-lg text-slate-muted">
              Every project follows a structured engagement model — from
              understanding your business objectives to continuously
              refining performance after go-live.
            </p>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

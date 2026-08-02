import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import { industriesData, getIndustryBySlug } from "@/lib/data/industries";
import { solutionsData } from "@/lib/data/solutions";

export function generateStaticParams() {
  return industriesData.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.overview,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedSolutions = industry.solutionSlugs
    .map((s) => solutionsData.find((sol) => sol.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Industries" title={industry.name} description={industry.overview} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">Common Challenges</h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning" />
                  <span className="text-slate">{challenge}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-navy">Expected Outcomes</h2>
            <ul className="mt-6 space-y-3">
              {industry.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <span className="text-slate">{outcome}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Relevant Solutions</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedSolutions.map((sol) =>
              sol ? (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <sol.icon className="size-7 text-primary" />
                  <h3 className="font-semibold text-navy">{sol.name}</h3>
                  <p className="text-sm text-slate-muted">
                    {sol.shortDescription}
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

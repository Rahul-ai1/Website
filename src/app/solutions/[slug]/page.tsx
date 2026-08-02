import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import { Button } from "@/components/ui/button";
import { solutionsData, getSolutionBySlug } from "@/lib/data/solutions";

export function generateStaticParams() {
  return solutionsData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.shortDescription,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const related = solution.crossSell
    .map((s) => solutionsData.find((sol) => sol.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Solutions" title={solution.name} description={solution.overview} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">Services</h2>
            <ul className="mt-6 space-y-3">
              {solution.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-slate">{service}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-navy">Business Outcomes</h2>
            <ul className="mt-6 space-y-3">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <span className="text-slate">{outcome}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Related Solutions</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((rel) =>
                rel ? (
                  <Link
                    key={rel.slug}
                    href={`/solutions/${rel.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <rel.icon className="size-7 text-primary" />
                    <h3 className="font-semibold text-navy">{rel.name}</h3>
                    <p className="text-sm text-slate-muted">
                      {rel.shortDescription}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-slate-muted">
            Let&apos;s discuss your business goals and design a solution that
            fits your organization.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              className="rounded-xl"
              nativeButton={false}
              render={
                <Link href="/contact">
                  Book a Consultation <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              variant="outline"
              className="rounded-xl"
              nativeButton={false}
              render={<Link href="/contact">Talk to an Expert</Link>}
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real project outcomes from Komfram Technologies, published as engagements complete.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real Outcomes, As They Happen"
        description="We publish case studies only once engagements are complete and verified with our clients — so check back as our partnerships grow."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <FileText className="mx-auto size-10 text-slate-muted" />
            <h2 className="mt-4 text-xl font-semibold text-navy">
              No case studies published yet
            </h2>
            <p className="mt-3 text-slate-muted">
              We&apos;re currently delivering our first engagements. In the
              meantime, explore our solutions or get in touch to discuss your
              own project.
            </p>
            <Button
              className="mt-6 rounded-xl"
              nativeButton={false}
              render={
                <Link href="/solutions">
                  Explore Solutions <ArrowRight className="size-4" />
                </Link>
              }
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

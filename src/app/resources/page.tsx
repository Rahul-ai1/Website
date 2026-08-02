import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, HelpCircle, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights, case studies, and answers to common questions about ERP, AI automation, and cloud technology from Komfram Technologies.",
};

const resources = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Insights on ERP, AI automation, cloud, and business strategy.",
    href: "/resources/blog",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real project outcomes, published as engagements complete.",
    href: "/resources/case-studies",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Answers to common questions about working with Komfram.",
    href: "/resources/faqs",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights & Resources"
        description="Practical thinking on business transformation, ERP, AI, and cloud technology."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {resources.map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <item.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-muted">{item.description}</p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
                    Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

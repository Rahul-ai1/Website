import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  GraduationCap,
  Laptop,
  Users2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Komfram Technologies and help businesses simplify operations through ERP, AI, and cloud technology.",
};

const culture = [
  {
    icon: Heart,
    title: "Business-First Mindset",
    description:
      "We care about the outcome for the client as much as the technology we build.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Technology evolves quickly — we invest in learning new tools and platforms together.",
  },
  {
    icon: Laptop,
    title: "Practical Autonomy",
    description:
      "We trust people to own their work and make sound judgment calls.",
  },
  {
    icon: Users2,
    title: "Collaborative Teams",
    description:
      "Consultants, engineers, and analysts work closely on every engagement.",
  },
];

const hiringSteps = [
  "Application review",
  "Introductory conversation",
  "Skills & case discussion",
  "Team interview",
  "Offer",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Life at Komfram"
        description="We're building a team that combines business understanding with technical craft — join us as we grow."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Culture" title="How We Work" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border p-6">
                  <item.icon className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Hiring Process" title="What to Expect" />
          <div className="mt-10 flex flex-col gap-4">
            {hiringSteps.map((step, i) => (
              <FadeIn key={step} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-medium text-navy">{step}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <Briefcase className="mx-auto size-10 text-slate-muted" />
            <h2 className="mt-4 text-2xl font-bold text-navy">
              Open Positions
            </h2>
            <p className="mt-3 text-slate-muted">
              We don&apos;t have any open roles listed right now, but
              we&apos;re always glad to hear from people who want to build
              Komfram with us. Send us your resume and we&apos;ll reach out
              when a role fits.
            </p>
            <Button
              className="mt-6 rounded-xl"
              nativeButton={false}
              render={
                <Link href={`mailto:${siteConfig.email}?subject=Application - Komfram Technologies`}>
                  Send Your Resume <ArrowRight className="size-4" />
                </Link>
              }
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

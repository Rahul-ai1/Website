import type { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Trophy,
  Users,
  BookOpen,
  Target,
  Eye,
} from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Komfram Technologies is a business transformation and enterprise technology partner helping organizations simplify operations through ERP, AI, and cloud solutions.",
};

const values = [
  {
    icon: Sparkles,
    title: "Simplicity",
    description: "We eliminate unnecessary complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We build relationships based on honesty and transparency.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our solutions using modern technologies.",
  },
  {
    icon: Trophy,
    title: "Customer Success",
    description: "Our success is measured by our customers' success.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue high standards in every engagement.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we.",
  },
];

const roadmap = [
  {
    title: "Today",
    description:
      "ERP consulting and implementation, AI automation, cloud solutions, business intelligence, system integration, and managed support for growing businesses.",
  },
  {
    title: "Next",
    description:
      "Deeper industry-specific solution playbooks and an expanding managed-services practice for long-term client partnerships.",
  },
  {
    title: "Long-Term Vision",
    description:
      "Evolving into a comprehensive enterprise technology organization — offering ERP products, AI platforms, SaaS applications, and industry-specific solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Komfram"
        title="From Complexity to Clarity."
        description="Komfram Technologies is a business transformation and enterprise technology company dedicated to helping organizations simplify operations, improve efficiency, and accelerate sustainable growth through technology."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              Most organizations struggle because their systems, data, teams,
              and processes are disconnected. Komfram exists to transform
              complexity into clarity. Rather than delivering software alone,
              we partner with organizations to understand their business,
              optimize their processes, integrate their systems, and
              implement scalable digital solutions that create measurable
              business value.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              We combine consulting expertise, modern software, automation,
              cloud technologies, artificial intelligence, and enterprise
              resource planning into practical business solutions — because
              we believe technology should simplify business, not make it
              more complicated.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="h-full rounded-2xl border border-border bg-white p-8">
              <Eye className="size-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-navy">Vision</h3>
              <p className="mt-3 text-slate-muted">
                To become a globally trusted enterprise technology company
                that empowers organizations to operate smarter, innovate
                faster, and grow sustainably through intelligent digital
                solutions.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-8">
              <Target className="size-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-navy">Mission</h3>
              <p className="mt-3 text-slate-muted">
                To simplify business through technology by delivering
                practical, scalable, and intelligent solutions that improve
                operational efficiency, decision-making, and business
                performance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Core Values" title="What We Stand For" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border p-6">
                  <value.icon className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-muted">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-4">
              <Users className="mt-1 size-8 shrink-0 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-navy">
                  Leadership Philosophy
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-muted">
                  We lead engagements the way we&apos;d want a partner to
                  lead ours: business-first, transparent about trade-offs,
                  and accountable for outcomes rather than just deliverables.
                  Every recommendation is grounded in what actually moves a
                  client&apos;s operations forward — not the newest
                  technology for its own sake.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Where We're Headed" title="Our Roadmap" />
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {roadmap.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-border p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

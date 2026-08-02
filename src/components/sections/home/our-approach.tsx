import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand business processes, goals, and challenges.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Create the right solution architecture and roadmap.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Configure, integrate, and implement with precision.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "Continuously measure and improve performance.",
  },
];

export function OurApproach() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Approach"
          title="A Structured Path to Business Transformation"
          description="Every engagement follows a proven four-step methodology designed to reduce risk and deliver measurable outcomes."
        />
        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-8 left-0 right-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  <step.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

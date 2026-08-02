import Link from "next/link";
import { CheckCircle2, ArrowRight, LayoutDashboard } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

const points = [
  "Business-first approach",
  "Proven frameworks & best practices",
  "Agile & transparent delivery",
  "Long-term partnership & support",
];

export function WhyKomfram() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-navy via-slate to-primary">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                <LayoutDashboard className="size-12 text-white" />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Komfram?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Your Partner in Progress
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            We combine deep business understanding with the right technology
            to deliver measurable results.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-slate">{point}</span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 rounded-xl"
            nativeButton={false}
            render={
              <Link href="/about">
                About Us <ArrowRight className="size-4" />
              </Link>
            }
          />
        </FadeIn>
      </div>
    </section>
  );
}

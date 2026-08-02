import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function FinalCTA({
  title = "Ready to Simplify Your Business?",
  description = "Let's discuss how Komfram can help transform your business with practical technology solutions tailored to your goals.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="text-white" style={{ backgroundColor: "#000b1e" }}>
      <div className="mx-auto max-w-(--breakpoint-md) px-4 py-20 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-xl px-6 text-base"
              nativeButton={false}
              render={
                <Link href="/contact">
                  Book a Free Consultation <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10"
              nativeButton={false}
              render={<Link href="/contact">Contact Sales</Link>}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

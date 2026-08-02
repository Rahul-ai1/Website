import { FadeIn } from "@/components/shared/fade-in";

export function TrustStatement() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="mx-auto max-w-(--breakpoint-md) px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xl font-medium text-navy sm:text-2xl">
            &ldquo;Building long-term partnerships through quality
            delivery.&rdquo;
          </p>
          <p className="mt-3 text-sm text-slate-muted">
            Client success stories will be featured here as our partnerships
            grow.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

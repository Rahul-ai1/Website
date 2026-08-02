import { FadeIn } from "@/components/shared/fade-in";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-slate-muted">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

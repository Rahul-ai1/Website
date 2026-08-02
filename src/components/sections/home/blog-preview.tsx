import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { blogPosts } from "@/lib/data/blog";

export function BlogPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Insights & Resources
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Latest from Our Blog
            </h2>
          </div>
          <Link
            href="/resources/blog"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All Articles <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.06}>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-shadow hover:shadow-md"
              >
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-navy to-primary">
                  <post.icon className="size-10 text-white/80" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-navy group-hover:text-primary">
                    {post.title}
                  </h3>
                  <span className="mt-auto text-sm font-medium text-primary">
                    Read More →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

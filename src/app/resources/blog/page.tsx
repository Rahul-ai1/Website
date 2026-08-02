import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on ERP, AI automation, cloud, and digital transformation from Komfram Technologies.",
};

export default function BlogListPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Latest Insights" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="flex items-center gap-2 text-xs text-slate-muted">
                      <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-primary">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-navy group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-muted">{post.excerpt}</p>
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
    </>
  );
}

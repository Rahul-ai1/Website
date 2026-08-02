import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="bg-white py-16">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/resources/blog"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to Blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-muted">
              <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-primary">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-slate-muted">By the Komfram Team</p>

            <div className="mt-10 flex aspect-video items-center justify-center rounded-[20px] bg-gradient-to-br from-navy to-primary">
              <post.icon className="size-16 text-white/80" />
            </div>

            <div className="prose prose-slate mt-10 max-w-none space-y-5 text-lg leading-relaxed text-slate">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy">Related Articles</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/resources/blog/${rel.slug}`}
                  className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                    {rel.category}
                  </span>
                  <h3 className="mt-3 font-semibold text-navy group-hover:text-primary">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}

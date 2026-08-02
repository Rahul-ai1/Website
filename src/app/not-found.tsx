import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const helpfulLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-surface px-4 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-lg text-slate-muted">
          The page you&apos;re looking for may have moved or no longer
          exists. Here are a few places to pick back up.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            className="rounded-xl"
            nativeButton={false}
            render={
              <Link href="/">
                <Home className="size-4" /> Back to Home
              </Link>
            }
          />
          <Button
            variant="outline"
            className="rounded-xl"
            nativeButton={false}
            render={
              <Link href="/contact">
                Contact Us <ArrowRight className="size-4" />
              </Link>
            }
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-8">
          <p className="flex items-center gap-2 text-sm font-medium text-slate">
            <Search className="size-4" /> Or explore
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

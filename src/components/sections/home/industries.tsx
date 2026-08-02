import Link from "next/link";
import {
  Factory,
  Truck,
  ShoppingCart,
  LineChart,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Factory, label: "Manufacturing", href: "/industries/manufacturing" },
  { icon: Truck, label: "Wholesale & Distribution", href: "/industries/wholesale-distribution" },
  { icon: ShoppingCart, label: "Retail & eCommerce", href: "/industries/retail-ecommerce" },
  { icon: LineChart, label: "Professional Services", href: "/industries/professional-services" },
  { icon: GraduationCap, label: "Education", href: "/industries/education" },
  { icon: Briefcase, label: "Logistics", href: "/industries/logistics" },
];

export function Industries() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions Tailored to Your Industry"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <Link
                href={item.href}
                className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <item.icon className="size-7 text-primary" />
                <span className="text-sm font-medium text-navy">
                  {item.label}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-xl"
            nativeButton={false}
            render={
              <Link href="/industries">
                View All Industries <ArrowRight className="size-4" />
              </Link>
            }
          />
        </FadeIn>
      </div>
    </section>
  );
}

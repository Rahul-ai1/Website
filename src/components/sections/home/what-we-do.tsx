import Link from "next/link";
import { Layers, Cpu, Cloud, Repeat, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "ERP Implementation",
    description:
      "We implement and customize ERPNext to streamline your core business processes.",
    href: "/solutions/erp-implementation",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Leverage AI and automation to reduce manual work and improve accuracy.",
    href: "/solutions/ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and reliable cloud solutions designed for performance.",
    href: "/solutions/cloud-solutions",
  },
  {
    icon: Repeat,
    title: "Digital Transformation",
    description:
      "Reimagine your business with digital strategies and modern technologies.",
    href: "/solutions/system-integration",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Expert guidance to optimize operations, reduce costs, and accelerate growth.",
    href: "/solutions/business-intelligence",
  },
];

export function WhatWeDo() {
  return (
    <section className="text-white" style={{ backgroundColor: "#000b1e" }}>
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-End Solutions for Modern Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From strategy to implementation and support, we deliver solutions
            that drive efficiency, growth, and transformation.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-[#000b1e] p-6">
                <service.icon className="size-8 text-primary" />
                <h3 className="text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-auto text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
            nativeButton={false}
            render={
              <Link href="/solutions">
                View All Services <ArrowRight className="size-4" />
              </Link>
            }
          />
        </FadeIn>
      </div>
    </section>
  );
}

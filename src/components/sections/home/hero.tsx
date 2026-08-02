"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Users2, BarChart3, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";

const orbitItems = [
  { label: "ERP Solutions", icon: Layers, className: "top-0 left-1/2 -translate-x-1/2" },
  { label: "AI & Automation", icon: Cpu, className: "top-1/4 right-0" },
  { label: "Cloud Services", icon: Cloud, className: "bottom-0 left-4" },
  { label: "Business Consulting", icon: Users2, className: "bottom-1/4 right-4" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            From Complexity to Clarity.
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Transforming Businesses with{" "}
            <span className="text-primary">Intelligent</span> Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-muted">
            Komfram helps businesses streamline operations, modernize
            enterprise systems, and accelerate growth through ERP, AI, cloud
            technologies, and intelligent automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-xl px-6 text-base"
              nativeButton={false}
              render={
                <Link href="/solutions">
                  Explore Solutions <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl px-6 text-base"
              nativeButton={false}
              render={<Link href="/contact">Talk to an Expert</Link>}
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate">
            {["ERP Specialists", "AI & Automation", "Cloud Solutions", "Business Consulting"].map(
              (label) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className="flex size-4 items-center justify-center rounded-full bg-success/15 text-success">
                    ✓
                  </span>
                  {label}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-[15%] rounded-3xl border-2 border-dashed border-primary/20" />
          <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-info shadow-xl shadow-primary/20">
            <BarChart3 className="size-12 text-white" />
          </div>
          {orbitItems.map(({ label, icon: Icon, className }) => (
            <div
              key={label}
              className={`absolute flex w-32 flex-col items-center gap-2 rounded-2xl border border-border bg-white p-3 text-center shadow-md ${className}`}
            >
              <Icon className="size-5 text-primary" />
              <span className="text-xs font-medium text-navy">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

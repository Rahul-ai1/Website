"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, solutions, siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src="/logos/komfram-icon.png"
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9"
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-navy">
          KOMFRAM
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-slate-muted">
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-(--breakpoint-xl) items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) =>
            item.label === "Solutions" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:bg-muted hover:text-primary",
                    pathname.startsWith(item.href) && "text-primary"
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </Link>
                {solutionsOpen && (
                  <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-lg">
                      {solutions.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-xl p-3 transition-colors hover:bg-muted"
                        >
                          <p className="text-sm font-semibold text-navy">
                            {s.label}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-muted">
                            {s.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:bg-muted hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            className="rounded-xl"
            nativeButton={false}
            render={<Link href="/contact">Book a Consultation</Link>}
          />
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="mt-4 rounded-xl"
                nativeButton={false}
                render={<Link href="/contact">Book a Consultation</Link>}
              />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 text-center text-sm text-slate-muted"
              >
                or call {siteConfig.phone}
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

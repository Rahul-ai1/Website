import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import { siteConfig, footerNav } from "@/lib/constants/site";
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "Twitter", href: siteConfig.social.twitter, icon: TwitterIcon },
  { label: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YoutubeIcon },
];

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#000b1e" }} className="text-slate-300">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/logos/komfram-logo-horizontal-dark.png"
              alt={siteConfig.name}
              width={240}
              height={58}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Komfram Technologies helps businesses simplify operations and
              accelerate growth through ERP, AI, and cloud technology.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="Services" items={footerNav.services} />

          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Komfram Technologies Private
            Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

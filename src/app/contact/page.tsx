import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { ContactForm } from "@/components/sections/contact/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Komfram Technologies to discuss ERP, AI automation, cloud, and business consulting solutions for your organization.",
};

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Most engagements begin with a discovery call within a few business days, followed by a scoped proposal based on your specific goals.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. We work with organizations across regions, delivering remotely with on-site engagement where needed.",
  },
  {
    question: "What size of business do you work with?",
    answer:
      "We work with small businesses beginning their digital transformation journey through to medium and growing enterprises.",
  },
  {
    question: "Can you support an existing ERP implementation?",
    answer:
      "Yes — we provide customization, integration, and managed support for existing ERP systems, not just new implementations.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Business"
        description="Tell us about your challenge and we'll get back to you with next steps — usually within one business day."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-2xl border border-border p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-navy">Office</h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-muted">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                    {siteConfig.address}
                  </li>
                  <li className="flex gap-3">
                    <Phone className="size-5 shrink-0 text-primary" />
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="size-5 shrink-0 text-primary" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="size-5 shrink-0 text-primary" />
                    Monday – Saturday, 9:30 AM – 6:30 PM IST
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Komfram Technologies office location"
                  src="https://www.google.com/maps?q=Gopalpura+Bypass,+Jaipur,+Rajasthan+302018&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <Accordion className="mt-8">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

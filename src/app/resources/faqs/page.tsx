import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/fade-in";
import { FinalCTA } from "@/components/shared/final-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Komfram Technologies' ERP, AI automation, cloud, and consulting services.",
};

const faqGroups = [
  {
    group: "Working With Komfram",
    items: [
      {
        question: "What does Komfram actually do?",
        answer:
          "We help businesses simplify operations through ERP implementation, AI automation, cloud solutions, system integration, and business consulting — combining strategy with hands-on delivery.",
      },
      {
        question: "How is Komfram different from a typical software vendor?",
        answer:
          "We focus on business outcomes, not just software deployment. Every engagement starts with understanding your processes before recommending a technical solution.",
      },
      {
        question: "What size of business do you work with?",
        answer:
          "From small businesses beginning their digital transformation journey to medium enterprises scaling their operations across manufacturing, retail, distribution, and services.",
      },
    ],
  },
  {
    group: "ERP & Implementation",
    items: [
      {
        question: "Which ERP platform do you implement?",
        answer:
          "We specialize in ERPNext, customized and configured to fit your specific business processes, along with integrations to other systems you already use.",
      },
      {
        question: "How long does an ERP implementation take?",
        answer:
          "Timelines depend on scope and complexity. A discovery phase helps define a realistic roadmap before any implementation work begins.",
      },
      {
        question: "Can you support a system we already have in place?",
        answer:
          "Yes — we provide customization, integration, and managed support for existing ERP systems, not just new implementations.",
      },
    ],
  },
  {
    group: "Engagement & Pricing",
    items: [
      {
        question: "How do engagements typically start?",
        answer:
          "With a discovery conversation to understand your goals and challenges, followed by a scoped proposal tailored to your business.",
      },
      {
        question: "Do you offer ongoing support after go-live?",
        answer:
          "Yes — our managed services cover application support, performance optimization, training, and preventive maintenance.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-md) px-4 sm:px-6 lg:px-8">
          {faqGroups.map((group, gi) => (
            <FadeIn key={group.group} delay={gi * 0.05} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-navy">{group.group}</h2>
              <Accordion className="mt-4">
                {group.items.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`${gi}-${i}`}>
                    <AccordionTrigger className="text-left text-navy">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-muted">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Komfram Technologies collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, company, email address, and phone number when you submit a contact form, request a consultation, or apply for a role. We may also collect basic usage data (such as pages visited) through standard analytics tools to understand how our website is used.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to inquiries, schedule consultations, deliver requested services, and improve our website. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Information Sharing",
    body: "We may share information with service providers who help us operate our website and business operations (such as hosting and email delivery), under obligations to protect your data. We do not share your information with third parties for their own marketing purposes.",
  },
  {
    title: "4. Data Security",
    body: "We take reasonable technical and organizational measures to protect the information we hold. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Your Rights",
    body: `You may request access to, correction of, or deletion of your personal information by contacting us at ${siteConfig.email}.`,
  },
  {
    title: "6. Changes to This Policy",
    body: "We may update this policy from time to time. Material changes will be reflected on this page with an updated revision date.",
  },
  {
    title: "7. Contact Us",
    body: `If you have questions about this Privacy Policy, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: August 2026" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-(--breakpoint-md) space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-navy">
                {section.title}
              </h2>
              <p className="mt-2 text-slate-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

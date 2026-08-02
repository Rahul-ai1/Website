import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Komfram Technologies website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.",
  },
  {
    title: "2. Use of Website",
    body: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.",
  },
  {
    title: "3. Intellectual Property",
    body: "All content on this website — including text, graphics, logos, and the Komfram name and marks — is the property of Komfram Technologies Private Limited or its licensors and may not be reproduced without prior written consent.",
  },
  {
    title: "4. No Warranty",
    body: "This website and its content are provided “as is” without warranties of any kind, express or implied. We do not guarantee that the website will be uninterrupted, error-free, or secure.",
  },
  {
    title: "5. Limitation of Liability",
    body: "To the fullest extent permitted by law, Komfram Technologies shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
  },
  {
    title: "6. Third-Party Links",
    body: "This website may contain links to third-party websites. We are not responsible for the content or practices of any linked third-party sites.",
  },
  {
    title: "7. Changes to These Terms",
    body: "We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Governing Law",
    body: "These terms are governed by the laws of India, without regard to conflict of law principles.",
  },
  {
    title: "9. Contact Us",
    body: `If you have questions about these Terms of Service, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: August 2026" />
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

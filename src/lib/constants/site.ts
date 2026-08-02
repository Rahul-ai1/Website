export const siteConfig = {
  name: "Komfram Technologies",
  shortName: "Komfram",
  tagline: "From Complexity to Clarity.",
  description:
    "Komfram Technologies helps businesses simplify operations through ERP implementation, AI automation, cloud solutions, system integration, and business consulting.",
  url: "https://www.komfram.com",
  email: "info@komfram.com",
  phone: "+91 63508 86557",
  address:
    "1-3E, First Floor, Keshav Vihar, Riddhi Siddhi Circle, Gopalpura Bypass, Jaipur, Rajasthan - 302018, India",
  social: {
    linkedin: "https://linkedin.com/company/komfram",
    twitter: "https://twitter.com/komfram",
    github: "https://github.com/komfram",
    youtube: "https://youtube.com/@komfram",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const solutions: NavItem[] = [
  {
    label: "ERP Consulting",
    href: "/solutions/erp-consulting",
    description: "Business process analysis and ERP strategy.",
  },
  {
    label: "ERP Implementation",
    href: "/solutions/erp-implementation",
    description: "End-to-end ERP deployment tailored to your business.",
  },
  {
    label: "AI & Automation",
    href: "/solutions/ai-automation",
    description: "Workflow automation and intelligent business processes.",
  },
  {
    label: "Cloud Solutions",
    href: "/solutions/cloud-solutions",
    description: "Cloud deployment, migration, and infrastructure.",
  },
  {
    label: "Business Intelligence",
    href: "/solutions/business-intelligence",
    description: "Dashboards, KPI reporting, and decision support.",
  },
  {
    label: "System Integration",
    href: "/solutions/system-integration",
    description: "Connect ERP, CRM, and third-party applications.",
  },
];

export const industries: NavItem[] = [
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Retail & eCommerce", href: "/industries/retail-ecommerce" },
  { label: "Wholesale & Distribution", href: "/industries/wholesale-distribution" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Education", href: "/industries/education" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "ERP Consulting", href: "/solutions/erp-consulting" },
    { label: "ERP Implementation", href: "/solutions/erp-implementation" },
    { label: "AI & Automation", href: "/solutions/ai-automation" },
    { label: "Cloud Solutions", href: "/solutions/cloud-solutions" },
    { label: "Business Intelligence", href: "/solutions/business-intelligence" },
    { label: "Managed Support", href: "/solutions/managed-support" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "FAQs", href: "/resources/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} satisfies Record<string, NavItem[]>;

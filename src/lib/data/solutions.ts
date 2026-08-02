import { Layers, Cpu, Cloud, BarChart3, Share2, Headset, type LucideIcon } from "lucide-react";

export type Solution = {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  overview: string;
  services: string[];
  outcomes: string[];
  crossSell: string[];
};

export const solutionsData: Solution[] = [
  {
    slug: "erp-consulting",
    icon: Layers,
    name: "ERP Consulting",
    shortDescription: "Business process analysis and ERP strategy.",
    overview:
      "Modern businesses need integrated systems to manage finance, inventory, procurement, manufacturing, sales, human resources, and customer relationships. Komfram helps organizations plan ERP initiatives that create visibility, improve collaboration, and support long-term growth.",
    services: [
      "Business process analysis",
      "ERP strategy & roadmap",
      "Vendor & platform evaluation",
      "Change management planning",
      "ROI & business case development",
    ],
    outcomes: [
      "Clear digital transformation roadmap",
      "Reduced implementation risk",
      "Alignment between technology and business goals",
      "Stakeholder buy-in across departments",
    ],
    crossSell: ["erp-implementation", "business-intelligence", "system-integration"],
  },
  {
    slug: "erp-implementation",
    icon: Layers,
    name: "ERP Implementation",
    shortDescription: "End-to-end ERP deployment tailored to your business.",
    overview:
      "Komfram helps organizations implement ERP systems end-to-end — from configuration through go-live — that create visibility, improve collaboration, and support long-term growth across finance, inventory, procurement, manufacturing, sales, and HR.",
    services: [
      "ERP implementation & migration",
      "ERP customization",
      "Workflow automation",
      "Report & dashboard development",
      "User training",
      "Post-go-live support",
    ],
    outcomes: [
      "Improved operational efficiency",
      "Real-time reporting",
      "Better decision-making",
      "Reduced manual work",
      "Higher data accuracy",
      "Scalable business processes",
    ],
    crossSell: ["ai-automation", "business-intelligence", "managed-support"],
  },
  {
    slug: "ai-automation",
    icon: Cpu,
    name: "AI & Automation",
    shortDescription: "Workflow automation and intelligent business processes.",
    overview:
      "Artificial intelligence enables businesses to automate repetitive work, gain predictive insights, and improve decision-making. Komfram applies AI where it delivers practical business value — not as a novelty, but as a tool for measurable efficiency.",
    services: [
      "AI workflow automation",
      "Intelligent document processing",
      "AI assistants & chatbots",
      "Predictive analytics",
      "Process automation",
      "AI integration into existing systems",
    ],
    outcomes: [
      "Faster operations",
      "Reduced operational costs",
      "Increased productivity",
      "Improved customer experience",
      "Better forecasting",
    ],
    crossSell: ["erp-implementation", "business-intelligence", "system-integration"],
  },
  {
    slug: "cloud-solutions",
    icon: Cloud,
    name: "Cloud Solutions",
    shortDescription: "Cloud deployment, migration, and infrastructure.",
    overview:
      "Cloud technologies provide flexibility, security, and scalability for modern organizations. Komfram designs and manages cloud environments that support business growth without compromising reliability.",
    services: [
      "Cloud migration",
      "Cloud architecture",
      "Infrastructure optimization",
      "Backup & disaster recovery",
      "Security best practices",
      "Monitoring & maintenance",
    ],
    outcomes: [
      "High availability",
      "Lower infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Business continuity",
    ],
    crossSell: ["managed-support", "system-integration", "ai-automation"],
  },
  {
    slug: "business-intelligence",
    icon: BarChart3,
    name: "Business Intelligence",
    shortDescription: "Dashboards, KPI reporting, and decision support.",
    overview:
      "Data becomes valuable when it supports better decisions. Komfram transforms operational data into actionable insights through dashboards, KPI reporting, and executive-level analytics.",
    services: [
      "KPI dashboards",
      "Executive reporting",
      "Data visualization",
      "Operational analytics",
      "Financial reporting",
      "Inventory analytics",
    ],
    outcomes: [
      "Faster decisions",
      "Better planning",
      "Increased visibility",
      "Performance measurement",
      "Operational transparency",
    ],
    crossSell: ["erp-implementation", "ai-automation", "erp-consulting"],
  },
  {
    slug: "system-integration",
    icon: Share2,
    name: "System Integration",
    shortDescription: "Connect ERP, CRM, and third-party applications.",
    overview:
      "Organizations often use multiple software systems that do not communicate effectively. Komfram integrates business applications to create a connected digital ecosystem — reducing duplicate work and improving data consistency.",
    services: [
      "ERP integrations",
      "CRM integrations",
      "Accounting integrations",
      "Payment gateway integration",
      "API development",
      "Third-party connectivity",
    ],
    outcomes: [
      "Reduced duplicate work",
      "Better data consistency",
      "Automated information flow",
      "Improved customer experience",
    ],
    crossSell: ["cloud-solutions", "business-intelligence", "managed-support"],
  },
  {
    slug: "managed-support",
    icon: Headset,
    name: "Managed Support",
    shortDescription: "Continuous maintenance, optimization, and training.",
    overview:
      "Technology requires continuous optimization. Komfram provides ongoing support to ensure systems remain secure, efficient, and aligned with evolving business needs long after go-live.",
    services: [
      "Application support",
      "Performance optimization",
      "User training",
      "Security reviews",
      "Preventive maintenance",
      "Version upgrades",
    ],
    outcomes: [
      "Reduced downtime",
      "Higher user adoption",
      "Better system performance",
      "Long-term stability",
    ],
    crossSell: ["cloud-solutions", "erp-implementation", "system-integration"],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutionsData.find((s) => s.slug === slug);
}

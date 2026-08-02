import {
  Factory,
  ShoppingCart,
  Truck,
  HeartPulse,
  GraduationCap,
  Ship,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  overview: string;
  challenges: string[];
  solutionSlugs: string[];
  outcomes: string[];
};

export const industriesData: Industry[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    overview:
      "Manufacturers need tight coordination between production planning, inventory, procurement, and quality control. Komfram helps manufacturers connect the shop floor to the back office.",
    challenges: [
      "Disconnected production and inventory data",
      "Manual production planning",
      "Limited visibility into quality and yield",
      "Inefficient procurement cycles",
    ],
    solutionSlugs: ["erp-implementation", "business-intelligence", "system-integration"],
    outcomes: [
      "Real-time production visibility",
      "Reduced material waste",
      "Faster procurement cycles",
      "Improved on-time delivery",
    ],
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    name: "Retail & eCommerce",
    overview:
      "Retail and eCommerce businesses need integrated operations across sales, warehousing, finance, and customer service to compete on speed and experience.",
    challenges: [
      "Inventory visibility across channels",
      "Manual order-to-cash processes",
      "Disconnected point-of-sale and back office",
      "Limited customer data insight",
    ],
    solutionSlugs: ["erp-implementation", "system-integration", "ai-automation"],
    outcomes: [
      "Unified inventory across channels",
      "Faster order fulfillment",
      "Better customer insight",
      "Streamlined finance operations",
    ],
  },
  {
    slug: "wholesale-distribution",
    icon: Truck,
    name: "Wholesale & Distribution",
    overview:
      "Distributors depend on accurate inventory visibility and efficient logistics to protect margins. Komfram helps optimize supply chain operations end-to-end.",
    challenges: [
      "Poor inventory forecasting",
      "Warehouse inefficiencies",
      "Limited supplier collaboration",
      "Manual order processing",
    ],
    solutionSlugs: ["erp-implementation", "business-intelligence", "cloud-solutions"],
    outcomes: [
      "Improved inventory accuracy",
      "Reduced carrying costs",
      "Faster order processing",
      "Better supplier collaboration",
    ],
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    overview:
      "Healthcare organizations need secure, compliant systems that support administrative efficiency without compromising patient care.",
    challenges: [
      "Fragmented administrative systems",
      "Compliance and data security requirements",
      "Manual scheduling and billing",
      "Limited operational reporting",
    ],
    solutionSlugs: ["cloud-solutions", "system-integration", "business-intelligence"],
    outcomes: [
      "Streamlined administrative workflows",
      "Improved data security posture",
      "Better resource utilization",
      "Clearer operational reporting",
    ],
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    overview:
      "Educational institutions need efficient systems for administration, finance, and communication to focus resources on learning outcomes.",
    challenges: [
      "Manual administrative processes",
      "Disconnected finance and operations data",
      "Limited reporting for decision-makers",
      "Legacy systems that are hard to maintain",
    ],
    solutionSlugs: ["erp-consulting", "cloud-solutions", "managed-support"],
    outcomes: [
      "Reduced administrative overhead",
      "Improved financial visibility",
      "Modernized, maintainable systems",
      "Better decision-making data",
    ],
  },
  {
    slug: "logistics",
    icon: Ship,
    name: "Logistics",
    overview:
      "Logistics providers need real-time visibility across fleets, warehouses, and shipments to meet service commitments and control costs.",
    challenges: [
      "Limited shipment visibility",
      "Manual dispatch and routing",
      "Disconnected warehouse and transport systems",
      "Inefficient cost tracking",
    ],
    solutionSlugs: ["system-integration", "ai-automation", "business-intelligence"],
    outcomes: [
      "End-to-end shipment visibility",
      "Optimized routing and dispatch",
      "Lower operational costs",
      "Improved service reliability",
    ],
  },
  {
    slug: "professional-services",
    icon: Briefcase,
    name: "Professional Services",
    overview:
      "Professional services firms need efficient project management, finance, and HR operations to protect margins and deliver client value.",
    challenges: [
      "Manual project and time tracking",
      "Disconnected finance and HR systems",
      "Limited profitability visibility per project",
      "Inefficient resource allocation",
    ],
    solutionSlugs: ["erp-implementation", "business-intelligence", "erp-consulting"],
    outcomes: [
      "Accurate project profitability tracking",
      "Streamlined finance and HR operations",
      "Better resource allocation",
      "Improved client delivery visibility",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industriesData.find((i) => i.slug === slug);
}

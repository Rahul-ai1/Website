import { Layers, Cpu, Cloud, type LucideIcon } from "lucide-react";

export type BlogPost = {
  slug: string;
  category: "ERP" | "AI & Automation" | "Cloud";
  icon: LucideIcon;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "erpnext-transform-business-operations",
    category: "ERP",
    icon: Layers,
    title: "5 Ways ERPNext Can Transform Your Business Operations",
    excerpt:
      "A well-implemented ERP does more than centralize data — it changes how a business makes decisions. Here's where the impact shows up first.",
    date: "2026-05-20",
    readTime: "5 min read",
    content: [
      "Most businesses don't adopt an ERP because they want new software — they adopt one because their existing systems can no longer keep up with how the business actually operates. Spreadsheets drift out of sync, teams re-key the same data into different tools, and by the time a report reaches leadership, it's already out of date.",
      "1. Unified data across departments. When finance, inventory, sales, and procurement share one system of record, there's no more reconciling numbers between tools that disagree with each other.",
      "2. Real-time visibility. Stock levels, order status, and financial position update as transactions happen, not at the end of a manual reporting cycle.",
      "3. Automated workflows. Approvals, reorder points, and routine reports run on rules instead of someone remembering to do them.",
      "4. Better decision-making. Managers work from the same current numbers instead of week-old exports.",
      "5. Scalability. As the business adds locations, product lines, or headcount, the system extends rather than requiring another rebuild.",
      "The businesses that get the most out of ERPNext treat implementation as a process redesign project, not just a software rollout — which is where a structured discovery phase makes the difference.",
    ],
  },
  {
    slug: "ai-automation-driving-business-efficiency",
    category: "AI & Automation",
    icon: Cpu,
    title: "How AI Automation Is Driving Business Efficiency",
    excerpt:
      "AI delivers the most value when it's applied to specific, repetitive bottlenecks — not as a blanket initiative.",
    date: "2026-05-15",
    readTime: "4 min read",
    content: [
      "The businesses seeing real returns from AI aren't the ones chasing every new model release — they're the ones that identified a specific, repetitive bottleneck and automated it well.",
      "Document processing is a common starting point: invoices, purchase orders, and receipts that used to require manual data entry can be extracted and validated automatically, freeing staff for exception handling instead of routine entry.",
      "Predictive analytics is another practical entry point — using historical sales and inventory data to anticipate demand rather than reacting to it after the fact.",
      "The common thread across successful AI automation projects is that they start narrow: one workflow, measured before and after, with a clear efficiency or accuracy gain — then expand from there.",
    ],
  },
  {
    slug: "cloud-solutions-scalable-growth",
    category: "Cloud",
    icon: Cloud,
    title: "Why Cloud Solutions Are Essential for Scalable Growth",
    excerpt:
      "Cloud infrastructure isn't just about cost savings — it's what lets a growing business scale without a proportional increase in IT overhead.",
    date: "2026-05-10",
    readTime: "4 min read",
    content: [
      "For a growing business, on-premise infrastructure creates a specific kind of friction: every increase in scale requires a matching increase in hardware, maintenance, and IT staff time.",
      "Cloud infrastructure decouples growth from infrastructure investment. Compute and storage scale with demand, backups and disaster recovery are built into the platform rather than bolted on, and teams can access systems securely from anywhere.",
      "The transition works best when it's planned deliberately — migrating in phases, validating security and performance at each step, rather than a single high-risk cutover.",
      "Done well, a cloud migration becomes invisible to day-to-day operations — the business simply stops thinking about infrastructure as a constraint.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

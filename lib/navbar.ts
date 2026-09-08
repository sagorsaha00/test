import {
  Cookie,
  CreditCard,
  FileText,
  LockKeyhole,
  Package,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;
export const audiences: {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}[] = [
  {
    title: "Buyer",
    description: "Learn how to search, order, pay and request refunds.",
    href: "/en/help/buying",
    icon: ShoppingBag,
  },
  {
    title: "Seller",
    description: "Learn how to sell products and manage your orders.",
    href: "/en/help/selling",
    icon: Store,
  },
  {
    title: "Rider",
    description: "Everything riders need for safe and successful delivery.",
    href: "/en/help/delivery",
    icon: Truck,
  },
  {
    title: "Restaurant",
    description: "Manage menus, orders, delivery and restaurant operations.",
    href: "/en/help/restaurants",
    icon: Package,
  },
];

export const categories: {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  number: string;
}[] = [
  {
    number: "01",
    title: "Sell on Markood",
    description:
      "Everything sellers need to register, list products, manage orders and grow.",
    href: "/en/help/selling/getting-started",
    icon: Store,
  },
  {
    number: "02",
    title: "Buy on Markood",
    description:
      "Learn how to discover products, place orders, make payments and get support.",
    href: "/en/help/buying/getting-started",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Understand delivery zones, tracking, failed deliveries and responsibilities.",
    href: "/en/help/delivery/how-it-works",
    icon: Truck,
  },
  {
    number: "04",
    title: "Policies",
    description:
      "Read Markood terms, privacy, refund, cancellation and marketplace policies.",
    href: "/en/help/policies/terms",
    icon: ShieldCheck,
  },
];

export const updates = [
  {
    type: "Policy",
    date: "21 Aug 2026",
    title: "New seller return policy",
    description:
      "Updated return rules and responsibilities for marketplace sellers.",
    href: "/en/help/updates/policies",
  },
  {
    type: "Delivery",
    date: "18 Aug 2026",
    title: "New delivery zones",
    description:
      "New delivery areas are now available for selected Markood locations.",
    href: "/en/help/delivery/how-it-works",
  },
  {
    type: "Marketplace",
    date: "12 Aug 2026",
    title: "Updated marketplace rules",
    description:
      "Important updates to product requirements and marketplace standards.",
    href: "/en/help/delivery/seller-responsibilities",
  },
];

export const articles = [
  {
    title: "How do I create a seller account?",
    category: "Selling",
    href: "/en/help/policies/seller-agreement",
  },
  {
    title: "How can I request a refund?",
    category: "Buying",
    href: "/en/help/policies/refund",
  },
  {
    title: "How does delivery work?",
    category: "Delivery",
    href: "/en/help/delivery/how-it-works",
  },
  {
    title: "What products are prohibited?",
    category: "Policies",
    href: "/en/help/updates",
  },
  {
    title: "How can I cancel an order?",
    category: "Orders",
    href: "/en/help/policies/cancellation",
  },
];

export const policies = [
  {
    title: "Terms & Conditions",
    href: "/en/help/policies/terms",
    icon: FileText,
  },
  {
    title: "Delivery Zone",
    href: "/en/help/delivery/zones",
    icon: LockKeyhole,
  },
  {
    title: "Refund Policy",
    href: "/en/help/policies/refund",
    icon: CreditCard,
  },
  {
    title: "Seller Agreement",
    href: "/en/help/policies/seller-agreement",
    icon: Store,
  },
  {
    title: "Order Product",
    href: "/en/help/selling/orders",
    icon: ShieldCheck,
  },
  {
    title: "Cookie Policy",
    href: "/en/help/updates/policies",
    icon: Cookie,
  },
];

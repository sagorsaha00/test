export interface HelpCategoryItem {
  key: string;
  label: string;
}
 

export interface HelpCategory {
  key: string;
  title: string;
  description: string;
  items: HelpCategoryItem[];
}

// Mirrors Header.json so the dashboard always tags posts into a section
// that actually exists in the nav. Update both together.
export const HELP_CATEGORIES: HelpCategory[] = [
  {
    key: "sellOnMarkood",
    title: "Sell on Markood",
    description:
      "Everything sellers need to start, manage and grow their business.",
    items: [
      { key: "gettingStarted", label: "Getting Started" },
      { key: "addProducts", label: "Add Products" },
      { key: "orders", label: "Orders" },
      { key: "pricingFees", label: "Pricing & Fees" },
      { key: "delivery", label: "Shipping & Delivery" },
      { key: "returns", label: "Returns & Refunds" },
    ],
  },
  {
    key: "buyOnMarkood",
    title: "Buy on Markood",
    description:
      "Learn how to discover products, place orders and get support.",
    items: [
      { key: "gettingStarted", label: "Getting Started" },
      { key: "searchOrder", label: "Search & Order" },
      { key: "payments", label: "Payments" },
      { key: "delivery", label: "Delivery" },
      { key: "cancellation", label: "Cancellation" },
      { key: "returns", label: "Returns & Refunds" },
    ],
  },
  {
    key: "delivery",
    title: "Delivery",
    description:
      "Everything about Markood delivery for customers, sellers and riders.",
    items: [
      { key: "howItWorks", label: "How Delivery Works" },
      { key: "zones", label: "Delivery Zones" },
      { key: "sellerResponsibilities", label: "Seller Responsibilities" },
      { key: "riderResponsibilities", label: "Rider Responsibilities" },
      { key: "failedDeliveries", label: "Failed Deliveries" },
      { key: "lostDamagedOrders", label: "Lost & Damaged Orders" },
    ],
  },
  {
    key: "policies",
    title: "Policies & Legal",
    description: "Markood's rules, agreements and important legal policies.",
    items: [
      { key: "terms", label: "Terms & Conditions" },
      { key: "sellerAgreement", label: "Seller Agreement" },
      { key: "refund", label: "Refund Policy" },
      { key: "cancellation", label: "Cancellation Policy" },
    ],
  },
  {
    key: "updates",
    title: "Updates",
    description: "See what's new and what's changed across Markood.",
    items: [
      { key: "whatsNew", label: "What's New" },
      { key: "policyUpdates", label: "Policy Updates" },
      { key: "deliveryUpdates", label: "Delivery Updates" },
      { key: "marketplaceUpdates", label: "Marketplace Updates" },
    ],
  },
];

export function getCategory(key: string) {
  return HELP_CATEGORIES.find((c) => c.key === key);
}

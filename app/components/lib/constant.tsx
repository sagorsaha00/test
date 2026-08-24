import { type Variants } from "framer-motion";
import {
  Eye,
  FileEdit,
  FileText,
  Megaphone,
  ShieldCheck,
  CheckCircle2,
  Store,
  ShoppingBag,
  Truck,
} from "lucide-react";
type Article = {
  id: number;
  title: string;
  category: string;
  audience: string;
  status: "Published" | "Draft";
  updated: string;
  views: string;
};
export const stats = [
  {
    label: "Total Articles",
    value: "48",
    change: "+8.4%",
    icon: FileText,
    description: "Published content",
  },
  {
    label: "Published",
    value: "42",
    change: "+5.2%",
    icon: CheckCircle2,
    description: "Live articles",
  },
  {
    label: "Drafts",
    value: "06",
    change: "+2",
    icon: FileEdit,
    description: "Waiting for review",
  },
  {
    label: "Total Views",
    value: "12.8K",
    change: "+14.6%",
    icon: Eye,
    description: "This month",
  },
];
export const categories = [
  {
    title: "Sell on Markood",
    description: "Seller guides, products, orders and fees",
    icon: Store,
    articles: 12,
  },
  {
    title: "Buy on Markood",
    description: "Buying, payments, returns and refunds",
    icon: ShoppingBag,
    articles: 9,
  },
  {
    title: "Delivery",
    description: "Delivery, riders, zones and failed orders",
    icon: Truck,
    articles: 10,
  },
  {
    title: "Policies & Legal",
    description: "Terms, agreements and marketplace rules",
    icon: ShieldCheck,
    articles: 11,
  },
  {
    title: "Updates",
    description: "Latest changes across Markood",
    icon: Megaphone,
    articles: 6,
  },
];
export const articles: Article[] = [
  {
    id: 1,
    title: "Getting Started with Selling on Markood",
    category: "Sell on Markood",
    audience: "Seller",
    status: "Published",
    updated: "Aug 21, 2026",
    views: "2.4K",
  },
  {
    id: 2,
    title: "How to Add Products",
    category: "Sell on Markood",
    audience: "Seller",
    status: "Published",
    updated: "Aug 20, 2026",
    views: "1.8K",
  },
  {
    id: 3,
    title: "How Markood Delivery Works",
    category: "Delivery",
    audience: "Everyone",
    status: "Published",
    updated: "Aug 19, 2026",
    views: "3.1K",
  },
  {
    id: 4,
    title: "Seller Agreement",
    category: "Policies & Legal",
    audience: "Seller",
    status: "Published",
    updated: "Aug 18, 2026",
    views: "980",
  },
  {
    id: 5,
    title: "Refund Policy",
    category: "Policies & Legal",
    audience: "Everyone",
    status: "Draft",
    updated: "Aug 17, 2026",
    views: "—",
  },
  {
    id: 6,
    title: "Buyer Protection",
    category: "Buy on Markood",
    audience: "Buyer",
    status: "Published",
    updated: "Aug 16, 2026",
    views: "1.2K",
  },
];
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
type UpdateItem = {
  id: number;
  title: string;
  type: string;
  audience: string;
  status: "Published" | "Draft";
  date: string;
};
export const updates: UpdateItem[] = [
  {
    id: 1,
    title: "New seller return rules",
    type: "Policy Update",
    audience: "Seller",
    status: "Published",
    date: "Aug 21, 2026",
  },
  {
    id: 2,
    title: "Updated delivery fees",
    type: "Delivery Update",
    audience: "Everyone",
    status: "Published",
    date: "Aug 20, 2026",
  },
  {
    id: 3,
    title: "New prohibited-product rules",
    type: "Marketplace Update",
    audience: "Seller",
    status: "Published",
    date: "Aug 18, 2026",
  },
  {
    id: 4,
    title: "Marketplace seller improvements",
    type: "Marketplace Update",
    audience: "Seller",
    status: "Draft",
    date: "Aug 17, 2026",
  },
];

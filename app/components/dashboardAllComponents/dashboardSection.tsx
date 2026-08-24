import { motion, type Variants } from "framer-motion";
import {
  Activity,
  Eye,
  FileEdit,
  FileText,
  Megaphone,
  Plus,
  TrendingUp,
  ChevronRight,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Store,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { QuickAction, ActivityItem, StatusBadge } from "../lib/icon";

type Article = {
  id: number;
  title: string;
  category: string;
  audience: string;
  status: "Published" | "Draft";
  updated: string;
  views: string;
};
const stats = [
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
const categories = [
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
const articles: Article[] = [
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
export default function DashboardSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };
  const itemVariants: Variants = {
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
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-sm font-medium text-slate-500">
            Monday, August 24, 2026
          </p>

          <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
            Good afternoon, Admin
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Manage Markood Center content, policies and marketplace updates from
            one place.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] transition group-hover:bg-[#0066FF] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                  <TrendingUp size={10} />
                  {stat.change}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-semibold text-slate-400">
                  {stat.label}
                </p>

                <p className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                  {stat.value}
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Main content */}
      <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.8fr)]">
        <div className="space-y-6">
          {/* Markood Center */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                  Content
                </p>

                <h3 className="mt-1 text-lg font-black text-slate-950">
                  Markood Center
                </h3>
              </div>

              <button className="text-xs font-bold text-[#0066FF] hover:underline">
                Manage content
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.title}
                    className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-slate-50/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-[#0066FF]">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="truncate text-sm font-black text-slate-900">
                          {category.title}
                        </h4>

                        <ChevronRight
                          size={15}
                          className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0066FF]"
                        />
                      </div>

                      <p className="mt-1 truncate text-[11px] text-slate-400">
                        {category.description}
                      </p>

                      <p className="mt-2 text-[10px] font-bold text-slate-500">
                        {category.articles} articles
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Recent Articles */}
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.025)]"
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                  Content activity
                </p>

                <h3 className="mt-1 text-lg font-black text-slate-950">
                  Recent Articles
                </h3>
              </div>

              <button className="text-xs font-bold text-[#0066FF] hover:underline">
                View all
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {articles.slice(0, 4).map((article) => (
                <div
                  key={article.id}
                  className="flex items-center gap-4 p-5 transition hover:bg-slate-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                    <FileText size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {article.title}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      {article.category} · Updated {article.updated}
                    </p>
                  </div>

                  <StatusBadge status={article.status} />

                  <ChevronRight
                    size={16}
                    className="hidden text-slate-300 sm:block"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right column */}
        {/* <div className="space-y-6">
          
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)]"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                Shortcuts
              </p>

              <h3 className="mt-1 text-lg font-black">Quick Actions</h3>
            </div>

            <div className="mt-5 space-y-2">
              <QuickAction
                icon={Plus}
                title="Create Article"
                description="Add new help content"
              />

              <QuickAction
                icon={Megaphone}
                title="Publish Update"
                description="Notify your marketplace"
              />

              <QuickAction
                icon={ShieldCheck}
                title="Manage Policies"
                description="Review legal content"
              />

              <QuickAction
                icon={Eye}
                title="Preview Center"
                description="View public help center"
              />
            </div>
          </motion.section>

          
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                  Activity
                </p>

                <h3 className="mt-1 text-lg font-black">Recent Activity</h3>
              </div>

              <Activity size={18} className="text-slate-300" />
            </div>

            <div className="mt-5 space-y-5">
              <ActivityItem
                icon={FileEdit}
                title="Refund Policy updated"
                time="24 minutes ago"
              />

              <ActivityItem
                icon={Megaphone}
                title="Delivery update published"
                time="2 hours ago"
              />

              <ActivityItem
                icon={FileText}
                title="Seller Agreement edited"
                time="Yesterday"
              />

              <ActivityItem
                icon={ShieldCheck}
                title="Terms version 1.2 published"
                time="3 days ago"
              />
            </div>
          </motion.section>
        </div> */}
      </div>
    </motion.div>
  );
}

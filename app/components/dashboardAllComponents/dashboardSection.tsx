"use client";

import { motion, type Variants } from "framer-motion";
import {
  Eye,
  FileEdit,
  FileText,
  Megaphone,
  TrendingUp,
  ChevronRight,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Store,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { ElementType } from "react";
import { useAllPosts } from "@/lib/getData";
import { Article } from "@/lib/type";

type ApiResponse = {
  success: boolean;
  data: Article[];
  message?: string;
};

type CategoryItem = {
  key: string;
  label: string;
};

type CategoryConfig = {
  key: string;
  title: string;
  description: string;
  icon: ElementType;
  items: CategoryItem[];
};

const categoryConfig: CategoryConfig[] = [
  {
    key: "sellOnMarkood",
    title: "Sell on Markood",
    description:
      "Everything sellers need to start, manage and grow their business.",
    icon: Store,
    items: [
      {
        key: "gettingStarted",
        label: "Getting Started",
      },
      {
        key: "addProducts",
        label: "Add Products",
      },
      {
        key: "orders",
        label: "Orders",
      },
      {
        key: "pricingFees",
        label: "Pricing & Fees",
      },
      {
        key: "delivery",
        label: "Shipping & Delivery",
      },
      {
        key: "returns",
        label: "Returns & Refunds",
      },
    ],
  },

  {
    key: "buyOnMarkood",
    title: "Buy on Markood",
    description:
      "Learn how to discover products, place orders and get support.",
    icon: ShoppingBag,
    items: [
      {
        key: "gettingStarted",
        label: "Getting Started",
      },
      {
        key: "searchOrder",
        label: "Search & Order",
      },
      {
        key: "payments",
        label: "Payments",
      },
      {
        key: "delivery",
        label: "Delivery",
      },
      {
        key: "cancellation",
        label: "Cancellation",
      },
      {
        key: "returns",
        label: "Returns & Refunds",
      },
    ],
  },

  {
    key: "delivery",
    title: "Delivery",
    description:
      "Everything about Markood delivery for customers, sellers and riders.",
    icon: Truck,
    items: [
      {
        key: "howItWorks",
        label: "How Delivery Works",
      },
      {
        key: "zones",
        label: "Delivery Zones",
      },
      {
        key: "sellerResponsibilities",
        label: "Seller Responsibilities",
      },
      {
        key: "riderResponsibilities",
        label: "Rider Responsibilities",
      },
      {
        key: "failedDeliveries",
        label: "Failed Deliveries",
      },
      {
        key: "lostDamagedOrders",
        label: "Lost & Damaged Orders",
      },
    ],
  },

  {
    key: "policies",
    title: "Policies & Legal",
    description: "Markood's rules, agreements and important legal policies.",
    icon: ShieldCheck,
    items: [
      {
        key: "terms",
        label: "Terms & Conditions",
      },
      {
        key: "sellerAgreement",
        label: "Seller Agreement",
      },
      {
        key: "refund",
        label: "Refund Policy",
      },
      {
        key: "cancellation",
        label: "Cancellation Policy",
      },
    ],
  },

  {
    key: "updates",
    title: "Updates",
    description: "See what's new and what's changed across Markood.",
    icon: Megaphone,
    items: [
      {
        key: "whatsNew",
        label: "What's New",
      },
      {
        key: "policyUpdates",
        label: "Policy Updates",
      },
      {
        key: "deliveryUpdates",
        label: "Delivery Updates",
      },
      {
        key: "marketplaceUpdates",
        label: "Marketplace Updates",
      },
    ],
  },
];

export default function DashboardSection() {
  const router = useRouter();

  const { data: response, isLoading, isError, error, refetch } = useAllPosts();

  const articles: Article[] = Array.isArray(response)
    ? response
    : ((response as ApiResponse)?.data ?? []);

  console.log("Dashboard response:", response);
  console.log("Dashboard articles:", articles);

  const totalArticles = articles.length;

  const publishedArticles = articles.filter(
    (article) => (article.status ?? "published") === "published",
  ).length;

  const draftArticles = articles.filter(
    (article) => article.status === "draft",
  ).length;

  const categories = categoryConfig.map((category) => {
    const categoryArticles = articles.filter(
      (article) => article.categoryKey === category.key,
    );

    const items = category.items.map((item) => {
      const itemArticles = articles.filter(
        (article) =>
          article.categoryKey === category.key && article.itemKey === item.key,
      );

      return {
        ...item,
        articles: itemArticles.length,
        articleList: itemArticles,
      };
    });

    return {
      ...category,
      articles: categoryArticles.length,
      items,
    };
  });

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

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <RefreshCw size={18} className="animate-spin" />
          Loading Markood content...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[1500px] px-5 py-10">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
          <p className="font-bold text-red-600">Failed to load articles</p>

          <p className="mt-2 text-sm text-red-500">
            {error instanceof Error ? error.message : "Something went wrong"}
          </p>

          <button
            onClick={() => refetch()}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <RefreshCw size={15} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9"
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-sm font-medium text-slate-500">
            {new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date())}
          </p>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Manage Markood Center content, policies and marketplace updates from
            one place.
          </p>
        </div>
      </motion.div>

      {/* =================================================
          STATS
      ================================================= */}

      <motion.div
        variants={itemVariants}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <StatCard
          label="Total Articles"
          value={totalArticles.toString()}
          change="Live"
          description="All articles"
          icon={FileText}
        />

        <StatCard
          label="Published"
          value={publishedArticles.toString()}
          change="Live"
          description="Published content"
          icon={CheckCircle2}
        />

        <StatCard
          label="Drafts"
          value={draftArticles.toString()}
          change="Pending"
          description="Waiting for review"
          icon={FileEdit}
        />

        <StatCard
          label="Total Views"
          value="—"
          change="N/A"
          description="Views not available"
          icon={Eye}
        />
      </motion.div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.8fr)]">
        <div className="space-y-6">
          {/* =================================================
              MARKOOD CENTER
          ================================================= */}

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

                <p className="mt-1 text-sm text-slate-400">
                  Content organized by category and help topic.
                </p>
              </div>

              <span className="text-xs font-bold text-slate-400">
                {totalArticles} {totalArticles === 1 ? "article" : "articles"}
              </span>
            </div>

            {/* =================================================
                CATEGORIES
            ================================================= */}

            <div className="mt-6 space-y-5">
              {categories.map((category) => {
                const CategoryIcon = category.icon;

                return (
                  <div
                    key={category.key}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 shadow-sm">
                          <CategoryIcon size={24} />
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-lg font-black text-slate-950">
                            {category.title}
                          </h4>

                          <p className="mt-1 text-sm text-slate-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0066FF]">
                        {category.articles}{" "}
                        {category.articles === 1 ? "article" : "articles"}
                      </span>
                    </div>

                    {/* =================================================
                        ITEMS
                    ================================================= */}

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {category.items.map((item) => {
                        const itemCount = articles.filter(
                          (article) =>
                            article.categoryKey === category.key &&
                            article.itemKey === item.key,
                        ).length;

                        return (
                          <button
                            key={`${category.key}-${item.key}`}
                            type="button"
                            onClick={() =>
                              router.push(
                                `/articles?category=${category.key}&item=${item.key}`,
                              )
                            }
                            className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-slate-50/50"
                          >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-blue-50 group-hover:text-[#0066FF]">
                              <FileText size={18} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <h5 className="truncate text-sm font-black text-slate-800">
                                  {item.label}
                                </h5>

                                <ChevronRight
                                  size={16}
                                  className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0066FF]"
                                />
                              </div>

                              <p className="mt-1 text-[11px] text-slate-400">
                                {itemCount}{" "}
                                {itemCount === 1 ? "article" : "articles"}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        </div>

        <motion.section
          variants={itemVariants}
          className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] sm:p-6"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
            Content Overview
          </p>

          <h3 className="mt-1 text-lg font-black text-slate-950">
            Article Breakdown
          </h3>

          <div className="mt-6 space-y-5">
            {categories.map((category) => {
              const percentage =
                totalArticles > 0
                  ? Math.round((category.articles / totalArticles) * 100)
                  : 0;

              return (
                <div key={category.key}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {category.title}
                    </span>

                    <span className="text-[11px] text-slate-400">
                      {category.articles}
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#0066FF] transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {percentage}% of total content
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  description: string;
  icon: ElementType;
};

function StatCard({
  label,
  value,
  change,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] transition group-hover:bg-[#0066FF] group-hover:text-white">
          <Icon size={18} />
        </div>

        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
          <TrendingUp size={10} />
          {change}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold text-slate-400">{label}</p>

        <p className="mt-1 text-2xl font-black tracking-tight text-slate-950">
          {value}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">{description}</p>
      </div>
    </div>
  );
}

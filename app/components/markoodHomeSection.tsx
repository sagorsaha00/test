"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cookie,
  CreditCard,
  FileText,
  LifeBuoy,
  LockKeyhole,
  Package,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import MarkoodVideoGuides from "./markoodVideoGuid";

type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

const audiences: {
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

const categories: {
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

const updates = [
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

const articles = [
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

const policies = [
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



const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function MarkoodCenter() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-black tracking-[0.2em] text-[#0066FF]">
              START HERE
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              How can we help?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Choose what best describes what you are trying to do.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} variants={scaleIn}>
                  <Link
                    href={item.href}
                    className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                  >
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition-all duration-700 group-hover:scale-[2]" />

                    <div className="relative">
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white"
                      >
                        <Icon size={24} />
                      </motion.div>

                      <h3 className="mt-7 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#0066FF]">
                        Explore
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-xs font-black tracking-[0.2em] text-[#0066FF]">
              HOW MARKOOD WORKS
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
              Everything connected.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              From discovering a product to receiving it at your door, Markood
              keeps every step simple and transparent.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <div className="absolute left-[10%] right-[10%] top-14 hidden h-px bg-slate-200 lg:block">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="h-full origin-left bg-[#0066FF]"
              />
            </div>

            <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
              {[
                {
                  icon: ShoppingBag,
                  title: "Discover",
                  text: "Find what you need.",
                },
                {
                  icon: Store,
                  title: "Sell",
                  text: "Verified sellers.",
                },
                {
                  icon: CreditCard,
                  title: "Pay",
                  text: "Secure payments.",
                },
                {
                  icon: Truck,
                  title: "Deliver",
                  text: "Track every step.",
                },
                {
                  icon: ShieldCheck,
                  title: "Protected",
                  text: "Support when needed.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.6,
                    }}
                    className="relative text-center"
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-[#F5F9FF] text-[#0066FF] shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
                    >
                      <Icon size={28} />
                    </motion.div>

                    <h3 className="mt-6 font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-black tracking-[0.2em] text-[#0066FF]">
              EXPLORE
            </span>

            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                  Explore Markood Center
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  Browse guides and resources designed for every part of the
                  Markood experience.
                </p>
              </div>

              
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} variants={scaleIn}>
                  <Link
                    href={item.href}
                    className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-9"
                  >
                    <div className="absolute right-5 top-3 text-7xl font-black text-slate-100 transition-colors group-hover:text-blue-50">
                      {item.number}
                    </div>

                    <div className="relative flex items-start justify-between gap-6">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-all group-hover:bg-[#0066FF] group-hover:text-white">
                          <Icon size={22} />
                        </div>

                        <h3 className="mt-6 text-xl font-black text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#0066FF]">
                          Explore section
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-2"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

   

      <MarkoodVideoGuides/> 

     

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-xs font-black tracking-[0.2em] text-[#0066FF]">
              CHANGELOG
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
              What&apos;s new at Markood?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Product improvements, policy changes and important updates.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-200 sm:left-6" />

            <div className="space-y-8">
              {updates.map((update, index) => (
                <motion.div
                  key={update.title}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  className="relative pl-12 sm:pl-16"
                >
                  <div className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-[#0066FF] ring-4 ring-blue-500/10 sm:left-[21px]" />

                  <Link
                    href={update.href}
                    className="group block rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#0066FF]">
                        {update.type}
                      </span>

                      <span className="text-xs text-slate-400">
                        {update.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-950">
                      {update.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {update.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0066FF]">
                      Read update
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-2"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR ARTICLES
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <span className="text-xs font-black tracking-[0.2em] text-[#0066FF]">
                KNOWLEDGE BASE
              </span>

              <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                Popular articles
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Quick answers to the questions people ask most.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white"
          >
            {articles.map((article, index) => (
              <motion.div key={article.title} variants={fadeUp}>
                <Link
                  href={article.href}
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-slate-50 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-[#0066FF]">
                    <BookOpen size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-slate-900">
                      {article.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {article.category}
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className="shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0066FF]"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          POLICY CENTER
      ===================================================== */}

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20"
        >
          {/* Animated glow */}

          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_350px]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-400 backdrop-blur">
                  <ShieldCheck size={23} />
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
                  POLICY CENTER
                </span>
              </div>

              <h2 className="mt-7 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Transparency is part of the product.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Understand exactly how Markood works, how your data is handled,
                and what your rights are.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {policies.map((policy) => (
                  <Link
                    key={policy.title}
                    href={policy.href}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    {policy.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Protection card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  Markood Protection
                </span>

                <ShieldCheck size={20} className="text-blue-400" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Secure payments",
                  "Verified sellers",
                  "Buyer protection",
                  "Transparent policies",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-400" />

                    <span className="text-sm text-slate-300">{item}</span>

                    <CheckCircle2
                      size={15}
                      className="ml-auto text-green-400"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          SUPPORT CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:py-28">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0066FF] shadow-xl shadow-blue-500/10">
              <LifeBuoy size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-black text-slate-950 sm:text-4xl">
              Still need help?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Can&apos;t find what you are looking for? Our support team is
              ready to help.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0052CC]"
              >
                Contact Support
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/help"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <CircleHelp size={17} />
                Browse Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock3,
  FileText,
  HelpCircle,
  Lock,
  MessageCircle,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =========================================================
   DATA
========================================================= */

const categories = [
  {
    title: "For Buyers",
    description: "Learn how to shop, pay, track orders and request refunds.",
    icon: ShoppingBag,
    count: "24 articles",
    number: "01",
  },
  {
    title: "For Sellers",
    description:
      "Everything you need to sell products successfully on Markood.",
    icon: Store,
    count: "32 articles",
    number: "02",
  },
  {
    title: "For Riders",
    description:
      "Delivery guides, orders, earnings and rider responsibilities.",
    icon: Truck,
    count: "18 articles",
    number: "03",
  },
  {
    title: "For Restaurants",
    description: "Manage your restaurant, menu, orders and deliveries.",
    icon: Package,
    count: "21 articles",
    number: "04",
  },
];

const popularArticles = [
  {
    title: "How do I create a seller account?",
    category: "SELLING",
  },
  {
    title: "How can I request a refund?",
    category: "BUYING",
  },
  {
    title: "How does delivery work?",
    category: "DELIVERY",
  },
  {
    title: "How do I add a product?",
    category: "SELLING",
  },
  {
    title: "What products are prohibited?",
    category: "POLICIES",
  },
  {
    title: "How can I cancel an order?",
    category: "ORDERS",
  },
];

const updates = [
  {
    date: "21 AUG 2026",
    title: "Updated seller return policy",
    description:
      "New guidelines for product returns and seller responsibilities.",
  },
  {
    date: "18 AUG 2026",
    title: "New delivery zones",
    description: "Markood delivery coverage has been expanded to new areas.",
  },
  {
    date: "12 AUG 2026",
    title: "Marketplace rules updated",
    description:
      "Important changes to prohibited products and marketplace rules.",
  },
];

const policies = [
  {
    title: "Terms & Conditions",
    icon: FileText,
  },
  {
    title: "Privacy Policy",
    icon: Lock,
  },
  {
    title: "Refund Policy",
    icon: ShieldCheck,
  },
  {
    title: "Seller Agreement",
    icon: Users,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff]">
        {/* Animated background blobs */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"
        />

        <div className="pointer-events-none absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        {/* Grid pattern */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0066ff 1px, transparent 1px), linear-gradient(90deg, #0066ff 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
          {/* Badge */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex justify-center"
          >
            <div className="group inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-[0_10px_35px_rgba(0,102,255,0.08)] backdrop-blur-xl">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
                <HelpCircle size={13} />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Markood Help Center
              </span>

              <Sparkles
                size={13}
                className="text-[#0066FF] transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-8 max-w-4xl text-center"
          >
            <h1 className="text-4xl font-black tracking-[-2px] text-slate-950 sm:text-5xl lg:text-7xl">
              How can we
              <br />
              <span className="bg-gradient-to-r from-[#0066FF] via-[#2563EB] to-[#4F46E5] bg-clip-text text-transparent">
                help you today?
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Find answers, discover how Markood works, and get the guidance you
              need to buy, sell, deliver and grow.
            </p>
          </motion.div>

          {/* Search */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-10 max-w-2xl"
          >
            <div className="group relative rounded-[22px] border border-slate-200/80 bg-white/90 p-2 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-500 focus-within:border-blue-300 focus-within:shadow-[0_30px_90px_rgba(0,102,255,0.16)]">
              <div className="flex items-center">
                <div className="ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-focus-within:scale-105">
                  <Search size={20} />
                </div>

                <input
                  type="text"
                  placeholder="Search Markood Help..."
                  className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  className="hidden h-12 rounded-2xl bg-slate-950 px-7 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0066FF] hover:shadow-[0_10px_30px_rgba(0,102,255,0.25)] sm:block"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Popular searches */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="mr-1 text-xs font-semibold text-slate-400">
              Popular:
            </span>

            {["Seller account", "Refunds", "Delivery", "Payments"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0066FF]"
                >
                  {item}
                </button>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0066FF]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                Find your answer
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              What can we help you with?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Choose a topic to explore guides and answers designed for every
              part of the Markood experience.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-shadow duration-500 group-hover:shadow-[0_25px_70px_rgba(0,102,255,0.10)]">
                    {/* Glow */}

                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon size={21} />
                        </div>

                        <span className="text-[10px] font-black text-slate-200">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="mt-7 text-lg font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          {item.count}
                        </span>

                        <ArrowRight
                          size={16}
                          className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0066FF]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          POPULAR ARTICLES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0066FF]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                Quick answers
              </span>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                  Popular articles
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  Answers to questions our community asks most often.
                </p>
              </div>

              <button
                type="button"
                className="group flex items-center gap-2 self-start text-sm font-bold text-[#0066FF]"
              >
                Explore articles
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="relative mt-10 grid gap-3 md:grid-cols-2"
          >
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                variants={scaleIn}
                whileHover={{
                  x: 5,
                }}
                className="group flex cursor-pointer items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#0066FF]">
                    <BookOpen size={17} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-slate-800">
                      {article.title}
                    </h3>

                    <span className="mt-1 block text-[10px] font-black tracking-wider text-slate-400">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-blue-50">
                  <ChevronRight
                    size={16}
                    className="text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#0066FF]"
                  />
                </div>

                <span className="absolute hidden">{index}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHAT'S NEW
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                  Latest updates
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-4xl">
                What's new at
                <br />
                <span className="text-[#0066FF]">Markood?</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                Stay up to date with product improvements, marketplace changes,
                policy updates and new features.
              </p>

              <motion.div
                animate={floatAnimation}
                className="mt-10 hidden h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-[#0066FF] shadow-[0_15px_40px_rgba(0,102,255,0.10)] sm:flex"
              >
                <Sparkles size={30} />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="space-y-4"
            >
              {updates.map((update, index) => (
                <motion.div
                  key={update.title}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,102,255,0.09)]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#0066FF] opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition-all duration-300 group-hover:bg-[#0066FF]">
                      0{index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-slate-400">
                        <Clock3 size={12} />
                        {update.date}
                      </div>

                      <h3 className="mt-3 text-base font-black text-slate-950">
                        {update.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {update.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0066FF]"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0066FF]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                Markood policies
              </span>

              <span className="h-px w-8 bg-[#0066FF]" />
            </div>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
              Policies & legal
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Important information about using Markood safely, responsibly and
              confidently.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {policies.map((policy) => {
              const Icon = policy.icon;

              return (
                <motion.div
                  key={policy.title}
                  variants={scaleIn}
                  whileHover={{
                    y: -6,
                  }}
                  className="group cursor-pointer rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,102,255,0.09)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white">
                      <Icon size={17} />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      {policy.title}
                    </span>

                    <ChevronRight
                      size={15}
                      className="ml-auto shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#0066FF]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[34px] bg-slate-950 px-7 py-14 text-center shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-12"
          >
            {/* Animated glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.15, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
            />

            <div className="relative">
              <motion.div
                animate={floatAnimation}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-300 backdrop-blur-xl"
              >
                <MessageCircle size={27} />
              </motion.div>

              <h2 className="mt-7 text-2xl font-black text-white sm:text-4xl">
                Still need help?
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400">
                Can't find what you're looking for? Our support team is here to
                help you find the right answer.
              </p>

              <button
                type="button"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,102,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d74ff] hover:shadow-[0_18px_45px_rgba(0,102,255,0.35)]"
              >
                Contact Markood Support
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

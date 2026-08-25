"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  HelpCircle,
  PackageSearch,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  UserRound,
  XCircle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const topics = [
  {
    icon: UserRound,
    number: "01",
    title: "Getting Started",
    description:
      "Create your Markood account, set up your profile and start shopping with confidence.",
    articles: [
      "Create your account",
      "Verify your account",
      "Set up your profile",
      "Manage your information",
    ],
  },
  {
    icon: Search,
    number: "02",
    title: "Search & Order",
    description:
      "Find products, compare options and learn how to place your first order.",
    articles: [
      "Find products",
      "View product details",
      "Add products to cart",
      "Place an order",
    ],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Payments",
    description:
      "Understand payment methods, payment confirmation and what to do when a payment fails.",
    articles: [
      "Available payment methods",
      "How payments work",
      "Payment failed",
      "Payment security",
    ],
  },
  {
    icon: XCircle,
    number: "04",
    title: "Cancellation",
    description:
      "Learn when you can cancel an order and what happens after cancellation.",
    articles: [
      "Cancel an order",
      "Cancellation eligibility",
      "Cancellation after processing",
      "Check cancellation status",
    ],
  },
  {
    icon: RotateCcw,
    number: "05",
    title: "Returns & Refunds",
    description:
      "Understand returns, refund eligibility and how to request a refund.",
    articles: [
      "Return a product",
      "Return eligibility",
      "Request a refund",
      "Track refund status",
    ],
  },
];

const quickAnswers = [
  {
    icon: ShoppingCart,
    title: "How do I place an order?",
    text: "Find a product, add it to your cart and continue through checkout.",
  },
  {
    icon: CreditCard,
    title: "What payment methods are available?",
    text: "Learn about the payment options available when placing your order.",
  },
  {
    icon: XCircle,
    title: "Can I cancel my order?",
    text: "Cancellation depends on the current status of your order.",
  },
  {
    icon: RotateCcw,
    title: "How do refunds work?",
    text: "Learn about return eligibility and the refund process.",
  },
];

export default function BuyingHelpCenter() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f6f9ff]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-indigo-200/30 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-1/2 top-20 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          {/* Breadcrumb */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 text-xs font-medium text-slate-400"
          >
            <span>Help Center</span>

            <ChevronRight size={13} />

            <span className="font-bold text-slate-600">Buying</span>
          </motion.div>

          {/* Hero content */}
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
                  <ShoppingBag size={13} />
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Markood Buying Guide
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl">
                Everything you need
                <br />
                to <span className="text-[#0066FF]">shop with confidence.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Learn how to discover products, place orders, manage payments,
                cancel purchases and request refunds on Markood.
              </p>

              {/* Search */}
              <div className="mt-8 max-w-2xl">
                <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all focus-within:border-blue-300 focus-within:shadow-[0_25px_70px_rgba(0,102,255,0.12)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Search size={19} />
                  </div>

                  <input
                    type="text"
                    placeholder="Search buying help..."
                    className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm font-medium outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    className="hidden h-11 rounded-xl bg-[#0066FF] px-6 text-sm font-bold text-white transition hover:bg-[#0052cc] sm:block"
                  >
                    Search
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative rounded-[34px] border border-white bg-white p-4 shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
                <div className="rounded-[26px] bg-slate-950 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Shopping journey
                      </p>

                      <p className="mt-1 text-lg font-black text-white">
                        Simple & secure
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <ShieldCheck size={21} />
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      {
                        icon: Search,
                        title: "Discover",
                      },
                      {
                        icon: ShoppingCart,
                        title: "Add to cart",
                      },
                      {
                        icon: CreditCard,
                        title: "Pay securely",
                      },
                      {
                        icon: BadgeCheck,
                        title: "Order confirmed",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.25 + index * 0.1,
                          }}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                            <Icon size={17} />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-bold text-white">
                              {item.title}
                            </p>

                            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                  delay: 0.4 + index * 0.1,
                                  duration: 0.7,
                                }}
                                className="h-full rounded-full bg-blue-500"
                              />
                            </div>
                          </div>

                          <CheckCircle2
                            size={17}
                            className="text-emerald-400"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      Safe shopping
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Built for buyers
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOPICS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Explore buying
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Everything about buying
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Choose a topic below to learn more about shopping on Markood.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <motion.div
                  key={topic.title}
                  variants={cardAnimation}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={22} />
                      </div>

                      <span className="text-xs font-black tracking-widest text-slate-200">
                        {topic.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-950">
                      {topic.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                      {topic.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      {topic.articles.map((article) => (
                        <div
                          key={article}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-[#0066FF]"
                          />

                          <span className="text-xs font-semibold text-slate-600">
                            {article}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-black text-[#0066FF]">
                      Explore topic
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          QUICK ANSWERS
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Quick answers
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Common buyer questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {quickAnswers.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardAnimation}
                  whileHover={{ y: -4 }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0066FF]">
                        Learn more
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1"
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

      {/* =========================================================
          BUYER SAFETY
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[34px] bg-slate-950 px-7 py-12 sm:px-12 lg:px-16"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <ShieldCheck size={23} />
                </div>

                <h2 className="mt-6 max-w-2xl text-2xl font-black text-white sm:text-3xl">
                  Shop smarter. Stay protected.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  Always review product information before ordering, use secure
                  payment methods and keep your order information available if
                  you need support.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                    <BadgeCheck size={14} className="text-blue-300" />
                    Verified information
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                    <Banknote size={14} className="text-blue-300" />
                    Secure payments
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                    <BookOpen size={14} className="text-blue-300" />
                    Buyer guides
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden lg:flex"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-[30px] border border-white/10 bg-white/5 backdrop-blur">
                  <ShieldCheck
                    size={58}
                    strokeWidth={1.3}
                    className="text-blue-300"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          HELP CTA
      ========================================================= */}

      <section className="border-t border-slate-100 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
              <HelpCircle size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950">
              Still have a question?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Explore the buying topics above to find detailed guides and
              helpful information about shopping on Markood.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg">
              <ShoppingBag size={16} />
              Explore buying guides
              <ArrowRight size={15} />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

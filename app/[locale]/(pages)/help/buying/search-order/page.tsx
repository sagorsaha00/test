"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDownUp,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleHelp,
  Filter,
  Heart,
  MapPin,
  Package,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
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
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
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

export default function SearchOrderPage() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Search for a product",
      text: "Use the search bar to find products, categories, brands or items you need.",
    },
    {
      number: "02",
      icon: SlidersHorizontal,
      title: "Filter your results",
      text: "Narrow down your results using available filters and sorting options.",
    },
    {
      number: "03",
      icon: Store,
      title: "Review the product",
      text: "Check product information, seller details, price, availability and reviews.",
    },
    {
      number: "04",
      icon: ShoppingBag,
      title: "Place your order",
      text: "Choose your quantity, review your information and confirm your order.",
    },
  ];

  const searchTips = [
    {
      icon: Search,
      title: "Use specific keywords",
      text: "Instead of searching for something broad, use clear product names or descriptions.",
    },
    {
      icon: Filter,
      title: "Use filters",
      text: "Filters can help you quickly narrow down products that match your needs.",
    },
    {
      icon: ArrowDownUp,
      title: "Compare options",
      text: "Review different products before deciding which option works best for you.",
    },
    {
      icon: Heart,
      title: "Save what you like",
      text: "Keep interesting products in mind while comparing your available choices.",
    },
  ];

  const checklist = [
    "Check the product title and description.",
    "Review available images and product details.",
    "Check the seller information.",
    "Compare price and available options.",
    "Confirm quantity before ordering.",
    "Check your delivery information.",
  ];

  const faqs = [
    {
      question: "How do I search for a product?",
      answer:
        "Use the Markood search field and enter the name or description of the product you are looking for. You can then review the available results.",
    },
    {
      question: "How can I find a specific product faster?",
      answer:
        "Use specific keywords and apply relevant filters. A more detailed search phrase can help reduce unrelated results.",
    },
    {
      question: "What should I check before ordering?",
      answer:
        "Review the product information, price, seller details, available options, quantity and delivery information before confirming your order.",
    },
    {
      question: "Can I compare different products?",
      answer:
        "Yes. Review multiple available products and compare their details, pricing, seller information and other available information before making your choice.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">
        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Search size={13} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                  Buying Guide
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-2px] text-slate-950 sm:text-5xl lg:text-6xl">
                Search smarter.
                <br />
                <span className="text-[#0066FF]">Order with confidence.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn how to discover products, compare your options, review
                sellers and place an order on Markood with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Search size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      Discover
                    </p>

                    <p className="text-[10px] text-slate-400">Find products</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <BadgeCheck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">Compare</p>

                    <p className="text-[10px] text-slate-400">Choose wisely</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right visual */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="relative rounded-[32px] border border-slate-200 bg-slate-950 p-5 shadow-[0_35px_100px_rgba(15,23,42,0.18)]">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  {/* Search bar */}

                  <div className="flex items-center gap-3 rounded-2xl bg-white p-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <Search size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-slate-400">Search Markood</p>

                      <p className="text-sm font-bold text-slate-800">
                        Wireless headphones
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#0066FF] px-4 py-2.5 text-xs font-bold text-white">
                      Search
                    </div>
                  </div>

                  {/* Result */}

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                        <ShoppingBag size={27} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                          Featured result
                        </p>

                        <h3 className="mt-1 truncate text-sm font-bold text-white">
                          Premium Wireless Headphones
                        </h3>

                        <div className="mt-2 flex items-center gap-2">
                          <Star
                            size={12}
                            className="fill-yellow-400 text-yellow-400"
                          />

                          <span className="text-[11px] text-slate-400">
                            Highly rated
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <div className="flex-1 rounded-xl bg-white/10 px-3 py-2">
                        <p className="text-[9px] text-slate-500">SELLER</p>
                        <p className="mt-1 text-xs font-bold text-white">
                          Verified store
                        </p>
                      </div>

                      <div className="flex-1 rounded-xl bg-white/10 px-3 py-2">
                        <p className="text-[9px] text-slate-500">STATUS</p>
                        <p className="mt-1 text-xs font-bold text-emerald-400">
                          Available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-white/[0.06] p-3 text-center">
                      <Filter size={15} className="mx-auto text-blue-300" />
                      <p className="mt-2 text-[9px] font-bold text-slate-400">
                        FILTER
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.06] p-3 text-center">
                      <ArrowDownUp
                        size={15}
                        className="mx-auto text-blue-300"
                      />
                      <p className="mt-2 text-[9px] font-bold text-slate-400">
                        SORT
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.06] p-3 text-center">
                      <BadgeCheck
                        size={15}
                        className="mx-auto text-emerald-300"
                      />
                      <p className="mt-2 text-[9px] font-bold text-slate-400">
                        REVIEW
                      </p>
                    </div>
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
                className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Check size={19} />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-900">
                    Good choice
                  </p>

                  <p className="text-[10px] text-slate-400">Ready to order</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ORDER PROCESS
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              The process
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              From search to order
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Follow these four simple steps to find what you need and place
              your order.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={cardAnimation}
                  whileHover={{
                    y: -7,
                  }}
                  className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-black tracking-wider text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SEARCH TIPS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                <Search size={21} />
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Search like a pro
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                A better search can save time and help you discover products
                that actually match what you are looking for.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <CircleHelp size={19} className="shrink-0 text-[#0066FF]" />

                <p className="text-xs font-semibold leading-6 text-slate-600">
                  Start with the most important words describing the product you
                  want.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={stagger}
              className="grid gap-3 sm:grid-cols-2"
            >
              {searchTips.map((tip) => {
                const Icon = tip.icon;

                return (
                  <motion.div
                    key={tip.title}
                    variants={cardAnimation}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-[22px] border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#0066FF]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-4 text-sm font-black text-slate-900">
                      {tip.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {tip.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT REVIEW
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Before checkout
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Review the product carefully
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Take a moment to verify the important details before placing your
              order.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
          >
            {[
              {
                icon: Package,
                title: "Product information",
                text: "Make sure the product description matches what you need.",
              },
              {
                icon: Store,
                title: "Seller information",
                text: "Review the available information about the seller.",
              },
              {
                icon: Star,
                title: "Reviews and ratings",
                text: "Consider available customer feedback when making your decision.",
              },
              {
                icon: MapPin,
                title: "Delivery information",
                text: "Confirm that your delivery information is accurate.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardAnimation}
                  className={`flex gap-5 p-6 ${
                    index !== 3 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>

                  <Check
                    size={17}
                    className="ml-auto mt-1 shrink-0 text-emerald-500"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CHECKLIST
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Quick checklist
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Ready to place your order?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {checklist.map((item) => (
              <motion.div
                key={item}
                variants={cardAnimation}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-100 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={15} strokeWidth={3} />
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Common questions
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Search & order FAQs
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            className="mt-10 space-y-3"
          >
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                variants={cardAnimation}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-100 hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-slate-900">
                  {faq.question}

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[34px] bg-slate-950 px-7 py-14 text-center shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:px-12"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300"
              >
                <ShoppingBag size={24} />
              </motion.div>

              <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                Find what you need. Order with confidence.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                You now know the basics of searching, comparing and preparing an
                order on Markood.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                Start shopping
                <Sparkles size={15} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

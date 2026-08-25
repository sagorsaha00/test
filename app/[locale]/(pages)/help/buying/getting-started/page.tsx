"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CreditCard,
  Headphones,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRound,
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
      staggerChildren: 0.09,
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

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">
        {/* Decorative background */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          {/* Small label */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-7 flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
              <ShoppingBag size={17} />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Buying Guide
              </p>

              <p className="text-xs font-medium text-slate-400">
                Markood Help Center
              </p>
            </div>
          </motion.div>

          {/* Hero content */}

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Sparkles size={13} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF]">
                  Start shopping with confidence
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-2px] text-slate-950 sm:text-5xl lg:text-6xl">
                Getting started with{" "}
                <span className="text-[#0066FF]">Markood.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
                Everything you need to know before placing your first order.
                Discover products, choose a seller, make a secure payment and
                follow your order from checkout to delivery.
              </p>

              {/* Mini stats */}

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-bold text-slate-400">SIMPLE</p>
                  <p className="mt-1 text-sm font-black text-slate-900">
                    Easy shopping
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-bold text-slate-400">SECURE</p>
                  <p className="mt-1 text-sm font-black text-slate-900">
                    Protected payments
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-bold text-slate-400">TRACKED</p>
                  <p className="mt-1 text-sm font-black text-slate-900">
                    Order updates
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium visual */}

            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              {/* Main card */}

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-6 shadow-[0_35px_100px_rgba(15,23,42,0.18)]">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Your shopping journey
                      </p>

                      <h3 className="mt-2 text-xl font-black text-white">
                        Start → Shop → Receive
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                      <ShoppingBag size={20} />
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {[
                      {
                        icon: Search,
                        title: "Find a product",
                        text: "Search and discover what you need.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Choose safely",
                        text: "Review sellers and product details.",
                      },
                      {
                        icon: CreditCard,
                        title: "Pay securely",
                        text: "Complete your order with confidence.",
                      },
                      {
                        icon: Package,
                        title: "Track delivery",
                        text: "Follow your order until it arrives.",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2 + index * 0.1,
                            duration: 0.4,
                          }}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-bold text-white">
                              {item.title}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {item.text}
                            </p>
                          </div>

                          <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                            <Check size={13} />
                          </div>
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
                className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <BadgeCheck size={20} />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-900">
                    Ready to shop
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Your journey starts here
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK START
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Quick start
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Your first order in four steps
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Shopping on Markood is designed to be simple. Follow these steps
              and you will be ready to place your first order.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "01",
                icon: UserRound,
                title: "Create your account",
                text: "Sign up and complete your basic account information.",
              },
              {
                number: "02",
                icon: Search,
                title: "Find something",
                text: "Search products and compare the available options.",
              },
              {
                number: "03",
                icon: CreditCard,
                title: "Place your order",
                text: "Review your cart, address and payment details.",
              },
              {
                number: "04",
                icon: Package,
                title: "Receive your order",
                text: "Track your delivery and receive your package.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={cardAnimation}
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
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
          ACCOUNT
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                <UserRound size={21} />
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Before you start shopping
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                A few simple things can make your Markood experience smoother
                from your very first order.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  icon: BadgeCheck,
                  title: "Use accurate information",
                  text: "Keep your name and contact details up to date.",
                },
                {
                  icon: MapPin,
                  title: "Check your address",
                  text: "Make sure your delivery address is correct.",
                },
                {
                  icon: ShieldCheck,
                  title: "Review seller details",
                  text: "Check product information before ordering.",
                },
                {
                  icon: CreditCard,
                  title: "Check your payment",
                  text: "Confirm the payment method before checkout.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardAnimation}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                  >
                    <Icon size={19} className="text-[#0066FF]" />

                    <h3 className="mt-4 text-sm font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHOPPING CHECKLIST
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Smart shopping
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              A quick checklist before ordering
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
          >
            {[
              "Check the product title and description.",
              "Review available product options and quantity.",
              "Confirm the seller and product information.",
              "Make sure your delivery address is correct.",
              "Review your total price before checkout.",
              "Keep your order information for future reference.",
            ].map((item, index) => (
              <motion.div
                key={item}
                variants={cardAnimation}
                className={`flex items-center gap-4 px-6 py-5 ${
                  index !== 5 ? "border-b border-slate-100" : ""
                }`}
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

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Common questions
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Getting started FAQs
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 space-y-3"
          >
            {[
              {
                question: "Do I need an account to place an order?",
                answer:
                  "Create and use your Markood account so your orders, delivery information and account activity can be managed in one place.",
              },
              {
                question: "How do I find a product?",
                answer:
                  "Use Markood search and browse available products by category or other available filters.",
              },
              {
                question: "How do I know where my order is?",
                answer:
                  "After placing an order, use the available order information and delivery updates to follow its progress.",
              },
              {
                question: "What should I check before paying?",
                answer:
                  "Review the product, quantity, seller information, delivery address and total amount before confirming your order.",
              },
            ].map((faq) => (
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

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT CTA
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-12 text-center shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:px-12"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <Headphones size={24} />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                Ready to start shopping?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                You now have the basics you need to begin your Markood shopping
                journey.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                Explore Markood
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

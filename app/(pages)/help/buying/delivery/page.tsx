"use client";

import { motion, type Variants } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Box,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Package,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse,
  XCircle,
  Zap,
} from "lucide-react";

/* =========================================================
   ANIMATIONS
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

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
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

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function DeliveryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff]">
        {/* Background decorations */}

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
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

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}

            <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
                  <Truck size={13} className="text-[#0066FF]" />
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Seller Delivery Guide
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl">
                Shipping & delivery
                <span className="block text-[#0066FF]">made simple.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Learn how Markood delivery works, prepare your packages
                correctly, coordinate rider pickup and handle common delivery
                situations with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,102,255,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0052cc]"
                >
                  Explore delivery
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Delivery checklist
                  <CheckCircle2 size={16} />
                </button>
              </div>

              {/* Small stats */}

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="text-xl font-black text-slate-950">3</p>
                  <p className="text-xs text-slate-400">Simple steps</p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-xl font-black text-slate-950">Tracked</p>
                  <p className="text-xs text-slate-400">Delivery journey</p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-xl font-black text-slate-950">Secure</p>
                  <p className="text-xs text-slate-400">Package handling</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeRight}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="relative rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold text-slate-400">
                      DELIVERY JOURNEY
                    </p>

                    <p className="mt-1 text-lg font-black">Order #MK-2048</p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Package size={20} />
                  </div>
                </div>

                <div className="relative py-7">
                  <div className="absolute left-[21px] top-10 bottom-10 w-px bg-slate-200" />

                  {[
                    {
                      title: "Order confirmed",
                      text: "Seller received the order",
                      icon: CheckCircle2,
                      active: true,
                    },
                    {
                      title: "Package prepared",
                      text: "Product is ready for pickup",
                      icon: Box,
                      active: true,
                    },
                    {
                      title: "Rider pickup",
                      text: "Rider collects the package",
                      icon: Truck,
                      active: true,
                    },
                    {
                      title: "Delivered",
                      text: "Customer receives the order",
                      icon: PackageCheck,
                      active: false,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.25 + index * 0.12,
                          duration: 0.45,
                        }}
                        className="relative z-10 flex gap-4 pb-7 last:pb-0"
                      >
                        <div
                          className={`flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl ${
                            item.active
                              ? "bg-[#0066FF] text-white shadow-lg shadow-blue-200"
                              : "border border-slate-200 bg-white text-slate-300"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="pt-1">
                          <p className="text-sm font-black">{item.title}</p>

                          <p className="mt-1 text-xs text-slate-400">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-black">Delivery protected</p>

                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Your order is being tracked
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Zap size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-black">Ready to ship</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Package status
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY PROCESS
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              How it works
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From order to doorstep.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The Markood delivery process is designed to keep every step clear,
              predictable and easy to follow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                icon: Package,
                title: "Prepare the order",
                text: "Pack the product securely, verify the order details and make it ready before pickup.",
              },
              {
                number: "02",
                icon: Truck,
                title: "Rider pickup",
                text: "A rider collects the prepared package and begins the delivery journey.",
              },
              {
                number: "03",
                icon: PackageCheck,
                title: "Customer receives",
                text: "The order reaches the customer and the delivery is completed.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={cardAnimation}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-[0_25px_70px_rgba(15,23,42,0.09)]"
                >
                  <span className="absolute right-6 top-5 text-5xl font-black text-slate-100">
                    {item.number}
                  </span>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="relative mt-7 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY TOPICS
      ===================================================== */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                Delivery essentials
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Everything you need to know.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                Understand the important parts of shipping, pickup and delivery
                before your first order goes out.
              </p>

              <div className="mt-8 rounded-[24px] border border-blue-100 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0066FF] shadow-sm">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">Keep every package secure</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Use suitable packaging and make sure the product is
                      protected throughout its journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  icon: Truck,
                  title: "How delivery works",
                  text: "Understand the complete delivery journey.",
                },
                {
                  icon: Box,
                  title: "Preparing packages",
                  text: "Learn how to package products safely.",
                },
                {
                  icon: MapPin,
                  title: "Delivery zones",
                  text: "Understand available delivery coverage.",
                },
                {
                  icon: PackageCheck,
                  title: "Rider pickup",
                  text: "Know what happens during pickup.",
                },
                {
                  icon: XCircle,
                  title: "Failed delivery",
                  text: "What happens when delivery cannot be completed.",
                },
                {
                  icon: Clock3,
                  title: "Delivery delays",
                  text: "Understand what to do when orders are delayed.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardAnimation}
                    whileHover={{ y: -4 }}
                    className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#0066FF] transition-colors group-hover:bg-blue-50">
                        <Icon size={19} />
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0066FF]"
                      />
                    </div>

                    <h3 className="mt-5 text-sm font-black">{item.title}</h3>

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

      {/* =====================================================
          SELLER CHECKLIST
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                Before pickup
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Your shipping checklist.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                A few simple checks can help prevent delays, damaged products
                and failed deliveries.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Confirm the correct product",
                  "Check the customer's order details",
                  "Use secure and suitable packaging",
                  "Make the package ready before pickup",
                  "Keep the package accessible to the rider",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-10">
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <Warehouse size={24} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-white">
                    Ready for pickup?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Once everything is prepared, make sure your package is ready
                    before the rider arrives.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Product checked",
                      "Package secured",
                      "Order verified",
                      "Pickup ready",
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
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <CheckCircle2 size={17} className="text-emerald-400" />

                        <span className="text-sm font-semibold text-slate-200">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY STATUS
      ===================================================== */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Stay informed
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Track every important moment.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              A clear delivery journey helps sellers understand where their
              orders are and what happens next.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="relative">
              <div className="absolute left-5 right-5 top-5 hidden h-px bg-slate-200 sm:block" />

              <div className="grid gap-8 sm:grid-cols-4">
                {[
                  {
                    icon: Package,
                    title: "Confirmed",
                  },
                  {
                    icon: Box,
                    title: "Prepared",
                  },
                  {
                    icon: Truck,
                    title: "In transit",
                  },
                  {
                    icon: PackageCheck,
                    title: "Delivered",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={cardAnimation}
                      className="relative text-center"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#f8fafc] bg-[#0066FF] text-white shadow-lg">
                        <Icon size={17} />
                      </div>

                      <p className="mt-4 text-sm font-black">{item.title}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

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

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Delivery questions, answered.
            </h2>
          </motion.div>

          <div className="mt-10 space-y-3">
            {[
              {
                question: "How should I prepare my package?",
                answer:
                  "Use packaging that protects the product during handling and transportation. Make sure the order is complete and securely packed before pickup.",
              },
              {
                question: "What happens when the rider arrives?",
                answer:
                  "The rider collects the prepared package and begins the delivery process.",
              },
              {
                question: "What if a delivery cannot be completed?",
                answer:
                  "A failed delivery can happen for several reasons. Review the order details and follow the appropriate delivery instructions.",
              },
              {
                question: "How can I reduce delivery delays?",
                answer:
                  "Prepare orders early, verify customer information and make packages ready before the rider arrives.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-100 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-5">
                  <h3 className="text-sm font-black text-slate-900">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={17}
                    className="shrink-0 text-slate-400 transition-transform group-hover:rotate-180 group-hover:text-[#0066FF]"
                  />
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-slate-950 px-7 py-14 text-center sm:px-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
          />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
              <Truck size={24} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
              Ready to ship your next order?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Prepare your package, keep the order details accurate and let the
              Markood delivery journey begin.
            </p>

            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1d74ff] hover:shadow-[0_15px_35px_rgba(0,102,255,0.25)]"
            >
              Get started
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  Ban,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Package,
  RefreshCcw,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Store,
  User,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cancellationCases = [
  {
    number: "01",
    icon: User,
    title: "Customer cancellation",
    description:
      "Customers may be able to cancel an order when cancellation is available for that order and its current status.",
  },
  {
    number: "02",
    icon: Store,
    title: "Seller cancellation",
    description:
      "A seller may need to cancel an order when an item is unavailable or the order cannot reasonably be fulfilled.",
  },
  {
    number: "03",
    icon: Package,
    title: "Order already being prepared",
    description:
      "Cancellation options may become limited once the seller has started preparing the order.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Order already dispatched",
    description:
      "An order that has already been handed to a delivery partner may no longer be eligible for normal cancellation.",
  },
  {
    number: "05",
    icon: AlertCircle,
    title: "Unexpected circumstances",
    description:
      "Markood may cancel or restrict an order when operational, safety, payment or other legitimate issues occur.",
  },
  {
    number: "06",
    icon: Scale,
    title: "Policy-based cancellation",
    description:
      "Orders may be cancelled when required by Markood policies, applicable law or marketplace integrity requirements.",
  },
];

const customerSteps = [
  "Open the relevant order",
  "Check whether cancellation is available",
  "Select the cancellation option",
  "Choose or provide the cancellation reason",
  "Confirm the cancellation request",
  "Check the updated order status",
];

const sellerResponsibilities = [
  "Keep product availability accurate",
  "Accept orders only when they can reasonably be fulfilled",
  "Prepare accepted orders within the applicable timeframe",
  "Inform Markood when an order cannot be fulfilled",
  "Avoid unnecessary seller-initiated cancellations",
  "Keep inventory information updated",
];

const cancellationReasons = [
  "Product is unavailable",
  "Incorrect or unavailable inventory",
  "Customer requested cancellation",
  "Payment or transaction issue",
  "Delivery or operational issue",
  "Safety, fraud or policy concern",
];

export default function CancellationContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[800px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1550px] h-[320px] w-[320px] rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_250px]">
          <article className="max-w-4xl">
            {/* =================================================
                HEADER
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 shadow-sm">
                <Ban size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Cancellation Policy
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Markood
                <br />
                <span className="text-[#0066FF]">Cancellation Policy.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Understand when an order can be cancelled, how cancellation
                works and what happens to your payment after an order is
                cancelled.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />6 min read
                </div>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span>Last updated August 2026</span>
              </div>
            </motion.div>

            {/* =================================================
                INTRO
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12 rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-8"
            >
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                  <FileCheck2 size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Cancellations at Markood
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Cancellation availability depends on the order status,
                    seller preparation, delivery progress, payment status and
                    other applicable Markood policies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                WHEN CAN ORDER BE CANCELLED
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={stagger}
              className="mt-20"
            >
              <motion.div variants={cardAnimation}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                  Cancellation scenarios
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  When an order may be cancelled
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Cancellation rules can vary depending on who requests the
                  cancellation and how far the order has progressed.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {cancellationCases.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      variants={cardAnimation}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          {item.number}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <Icon size={17} className="text-[#0066FF]" />

                                <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                  {item.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-sm leading-7 text-slate-500">
                                {item.description}
                              </p>
                            </div>

                            <CheckCircle2
                              size={19}
                              className="mt-1 shrink-0 text-slate-200 transition-colors duration-300 group-hover:text-[#0066FF]"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                CUSTOMER PROCESS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Customer cancellation
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                How to cancel an order
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                If cancellation is available, you can usually request it from
                the order details before the order reaches a restricted stage.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {customerSteps.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -15 : 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-[#0066FF]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                ORDER STATUS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[30px] bg-slate-950 p-7 sm:p-10">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <Package size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                      Order status
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Cancellation depends on order progress
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      The sooner a cancellation is requested, the more likely it
                      is that the order can be stopped before preparation or
                      delivery begins.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          title: "Placed",
                          text: "Cancellation may be available.",
                        },
                        {
                          title: "Preparing",
                          text: "Cancellation may become limited.",
                        },
                        {
                          title: "Dispatched",
                          text: "Normal cancellation may no longer be available.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl bg-white/5 p-4"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-300" />

                            <h3 className="text-sm font-black text-white">
                              {item.title}
                            </h3>
                          </div>

                          <p className="mt-2 text-xs leading-6 text-slate-400">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                SELLER RESPONSIBILITIES
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Seller responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Avoid unnecessary cancellations
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Sellers should maintain accurate inventory and accept orders
                only when they can reasonably fulfill them.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sellerResponsibilities.map((item, index) => (
                  <motion.div
                    key={item}
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
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <CheckCircle2 size={15} className="text-[#0066FF]" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                COMMON REASONS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[28px] border border-blue-100 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-9">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <RefreshCcw size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Common reasons
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Why an order may be cancelled
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Cancellation can happen for several customer, seller,
                      payment, delivery or marketplace reasons.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {cancellationReasons.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#0066FF]"
                      />

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                REFUND AFTER CANCELLATION
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-10">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Payment handling
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      What happens to your payment?
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      If an eligible cancelled order has already been paid,
                      Markood may initiate the applicable refund according to
                      the payment method and refund policy.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {[
                        "Cancellation confirmed",
                        "Refund eligibility checked",
                        "Refund processed when applicable",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl bg-slate-50 p-4">
                          <CheckCircle2 size={16} className="text-[#0066FF]" />

                          <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                IMPORTANT NOTICE
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20 rounded-[26px] border border-amber-100 bg-amber-50/60 p-6"
            >
              <div className="flex gap-4">
                <AlertCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-500"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-950">
                    Important
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Cancellation availability is not guaranteed for every order.
                    Once preparation or delivery has progressed, cancellation
                    may no longer be possible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FINAL CARD
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-10 rounded-[26px] border border-slate-200 bg-white p-7 text-center shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-9"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                <Ban size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                Need to cancel an order?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Check your order as soon as possible. If the cancellation option
                is available, submitting the request early gives the order the
                best chance of being stopped before fulfillment.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

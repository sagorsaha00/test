"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  CreditCard,
  HelpCircle,
  Package,
  ShoppingBag,
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

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Open your order",
    text: "Go to your orders and select the order you want to cancel.",
  },
  {
    number: "02",
    icon: XCircle,
    title: "Choose cancellation",
    text: "Select the cancellation option and choose a reason.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Confirm your request",
    text: "Review the cancellation details and confirm your request.",
  },
];

const situations = [
  {
    icon: Clock3,
    title: "Before seller confirmation",
    text: "Cancellation is usually easiest before the seller has started processing your order.",
  },
  {
    icon: Package,
    title: "After processing starts",
    text: "If your order is already being prepared, cancellation may not always be possible.",
  },
  {
    icon: CreditCard,
    title: "Payment already made",
    text: "If your cancellation is accepted, any eligible refund follows the applicable refund process.",
  },
];

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-[#0066FF]">
              <HelpCircle size={14} />
              BUYING GUIDE
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-[-2px] text-slate-950 sm:text-5xl lg:text-6xl">
              Cancel an order
              <br />
              <span className="text-[#0066FF]">without the confusion.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Need to change your mind? Learn when you can cancel a Markood
              order, what happens after cancellation, and how refunds work.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <Clock3 className="text-[#0066FF]" size={21} />
              <p className="mt-4 text-sm font-black">Act quickly</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Cancellation is easier before processing begins.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <CreditCard className="text-[#0066FF]" size={21} />
              <p className="mt-4 text-sm font-black">Refund protection</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Eligible payments follow the applicable refund process.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <CheckCircle2 className="text-[#0066FF]" size={21} />
              <p className="mt-4 text-sm font-black">Simple process</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Follow a few simple steps from your order page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              QUICK GUIDE
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How to cancel your order
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Follow these steps to submit a cancellation request.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-2xl"
                >
                  <div className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                    {step.number}
                  </div>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-lg font-black">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When cancellation is possible */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                BEFORE YOU CANCEL
              </span>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Timing matters.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                The status of your order can affect whether cancellation is
                available.
              </p>
            </motion.div>

            <div className="space-y-4">
              {situations.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex gap-5 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white sm:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative flex gap-5">
              <AlertCircle size={24} className="mt-1 shrink-0 text-blue-400" />

              <div>
                <h2 className="text-xl font-black">
                  Important cancellation information
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Cancellation availability can depend on the order status,
                  seller processing stage, payment status and other applicable
                  conditions. Always review the cancellation information shown
                  for your specific order.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

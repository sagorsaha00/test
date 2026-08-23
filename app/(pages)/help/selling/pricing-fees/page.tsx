"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  DollarSign,
  Receipt,
  Wallet,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PricingFeesPage() {
  const topics = [
    {
      icon: DollarSign,
      title: "Product pricing",
      text: "Set clear and accurate prices for your products.",
    },
    {
      icon: Calculator,
      title: "Seller fees",
      text: "Understand the fees that may apply to your sales.",
    },
    {
      icon: Receipt,
      title: "Commission",
      text: "Learn how marketplace commission works.",
    },
    {
      icon: Wallet,
      title: "Your earnings",
      text: "Understand how your order earnings are calculated.",
    },
    {
      icon: CreditCard,
      title: "Payments",
      text: "Learn about seller payment processing.",
    },
    {
      icon: CheckCircle2,
      title: "Fee updates",
      text: "Stay informed about changes to Markood fees.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/help" className="hover:text-[#0066FF]">
            Help Center
          </Link>

          <ChevronRight size={13} />

          <Link href="/help/selling" className="hover:text-[#0066FF]">
            Selling
          </Link>

          <ChevronRight size={13} />

          <span className="font-semibold text-slate-600">Pricing & Fees</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 max-w-3xl"
        >
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
            Seller Guide
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Pricing, fees &
            <br />
            <span className="text-[#0066FF]">seller earnings.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Understand how pricing, commissions, fees and seller earnings work
            on Markood.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={topic.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                  <Icon size={20} />
                </div>

                <h2 className="mt-5 font-black text-slate-950">
                  {topic.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {topic.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 rounded-[28px] bg-slate-950 p-8 text-white"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
            Important
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Keep your pricing accurate
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Always make sure the price displayed to customers matches the price
            you intend to charge. Review your listings whenever your costs or
            pricing change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

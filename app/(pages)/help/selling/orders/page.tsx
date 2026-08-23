"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Package,
  ShoppingBag,
  Truck,
  XCircle,
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

const orderCards = [
  {
    icon: ShoppingBag,
    title: "New orders",
    description: "Review incoming customer orders and confirm the details.",
  },
  {
    icon: CheckCircle2,
    title: "Accept an order",
    description:
      "Confirm that you can prepare and fulfil the customer's order.",
  },
  {
    icon: Package,
    title: "Prepare the order",
    description:
      "Pack the correct products carefully and prepare them for pickup.",
  },
  {
    icon: Truck,
    title: "Order delivery",
    description: "Track the order while it moves through the delivery process.",
  },
  {
    icon: Clock,
    title: "Order status",
    description:
      "Understand the different stages of an order from purchase to delivery.",
  },
  {
    icon: XCircle,
    title: "Cancelled orders",
    description: "Learn what happens when an order is cancelled.",
  },
];

export default function OrdersPage() {
  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/help" className="hover:text-[#0066FF]">
            Help Center
          </Link>

          <ChevronRight size={13} />

          <Link href="/help/selling" className="hover:text-[#0066FF]">
            Selling
          </Link>

          <ChevronRight size={13} />

          <span className="font-semibold text-slate-600">Orders</span>
        </div>

        {/* Header */}

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
            Manage your
            <br />
            <span className="text-[#0066FF]">orders with confidence.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Learn how to review, accept, prepare and complete customer orders on
            Markood.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {orderCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="group rounded-[26px] border border-slate-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                  <Icon size={20} />
                </div>

                <h2 className="mt-5 font-black text-slate-950">{item.title}</h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 rounded-[28px] border border-blue-100 bg-blue-50/60 p-7"
        >
          <div className="flex gap-4">
            <CheckCircle2 size={21} className="mt-1 shrink-0 text-[#0066FF]" />

            <div>
              <h3 className="font-black text-slate-950">
                Keep customers informed
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Keep your order information accurate and make sure orders are
                prepared within the expected timeframe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Box,
  CheckCircle2,
  ChevronRight,
  MapPin,
  PackageCheck,
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

export default function DeliveryPage() {
  const topics = [
    {
      icon: Truck,
      title: "How delivery works",
      text: "Understand the complete Markood delivery process.",
    },
    {
      icon: Box,
      title: "Preparing packages",
      text: "Learn how to safely prepare products for delivery.",
    },
    {
      icon: MapPin,
      title: "Delivery zones",
      text: "Understand where your products can be delivered.",
    },
    {
      icon: PackageCheck,
      title: "Rider pickup",
      text: "Learn what happens when a rider collects your order.",
    },
    {
      icon: XCircle,
      title: "Failed delivery",
      text: "Understand what happens when delivery cannot be completed.",
    },
    {
      icon: CheckCircle2,
      title: "Delivery issues",
      text: "Learn what to do if an order is delayed or damaged.",
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

          <span className="font-semibold text-slate-600">
            Shipping & Delivery
          </span>
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
            Shipping &
            <br />
            <span className="text-[#0066FF]">delivery made simple.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Learn how to prepare orders, work with riders and handle the
            delivery process on Markood.
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
          className="mt-12 rounded-[28px] border border-blue-100 bg-blue-50 p-8"
        >
          <div className="flex gap-4">
            <Truck size={22} className="mt-1 shrink-0 text-[#0066FF]" />

            <div>
              <h2 className="font-black text-slate-950">
                Prepare orders on time
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Make sure products are correctly packaged and ready before the
                rider arrives for pickup.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

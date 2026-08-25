"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
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

export default function ReturnsPage() {
  const topics = [
    {
      icon: RotateCcw,
      title: "Return policy",
      text: "Understand when customers may request a product return.",
    },
    {
      icon: ClipboardCheck,
      title: "Accepting a return",
      text: "Learn what to do when a customer requests a return.",
    },
    {
      icon: Wallet,
      title: "Refund process",
      text: "Understand how customer refunds are handled.",
    },
    {
      icon: ShieldCheck,
      title: "Seller responsibilities",
      text: "Learn when a seller may be responsible for a refund.",
    },
    {
      icon: AlertCircle,
      title: "Damaged products",
      text: "Understand what happens when a product arrives damaged.",
    },
    {
      icon: CheckCircle2,
      title: "Customer complaints",
      text: "Learn how to handle product and order complaints.",
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
            Returns & Refunds
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
            Returns &
            <br />
            <span className="text-[#0066FF]">refunds.</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Understand seller responsibilities when customers request returns,
            refunds or report product problems.
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
          <ShieldCheck size={22} className="text-blue-300" />

          <h2 className="mt-4 text-2xl font-black">Put customers first</h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Accurate product information and reliable order fulfilment can help
            reduce unnecessary returns and create a better customer experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

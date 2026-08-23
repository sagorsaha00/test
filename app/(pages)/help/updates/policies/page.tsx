"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Ban,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Store,
  Bell,
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

const policies = [
  {
    icon: FileText,
    title: "Terms & Conditions",
    description:
      "Understand the rules that apply when using Markood and its marketplace services.",
    href: "/help/policies/terms",
    label: "Platform rules",
  },
  {
    icon: Store,
    title: "Seller Agreement",
    description:
      "Learn about seller responsibilities, marketplace standards and your obligations on Markood.",
    href: "/help/policies/seller-agreement",
    label: "For sellers",
  },
  {
    icon: RefreshCcw,
    title: "Refund Policy",
    description:
      "Understand when a refund may apply, how requests are reviewed and how refunds are processed.",
    href: "/help/policies/refund",
    label: "Payments",
  },
  {
    icon: Ban,
    title: "Cancellation Policy",
    description:
      "Learn when an order can be cancelled and what happens after a cancellation is confirmed.",
    href: "/help/policies/cancellation",
    label: "Orders",
  },
  {
    icon: Bell,
    title: "Policy Updates",
    description:
      "See how Markood updates its policies and what you should know when our rules change.",
    href: "/help/policies/updates",
    label: "Latest changes",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Policies help maintain a safer and more reliable marketplace for everyone.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description:
      "Our policies establish clear expectations for customers, sellers and delivery partners.",
  },
  {
    icon: FileCheck2,
    title: "Transparency",
    description:
      "We aim to make important marketplace rules easy to understand and accessible.",
  },
];

const importantThings = [
  "Read the policy that applies to your situation",
  "Check the latest version before relying on a policy",
  "Follow the rules applicable to your account or activity",
  "Keep your account and order information accurate",
  "Contact Markood when you need clarification",
  "Review policy updates when important changes are announced",
];

export default function PoliciesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[700px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1450px] h-[320px] w-[320px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <ShieldCheck
                  size={14}
                  className="text-[#0066FF]"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Markood Policies
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Clear rules for a
                <br />
                <span className="text-[#0066FF]">
                  better marketplace.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Explore the policies that explain how Markood works, what you
                can expect from the marketplace and what is expected from you.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3
                    size={14}
                    className="text-[#0066FF]"
                  />
                  Policy center
                </div>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span>Last updated August 2026</span>
              </div>
            </motion.div>

            {/* =================================================
                INTRO CARD
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
                    Welcome to the Markood Policy Center
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    These policies provide the framework for using Markood,
                    buying and selling products, handling orders, requesting
                    refunds and managing marketplace interactions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                POLICY CARDS
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
                  Policy library
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Explore Markood policies
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Choose a policy below to understand the rules and
                  responsibilities that apply to your situation.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {policies.map((policy) => {
                  const Icon = policy.icon;

                  return (
                    <motion.div
                      key={policy.title}
                      variants={cardAnimation}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link
                        href={policy.href}
                        className="group block rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                      >
                        <div className="flex gap-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                            <Icon size={20} />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                    {policy.title}
                                  </h3>

                                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0066FF]">
                                    {policy.label}
                                  </span>
                                </div>

                                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                                  {policy.description}
                                </p>
                              </div>

                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#0066FF]">
                                <ArrowRight
                                  size={17}
                                  className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                THREE PRINCIPLES
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What our policies are designed to support
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Markood policies are designed around a few core principles
                that help keep the marketplace predictable and trustworthy.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {principles.map((item, index) => {
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
                        delay: index * 0.08,
                      }}
                      className="rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-5 text-base font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                DARK PREMIUM CARD
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative mt-20 overflow-hidden rounded-[30px] bg-slate-950 p-7 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Marketplace standards
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Policies help everyone know what to expect.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Whether you are buying, selling or participating in
                    delivery, clear policies help create consistent
                    expectations and a better experience across Markood.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                WHAT YOU SHOULD KNOW
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Good to know
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Using the Policy Center
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Before making an important decision, review the policy that
                applies to your account, order or activity.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {importantThings.map((item, index) => (
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
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <CheckCircle2
                        size={15}
                        className="text-[#0066FF]"
                      />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                UPDATE NOTICE
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
                    Policies can change
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Markood may update policies as our services evolve, rules
                    change or new marketplace requirements are introduced.
                    Always check the latest applicable version.
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
                <FileCheck2 size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                Questions about a Markood policy?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Find the policy that matches your situation and review the
                applicable rules before taking action.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Clock3,
  FileCheck2,
  History,
  Info,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
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

const updateTypes = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Policy changes",
    description:
      "We may update our policies when marketplace rules, business practices or applicable requirements change.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Safety and trust updates",
    description:
      "Policies may be updated to improve customer safety, seller standards, delivery reliability and marketplace trust.",
  },
  {
    number: "03",
    icon: RefreshCcw,
    title: "Operational updates",
    description:
      "Changes to ordering, payments, refunds, delivery or account processes may require updates to our policies.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Product and service improvements",
    description:
      "As Markood introduces new features and services, related policies may be adjusted to reflect how they work.",
  },
];

const importantAreas = [
  "Terms and conditions",
  "Refund and cancellation rules",
  "Seller responsibilities",
  "Delivery requirements",
  "Account and marketplace rules",
  "Privacy and data practices",
];

const userResponsibilities = [
  "Review important policy updates",
  "Keep your account information accurate",
  "Understand the rules that apply to your activity",
  "Follow the latest applicable Markood policies",
  "Check updated policies before using new services",
  "Contact Markood when clarification is needed",
];

export default function UpdatesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[750px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

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
                <Bell size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Policy Updates
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Keeping our
                <br />
                <span className="text-[#0066FF]">policies up to date.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn how Markood updates its policies, what types of changes
                may occur and what you should know when our rules are updated.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />5 min read
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
                  <Info size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Why Markood updates its policies
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Markood may update its policies to reflect changes in our
                    services, marketplace operations, legal requirements, safety
                    standards or customer and seller needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                UPDATE TYPES
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
                  What can change
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Types of policy updates
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Not every update has the same purpose. Changes may range from
                  small clarifications to important policy revisions.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {updateTypes.map((item) => {
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
                HOW WE HANDLE UPDATES
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
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                How policy updates work
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                We aim to make meaningful policy changes understandable and
                transparent.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: History,
                    title: "Review",
                    text: "Policies are reviewed when changes are needed.",
                  },
                  {
                    icon: FileCheck2,
                    title: "Update",
                    text: "The applicable policy language is revised.",
                  },
                  {
                    icon: Bell,
                    title: "Communicate",
                    text: "Important changes may be communicated to affected users.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 18,
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
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                IMPORTANT AREAS
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
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Policy areas
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Areas that may be updated
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Updates can apply to different parts of the Markood
                      marketplace and may affect customers, sellers, riders or
                      other users.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {importantAreas.map((item) => (
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
                DARK NOTICE
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
                  <Bell size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Stay informed
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Check the latest version of our policies.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    The latest version of a Markood policy is the version that
                    governs your use of the applicable service, subject to its
                    effective date and any applicable transition period.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                USER RESPONSIBILITIES
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Your responsibility
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What you should do
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Staying familiar with the current policies helps you understand
                your rights, responsibilities and available options.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {userResponsibilities.map((item, index) => (
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
                NOTICE
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
                    Policy updates may affect how Markood services work. Where
                    appropriate, important changes may be communicated before or
                    when they take effect.
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
                <Sparkles size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                We keep improving Markood
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Our policies are designed to support a safe, reliable and
                transparent marketplace. As Markood evolves, our policies may
                evolve with it.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileCheck2,
  HelpCircle,
  Package,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Wallet,
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

const refundCases = [
  {
    number: "01",
    icon: Package,
    title: "Wrong item received",
    description:
      "You may be eligible for a refund when the delivered product is materially different from the product you ordered.",
  },
  {
    number: "02",
    icon: AlertCircle,
    title: "Damaged item",
    description:
      "If an item arrives damaged or unusable, report the issue with the required information so it can be reviewed.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Product not as described",
    description:
      "A refund may be considered when the product significantly differs from the description provided by the seller.",
  },
  {
    number: "04",
    icon: RefreshCcw,
    title: "Eligible cancellation",
    description:
      "Depending on the order status and applicable cancellation rules, an eligible cancelled order may qualify for a refund.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Payment issue",
    description:
      "If you were charged incorrectly or a payment-related issue occurs, Markood may review the transaction.",
  },
  {
    number: "06",
    icon: Scale,
    title: "Dispute resolution",
    description:
      "When a refund request cannot be resolved directly, Markood may review the available order and delivery information.",
  },
];

const refundSteps = [
  "Open your relevant Markood order",
  "Choose the applicable refund or issue option",
  "Provide a clear explanation of the problem",
  "Upload photos or other supporting information when requested",
  "Submit the request for review",
  "Wait for the refund decision and processing",
];

const eligibleExamples = [
  "The wrong product was delivered",
  "The product arrived damaged",
  "A product is materially different from its listing",
  "An eligible order was cancelled",
  "A confirmed payment or transaction error occurred",
  "Another refund reason is specifically covered by Markood policy",
];

const nonEligibleExamples = [
  "You simply changed your mind after receiving the product",
  "The product was used or damaged after delivery",
  "The issue is caused by incorrect information provided by the customer",
  "The refund request is submitted outside the applicable period",
  "The claim contains false or misleading information",
  "The product does not qualify under the applicable return or refund rules",
];

export default function RefundContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[800px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1500px] h-[320px] w-[320px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <RefreshCcw size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Refund Policy
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Markood
                <br />
                <span className="text-[#0066FF]">Refund Policy.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn when you may be eligible for a refund, how to submit a
                request and what happens after your request is reviewed.
              </p>
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
                    Refunds at Markood
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Markood aims to make refund requests clear and fair.
                    Eligibility depends on the reason for the request, order
                    status, product condition and the applicable Markood
                    policies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                ELIGIBLE CASES
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
                  Refund eligibility
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  When a refund may apply
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  The following are common situations where a refund request may
                  be reviewed.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {refundCases.map((item) => {
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
                HOW TO REQUEST
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
                Refund process
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                How to request a refund
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Follow the applicable order flow and provide enough information
                for Markood to review your request.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {refundSteps.map((item, index) => (
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
                ELIGIBLE EXAMPLES
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {/* Eligible */}
                <div className="rounded-[28px] border border-emerald-100 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    Examples that may qualify
                  </h3>

                  <div className="mt-6 space-y-3">
                    {eligibleExamples.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-emerald-500"
                        />

                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not eligible */}
                <div className="rounded-[28px] border border-red-100 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <AlertCircle size={20} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    Examples that may not qualify
                  </h3>

                  <div className="mt-6 space-y-3">
                    {nonEligibleExamples.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <AlertCircle
                          size={16}
                          className="mt-1 shrink-0 text-red-400"
                        />

                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                REVIEW PROCESS
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
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                      Review process
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      How Markood reviews a request
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      Refund requests may be reviewed using available order,
                      payment, delivery and product information. Additional
                      details may be requested when necessary.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          icon: FileCheck2,
                          title: "Request",
                          text: "Your refund request is submitted.",
                        },
                        {
                          icon: HelpCircle,
                          title: "Review",
                          text: "The available information is evaluated.",
                        },
                        {
                          icon: CheckCircle2,
                          title: "Decision",
                          text: "You are informed of the outcome.",
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="rounded-2xl bg-white/5 p-4"
                          >
                            <Icon size={18} className="text-blue-300" />

                            <h3 className="mt-3 text-sm font-black text-white">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs leading-6 text-slate-400">
                              {item.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                REFUND METHOD
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
                    <Wallet size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Refund processing
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Where your refund goes
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      When a refund is approved, the refund method and timing
                      may depend on the original payment method, financial
                      institution and applicable Markood payment procedures.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    "Original payment method",
                    "Applicable payment provider",
                    "Processing time may vary",
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
                    Submitting a refund request does not automatically mean that
                    a refund will be approved. Each request may be reviewed
                    based on the applicable policy and available information.
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
                <RefreshCcw size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                We want refunds to be simple and fair
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                If something goes wrong with your order, provide accurate
                information and the relevant evidence so Markood can review your
                request as efficiently as possible.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

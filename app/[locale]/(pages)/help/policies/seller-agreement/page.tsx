"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Handshake,
  Package,
  Scale,
  ShieldCheck,
  Store,
  Truck,
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

const agreementSections = [
  {
    number: "01",
    icon: Store,
    title: "Seller account",
    description:
      "You must provide accurate seller information and maintain an active account that represents your business or selling activity correctly.",
  },
  {
    number: "02",
    icon: Package,
    title: "Product listings",
    description:
      "All products must have accurate descriptions, images, prices, availability and other information required by Markood.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Product quality",
    description:
      "Sellers are responsible for ensuring that products offered through Markood are genuine, safe, legal and consistent with their listings.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Order fulfillment",
    description:
      "Once an order is accepted, sellers should prepare the correct items and make them ready for delivery within the applicable timeframe.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery cooperation",
    description:
      "Sellers must cooperate with Markood delivery processes and provide orders to authorized riders or delivery partners as required.",
  },
  {
    number: "06",
    icon: Wallet,
    title: "Payments and fees",
    description:
      "Seller payments, commissions, service charges and other applicable fees are handled according to Markood's current payment and fee policies.",
  },
];

const sellerRequirements = [
  "Maintain accurate seller and store information",
  "Keep product prices and availability up to date",
  "Upload clear and relevant product images",
  "Provide truthful product descriptions",
  "Prepare accepted orders correctly",
  "Follow Markood delivery and packaging requirements",
  "Comply with applicable marketplace policies",
  "Respond appropriately to customer and platform requests",
];

const prohibitedActivities = [
  "Listing counterfeit, stolen or prohibited products",
  "Providing intentionally false product information",
  "Manipulating prices, orders, ratings or reviews",
  "Accepting orders that the seller cannot reasonably fulfill",
  "Using another seller's identity or business information",
  "Attempting to move Markood customers to unauthorized payment channels",
  "Creating misleading listings or promotional information",
  "Abusing refunds, cancellations or other marketplace processes",
];

export default function SellerAgreementContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[850px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1600px] h-[320px] w-[320px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <Handshake size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Seller Policy
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Markood
                <br />
                <span className="text-[#0066FF]">Seller Agreement.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                The agreement between Markood and sellers that explains your
                responsibilities when listing products, accepting orders and
                selling through the marketplace.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />8 min read
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
                    Your agreement with Markood
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    By registering as a seller or listing products on Markood,
                    you agree to follow this Seller Agreement together with
                    Markood's Terms, marketplace policies and applicable
                    requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CORE AGREEMENT
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
                  Seller agreement
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Your responsibilities as a seller
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  These are the main responsibilities sellers agree to when
                  participating in the Markood marketplace.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {agreementSections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <motion.div
                      key={section.number}
                      variants={cardAnimation}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          {section.number}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <Icon size={17} className="text-[#0066FF]" />

                                <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                  {section.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-sm leading-7 text-slate-500">
                                {section.description}
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
                SELLER CHECKLIST
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
                Seller checklist
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What sellers agree to do
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Keep these responsibilities in mind when operating your Markood
                store.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sellerRequirements.map((item, index) => (
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
                PRODUCTS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[30px] border border-blue-100 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-10">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Package size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Product listings
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Keep every listing accurate
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Sellers are responsible for making sure product
                      information accurately represents what customers will
                      receive.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Use accurate product titles",
                    "Provide clear product descriptions",
                    "Use appropriate product images",
                    "Set accurate prices",
                    "Maintain correct stock availability",
                    "Select the appropriate category",
                  ].map((item) => (
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
                ORDER FULFILLMENT
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
                Order fulfillment
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                When you receive an order
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Accepting an order means you should take reasonable steps to
                prepare and fulfill it correctly.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: Package,
                    title: "Prepare",
                    text: "Prepare the correct product and quantity according to the order.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Check",
                    text: "Verify the product, packaging and order details before handoff.",
                  },
                  {
                    icon: Truck,
                    title: "Handover",
                    text: "Make the order ready for the authorized delivery partner.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-5 text-base font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                PAYMENTS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Wallet size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Payments & fees
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Seller payments
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Seller payouts are subject to the applicable Markood
                      payment schedule, commissions, service charges,
                      adjustments, refunds and other applicable fees.
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold leading-7 text-slate-600">
                    The exact fees, payout timing and payment methods may vary
                    depending on the seller, location, product category,
                    transaction and Markood's current policies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                PROHIBITED SELLER ACTIVITY
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
                Marketplace integrity
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Prohibited seller activity
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Sellers must not engage in activity that compromises customer
                trust or the integrity of the Markood marketplace.
              </p>

              <div className="mt-8 space-y-3">
                {prohibitedActivities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 12,
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
                    className="flex items-center gap-4 rounded-2xl border border-red-100 bg-white p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                      <AlertCircle size={16} className="text-red-500" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                RETURNS / CANCELLATIONS
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
                    <Scale size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                      Orders & customer issues
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Cancellations, returns and disputes
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      Sellers agree to cooperate with Markood's applicable
                      cancellation, return, refund, damaged-order and dispute
                      processes.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "Respond to order-related issues",
                        "Cooperate with return requests",
                        "Provide requested information",
                        "Follow Markood dispute procedures",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-blue-300"
                          />

                          <span className="text-sm font-semibold text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                SUSPENSION
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Account enforcement
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Seller account restrictions
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Markood may restrict, suspend or take other appropriate action
                on seller accounts when there are serious policy violations,
                security concerns, fraudulent activity or other applicable
                reasons.
              </p>

              <div className="mt-7 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-950">
                      Protecting the marketplace
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Enforcement actions are intended to protect customers,
                      sellers, delivery partners and the overall integrity of
                      the Markood marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FINAL NOTICE
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
                    Important legal notice
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    This Seller Agreement is structured as a Markood marketplace
                    policy template. Before making it legally binding, the final
                    agreement should be reviewed for the applicable laws,
                    business structure, seller model and jurisdictions in which
                    Markood operates.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                ACCEPTANCE
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-10 rounded-[26px] border border-slate-200 bg-white p-7 text-center shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-9"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                <Handshake size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                Built for a trusted marketplace
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                By selling on Markood, you agree to maintain accurate listings,
                fulfill accepted orders responsibly and help create a safe,
                reliable experience for customers and other marketplace
                participants.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

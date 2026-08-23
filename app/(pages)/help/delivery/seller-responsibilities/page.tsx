"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Package,
  ScanLine,
  ShieldCheck,
  Store,
  Truck,
  UserCheck,
  XCircle,
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

const responsibilities = [
  {
    number: "01",
    icon: Store,
    title: "Keep product information accurate",
    description:
      "Make sure your product title, description, images, price, variants and availability accurately represent what customers will receive.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Confirm orders promptly",
    description:
      "Review incoming orders and confirm that the requested products and variants are available before preparing the shipment.",
  },
  {
    number: "03",
    icon: Package,
    title: "Prepare the correct products",
    description:
      "Pick the exact products, variants and quantities included in the customer's order. Never intentionally substitute a different item.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Package orders safely",
    description:
      "Use suitable packaging for the product and protect items against normal handling during pickup and transportation.",
  },
  {
    number: "05",
    icon: Clock3,
    title: "Prepare orders on time",
    description:
      "Have confirmed orders ready within the applicable preparation time so the delivery process can begin without unnecessary delays.",
  },
  {
    number: "06",
    icon: Truck,
    title: "Hand orders over correctly",
    description:
      "Make sure the correct package is ready for the assigned rider or delivery partner and provide any required order information.",
  },
];

const preparationChecklist = [
  "Product matches the customer's order",
  "Correct size, color or variant selected",
  "Correct quantity included",
  "Product is clean and in acceptable condition",
  "Required accessories are included",
  "Package is securely sealed",
  "Order information is correct",
  "Package is ready for pickup",
];

const sellerStandards = [
  {
    icon: ScanLine,
    title: "Accurate order details",
    description:
      "The package should correspond with the order information shown in the seller system.",
  },
  {
    icon: ShieldCheck,
    title: "Safe packaging",
    description:
      "Choose packaging appropriate for the product and normal transportation conditions.",
  },
  {
    icon: UserCheck,
    title: "Professional handover",
    description:
      "Cooperate with the assigned rider and ensure the correct order is handed over.",
  },
];

export default function SellerResponsibilitiesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[800px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_250px]">
          <article className="max-w-4xl">
            {/* =================================================
                ARTICLE HEADER
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 shadow-sm">
                <Truck size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Seller Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Seller responsibilities
                <br />
                <span className="text-[#0066FF]">for delivery.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Understand what sellers need to do when preparing, packaging and
                handing over orders for Markood delivery.
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
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Delivery starts with the seller
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    A smooth delivery depends on sellers preparing the correct
                    products, packaging them properly and making orders ready
                    for pickup on time. Your preparation helps protect the
                    customer experience from the moment an order is placed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                MAIN RESPONSIBILITIES
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
                  Seller checklist
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Your delivery responsibilities
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Follow these responsibilities for every Markood order that
                  requires delivery.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {responsibilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      variants={cardAnimation}
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                    >
                      <div className="flex gap-5">
                        {/* Number */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          {item.number}
                        </div>

                        {/* Content */}
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
                BEFORE HANDOVER
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
                Before pickup
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Check every package
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Before handing an order to the delivery rider, use this quick
                checklist to make sure everything is ready.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {preparationChecklist.map((item, index) => (
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
                    viewport={{
                      once: true,
                    }}
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
                PACKAGING SECTION
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="mt-20"
            >
              <div className="rounded-[30px] border border-blue-100 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Package size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Packaging matters
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Pack products for safe transportation
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Sellers should choose packaging that is appropriate for
                      the product and suitable for normal handling during pickup
                      and transportation. Fragile, liquid, delicate or sensitive
                      products may require additional protection.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {sellerStandards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl bg-slate-50 p-5 transition-colors duration-300 hover:bg-blue-50/50"
                      >
                        <Icon size={19} className="text-[#0066FF]" />

                        <h3 className="mt-4 text-sm font-black text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                WHAT SELLERS SHOULD NOT DO
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
                Avoid delivery issues
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What sellers should avoid
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Avoid actions that can cause incorrect deliveries, delays or
                customer complaints.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Sending a different product or variant",
                  "Sending an incorrect quantity",
                  "Marking an order ready before it is actually prepared",
                  "Using packaging that does not adequately protect the product",
                  "Providing inaccurate order or dispatch information",
                ].map((item, index) => (
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
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-red-100 bg-white p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                      <XCircle size={16} className="text-red-500" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                DARK TIP
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="relative mt-20 overflow-hidden rounded-[30px] bg-slate-950 p-7 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <Truck size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Seller tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    A ready order is more than a packed box.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Before marking an order ready, make sure the product,
                    variant, quantity, packaging and order information are all
                    correct. Taking a few extra seconds to check can prevent
                    delivery problems later.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                IMPORTANT NOTICE
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="mt-8 rounded-[24px] border border-amber-100 bg-amber-50/60 p-6"
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
                    Seller responsibilities may vary depending on the delivery
                    method, product category and applicable Markood policies.
                    Always follow the requirements shown in your seller
                    dashboard for the specific order.
                  </p>
                </div>
              </div>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

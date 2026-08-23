"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  Package,
  Search,
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

const lostOrderSteps = [
  {
    number: "01",
    icon: Search,
    title: "Check the order status",
    description:
      "Review the latest order and delivery status before reporting an order as lost.",
  },
  {
    number: "02",
    icon: MapPinIcon,
    title: "Confirm the delivery information",
    description:
      "Make sure the delivery address and available delivery details are correct.",
  },
  {
    number: "03",
    icon: PhoneIcon,
    title: "Check for delivery updates",
    description:
      "Review any available rider, seller or delivery updates connected to the order.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Report the issue",
    description:
      "If the order still cannot be located, report the issue through the appropriate Markood support process.",
  },
];

const damagedOrderSteps = [
  {
    number: "01",
    icon: Camera,
    title: "Document the damage",
    description:
      "Take clear photos showing the package, product and visible damage as soon as possible.",
  },
  {
    number: "02",
    icon: Package,
    title: "Keep the order and packaging",
    description:
      "Keep the product, packaging and relevant materials available while the issue is being reviewed.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Provide order information",
    description:
      "Include the relevant order details and a clear description of what was damaged.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Wait for review",
    description:
      "Markood may review the available information before determining the appropriate resolution.",
  },
];

const customerChecklist = [
  "Check the latest order status first",
  "Confirm the delivery address and order information",
  "Take photos of visible product or package damage",
  "Keep the original packaging when possible",
  "Report the issue through the appropriate support process",
  "Provide accurate information during the review",
];

const sellerChecklist = [
  "Package products securely before dispatch",
  "Use suitable packaging for the product type",
  "Keep accurate order and product information",
  "Cooperate with requests related to an order investigation",
  "Keep relevant records when an order is reported missing or damaged",
  "Follow the applicable Markood resolution process",
];

const riderChecklist = [
  "Keep packages secure during transportation",
  "Handle fragile or sensitive items carefully",
  "Report delivery problems when they occur",
  "Accurately update delivery status",
  "Avoid leaving packages in unsafe locations",
  "Cooperate with delivery investigations when required",
];

const preventionTips = [
  {
    icon: Package,
    title: "Secure packaging",
    description:
      "Sellers should choose packaging that provides reasonable protection for the product during transportation.",
  },
  {
    icon: Camera,
    title: "Document important orders",
    description:
      "Keeping appropriate records can help when an order needs to be reviewed later.",
  },
  {
    icon: ShieldCheck,
    title: "Handle with care",
    description:
      "Everyone involved in delivery should take reasonable steps to protect the order from damage or loss.",
  },
];

function MapPinIcon({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function LostDamagedOrdersContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[850px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1500px] h-[300px] w-[300px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <Package size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Lost or damaged
                <br />
                <span className="text-[#0066FF]">orders.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Find out what to do when an order cannot be located or arrives
                damaged, and how customers, sellers and riders can help resolve
                the issue.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />6 min read
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
                    We understand that delivery issues are frustrating
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    If an order is missing or arrives damaged, the first step is
                    to document what happened and provide accurate order
                    information. Markood can then review the available details
                    and determine the appropriate next step.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LOST ORDERS
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
                  Lost orders
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  If your order cannot be found
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Before reporting an order as lost, check the available
                  delivery information and make sure the order has not simply
                  been delayed.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {lostOrderSteps.map((item) => {
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

                            <Search
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
                DAMAGED ORDERS
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
                  Damaged orders
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  If your order arrives damaged
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Document the condition of the package and product and keep the
                  relevant materials available while the issue is reviewed.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {damagedOrderSteps.map((item) => {
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
                CUSTOMER CHECKLIST
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
                Customer checklist
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What customers should do
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                If your order is missing or damaged, these steps can help
                provide the information needed for a review.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {customerChecklist.map((item, index) => (
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
                SELLER + RIDER
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
                Everyone plays a role
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Sellers and riders
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Preventing lost and damaged orders requires care throughout the
                entire delivery journey.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {/* Seller */}
                <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Store size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    Seller responsibilities
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Proper preparation and secure packaging can reduce the risk
                    of damage during transportation.
                  </p>

                  <div className="mt-6 space-y-3">
                    {sellerChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#0066FF]"
                        />

                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rider */}
                <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Truck size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    Rider responsibilities
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Riders should take reasonable care of packages from pickup
                    through the final delivery attempt.
                  </p>

                  <div className="mt-6 space-y-3">
                    {riderChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#0066FF]"
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
                PREVENTION
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
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Prevention
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Protect every order from pickup to delivery
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Good packaging, careful handling and accurate information
                      can significantly reduce avoidable delivery problems.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {preventionTips.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:bg-blue-50/50"
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
                WHAT NOT TO DO
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
                Important
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Avoid making the situation worse
              </h2>

              <div className="mt-8 space-y-3">
                {[
                  "Do not discard damaged packaging before the issue has been documented",
                  "Do not provide inaccurate information about a lost or damaged order",
                  "Do not alter evidence or records related to the delivery",
                  "Do not mark an order as delivered when the customer has not received it",
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
                PREMIUM DARK TIP
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
                  <Camera size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Helpful tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Photos can make a review much easier.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    When an order arrives damaged, clear photos of the packaging
                    and product can help explain what happened. Keep the
                    original packaging available whenever possible.
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
                    Resolution for lost or damaged orders may depend on the
                    order type, delivery method, evidence provided and
                    applicable Markood policies. Reporting an issue does not
                    automatically guarantee a refund, replacement or other
                    specific outcome.
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

"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  RefreshCw,
  ShieldCheck,
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

const commonReasons = [
  {
    number: "01",
    icon: MapPin,
    title: "Customer could not be reached",
    description:
      "The rider may be unable to contact the customer at the provided phone number or delivery location.",
  },
  {
    number: "02",
    icon: NavigationIcon,
    title: "Delivery location could not be found",
    description:
      "The address may be incomplete, inaccurate or difficult to locate, preventing the rider from completing the delivery.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Customer was unavailable",
    description:
      "The customer may not be available to receive the order when the rider arrives at the delivery location.",
  },
  {
    number: "04",
    icon: Package,
    title: "Order could not be handed over",
    description:
      "The delivery may fail when the correct handover cannot be completed according to the applicable delivery process.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Unexpected delivery issue",
    description:
      "Traffic, access restrictions, weather or other circumstances may prevent the rider from completing the delivery.",
  },
];

const sellerActions = [
  "Keep product and order information accurate",
  "Provide the order within the required preparation time",
  "Make sure the package is properly prepared",
  "Respond to delivery-related requests when necessary",
  "Follow Markood instructions for returned or failed orders",
  "Keep inventory information updated",
];

const riderActions = [
  "Verify the delivery address before attempting delivery",
  "Contact the customer when appropriate",
  "Make a reasonable delivery attempt",
  "Keep the package secure during the attempt",
  "Record the correct delivery status",
  "Follow the applicable failed-delivery process",
];

const preventionTips = [
  {
    icon: MapPin,
    title: "Use a complete address",
    description:
      "Customers should provide enough location information to help the rider find the delivery point.",
  },
  {
    icon: Phone,
    title: "Keep contact details available",
    description:
      "A reachable phone number can help resolve address or delivery questions quickly.",
  },
  {
    icon: Clock3,
    title: "Be available",
    description:
      "Customers should be prepared to receive their order when the rider arrives.",
  },
];

function NavigationIcon({
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

export default function FailedDeliveriesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[800px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1450px] h-[300px] w-[300px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <RefreshCw size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                When a delivery
                <br />
                <span className="text-[#0066FF]">cannot be completed.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn why deliveries may fail, what happens after a failed
                attempt and what customers, sellers and riders can do next.
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
                    A failed delivery does not always mean a lost order
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    A delivery can fail for several reasons, including an
                    unreachable customer, an incorrect address or an unexpected
                    delivery problem. The next step depends on the reason for
                    the failed attempt and the applicable Markood delivery
                    process.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                COMMON REASONS
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
                  Common reasons
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Why deliveries fail
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Understanding the reason for a failed attempt helps determine
                  the right next step.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {commonReasons.map((item) => {
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

                            <AlertCircle
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
                WHAT HAPPENS NEXT
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
                After a failed attempt
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What happens next?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                The exact next step can depend on the reason for the failed
                delivery and the order's current status.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Delivery status is updated",
                    description:
                      "The delivery attempt is recorded so the order status reflects what happened.",
                  },
                  {
                    number: "02",
                    title: "The issue is reviewed",
                    description:
                      "The applicable delivery process determines whether another attempt or another action is required.",
                  },
                  {
                    number: "03",
                    title: "Order moves to the next step",
                    description:
                      "Depending on the situation, the order may be rescheduled, returned or handled through another supported process.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-[#0066FF]">
                      {item.number}
                    </div>

                    <h3 className="mt-5 text-base font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                CUSTOMER PREVENTION
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
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Avoid failed deliveries
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      A little preparation goes a long way
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Customers can reduce delivery problems by providing
                      accurate information and being available when their order
                      is expected.
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
                SELLER + RIDER RESPONSIBILITIES
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
                If you are involved in the order
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What sellers and riders should do
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {/* Seller */}
                <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Package size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    Sellers
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Help keep the order process accurate and follow the
                    instructions provided for a failed delivery.
                  </p>

                  <div className="mt-6 space-y-3">
                    {sellerActions.map((item) => (
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
                    Riders
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Make a reasonable delivery attempt and accurately record
                    what happened when the delivery cannot be completed.
                  </p>

                  <div className="mt-6 space-y-3">
                    {riderActions.map((item) => (
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
                DO NOT DO
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
                Avoid unnecessary delivery failures
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Accurate information and clear communication can prevent many
                avoidable delivery problems.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Do not provide an incomplete or intentionally inaccurate delivery address",
                  "Do not ignore delivery communication when an issue needs to be resolved",
                  "Do not mark an order as successfully delivered when the handover was not completed",
                  "Do not intentionally refuse a valid delivery attempt without a supported reason",
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
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Delivery tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Communication can prevent a failed delivery.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    If a delivery problem occurs, responding quickly and
                    following the appropriate Markood process can help determine
                    the best next step for the order.
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
                    The handling of a failed delivery may vary depending on the
                    order type, delivery method, location and applicable Markood
                    policies. Always check the order status and follow the
                    instructions provided in the relevant Markood dashboard.
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

"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Package,
  Phone,
  Route,
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
    icon: UserCheck,
    title: "Accept and review delivery tasks",
    description:
      "Review assigned delivery requests and make sure you understand the pickup and drop-off information before starting the trip.",
  },
  {
    number: "02",
    icon: Store,
    title: "Collect the correct order",
    description:
      "At pickup, verify the order information and collect the correct package from the seller before leaving the pickup location.",
  },
  {
    number: "03",
    icon: Package,
    title: "Handle packages carefully",
    description:
      "Keep customer orders secure and handle packages appropriately throughout transportation.",
  },
  {
    number: "04",
    icon: Navigation,
    title: "Follow the delivery route",
    description:
      "Use the available navigation and delivery information to travel toward the customer's provided delivery location.",
  },
  {
    number: "05",
    icon: Phone,
    title: "Communicate when necessary",
    description:
      "Contact the customer or relevant support channel when you need help locating the delivery address or resolving a delivery issue.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Complete the delivery correctly",
    description:
      "Hand the correct order to the intended recipient and complete the delivery according to the applicable Markood process.",
  },
];

const pickupChecklist = [
  "Confirm the order or pickup information",
  "Collect the correct package",
  "Check that the package is properly sealed",
  "Make sure the package matches the assigned order",
  "Keep the order secure during transportation",
  "Start the delivery only after confirming pickup",
];

const deliveryChecklist = [
  "Confirm the correct delivery location",
  "Handle the package carefully",
  "Contact the customer when necessary",
  "Deliver the correct order",
  "Follow the required handover process",
  "Update the delivery status after completion",
];

const riderStandards = [
  {
    icon: ShieldCheck,
    title: "Safe handling",
    description:
      "Protect customer packages from unnecessary damage, loss or mishandling while they are in your care.",
  },
  {
    icon: Route,
    title: "Reliable delivery",
    description:
      "Follow the assigned delivery process and make reasonable efforts to complete deliveries on time.",
  },
  {
    icon: UserCheck,
    title: "Professional service",
    description:
      "Treat customers, sellers and other delivery partners respectfully throughout the delivery process.",
  },
];

const avoidActions = [
  "Leaving a package unattended without an appropriate delivery process",
  "Intentionally mishandling or damaging customer orders",
  "Delivering an order to the wrong location",
  "Marking an order delivered when it has not been properly delivered",
  "Sharing customer information unnecessarily",
];

export default function RiderResponsibilitiesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[850px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
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
                  Rider Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Rider responsibilities
                <br />
                <span className="text-[#0066FF]">for every delivery.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Understand the responsibilities of Markood delivery riders, from
                collecting an order from a seller to completing the delivery
                safely and professionally.
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
                    Riders are an important part of the Markood experience
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Riders connect sellers and customers by safely moving orders
                    from pickup locations to their final destination. Every
                    delivery should be handled carefully, accurately and
                    professionally.
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
                  Rider checklist
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Your delivery responsibilities
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Follow these responsibilities throughout every delivery
                  assigned to you.
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
                PICKUP RESPONSIBILITIES
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
                At pickup
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Before leaving the seller
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Take a moment at pickup to make sure the correct order is in
                your possession before starting the delivery.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pickupChecklist.map((item, index) => (
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
                DELIVERY RESPONSIBILITIES
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
                At drop-off
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Completing the delivery
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                The final handover is an important part of the delivery. Make
                sure the order reaches the correct customer and the delivery is
                properly completed.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {deliveryChecklist.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
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
                RIDER STANDARDS
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
                    <Truck size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Rider standards
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Every delivery should feel reliable
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Riders help create the final impression of the Markood
                      delivery experience. Safe handling, reliable service and
                      professional communication are important throughout the
                      journey.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {riderStandards.map((item) => {
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
                COMMUNICATION
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
              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Communication
                    </p>

                    <h2 className="mt-2 text-xl font-black text-slate-950">
                      Keep communication professional
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      If you need help finding a location, resolving a delivery
                      problem or contacting the customer, use the appropriate
                      Markood delivery process. Keep communication respectful
                      and limited to what is necessary for the delivery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                WHAT TO AVOID
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
                Delivery standards
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What riders should avoid
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Avoid actions that can compromise customer trust, package safety
                or delivery accuracy.
              </p>

              <div className="mt-8 space-y-3">
                {avoidActions.map((item, index) => (
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
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Rider tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Verify before you hand over.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Before completing a delivery, take a moment to confirm that
                    you are at the correct location and that the correct order
                    is being handed over. A quick verification can prevent
                    avoidable delivery mistakes.
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
                    Rider responsibilities may vary depending on the delivery
                    method, order type, location and applicable Markood
                    policies. Riders should always follow the requirements shown
                    in their rider dashboard and any instructions provided for
                    the specific delivery.
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

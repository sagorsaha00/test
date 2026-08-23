"use client";

import { motion, type Variants } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Clock3,
  Info,
  MapPin,
  Package,
  RefreshCcw,
  ShieldCheck,
  Truck,
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

const updates = [
  {
    date: "August 2026",
    version: "Latest",
    icon: Truck,
    title: "Delivery experience improvements",
    description:
      "We have continued improving the delivery experience to make order handoffs, tracking and delivery communication more reliable.",
    changes: [
      "Improved delivery status visibility",
      "Clearer order progress information",
      "Better communication during delivery",
      "Improved handling of delivery exceptions",
    ],
  },
  {
    date: "July 2026",
    version: "Update",
    icon: MapPin,
    title: "Delivery tracking improvements",
    description:
      "Delivery tracking information has been improved to help customers better understand where their order is in the delivery process.",
    changes: [
      "More understandable delivery statuses",
      "Improved location information",
      "Better delivery progress updates",
    ],
  },
  {
    date: "June 2026",
    version: "Update",
    icon: Package,
    title: "Order handoff improvements",
    description:
      "We introduced improvements around the handoff between sellers, riders and customers to reduce confusion during delivery.",
    changes: [
      "Clearer pickup information",
      "Improved handoff communication",
      "Better handling of delivery instructions",
    ],
  },
];

const areas = [
  {
    icon: Truck,
    title: "Delivery process",
    description: "Improvements to how orders move from sellers to customers.",
  },
  {
    icon: MapPin,
    title: "Tracking",
    description:
      "Updates that improve delivery progress and location visibility.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Better communication about important delivery events.",
  },
  {
    icon: ShieldCheck,
    title: "Delivery reliability",
    description:
      "Changes designed to make deliveries more consistent and dependable.",
  },
];

export default function DeliveryUpdatesContent() {
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
                <Truck size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Delivery Updates
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Better delivery,
                <br />
                <span className="text-[#0066FF]">one update at a time.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Stay up to date with improvements to Markood delivery, tracking,
                notifications and the overall delivery experience.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />
                  Delivery changelog
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
                    What are delivery updates?
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    This page highlights important improvements and changes to
                    Markood&apos;s delivery experience. Updates may affect
                    customers, sellers and riders.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LATEST UPDATE
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                Latest update
              </p>

              <div className="mt-5 overflow-hidden rounded-[30px] bg-slate-950 p-7 sm:p-10">
                <div className="pointer-events-none absolute" />

                <div className="relative flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <Truck size={22} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-blue-300">
                        August 2026
                      </span>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-slate-300">
                        Latest
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                      Delivery experience improvements
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                      Markood is continuing to improve delivery visibility,
                      communication and exception handling to create a smoother
                      experience from pickup to doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                UPDATE HISTORY
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
                  Changelog
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Delivery update history
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  A summary of recent improvements made to the Markood delivery
                  experience.
                </p>
              </motion.div>

              <div className="relative mt-10 space-y-5">
                {/* Timeline */}
                <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-slate-200 sm:block" />

                {updates.map((update, index) => {
                  const Icon = update.icon;

                  return (
                    <motion.div
                      key={update.title}
                      variants={cardAnimation}
                      className="relative flex gap-4 sm:gap-6"
                    >
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#0066FF] shadow-sm">
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#0066FF]">
                            {update.date}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-slate-300" />

                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                            {update.version}
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-black text-slate-950">
                          {update.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {update.description}
                        </p>

                        <div className="mt-5 space-y-2.5">
                          {update.changes.map((change) => (
                            <div
                              key={change}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2
                                size={15}
                                className="shrink-0 text-[#0066FF]"
                              />

                              <span className="text-sm font-medium text-slate-600">
                                {change}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                UPDATE AREAS
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                What we improve
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Areas of delivery improvement
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Delivery updates may focus on different parts of the journey,
                from order pickup to final delivery.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {areas.map((area, index) => {
                  const Icon = area.icon;

                  return (
                    <motion.div
                      key={area.title}
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
                        delay: index * 0.07,
                      }}
                      className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-5 text-base font-black text-slate-950">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {area.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                DARK TIP
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
                    Delivery tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Keep your delivery information accurate.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Accurate addresses, contact information and delivery
                    instructions can help sellers and riders complete orders
                    more efficiently.
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
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-16 rounded-[26px] border border-blue-100 bg-blue-50/60 p-6"
            >
              <div className="flex gap-4">
                <RefreshCcw
                  size={20}
                  className="mt-0.5 shrink-0 text-[#0066FF]"
                />

                <div>
                  <h3 className="text-sm font-black text-slate-950">
                    Updates may roll out gradually
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Some delivery improvements may be introduced gradually and
                    may not be available to every customer, seller or delivery
                    partner at the same time.
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
                <Bell size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black text-slate-950">
                We&apos;re always working on delivery.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                This page will be updated as meaningful improvements are
                introduced to the Markood delivery experience.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  MapPin,
  MapPinned,
  Navigation,
  Package,
  Route,
  ShieldCheck,
  Store,
  Truck,
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

const zoneTypes = [
  {
    icon: MapPin,
    title: "Local delivery zones",
    description:
      "Areas close to participating sellers or delivery locations where orders can be delivered through the Markood delivery network.",
  },
  {
    icon: Route,
    title: "Extended delivery zones",
    description:
      "Larger service areas may be available when the seller and delivery network support delivery to that location.",
  },
  {
    icon: Navigation,
    title: "Location-based availability",
    description:
      "Your delivery availability is determined by the address or location you provide during the ordering process.",
  },
];

const zoneSteps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Enter your delivery address",
    description:
      "Provide your delivery address or location during checkout so Markood can determine whether delivery is available.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Markood checks your zone",
    description:
      "Your location is checked against the delivery coverage available for the seller and your order.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Available delivery options appear",
    description:
      "If your location is serviceable, the available delivery option and applicable delivery information will be shown.",
  },
  {
    number: "04",
    icon: Package,
    title: "Your order is prepared",
    description:
      "After you place the order, the seller prepares your items and the delivery process begins.",
  },
  {
    number: "05",
    icon: Navigation,
    title: "Your order travels to you",
    description:
      "A delivery rider collects the order and takes it to the address provided at checkout.",
  },
];

const thingsToKnow = [
  "Delivery availability can vary by seller",
  "Your exact address is important for checking serviceability",
  "Some areas may have different delivery charges",
  "Delivery availability may change based on operational capacity",
  "A location outside a supported zone may not be eligible for delivery",
  "Always review the delivery information shown at checkout",
];

/* =================================================
   ZONE MAP VISUAL
   A stylized, non-literal map illustration showing
   a store at the center with local + extended
   delivery rings and a few sample drop pins.
================================================= */
function ZoneMapVisual() {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="zoneGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#zoneGrid)" />
        </svg>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
            <Globe2 size={16} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0066FF]">
              Coverage map
            </p>
            <p className="text-sm font-semibold text-slate-500">
              A simplified look at how zones layer around a seller
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-8 flex h-[280px] w-full max-w-md items-center justify-center sm:h-[320px]">
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Extended zone ring */}
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="#bfdbfe"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="#eff6ff"
              fillOpacity="0.5"
            />

            {/* Local zone ring */}
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="#93c5fd"
              strokeWidth="2"
              fill="#dbeafe"
              fillOpacity="0.6"
            />

            {/* Inner core ring */}
            <circle
              cx="200"
              cy="200"
              r="42"
              fill="#ffffff"
              stroke="#0066FF"
              strokeWidth="2"
            />

            {/* Store marker (center) */}
            <g transform="translate(200,200)">
              <circle r="26" fill="#0066FF" />
              <foreignObject x="-12" y="-12" width="24" height="24">
                <div className="flex h-full w-full items-center justify-center text-white">
                  <Store size={16} strokeWidth={2.5} />
                </div>
              </foreignObject>
            </g>

            {/* Sample delivery pins within local zone */}
            <g transform="translate(255,150)">
              <circle r="10" fill="#0066FF" />
              <foreignObject x="-6" y="-6" width="12" height="12">
                <div className="flex h-full w-full items-center justify-center text-white">
                  <MapPin size={9} strokeWidth={3} />
                </div>
              </foreignObject>
            </g>

            <g transform="translate(140,255)">
              <circle r="10" fill="#0066FF" />
              <foreignObject x="-6" y="-6" width="12" height="12">
                <div className="flex h-full w-full items-center justify-center text-white">
                  <MapPin size={9} strokeWidth={3} />
                </div>
              </foreignObject>
            </g>

            {/* Sample pin within extended zone */}
            <g transform="translate(320,265)">
              <circle r="10" fill="#64748b" />
              <foreignObject x="-6" y="-6" width="12" height="12">
                <div className="flex h-full w-full items-center justify-center text-white">
                  <MapPin size={9} strokeWidth={3} />
                </div>
              </foreignObject>
            </g>

            {/* Pin outside coverage */}
            <g transform="translate(370,60)">
              <circle
                r="10"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
              <foreignObject x="-6" y="-6" width="12" height="12">
                <div className="flex h-full w-full items-center justify-center text-slate-400">
                  <XCircle size={9} strokeWidth={3} />
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#0066FF]" />
            <span className="text-xs font-bold text-slate-600">
              Local delivery zone
            </span>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 shrink-0 rounded-full border-2 border-dashed border-blue-300 bg-blue-50" />
            <span className="text-xs font-bold text-slate-600">
              Extended delivery zone
            </span>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 shrink-0 rounded-full border-2 border-slate-300 bg-white" />
            <span className="text-xs font-bold text-slate-600">
              Outside coverage
            </span>
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-400">
          This illustration is a simplified representation. Actual delivery
          coverage depends on the seller, delivery network capacity and the
          address provided at checkout.
        </p>
      </div>
    </div>
  );
}

export default function DeliveryZonesContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-[-180px] top-[750px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
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
                <MapPinned size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Understanding Markood
                <br />
                <span className="text-[#0066FF]">delivery zones.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn how Markood delivery zones work, how your location is
                checked and what determines whether an order can be delivered to
                your address.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-[#0066FF]" />4 min read
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
                  <MapPin size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    What is a delivery zone?
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    A delivery zone is a geographic area where a seller or
                    delivery network can provide delivery. Your address is
                    checked against the available coverage before delivery
                    options are shown.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                HOW ZONES WORK
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
                  Delivery coverage
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  How delivery zones work
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Markood uses delivery coverage to help determine which
                  customers can receive orders from participating sellers.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {zoneTypes.map((zone, index) => {
                  const Icon = zone.icon;

                  return (
                    <motion.div
                      key={zone.title}
                      variants={cardAnimation}
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-shadow duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          <Icon size={20} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black text-slate-300">
                                  0{index + 1}
                                </span>

                                <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                  {zone.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-sm leading-7 text-slate-500">
                                {zone.description}
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

              {/* Zone map visual */}
              <motion.div variants={cardAnimation} className="mt-6">
                <ZoneMapVisual />
              </motion.div>
            </motion.div>

            {/* =================================================
                CHECKING YOUR ZONE
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
                  Before you order
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  How Markood checks your location
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  The delivery availability process is designed to make it clear
                  whether your order can be delivered to your location.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {zoneSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      variants={cardAnimation}
                      whileHover={{
                        y: -4,
                      }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          {step.number}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <Icon size={17} className="text-[#0066FF]" />

                                <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                  {step.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-sm leading-7 text-slate-500">
                                {step.description}
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
                OUTSIDE DELIVERY ZONE
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
                Service availability
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What if your address is outside a zone?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Not every seller delivers to every location. If your address
                falls outside the available delivery coverage, delivery may not
                be available for that particular seller or order.
              </p>

              <div className="mt-8 rounded-[26px] border border-amber-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                    <XCircle size={20} />
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      Delivery may not be available
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      If Markood cannot service your location, you may not see a
                      delivery option for that order. You can try another seller
                      or check whether delivery is available to a different
                      eligible address.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                THINGS TO KNOW
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
                Good to know
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Things to keep in mind
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Delivery coverage can depend on several factors, so always check
                the information shown for your order.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {thingsToKnow.map((item, index) => (
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
                  <MapPinned size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Delivery tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Check your address before placing an order.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Make sure your delivery address is complete and accurate. A
                    correct address helps Markood determine serviceability and
                    helps the rider find the correct delivery location.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                NEXT ARTICLE
            ================================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="mt-16"
            >
              <Link
                href="/help/delivery/tracking"
                className="group flex items-center justify-between rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:p-7"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Next guide
                  </p>

                  <h3 className="mt-2 text-lg font-black text-slate-950">
                    Track your delivery
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Learn how to check the status of your Markood delivery.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

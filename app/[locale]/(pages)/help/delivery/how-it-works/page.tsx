"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Route,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  UserCheck,
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

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Place your order",
    description:
      "Choose your products, add them to your cart and complete your order using your preferred payment method.",
  },
  {
    number: "02",
    icon: Store,
    title: "The seller prepares your order",
    description:
      "The seller receives your order, confirms the details and prepares the items for delivery.",
  },
  {
    number: "03",
    icon: Package,
    title: "Your order is packed",
    description:
      "Your items are carefully packed and prepared so they can be handed over safely to the delivery rider.",
  },
  {
    number: "04",
    icon: Truck,
    title: "A rider picks it up",
    description:
      "Once the order is ready, an available Markood delivery rider collects the package from the seller.",
  },
  {
    number: "05",
    icon: Route,
    title: "Your order is delivered",
    description:
      "The rider follows the delivery route and brings your order to the address you provided during checkout.",
  },
];

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Track your delivery",
    description:
      "Follow your order status and stay informed as it moves through the delivery process.",
  },
  {
    icon: UserCheck,
    title: "Verified delivery",
    description:
      "Your order is handled through Markood's delivery process from seller pickup to customer delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Safe handling",
    description:
      "Orders are handled with care throughout the delivery journey to help protect your items.",
  },
  {
    icon: Clock3,
    title: "Delivery updates",
    description:
      "You'll receive relevant updates when your order moves to important stages of the delivery process.",
  },
];

const thingsToRemember = [
  "Make sure your delivery address is accurate",
  "Keep your phone available for delivery updates",
  "Check your order details before confirming",
  "Be available when the rider arrives",
  "Inspect your package after receiving it",
  "Contact Markood support if you experience a delivery issue",
];

export default function HowItWorksContent() {
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
                  Delivery Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                How delivery works on
                <br />
                <span className="text-[#0066FF]">Markood.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Learn how your Markood order moves from the seller to your
                doorstep, from checkout and preparation to pickup and final
                delivery.
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
                  <Truck size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Delivery made simple
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Markood connects customers, sellers and delivery riders to
                    make the delivery process simple. Once you place an order,
                    the seller prepares it and a rider collects it for delivery
                    to your chosen address.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                STEPS
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
                  The delivery journey
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  From checkout to your door
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Your order goes through a few simple stages before it reaches
                  you.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
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
                        {/* Number */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] transition-colors duration-300 group-hover:bg-blue-50">
                          {step.number}
                        </div>

                        {/* Content */}
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
                DELIVERY FEATURES
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
                During delivery
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What you can expect
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Here are some of the key things to expect while your order is
                being delivered.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliveryFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{
                        opacity: 0,
                        y: 18,
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
                        delay: index * 0.07,
                      }}
                      className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-5 text-base font-black text-slate-950">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =================================================
                THINGS TO REMEMBER
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
                Before delivery
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Help your delivery go smoothly
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                A few simple things can make receiving your order easier.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {thingsToRemember.map((item, index) => (
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
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                    Delivery tip
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Double-check your delivery address.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Before placing your order, make sure your address, phone
                    number and other delivery details are correct. Accurate
                    information helps the rider find you and reduces unnecessary
                    delivery delays.
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
                    Learn how to check the status of your Markood order.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          </article>

          {/* =================================================
              OPTIONAL SIDEBAR
          ================================================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                On this page
              </p>

              <nav className="mt-4 space-y-1">
                <a
                  href="#delivery-journey"
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0066FF]"
                >
                  Delivery journey
                </a>

                <a
                  href="#what-to-expect"
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0066FF]"
                >
                  What to expect
                </a>

                <a
                  href="#before-delivery"
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0066FF]"
                >
                  Before delivery
                </a>

                <a
                  href="#delivery-tip"
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0066FF]"
                >
                  Delivery tip
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

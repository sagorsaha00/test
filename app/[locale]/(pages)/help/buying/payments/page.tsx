"use client";

import { motion, type Variants } from "framer-motion";

import {
  ArrowDownLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  WalletCards,
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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PaymentsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7faff]">
        {/* Background glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
                <WalletCards size={14} />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                Buyer Guide
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl text-center"
          >
            <h1 className="text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
              Payments made
              <br />
              <span className="text-[#0066FF]">simple & secure.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Learn how payments work on Markood, what payment methods are
              supported, and how we help keep every transaction secure.
            </p>
          </motion.div>

          {/* Payment visual */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-7">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    Markood checkout
                  </p>

                  <p className="mt-2 text-xl font-black text-slate-950">
                    Secure payment
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]"
                >
                  <LockKeyhole size={21} />
                </motion.div>
              </div>

              {/* Payment amount */}
              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Order total</span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-blue-200">
                    SECURE
                  </span>
                </div>

                <div className="mt-3 text-3xl font-black">$ 2,450</div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <CreditCard size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Payment protected</p>

                    <p className="text-xs text-slate-400">
                      Your payment information stays secure.
                    </p>
                  </div>

                  <CheckCircle2 size={19} className="ml-auto text-blue-400" />
                </div>
              </div>

              {/* Animated line */}
              <motion.div
                animate={{
                  scaleX: [0.2, 1, 0.2],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-6 h-px origin-left bg-blue-200"
              />

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Protected checkout",
                  "Secure processing",
                  "Order confirmation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600"
                  >
                    <Check size={12} className="text-[#0066FF]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PAYMENT METHODS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Payment options
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose the payment method
              <br />
              that works for you.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Select an available payment method during checkout and follow the
              instructions to complete your order.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {/* Card */}
            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -6 }}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                <CreditCard size={21} />
              </div>

              <h3 className="mt-6 text-base font-black">Card payments</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Pay securely using an eligible debit or credit card available at
                checkout.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                <ShieldCheck size={15} />
                Secure checkout
              </div>
            </motion.div>

            {/* Wallet */}
            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -6 }}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                <WalletCards size={21} />
              </div>

              <h3 className="mt-6 text-base font-black">Digital wallets</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use an available digital wallet option to complete your purchase
                quickly.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-indigo-600">
                <Sparkles size={15} />
                Fast checkout
              </div>
            </motion.div>

            {/* Available methods */}
            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -6 }}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-transform duration-300 group-hover:scale-110">
                <ArrowDownLeft size={21} />
              </div>

              <h3 className="mt-6 text-base font-black">Available methods</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Payment options may vary depending on your location, order and
                available checkout methods.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-slate-600">
                <CheckCircle2 size={15} />
                Shown at checkout
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Simple process
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How payment works
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Complete your payment in a few simple steps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative mx-auto mt-12 max-w-5xl"
          >
            {/* Connecting line */}
            <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-blue-100 md:block" />

            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Review your order",
                  text: "Check your items, delivery details and total amount before continuing.",
                },
                {
                  number: "02",
                  title: "Choose payment",
                  text: "Select an available payment option and follow the checkout instructions.",
                },
                {
                  number: "03",
                  title: "Payment confirmed",
                  text: "After successful payment, your order moves forward for processing.",
                },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  variants={cardAnimation}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0066FF] text-sm font-black text-white shadow-[0_10px_30px_rgba(0,102,255,0.25)]"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="mt-6 text-base font-black">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECURITY
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-12 sm:px-12"
          >
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
            />

            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <ShieldCheck size={23} />
                </div>

                <h2 className="mt-6 max-w-xl text-2xl font-black text-white sm:text-3xl">
                  Your payment security matters.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  Always complete payments through the official Markood checkout
                  experience. Never share sensitive payment information with
                  another person.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {[
                  "Protected checkout",
                  "Secure payment flow",
                  "Order confirmation",
                  "Payment support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 size={17} className="text-blue-300" />

                    <p className="mt-3 text-xs font-bold leading-5 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMON PROBLEMS
      ========================================================= */}

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              Payment help
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Having a payment problem?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Here are some common situations and what you should do.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            <motion.div
              variants={cardAnimation}
              className="rounded-[24px] border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <XCircle size={18} />
                </div>

                <div>
                  <h3 className="font-black">Payment failed</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Check your payment details and available balance, then try
                    again using an available payment method.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              className="rounded-[24px] border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <h3 className="font-black">Payment completed</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    If your payment was successful, check your order status and
                    confirmation details.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              className="rounded-[24px] border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <ArrowRight size={18} />
                </div>

                <div>
                  <h3 className="font-black">Payment still processing</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Allow some time for the payment status to update before
                    attempting another payment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              className="rounded-[24px] border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                  <LockKeyhole size={18} />
                </div>

                <div>
                  <h3 className="font-black">
                    Never share payment information
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Keep sensitive payment information private and only use the
                    official Markood checkout process.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]"
            >
              <CreditCard size={23} />
            </motion.div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
              Ready to complete your order?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Review your order carefully and choose an available payment method
              at checkout.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-2">
              {[
                "Secure checkout",
                "Protected payment",
                "Order confirmation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[10px] font-bold text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

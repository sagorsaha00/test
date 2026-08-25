"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  HelpCircle,
  Package,
  RefreshCcw,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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

const returnSteps = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Check eligibility",
    text: "Review whether your order and product qualify for a return.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Submit a request",
    text: "Provide the required information and explain why you want to return the item.",
  },
  {
    number: "03",
    icon: Package,
    title: "Prepare the item",
    text: "Keep the product safely packaged and ready according to the return instructions.",
  },
  {
    number: "04",
    icon: RefreshCcw,
    title: "Return & review",
    text: "Once the return is received, the applicable review process can begin.",
  },
];

const reasons = [
  {
    title: "Wrong item received",
    text: "You received a different product from what you ordered.",
  },
  {
    title: "Damaged product",
    text: "The product arrived damaged or was affected during delivery.",
  },
  {
    title: "Product issue",
    text: "The product has an issue that may qualify under the applicable return policy.",
  },
];

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* Premium Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-[#0066FF]">
              <ShieldCheck size={14} />
              BUYING GUIDE
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-[-2px] sm:text-5xl lg:text-6xl">
              Returns & refunds
              <br />
              <span className="text-[#0066FF]">made clear.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Learn how Markood returns work, when an order may qualify, how to
              submit a request and what happens after your return is reviewed.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 rounded-[30px] border border-blue-100 bg-[#f5f9ff] p-7 sm:p-9"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0066FF] shadow-sm">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h2 className="font-black text-slate-950">
                  Start with the return requirements
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Return eligibility can depend on the product, order status,
                  condition of the item and the applicable Markood policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Return Process */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
              RETURN PROCESS
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How returns work
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              A simple overview of the return journey from request to review.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-2xl"
                >
                  <span className="absolute right-5 top-3 text-5xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-lg font-black">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Reasons */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066FF]">
                COMMON CASES
              </span>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                When might you need a return?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                Different products and situations may have different
                requirements. These are examples of common return situations.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <h3 className="font-black">{reason.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {reason.text}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="ml-auto mt-1 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0066FF]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Refund */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white sm:p-12"
          >
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <CreditCard size={25} />
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                  REFUNDS
                </span>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  What happens to your payment?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  If your return is approved and a refund is applicable, the
                  refund process will follow the payment method and applicable
                  Markood refund rules.
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-blue-300"
                  />

                  <p className="text-xs leading-6 text-slate-400">
                    Refund timing may vary depending on the payment method and
                    processing requirements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final information */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
              <HelpCircle size={24} />
            </div>

            <h2 className="mt-6 text-2xl font-black sm:text-3xl">
              Keep your order information handy
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              When requesting a return, make sure you have your order details,
              product information and any relevant evidence ready.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

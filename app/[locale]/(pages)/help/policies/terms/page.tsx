"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileText,
  Lock,
  Scale,
  ShieldCheck,
  Store,
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

const sections = [
  {
    number: "01",
    icon: UserCheck,
    title: "Using Markood",
    description:
      "You agree to use Markood responsibly and in accordance with these Terms, applicable laws and the rules provided throughout the platform.",
  },
  {
    number: "02",
    icon: Store,
    title: "Accounts and profiles",
    description:
      "You are responsible for providing accurate account information and keeping your login credentials secure. You should not use another person's account without authorization.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Orders and transactions",
    description:
      "When you place or accept an order, you agree to provide accurate information and follow the applicable buying, selling and delivery processes.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Marketplace standards",
    description:
      "Products, services, listings and user activity must comply with Markood's marketplace standards and applicable legal requirements.",
  },
  {
    number: "05",
    icon: Scale,
    title: "Responsibilities",
    description:
      "Customers, sellers and other platform participants are responsible for their actions, information and obligations associated with using Markood.",
  },
  {
    number: "06",
    icon: Lock,
    title: "Privacy and information",
    description:
      "Your use of Markood is also subject to applicable privacy practices describing how information may be collected, used and protected.",
  },
];

const userResponsibilities = [
  "Provide accurate and up-to-date account information",
  "Keep your account credentials secure",
  "Use Markood only for legitimate purposes",
  "Provide accurate order and delivery information",
  "Respect sellers, customers, riders and other users",
  "Follow applicable Markood policies and platform rules",
];

const prohibitedActions = [
  "Using Markood for unlawful or fraudulent activities",
  "Creating accounts using false or misleading information",
  "Attempting to access another user's account",
  "Manipulating orders, reviews, ratings or marketplace activity",
  "Uploading prohibited or misleading product information",
  "Interfering with the normal operation or security of the platform",
];

export default function TermsContent() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[850px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute left-[35%] top-[1600px] h-[300px] w-[300px] rounded-full bg-indigo-100/30 blur-3xl" />
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
                <Scale size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Markood Policies
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Terms &
                <br />
                <span className="text-[#0066FF]">Conditions.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                These Terms explain the rules and responsibilities that apply
                when you use Markood, including buying, selling, ordering and
                participating in the marketplace.
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
                  <FileText size={20} />
                </div>

                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Please read these Terms carefully
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    By creating an account, accessing or using Markood, you
                    agree to follow these Terms and the policies that apply to
                    your use of the platform. If you do not agree with these
                    Terms, you should not use Markood.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CORE TERMS
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
                  The basics
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Understanding the Terms
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  These core principles explain how users are expected to
                  interact with Markood.
                </p>
              </motion.div>

              <div className="mt-9 space-y-4">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <motion.div
                      key={section.number}
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
                USER RESPONSIBILITIES
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
                Your responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Using Markood responsibly
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Everyone using Markood has a responsibility to provide accurate
                information and use the platform appropriately.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {userResponsibilities.map((item, index) => (
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
                BUYERS / SELLERS
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
                Marketplace participation
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Buyers and sellers
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Different responsibilities may apply depending on how you use
                the Markood marketplace.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {/* Buyers */}
                <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <UserCheck size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    Buyers
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Buyers should provide accurate information and follow the
                    applicable ordering, payment and delivery requirements.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Provide accurate delivery information",
                      "Review product and order information before purchasing",
                      "Use valid payment information",
                      "Be available for delivery when appropriate",
                      "Follow cancellation and return policies",
                    ].map((item) => (
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

                {/* Sellers */}
                <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <Store size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    Sellers
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Sellers are responsible for maintaining accurate listings
                    and fulfilling accepted orders according to Markood rules.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Provide accurate product information",
                      "Use clear and appropriate product images",
                      "Maintain accurate pricing and availability",
                      "Prepare accepted orders appropriately",
                      "Follow marketplace and product policies",
                    ].map((item) => (
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
                PROHIBITED USE
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
                Platform integrity
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Prohibited activities
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Users must not use Markood in ways that could harm other users,
                compromise the platform or violate applicable laws.
              </p>

              <div className="mt-8 space-y-3">
                {prohibitedActions.map((item, index) => (
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
                CONTENT + LISTINGS
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
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                    <FileText size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Listings & content
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                      Keep marketplace information accurate
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Product listings, descriptions, images, prices and other
                      marketplace information should be accurate and should not
                      intentionally mislead customers.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Product information should be accurate",
                    "Images should reasonably represent the product",
                    "Prices should be clearly stated",
                    "Availability should be kept up to date",
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
                ACCOUNT ACTIONS
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
              <div className="relative overflow-hidden rounded-[30px] bg-slate-950 p-7 sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                      Account protection
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white">
                      Keep your Markood account secure.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      You are responsible for taking reasonable steps to protect
                      your account credentials. If you believe someone has
                      accessed your account without permission, take appropriate
                      steps to secure it and contact Markood through the
                      available support channels.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                POLICY CHANGES
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
                Updates
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Changes to these Terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Markood may update these Terms from time to time to reflect
                changes to the platform, services, legal requirements or
                marketplace practices.
              </p>

              <div className="mt-7 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Clock3 size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-950">
                      Check this page periodically
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      The latest version of these Terms will be made available
                      through Markood. Your continued use of the platform after
                      an applicable update may be subject to the updated Terms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LEGAL NOTICE
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
                    Important legal notice
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    This page is a general Terms & Conditions template for the
                    Markood Help Center. Before publishing it as the legally
                    binding terms for your business, the final wording should be
                    reviewed and approved for the countries, services and legal
                    structure in which Markood operates.
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

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ImageIcon,
  Package,
  Pencil,
  Plus,
  ShieldCheck,
  Tag,
  Trash2,
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

const cards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Breadcrumb */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-2 text-xs font-medium text-slate-400"
        >
          <Link href="/help" className="hover:text-[#0066FF]">
            Help Center
          </Link>

          <ChevronRight size={13} />

          <Link href="/help/selling" className="hover:text-[#0066FF]">
            Selling
          </Link>

          <ChevronRight size={13} />

          <span className="font-semibold text-slate-600">Add Products</span>
        </motion.div>

        {/* Header */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 shadow-sm">
            <Package size={14} className="text-[#0066FF]" />

            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
              Seller Guide
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl">
            Add and manage
            <br />
            <span className="text-[#0066FF]">your products.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
            Learn how to create product listings, add images, choose categories,
            set prices and manage your products on Markood.
          </p>
        </motion.div>

        {/* Main */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_280px]">
          <main>
            {/* Intro */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                  <Plus size={20} />
                </div>

                <div>
                  <h2 className="font-black text-slate-950">
                    Create a great product listing
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    A good product listing helps customers understand exactly
                    what they are buying. Keep your information accurate, clear
                    and easy to understand.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cards */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cards}
              className="mt-12 grid gap-4 sm:grid-cols-2"
            >
              <motion.div
                variants={card}
                className="rounded-[24px] border border-slate-200 bg-white p-6"
              >
                <ImageIcon size={21} className="text-[#0066FF]" />

                <h3 className="mt-5 font-black text-slate-950">
                  Product images
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Upload clear, high-quality images that accurately represent
                  the product.
                </p>
              </motion.div>

              <motion.div
                variants={card}
                className="rounded-[24px] border border-slate-200 bg-white p-6"
              >
                <Tag size={21} className="text-[#0066FF]" />

                <h3 className="mt-5 font-black text-slate-950">Categories</h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Select the most relevant category so customers can easily
                  discover your product.
                </p>
              </motion.div>

              <motion.div
                variants={card}
                className="rounded-[24px] border border-slate-200 bg-white p-6"
              >
                <Pencil size={21} className="text-[#0066FF]" />

                <h3 className="mt-5 font-black text-slate-950">
                  Product information
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Add accurate names, descriptions, sizes, specifications and
                  other important details.
                </p>
              </motion.div>

              <motion.div
                variants={card}
                className="rounded-[24px] border border-slate-200 bg-white p-6"
              >
                <Tag size={21} className="text-[#0066FF]" />

                <h3 className="mt-5 font-black text-slate-950">Pricing</h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Make sure your product price is accurate before publishing the
                  listing.
                </p>
              </motion.div>
            </motion.div>

            {/* Checklist */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-14"
            >
              <h2 className="text-2xl font-black text-slate-950">
                Before publishing
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Product information is accurate",
                  "Images clearly show the product",
                  "Correct category is selected",
                  "Price is correct",
                  "Product follows Markood policies",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 size={18} className="text-[#0066FF]" />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-14 rounded-[26px] bg-slate-950 p-7 text-white"
            >
              <ShieldCheck size={22} className="text-blue-300" />

              <h3 className="mt-4 text-xl font-black">
                Keep your listings up to date
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Update product availability, pricing and information whenever
                something changes.
              </p>
            </motion.div>

            {/* Next */}

            <Link
              href="/help/selling/orders"
              className="group mt-8 flex items-center justify-between rounded-[24px] border border-slate-200 bg-white p-6 hover:border-blue-100"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Next guide
                </p>

                <h3 className="mt-2 font-black text-slate-950">
                  Managing orders
                </h3>
              </div>

              <ArrowRight
                size={19}
                className="text-slate-300 group-hover:text-[#0066FF]"
              />
            </Link>
          </main>

          {/* Sidebar */}

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                On this page
              </p>

              <div className="mt-4 border-l border-slate-200">
                <a
                  href="#images"
                  className="block border-l-2 border-[#0066FF] py-2 pl-4 text-xs font-bold text-[#0066FF]"
                >
                  Product images
                </a>

                <a
                  href="#information"
                  className="block border-l-2 border-transparent py-2 pl-4 text-xs text-slate-400 hover:text-slate-700"
                >
                  Product information
                </a>

                <a
                  href="#publishing"
                  className="block border-l-2 border-transparent py-2 pl-4 text-xs text-slate-400 hover:text-slate-700"
                >
                  Publishing
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  Search,
  Store,
  ShoppingBag,
  Truck,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    title: "Sell on Markood",
    description: "Manage your store, products, orders and sales.",
    icon: Store,
    href: "/help/selling",
  },
  {
    title: "Buy on Markood",
    description: "Orders, payments, returns and buyer protection.",
    icon: ShoppingBag,
    href: "/help/buying",
  },
  {
    title: "Delivery",
    description: "Learn how Markood delivery works.",
    icon: Truck,
    href: "/help/delivery",
  },
  {
    title: "Policies & Legal",
    description: "Terms, privacy and marketplace policies.",
    icon: FileText,
    href: "/help/policies",
  },
];

export default function MarkoodHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#0066FF]/5 blur-3xl" />

        <div className="absolute -left-32 top-40 h-[300px] w-[300px] rounded-full bg-[#FFC400]/10 blur-3xl" />

        <div className="absolute right-[12%] top-[25%] h-3 w-3 rounded-full bg-[#FFC400]" />

        <div className="absolute left-[8%] top-[35%] h-2 w-2 rounded-full bg-[#0066FF]/40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Small badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0066FF]/10 bg-[#0066FF]/5 px-4 py-2 text-xs font-semibold text-[#0066FF]">
            <Sparkles size={14} />

            <span>Welcome to Markood Center</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Everything you need to know about{" "}
            <span className="relative whitespace-nowrap text-[#0066FF]">
              Markood
              
              {/* Yellow underline */}
              <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#FFC400] sm:-bottom-2" />
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Find answers, learn how Markood works, explore our policies,
            and get the help you need as a buyer, seller, restaurant,
            rider or partner.
          </p>

           

          {/* <div className="mx-auto mt-9 max-w-2xl">
            <div
              className="
                group
                flex
                items-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-2
                shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                transition
                focus-within:border-[#0066FF]/40
                focus-within:shadow-[0_15px_45px_rgba(0,102,255,0.12)]
              "
            >
              <Search
                size={21}
                className="ml-3 shrink-0 text-slate-400 transition group-focus-within:text-[#0066FF]"
              />

              <input
                type="text"
                placeholder="Search Markood Help..."
                className="
                  min-w-0
                  flex-1
                  border-0
                  bg-transparent
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  sm:text-base
                "
              />

              <button
                type="button"
                className="
                  hidden
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0066FF]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0052CC]
                  sm:flex
                "
              >
                Search

                <ArrowRight size={16} />
              </button>
            </div>

            
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span>Popular:</span>

              <Link
                href="/help/selling/products"
                className="text-slate-500 transition hover:text-[#0066FF]"
              >
                Add a product
              </Link>

              <Link
                href="/help/buying/orders"
                className="text-slate-500 transition hover:text-[#0066FF]"
              >
                Track an order
              </Link>

              <Link
                href="/help/policies/refund"
                className="text-slate-500 transition hover:text-[#0066FF]"
              >
                Refunds
              </Link>

              <Link
                href="/help/delivery"
                className="text-slate-500 transition hover:text-[#0066FF]"
              >
                Delivery
              </Link>
            </div>
          </div> */}
        </div>

        {/* ================= TOPIC CARDS ================= */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.title}
                href={topic.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0066FF]/20
                  hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                "
              >
                {/* Yellow corner */}
                <div
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-20
                    w-20
                    rounded-full
                    bg-[#FFC400]/10
                    transition
                    duration-300
                    group-hover:scale-150
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#0066FF]/8
                    text-[#0066FF]
                    transition
                    duration-300
                    group-hover:bg-[#0066FF]
                    group-hover:text-white
                  "
                >
                  <Icon size={21} />
                </div>

                {/* Content */}
                <h2 className="relative mt-5 text-sm font-bold text-slate-900">
                  {topic.title}
                </h2>

                <p className="relative mt-2 text-xs leading-5 text-slate-500">
                  {topic.description}
                </p>

                {/* Arrow */}
                <div className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#0066FF]">
                  Explore

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
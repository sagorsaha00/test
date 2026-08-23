"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  Store,
  ShoppingBag,
  Truck,
  FileText,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const menus = [
  {
    label: "Sell on Markood",
    icon: Store,
    description:
      "Everything sellers need to start, manage and grow their business.",
    href: "/help/selling",
    items: [
      { label: "Getting Started", href: "/help/selling/getting-started" },
      { label: "Add Products", href: "/help/selling/products" },
      { label: "Orders", href: "/help/selling/orders" },
      { label: "Pricing & Fees", href: "/help/selling/pricing-fees" },
      { label: "Shipping & Delivery", href: "/help/selling/delivery" },
      { label: "Returns & Refunds", href: "/help/selling/returns" },
    ],
  },
  {
    label: "Buy on Markood",
    icon: ShoppingBag,
    description:
      "Learn how to discover products, place orders and get support.",
    href: "/help/buying",
    items: [
      { label: "Getting Started", href: "/help/buying/getting-started" },
      { label: "Search & Order", href: "/help/buying/search-order" },
      { label: "Payments", href: "/help/buying/payments" },
      { label: "Delivery", href: "/help/buying/delivery" },
      { label: "Cancellation", href: "/help/buying/cancellation" },
      { label: "Returns & Refunds", href: "/help/buying/returns" },
    ],
  },
  {
    label: "Delivery",
    icon: Truck,
    description:
      "Everything about Markood delivery for customers, sellers and riders.",
    href: "/help/delivery",
    items: [
      { label: "How Delivery Works", href: "/help/delivery/how-it-works" },
      { label: "Delivery Zones", href: "/help/delivery/zones" },
      {
        label: "Seller Responsibilities",
        href: "/help/delivery/seller-responsibilities",
      },
      {
        label: "Rider Responsibilities",
        href: "/help/delivery/rider-responsibilities",
      },
      {
        label: "Failed Deliveries",
        href: "/help/delivery/failed-deliveries",
      },
      {
        label: "Lost & Damaged Orders",
        href: "/help/delivery/lost-damaged-orders",
      },
    ],
  },
  {
    label: "Policies & Legal",
    icon: FileText,
    description: "Markood's rules, agreements and important legal policies.",
    href: "/help/policies",
    items: [
      {
        label: "Terms & Conditions",
        href: "/help/policies/terms",
      },
      {
        label: "Seller Agreement",
        href: "/help/policies/seller-agreement",
      },
      {
        label: "Refund Policy",
        href: "/help/policies/refund",
      },
      {
        label: "Cancellation Policy",
        href: "/help/policies/cancellation",
      },
    ],
  },
  {
    label: "Updates",
    icon: Megaphone,
    description: "See what's new and what's changed across Markood.",
    href: "/help/updates",
    items: [
      {
        label: "What's New",
        href: "/help/updates",
      },
      {
        label: "Policy Updates",
        href: "/help/updates/policies",
      },
      {
        label: "Delivery Updates",
        href: "/help/updates/delivery",
      },
      {
        label: "Marketplace Updates",
        href: "/help/updates/marketplace",
      },
    ],
  },
];

export default function MarkoodHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu((current) => (current === label ? null : label));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            onClick={() => setMobileOpen(false)}
          >
            <div className="text-[27px] font-extrabold tracking-[-1.5px] sm:text-[30px]">
              <span className="text-[#0066FF]">Mark</span>
              <span className="text-[#FFC400]">oo</span>
              <span className="text-[#0066FF]">d</span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden h-full items-center lg:flex">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <div key={menu.label} className="group relative h-full">
                  {/* Nav Button */}
                  <button
                    type="button"
                    className="
                      flex h-full items-center gap-1.5
                      whitespace-nowrap
                      px-3 xl:px-4
                      text-[14px]
                      font-semibold
                      text-slate-900
                      transition-colors
                      hover:text-[#0066FF]
                    "
                  >
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className="hidden xl:block"
                    />

                    <span>{menu.label}</span>

                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-200
                        group-hover:rotate-180
                      "
                    />
                  </button>

                  {/* ================= DESKTOP DROPDOWN ================= */}
                  <div
                    className="
                      invisible
                      absolute
                      left-1/2
                      top-[72px]
                      w-[330px]
                      -translate-x-1/2
                      translate-y-2
                      rounded-2xl
                      border
                      border-slate-100
                      bg-white
                      p-3
                      opacity-0
                      shadow-[0_20px_60px_rgba(15,23,42,0.14)]
                      transition-all
                      duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {/* Dropdown Header */}
                    <Link
                      href={menu.href}
                      className="
                        mb-2
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        bg-slate-50
                        p-4
                        transition
                        hover:bg-[#0066FF]/5
                      "
                    >
                      <div
                        className="
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-xl
                          bg-[#0066FF]/10
                          text-[#0066FF]
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-bold text-slate-900">
                            {menu.label}
                          </p>

                          <ArrowRight size={15} className="text-slate-400" />
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {menu.description}
                        </p>
                      </div>
                    </Link>

                    {/* Dropdown Items */}
                    <div className="max-h-[390px] overflow-y-auto">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="
                            flex
                            items-center
                            rounded-lg
                            px-4
                            py-2.5
                            text-[13px]
                            font-medium
                            text-slate-600
                            transition
                            hover:bg-[#0066FF]/5
                            hover:text-[#0066FF]
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ================= DESKTOP SEARCH ================= */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="
              hidden
              shrink-0
              items-center
              gap-2.5
              rounded-full
              bg-slate-100
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-200
              lg:flex
            "
          >
            <Search size={17} />
            <span>Search</span>
          </button>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Search */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-slate-100
                text-slate-700
                transition
                hover:bg-slate-200
              "
            >
              <Search size={19} />
            </button>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-slate-100
                text-slate-900
                transition
                hover:bg-slate-200
              "
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden
            border-t border-slate-100
            bg-white
            transition-all
            duration-300
            lg:hidden
            ${
              mobileOpen
                ? "max-h-[calc(100vh-72px)] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
            {/* Mobile Home */}
            <Link
              href="/help"
              onClick={() => setMobileOpen(false)}
              className="
                mb-2
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-3.5
                text-sm
                font-semibold
                text-slate-900
                hover:bg-slate-50
              "
            >
              Markood Help Center
              <ArrowRight size={16} className="text-slate-400" />
            </Link>

            {/* Mobile Categories */}
            <div className="space-y-1">
              {menus.map((menu) => {
                const Icon = menu.icon;
                const isOpen = openMobileMenu === menu.label;

                return (
                  <div key={menu.label} className="overflow-hidden rounded-xl">
                    {/* Category */}
                    <button
                      type="button"
                      onClick={() => toggleMobileMenu(menu.label)}
                      className={`
                        flex 
                        cursor-pointer
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-left
                        transition
                        ${
                          isOpen
                            ? "bg-[#0066FF]/5 text-[#0066FF]"
                            : "text-slate-800 hover:bg-slate-50"
                        }
                      `}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} strokeWidth={2} />

                        <span className="text-sm font-semibold">
                          {menu.label}
                        </span>
                      </span>

                      <ChevronDown
                        size={17}
                        className={`
                          transition-transform
                          duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    {/* Accordion */}
                    <div
                      className={`
                        grid transition-all duration-200
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-7 border-l border-slate-200 py-2 pl-4">
                          {/* Description */}
                          <p className="mb-2 pr-3 text-xs leading-5 text-slate-500">
                            {menu.description}
                          </p>

                          {/* Main Category */}
                          <Link
                            href={menu.href}
                            onClick={() => setMobileOpen(false)}
                            className="
                              mb-1
                              flex
                              items-center
                              justify-between
                              rounded-lg
                              px-3
                              py-2.5
                              text-xs
                              font-bold
                              text-[#0066FF]
                              hover:bg-[#0066FF]/5
                            "
                          >
                            View all
                            <ArrowRight size={14} />
                          </Link>

                          {/* Items */}
                          {menu.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="
                                block
                                rounded-lg
                                px-3
                                py-2.5
                                text-xs
                                font-medium
                                text-slate-600
                                transition
                                hover:bg-slate-50
                                hover:text-[#0066FF]
                              "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                className="

                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  bg-slate-100
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-slate-200
                "
              >
                <Search size={18} />
                Search Markood Help
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/40 p-4 pt-16 backdrop-blur-md sm:p-6 sm:pt-24"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[80%] max-w-[900px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl"
            >
              <div className="flex cursor-pointer items-center gap-3 border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4">
                <Search size={22} className="text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search Markood Help..."
                  className="w-full text-base font-medium text-slate-900 outline-none placeholder:text-slate-400 sm:text-lg"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

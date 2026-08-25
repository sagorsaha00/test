"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
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
import LanguageSwitcher from "./lanaguageswitcher";

export default function MarkoodHeader() {
  const t = useTranslations("Header");
  const locale = useLocale();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const menus = [
    {
      label: t("sellOnMarkood.title"),
      icon: Store,
      description: t("sellOnMarkood.description"),
      href: `/${locale}/help/selling`,
      items: [
        {
          label: t("sellOnMarkood.items.gettingStarted"),
          href: `/${locale}/help/selling/getting-started`,
        },
        {
          label: t("sellOnMarkood.items.addProducts"),
          href: `/${locale}/help/selling/products`,
        },
        {
          label: t("sellOnMarkood.items.orders"),
          href: `/${locale}/help/selling/orders`,
        },
        {
          label: t("sellOnMarkood.items.pricingFees"),
          href: `/${locale}/help/selling/pricing-fees`,
        },
        {
          label: t("sellOnMarkood.items.delivery"),
          href: `/${locale}/help/selling/delivery`,
        },
        {
          label: t("sellOnMarkood.items.returns"),
          href: `/${locale}/help/selling/returns`,
        },
      ],
    },
    {
      label: t("buyOnMarkood.title"),
      icon: ShoppingBag,
      description: t("buyOnMarkood.description"),
      href: `/${locale}/help/buying`,
      items: [
        {
          label: t("buyOnMarkood.items.gettingStarted"),
          href: `/${locale}/help/buying/getting-started`,
        },
        {
          label: t("buyOnMarkood.items.searchOrder"),
          href: `/${locale}/help/buying/search-order`,
        },
        {
          label: t("buyOnMarkood.items.payments"),
          href: `/${locale}/help/buying/payments`,
        },
        {
          label: t("buyOnMarkood.items.delivery"),
          href: `/${locale}/help/buying/delivery`,
        },
        {
          label: t("buyOnMarkood.items.cancellation"),
          href: `/${locale}/help/buying/cancellation`,
        },
        {
          label: t("buyOnMarkood.items.returns"),
          href: `/${locale}/help/buying/returns`,
        },
      ],
    },
    {
      label: t("delivery.title"),
      icon: Truck,
      description: t("delivery.description"),
      href: `/${locale}/help/delivery`,
      items: [
        {
          label: t("delivery.items.howItWorks"),
          href: `/${locale}/help/delivery/how-it-works`,
        },
        {
          label: t("delivery.items.zones"),
          href: `/${locale}/help/delivery/zones`,
        },
        {
          label: t("delivery.items.sellerResponsibilities"),
          href: `/${locale}/help/delivery/seller-responsibilities`,
        },
        {
          label: t("delivery.items.riderResponsibilities"),
          href: `/${locale}/help/delivery/rider-responsibilities`,
        },
        {
          label: t("delivery.items.failedDeliveries"),
          href: `/${locale}/help/delivery/failed-deliveries`,
        },
        {
          label: t("delivery.items.lostDamagedOrders"),
          href: `/${locale}/help/delivery/lost-damaged-orders`,
        },
      ],
    },
    {
      label: t("policies.title"),
      icon: FileText,
      description: t("policies.description"),
      href: `/${locale}/help/policies`,
      items: [
        {
          label: t("policies.items.terms"),
          href: `/${locale}/help/policies/terms`,
        },
        {
          label: t("policies.items.sellerAgreement"),
          href: `/${locale}/help/policies/seller-agreement`,
        },
        {
          label: t("policies.items.refund"),
          href: `/${locale}/help/policies/refund`,
        },
        {
          label: t("policies.items.cancellation"),
          href: `/${locale}/help/policies/cancellation`,
        },
      ],
    },
    {
      label: t("updates.title"),
      icon: Megaphone,
      description: t("updates.description"),
      href: `/${locale}/help/updates`,
      items: [
        { label: t("updates.items.whatsNew"), href: `/${locale}/help/updates` },
        {
          label: t("updates.items.policyUpdates"),
          href: `/${locale}/help/updates/policies`,
        },
        {
          label: t("updates.items.deliveryUpdates"),
          href: `/${locale}/help/updates/delivery`,
        },
        {
          label: t("updates.items.marketplaceUpdates"),
          href: `/${locale}/help/updates/marketplace`,
        },
      ],
    },
  ];

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu((current) => (current === label ? null : label));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <Link
            href={`/${locale}`}
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
                      rtl:translate-x-1/2
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

                          <ArrowRight
                            size={15}
                            className="text-slate-400 rtl:rotate-180"
                          />
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
          <LanguageSwitcher />
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
            <span>{t("search")}</span>
          </button>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Search */}
            <button
              type="button"
              aria-label={t("search")}
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
              href={`/${locale}/help`}
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
              {t("helpCenter")}
              <ArrowRight size={16} className="text-slate-400 rtl:rotate-180" />
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
                        rtl:text-right
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
                        <div className="ml-7 rtl:ml-0 rtl:mr-7 border-l rtl:border-l-0 rtl:border-r border-slate-200 py-2 pl-4 rtl:pl-0 rtl:pr-4">
                          {/* Description */}
                          <p className="mb-2 pr-3 rtl:pr-0 rtl:pl-3 text-xs leading-5 text-slate-500">
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
                            {t("viewAll")}
                            <ArrowRight size={14} className="rtl:rotate-180" />
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
                {t("searchPlaceholder")}
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
                  placeholder={t("searchPlaceholder")}
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

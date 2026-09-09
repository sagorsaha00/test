"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
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
import HelpSearch from "./HelpSearch";

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
        {
          label: t("updates.items.whatsNew"),
          href: `/${locale}/help/updates`,
        },
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
          <Link
            href={`/${locale}`}
            className="flex shrink-0 items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo/logo.webp"
              alt="Logo"
              width={140}
              height={40}
              className="
      h-7
      w-auto
      object-contain
      sm:h-8
      md:h-9
      lg:h-10
    "
              priority
            />
          </Link>

          <nav className="hidden h-full items-center lg:flex">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <div key={menu.label} className="group relative h-full">
                  <button
                    type="button"
                    className="
                      flex
                      h-full
                      items-center
                      gap-1.5
                      whitespace-nowrap
                      px-3
                      text-[14px]
                      font-semibold
                      text-slate-900
                      transition-colors
                      hover:text-[#0066FF]
                      xl:px-4
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
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

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
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
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

          {/* =================================================
              DESKTOP SEARCH
          ================================================= */}

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

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label={t("search")}
              onClick={() => setSearchOpen(true)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-slate-100
                text-slate-700
                transition
                hover:bg-slate-200
              "
            >
              <Search size={19} />
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
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

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-slate-100
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

              <ArrowRight size={16} className="text-slate-400" />
            </Link>

            <div className="space-y-1">
              {menus.map((menu) => {
                const Icon = menu.icon;

                const isOpen = openMobileMenu === menu.label;

                return (
                  <div key={menu.label} className="overflow-hidden rounded-xl">
                    <button
                      type="button"
                      onClick={() => toggleMobileMenu(menu.label)}
                      className={`
                        flex
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
                        <Icon size={18} />

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

                    <div
                      className={`
                        grid
                        transition-all
                        duration-200
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-7 border-l border-slate-200 py-2 pl-4">
                          <p className="mb-2 pr-3 text-xs leading-5 text-slate-500">
                            {menu.description}
                          </p>

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

                            <ArrowRight size={14} />
                          </Link>

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

      {/* =====================================================
          SEPARATE SEARCH COMPONENT
      ===================================================== */}

      <HelpSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        locale={locale}
        placeholder={t("searchPlaceholder")}
      />
    </>
  );
}

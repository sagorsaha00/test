"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";

 

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 5.9c-.7.33-1.46.55-2.25.65a3.94 3.94 0 0 0 1.73-2.17 7.86 7.86 0 0 1-2.5.96 3.92 3.92 0 0 0-6.68 3.58A11.13 11.13 0 0 1 3.16 4.7a3.92 3.92 0 0 0 1.21 5.23c-.64-.02-1.25-.2-1.78-.49v.05a3.92 3.92 0 0 0 3.14 3.84c-.58.16-1.2.18-1.78.07a3.93 3.93 0 0 0 3.66 2.72A7.87 7.87 0 0 1 2 18.57a11.1 11.1 0 0 0 6.02 1.76c7.22 0 11.17-5.98 11.17-11.17l-.01-.51A7.98 7.98 0 0 0 21 5.9Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-xs text-slate-400 transition hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   SOCIALS
========================================================= */

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/markood",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/markood",
    icon: InstagramIcon,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/markood",
    icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/markood",
    icon: LinkedinIcon,
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function MarkoodFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        {/* =================================================
            TOP
        ================================================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_2.75fr]">
          {/* =================================================
              BRAND
          ================================================= */}
          <div className="max-w-sm">
            <Link
              href="/help"
              className="inline-block text-3xl font-extrabold tracking-[-1.5px]"
            >
              <span className="text-[#0066FF]">Mark</span>
              <span className="text-[#FFC400]">oo</span>
              <span className="text-[#0066FF]">d</span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Making buying, selling, ordering and delivery simple for everyone
              — backed by support that actually helps.
            </p>

            <Link
              href="/help"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#FFC400]"
            >
              Visit Markood Center
              <ArrowRight size={15} />
            </Link>

            {/* =================================================
                NEWSLETTER
            ================================================= */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Get updates
              </p>

              <form
                className="mt-3 flex items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <Mail
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/60 py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-slate-500 outline-none transition focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#0066FF] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0052CC]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* =================================================
                SOCIAL
            ================================================= */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-[#0066FF]/40 hover:bg-[#0066FF]/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =================================================
              FOOTER LINKS
          ================================================= */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {/* SELL */}
            <FooterColumn
              title="Sell on Markood"
              links={[
                ["Getting Started", "/help/selling/getting-started"],
                ["Add Products", "/help/selling/products"],
                ["Orders", "/help/selling/orders"],
                ["Pricing & Fees", "/help/selling/pricing-fees"],
                ["Returns & Refunds", "/help/selling/returns"],
              ]}
            />

            {/* BUY */}
            <FooterColumn
              title="Buy on Markood"
              links={[
                ["Getting Started", "/help/buying/getting-started"],
                ["Search & Order", "/help/buying/search-order"],
                ["Payments", "/help/buying/payments"],
                ["Cancellation", "/help/buying/cancellation"],
                ["Returns & Refunds", "/help/buying/returns"],
              ]}
            />

            {/* DELIVERY */}
            <FooterColumn
              title="Delivery"
              links={[
                ["How Delivery Works", "/help/delivery/how-it-works"],
                ["Delivery Zones", "/help/delivery/zones"],
                [
                  "Seller Responsibilities",
                  "/help/delivery/seller-responsibilities",
                ],
                [
                  "Rider Responsibilities",
                  "/help/delivery/rider-responsibilities",
                ],
                ["Failed Deliveries", "/help/delivery/failed-deliveries"],
                ["Lost & Damaged Orders", "/help/delivery/lost-damaged-orders"],
              ]}
            />

            {/* POLICIES */}
            <FooterColumn
              title="Policies"
              links={[
                ["Terms & Conditions", "/help/policies/terms"],
                ["Seller Agreement", "/help/policies/seller-agreement"],
                ["Refund Policy", "/help/policies/refund"],
                ["Cancellation Policy", "/help/policies/cancellation"],
              ]}
            />

            {/* UPDATES */}
            <FooterColumn
              title="Updates"
              links={[
                ["What's New", "/help/updates"],
                ["Policy Updates", "/help/updates/policies"],
                ["Delivery Updates", "/help/updates/delivery"],
                ["Marketplace Updates", "/help/updates/marketplace"],
              ]}
            />
          </div>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================= */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-slate-800 py-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#0066FF]" />
            Buyer &amp; Seller Protection
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#0066FF]" />
            Secure Payments
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#0066FF]" />
            Trusted Marketplace
          </span>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}
        <div className="mt-8 flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Markood. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/help/policies/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/help/policies/refund"
              className="transition hover:text-white"
            >
              Refund Policy
            </Link>

            <Link
              href="/help/policies/cancellation"
              className="transition hover:text-white"
            >
              Cancellation
            </Link>

            <Link href="/help" className="transition hover:text-white">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

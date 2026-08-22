import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Headphones,
  ShieldCheck,
  Store,
  ShoppingBag,
  Truck,
  CreditCard,
  Package,
  Users,
  Settings,
  LifeBuoy,
} from "lucide-react";

/* =============================================================
   DATA
   Replace hrefs / copy with your real content whenever ready —
   structure and keys are already wired into the JSX below.
============================================================= */

const audiences = [
  {
    title: "For Buyers",
    description: "Track orders, manage returns, and get help with payments.",
    href: "/help/buyers",
    icon: ShoppingBag,
  },
  {
    title: "For Sellers",
    description: "List products, manage your storefront, and grow your sales.",
    href: "/help/sellers",
    icon: Store,
  },
  {
    title: "Shipping & Delivery",
    description: "Delivery times, tracking, and carrier information.",
    href: "/help/shipping",
    icon: Truck,
  },
  {
    title: "Payments & Billing",
    description: "Invoices, refunds, and supported payment methods.",
    href: "/help/payments",
    icon: CreditCard,
  },
];

const categories = [
  {
    title: "Getting Started",
    description:
      "Set up your account, verify your profile, and place your first order.",
    href: "/help/getting-started",
    icon: Package,
    articles: "24 articles",
    updated: "Updated 3 days ago",
  },
  {
    title: "Orders & Returns",
    description:
      "Everything about tracking, cancelling, and returning an order.",
    href: "/help/orders",
    icon: ShoppingBag,
    articles: "31 articles",
    updated: "Updated 1 week ago",
  },
  {
    title: "Seller Tools",
    description:
      "Inventory, listings, storefront customization, and analytics.",
    href: "/help/seller-tools",
    icon: Settings,
    articles: "18 articles",
    updated: "Updated 2 days ago",
  },
  {
    title: "Account & Security",
    description:
      "Password resets, two-factor authentication, and privacy controls.",
    href: "/help/account-security",
    icon: Users,
    articles: "15 articles",
    updated: "Updated 5 days ago",
  },
];

const updates = [
  {
    type: "NEW FEATURE",
    date: "Aug 18, 2026",
    title: "Real-time order tracking is here",
    description:
      "Follow every shipment step-by-step, from checkout to your doorstep.",
    href: "/help/updates/order-tracking",
  },
  {
    type: "IMPROVEMENT",
    date: "Aug 10, 2026",
    title: "Faster refunds for eligible orders",
    description:
      "Most refunds now process within 24 hours instead of 3–5 days.",
    href: "/help/updates/faster-refunds",
  },
  {
    type: "POLICY UPDATE",
    date: "Aug 3, 2026",
    title: "Updated Seller Agreement",
    description:
      "Clarified payout schedules and dispute resolution steps for sellers.",
    href: "/help/updates/seller-agreement",
  },
  {
    type: "NEW FEATURE",
    date: "Jul 27, 2026",
    title: "Two-factor authentication for all accounts",
    description:
      "Add an extra layer of protection to your Markood account in seconds.",
    href: "/help/updates/2fa",
  },
];

const articles = [
  {
    title: "How do I track my order?",
    category: "Orders",
 
    href: "/help/articles/track-order",
  },
  {
    title: "How do I become a verified seller?",
    category: "Selling",
    
    href: "/help/articles/verified-seller",
  },
  {
    title: "What payment methods are supported?",
    category: "Payments",
  
    href: "/help/articles/payment-methods",
  },
  {
    title: "How do refunds work?",
    category: "Orders",
 
    href: "/help/articles/refunds",
  },
  {
    title: "How do I reset my password?",
    category: "Account",
    href: "/help/articles/reset-password",
  },
  {
    title: "How is my personal data protected?",
    category: "Privacy",
    href: "/help/articles/data-protection",
  },
];

const policies = [
  { title: "Privacy Policy", href: "/help/policies/privacy" },
  { title: "Terms of Service", href: "/help/policies/terms" },
  { title: "Refund & Cancellation", href: "/help/policies/refunds" },
  { title: "Seller Agreement", href: "/help/policies/seller-agreement" },
  { title: "Buyer Protection", href: "/help/policies/buyer-protection" },
  { title: "Cookie Policy", href: "/help/policies/cookies" },
  { title: "Community Guidelines", href: "/help/policies/community" },
  { title: "Intellectual Property", href: "/help/policies/ip" },
];

/* =============================================================
   COMPONENT
============================================================= */

export default function MarkoodHomeSections() {
  return (
    <main className="bg-white">
      {/* =========================================================
          1. HOW CAN WE HELP?
      ========================================================= */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-[#0066FF]">
              MARKOOD CENTER
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Find answers organized around how you actually use Markood —
              whether you&apos;re buying, selling, or managing your account.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group rounded-2xl border border-slate-200 bg-white p-6
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-[#0066FF]/20
                    hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                    focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      bg-[#0066FF]/10 text-[#0066FF] transition
                      group-hover:bg-[#0066FF] group-hover:text-white
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. EXPLORE MARKOOD CENTER
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold text-[#0066FF]">
                KNOWLEDGE BASE
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore Markood Center
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Browse step-by-step guides written by our support team, kept
                current as Markood evolves.
              </p>
            </div>

            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:underline"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="
                    group relative overflow-hidden rounded-2xl border
                    border-slate-200 bg-white p-6 transition-all duration-300
                    hover:border-[#0066FF]/30
                    hover:shadow-[0_15px_45px_rgba(15,23,42,0.07)]
                  "
                >
                  <div
                    className="
                      pointer-events-none absolute right-0 top-0 h-24 w-24
                      -translate-y-8 translate-x-8 rounded-full bg-[#FFC400]/10
                      transition-transform duration-500 group-hover:scale-150
                    "
                  />

                  <div className="relative flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-bold text-slate-900">
                          {category.title}
                        </h3>

                        <ArrowRight
                          size={18}
                          className="shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[#0066FF]"
                        />
                      </div>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        {category.description}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600">
                          {category.articles}
                        </span>
                        <span className="text-slate-400">
                          {category.updated}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHAT'S NEW
      ========================================================= */}
      <section className="bg-[#F7FAFF]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-5">
            <div>
              <span className="text-sm font-semibold text-[#0066FF]">
                LATEST
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What&apos;s new at Markood?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Product updates, policy changes, and fixes — all in one place.
              </p>
            </div>

            <Link
              href="/help/updates"
              className="hidden items-center gap-2 text-sm font-semibold text-[#0066FF] sm:flex"
            >
              All updates
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {updates.map((update) => (
              <Link
                key={update.title}
                href={update.href}
                className="
                  group rounded-2xl border border-slate-200 bg-white p-6
                  transition hover:border-[#0066FF]/20
                  hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#0066FF]/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#0066FF]">
                    {update.type}
                  </span>
                  <span className="text-xs text-slate-400">{update.date}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {update.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {update.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0066FF]">
                  Read update
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. POPULAR ARTICLES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#0066FF]">
              MOST HELPFUL
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Popular articles
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Quick answers to the questions our community asks most.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {articles.map((article, index) => (
              <Link
                key={article.title}
                href={article.href}
                className={`
                  group flex items-center gap-4 px-5 py-5 transition
                  hover:bg-slate-50 sm:px-6
                  ${index !== articles.length - 1 ? "border-b border-slate-100" : ""}
                `}
              >
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-400 sm:flex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                    {article.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <Clock3 size={12} />
                      {article.time}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  size={19}
                  className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0066FF]"
                />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/help/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:underline"
            >
              Browse all articles
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. POLICIES
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#F5F9FF] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0066FF]/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#FFC400]/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <ShieldCheck size={21} />
                </div>
                <span className="text-sm font-semibold text-[#0066FF]">
                  POLICY CENTER
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your data, your trust — protected by design
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                We built Markood on transparency, not fine print. Every policy
                below is written in plain language, so you always know how your
                data is handled, what you&apos;re agreeing to, and how we
                protect you.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#0066FF]" />
                  GDPR &amp; CCPA compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#0066FF]" />
                  Updated regularly
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#0066FF]" />
                  No hidden clauses
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {policies.map((policy) => (
                  <Link
                    key={policy.title}
                    href={policy.href}
                    className="
                      rounded-full border border-slate-200 bg-white px-4 py-2.5
                      text-xs font-medium text-slate-600 transition
                      hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 hover:text-[#0066FF]
                    "
                  >
                    {policy.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/help/policies"
              className="
                inline-flex shrink-0 items-center justify-center gap-2
                rounded-xl bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white
                transition hover:bg-[#0052CC]
              "
            >
              View all policies
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. STILL NEED HELP
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0066FF] px-6 py-14 text-center sm:px-10 lg:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#FFC400]/20" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
              <Headphones size={23} />
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still need help?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Can&apos;t find what you&apos;re looking for? Our support team
              typically replies within a few hours.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/support"
                className="
                  inline-flex items-center justify-center gap-2 rounded-xl
                  bg-white px-6 py-3 text-sm font-bold text-[#0066FF]
                  transition hover:bg-slate-50
                "
              >
                Contact Support
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/help"
                className="
                  inline-flex items-center justify-center gap-2 rounded-xl
                  border border-white/30 px-6 py-3 text-sm font-semibold text-white
                  transition hover:bg-white/10
                "
              >
                <LifeBuoy size={16} />
                Browse Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

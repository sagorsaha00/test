import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
              className="
                text-xs
                text-slate-400
                transition
                hover:text-white
              "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarkoodFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand */}
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
              Making buying, selling, ordering and delivery simple for everyone.
            </p>

            <Link
              href="/help"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white
                transition
                hover:text-[#FFC400]
              "
            >
              Visit Markood Center
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {/* Sell */}
            <FooterColumn
              title="Sell on Markood"
              links={[
                ["Getting Started", "/help/selling/getting-started"],
                ["Products", "/help/selling/products"],
                ["Orders", "/help/selling/orders"],
                ["Seller Rules", "/help/selling/rules"],
              ]}
            />

            {/* Buy */}
            <FooterColumn
              title="Buy on Markood"
              links={[
                ["Getting Started", "/help/buying/getting-started"],
                ["Orders", "/help/buying/orders"],
                ["Payments", "/help/buying/payments"],
                ["Returns", "/help/buying/returns"],
              ]}
            />

            {/* Delivery */}
            <FooterColumn
              title="Delivery"
              links={[
                ["How it works", "/help/delivery"],
                ["Delivery Zones", "/help/delivery/zones"],
                ["Rider Help", "/help/rider"],
                ["Failed Deliveries", "/help/delivery/failed"],
              ]}
            />

            {/* Support */}
            <FooterColumn
              title="Support"
              links={[
                ["Help Center", "/help"],
                ["Contact Support", "/support"],
                ["Policies", "/help/policies"],
                ["About Markood", "/about"],
              ]}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Markood. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/help/policies/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/help/policies/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/help/policies/cookies"
              className="transition hover:text-white"
            >
              Cookies
            </Link>

            <Link href="/support" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { SellerHelpPageProps } from "@/lib/type";

export default function SellerHelpPage({
  title,
  description,
  category,
  items,
}: SellerHelpPageProps) {
  return (
    <section className="min-h-[70vh] bg-[#f8fafc]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Link href="/help" className="transition hover:text-[#0066FF]">
            Help Center
          </Link>

          <ChevronRight size={13} />

          <Link
            href="/help/selling"
            className="transition hover:text-[#0066FF]"
          >
            Selling
          </Link>

          <ChevronRight size={13} />

          <span className="font-semibold text-slate-600">{title}</span>
        </div>

        {/* Header */}

        <div className="mt-10 max-w-3xl">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
            {category}
          </span>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* Content */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href="#"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                  <CheckCircle2 size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-slate-950">
                    {item.title}
                  </h2>

                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0066FF]"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Help box */}

        <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <HelpCircle size={18} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-950">
                Still need help?
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Can't find what you're looking for?
              </p>
            </div>
          </div>

          <Link
            href="/help/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0052cc]"
          >
            Contact support
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

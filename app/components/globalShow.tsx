"use client";

import { useMemo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HelpCircle,
  LifeBuoy,
  ShieldCheck,
  Store,
  LucideIcon,
} from "lucide-react";

import { Article, Step } from "@/lib/type";
import Link from "next/link";

interface GlobalShowDataProps {
  selectedArticle: Article;
  articles: Article[];
  selectedSlug: string;
  nextArticle: Article | null;
  formattedDate: string;
  handleArticleClick: (slug: string) => void;
  stepIcons: LucideIcon[];
  isRefetching?: boolean;
}

export default function GlobalShowData({
  selectedArticle,
  articles,
  selectedSlug,
  nextArticle,
  formattedDate,
  handleArticleClick,
  stepIcons,
  isRefetching,
}: GlobalShowDataProps) {
  const currentIndex = useMemo(
    () => articles.findIndex((a) => a.slug === selectedSlug),
    [articles, selectedSlug],
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {isRefetching && (
        <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-blue-500/60" />
      )}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-[-180px] top-[700px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* MOBILE / TABLET ARTICLE SWITCHER */}
        <div className="mb-8 lg:hidden">
          <label className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
            Sell on Markood
          </label>

          <div className="relative mt-2">
            <select
              value={selectedSlug}
              onChange={(e) => handleArticleClick(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-bold text-slate-800 shadow-sm focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-blue-100"
            >
              {articles.map((article) => (
                <option key={article._id} value={article.slug}>
                  {article.title}
                </option>
              ))}
            </select>

            <ArrowRight
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
            />
          </div>

          {articles.length > 1 && (
            <div className="mt-2 text-[11px] font-semibold text-slate-400">
              Article {currentIndex + 1} of {articles.length}
            </div>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-16">
          <main className="max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 shadow-sm">
                <Store size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Seller Guide
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black tracking-[-1.4px] text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.08] xl:text-6xl">
                {selectedArticle.title}
              </h1>

              {selectedArticle.summary && (
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                  {selectedArticle.summary}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400 sm:mt-7 sm:gap-4">
                {selectedArticle.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock3 size={14} className="text-[#0066FF]" />
                    {selectedArticle.readTime}
                  </div>
                )}

                {selectedArticle.readTime && formattedDate && (
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                )}

                {formattedDate && <span>Last updated {formattedDate}</span>}
              </div>
            </div>

            {/* DYNAMIC BLOCKS */}
            <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-16">
              {selectedArticle.blocks?.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <div
                      key={index}
                      className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:rounded-[28px] sm:p-6 lg:p-8"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF] sm:h-11 sm:w-11">
                          <ShieldCheck size={20} />
                        </div>

                        <p className="text-sm leading-7 text-slate-600 sm:text-base">
                          {block.data.text}
                        </p>
                      </div>
                    </div>
                  );
                }

                if (block.type === "steps") {
                  const steps = (block.data.items as Step[]) || [];

                  return (
                    <div key={index}>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                        Step by step
                      </p>

                      <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        Follow these steps
                      </h2>

                      <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
                        {steps.map((step, stepIndex) => {
                          const Icon =
                            stepIcons[stepIndex % stepIcons.length] ||
                            HelpCircle;

                          return (
                            <div
                              key={stepIndex}
                              className="group rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:rounded-[26px] sm:p-6 lg:p-7"
                            >
                              <div className="flex gap-4 sm:gap-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF] sm:h-12 sm:w-12">
                                  {String(stepIndex + 1).padStart(2, "0")}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2">
                                        <Icon
                                          size={17}
                                          className="shrink-0 text-[#0066FF]"
                                        />

                                        <h3 className="text-base font-black text-slate-950 sm:text-lg">
                                          {step.title}
                                        </h3>
                                      </div>

                                      <p className="mt-2 text-sm leading-7 text-slate-500">
                                        {step.description}
                                      </p>
                                    </div>

                                    <CheckCircle2
                                      size={19}
                                      className="mt-1 hidden shrink-0 text-slate-200 sm:block"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                if (block.type === "list") {
                  const items = (block.data.items as string[]) || [];

                  return (
                    <div key={index}>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                        Before you start
                      </p>

                      <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        What you will need
                      </h2>

                      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                        {items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                              <CheckCircle2
                                size={15}
                                className="text-[#0066FF]"
                              />
                            </div>

                            <span className="text-sm font-semibold text-slate-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (block.type === "tip") {
                  return (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-[24px] bg-slate-950 p-6 sm:rounded-[30px] sm:p-7 lg:p-10"
                    >
                      <div className="relative flex gap-4 sm:gap-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300 sm:h-11 sm:w-11">
                          <ShieldCheck size={20} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                            {block.data.label || "Tip"}
                          </p>

                          <h3 className="mt-2 text-lg font-black text-white sm:text-xl">
                            {block.data.title}
                          </h3>

                          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                            {block.data.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (block.type === "image") {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden rounded-[22px] border border-slate-200 bg-white p-3 shadow-sm sm:rounded-[26px]"
                    >
                      <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-64 lg:h-96">
                        <img
                          src={block.data.url}
                          alt={block.data.caption || "Article image"}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {block.data.caption && (
                        <p className="mt-3 text-center text-xs font-semibold text-slate-400">
                          {block.data.caption}
                        </p>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* NEXT ARTICLE */}
            {nextArticle && (
              <div className="mt-12 sm:mt-16">
                <button
                  type="button"
                  onClick={() => handleArticleClick(nextArticle.slug)}
                  className="group flex w-full items-center justify-between gap-4 rounded-[22px] border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:border-blue-100 hover:shadow-lg sm:rounded-[26px] sm:p-6 lg:p-7"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                      {selectedArticle.nextArticle?.label || "Next article"}
                    </p>

                    <h3 className="mt-2 truncate text-base font-black text-slate-950 sm:text-lg">
                      {nextArticle.title}
                    </h3>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {selectedArticle.nextArticle?.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF] transition-transform group-hover:translate-x-0.5 sm:h-11 sm:w-11">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            )}
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Article nav */}
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                      Seller Guide
                    </p>

                    <h2 className="mt-2 text-lg font-black text-slate-950">
                      Sell on Markood
                    </h2>
                  </div>

                  {articles.length > 1 && (
                    <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-black text-slate-400">
                      {currentIndex + 1}/{articles.length}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {articles.map((article, index) => {
                    const isActive = article.slug === selectedSlug;

                    return (
                      <button
                        key={article._id}
                        type="button"
                        onClick={() => handleArticleClick(article.slug)}
                        className={`group flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                          isActive
                            ? "bg-blue-50 text-[#0066FF]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-[#0066FF]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                            isActive
                              ? "bg-[#0066FF] text-white"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`text-sm leading-5 ${
                            isActive ? "font-black" : "font-semibold"
                          }`}
                        >
                          {article.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Progress within guide */}
              {articles.length > 1 && (
                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Your progress
                  </p>

                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#0066FF] transition-all duration-500"
                      style={{
                        width: `${((currentIndex + 1) / articles.length) * 100}%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-xs font-semibold text-slate-400">
                    {currentIndex + 1} of {articles.length} articles read
                  </p>
                </div>
              )}

              {/* Support card */}
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0066FF] shadow-sm">
                  <LifeBuoy size={18} />
                </div>

                <h3 className="mt-3 text-sm font-black text-slate-950">
                  Still need help?
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Our seller support team can walk you through this in a live
                  chat.
                </p>

                <Link
                  href="/help/contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-800"
                >
                  Contact support
                  <ArrowRight size={12} />
                </Link>
              </div>

              {/* Current slug */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Current article
                </p>

                <p className="mt-2 break-all text-xs font-semibold leading-5 text-slate-500">
                  {selectedArticle.slug}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

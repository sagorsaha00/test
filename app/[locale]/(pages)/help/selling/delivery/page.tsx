"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HelpCircle,
  ShieldCheck,
  Store,
  UserPlus,
  Package,
  Truck,
} from "lucide-react";

import { useHelpContent } from "@/lib/getData";
import { Article, Step } from "@/lib/type";

const STEP_ICONS = [UserPlus, Store, Package, ShieldCheck, Truck];

export default function DynamicHelpArticle() {
  const catKey = "sellOnMarkood";
  const itemKey = "delivery";
  const { data, isLoading, error } = useHelpContent(catKey, itemKey);

  console.log("get Data", data);

  const [articles, setArticles] = useState<Article[]>([]);

  const [selectedSlug, setSelectedSlug] = useState<string>("");

  useEffect(() => {
    if (!data || !Array.isArray(data)) {
      return;
    }

    setArticles(data);

    if (data.length > 0) {
      setSelectedSlug((currentSlug) => {
        const currentArticle = data.find(
          (article: Article) => article.slug === currentSlug,
        );

        if (currentArticle) {
          return currentSlug;
        }

        return data[0].slug;
      });
    }
  }, [data]);

  const selectedArticle = useMemo(() => {
    if (!selectedSlug || articles.length === 0) {
      return null;
    }

    return articles.find((article) => article.slug === selectedSlug) || null;
  }, [articles, selectedSlug]);

  const handleArticleClick = (slug: string) => {
    setSelectedSlug(slug);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-sm font-semibold text-slate-500">
          Loading article...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-sm font-semibold text-red-500">
          Failed to load help content.
        </div>
      </div>
    );
  }

  if (!articles.length || !selectedArticle) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-sm font-semibold text-slate-500">
          No help article found.
        </div>
      </div>
    );
  }

  const formattedDate = selectedArticle.updatedAt
    ? new Date(selectedArticle.updatedAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "";

  const nextArticle = selectedArticle.nextArticle?.slug
    ? articles.find(
        (article) => article.slug === selectedArticle.nextArticle?.slug,
      )
    : null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[700px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <main className="max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 shadow-sm">
                <Store size={14} className="text-[#0066FF]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Seller Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {selectedArticle.title}
              </h1>

              {selectedArticle.summary && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                  {selectedArticle.summary}
                </p>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
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

            {/* =================================================
                DYNAMIC BLOCKS
            ================================================= */}

            <div className="mt-12 space-y-16">
              {selectedArticle.blocks?.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <div
                      key={index}
                      className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-8"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
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

                      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                        Follow these steps
                      </h2>

                      <div className="mt-9 space-y-4">
                        {steps.map((step, stepIndex) => {
                          const Icon =
                            STEP_ICONS[stepIndex % STEP_ICONS.length] ||
                            HelpCircle;

                          return (
                            <div
                              key={stepIndex}
                              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                            >
                              <div className="flex gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xs font-black text-[#0066FF]">
                                  {String(stepIndex + 1).padStart(2, "0")}
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <Icon
                                          size={17}
                                          className="text-[#0066FF]"
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
                                      className="mt-1 shrink-0 text-slate-200"
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

                      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                        What you will need
                      </h2>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
                      className="relative overflow-hidden rounded-[30px] bg-slate-950 p-7 sm:p-10"
                    >
                      <div className="relative flex gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                          <ShieldCheck size={20} />
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                            {block.data.label || "Tip"}
                          </p>

                          <h3 className="mt-2 text-xl font-black text-white">
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
                      className="overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-sm"
                    >
                      <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-96">
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

            {/* =================================================
                NEXT ARTICLE
            ================================================= */}

            {nextArticle && (
              <div className="mt-16">
                <button
                  type="button"
                  onClick={() => handleArticleClick(nextArticle.slug)}
                  className="group flex w-full items-center justify-between rounded-[26px] border border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:border-blue-100 hover:shadow-lg sm:p-7"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                      {selectedArticle.nextArticle?.label || "Next article"}
                    </p>

                    <h3 className="mt-2 text-lg font-black text-slate-950">
                      {nextArticle.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedArticle.nextArticle?.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            )}
          </main>

          {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0066FF]">
                    Seller Guide
                  </p>

                  <h2 className="mt-2 text-lg font-black text-slate-950">
                    Sell on Markood
                  </h2>
                </div>

                {/* =============================================
                    DYNAMIC ARTICLE LIST
                ============================================= */}

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

              {/* =================================================
                  CURRENT SLUG
              ================================================= */}

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
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

"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  Lightbulb,
  ListChecks,
} from "lucide-react";

import { useHelpArticle } from "@/lib/getData";

interface PageProps {
  params: Promise<{
    locale: string;
    category: string;
    article: string;
  }>;
}

interface StepItem {
  title: string;
  description: string;
}

interface ArticleBlock {
  type: "paragraph" | "steps" | "list" | "tip" | "image";
  data: {
    text?: string;
    items?: StepItem[] | string[];
    label?: string;
    title?: string;
    body?: string;
    url?: string;
    caption?: string;
  };
}

export default function ArticleDetailsPage({ params }: PageProps) {
  const { locale, category, article } = use(params);

  const { data, isLoading, isError, error } = useHelpArticle(article);

  console.log("article ID:", article);
  console.log("data:", data);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 w-40 rounded bg-slate-200" />

            <div className="mt-8 h-12 max-w-3xl rounded-lg bg-slate-200" />

            <div className="mt-4 h-5 max-w-2xl rounded bg-slate-200" />

            <div className="mt-10 space-y-5">
              <div className="h-5 rounded bg-slate-200" />
              <div className="h-5 rounded bg-slate-200" />
              <div className="h-5 w-4/5 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
            <FileText size={25} />
          </div>

          <h1 className="mt-5 text-xl font-black text-slate-900">
            Unable to load article
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {error instanceof Error
              ? error.message
              : "Something went wrong while loading this article."}
          </p>

          <Link
            href={`/${locale}/help`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Help Center
          </Link>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-900">
            Article not found
          </h1>

          <p className="mt-3 text-slate-500">
            The article you are looking for does not exist.
          </p>

          <Link
            href={`/${locale}/help`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-5 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft size={16} />
            Back to Help Center
          </Link>
        </div>
      </main>
    );
  }

  const blocks: ArticleBlock[] = data.blocks || [];

  const categoryLabel =
    category === "selling"
      ? "Sell on Markood"
      : category === "buying"
        ? "Buy on Markood"
        : category === "delivery"
          ? "Delivery"
          : category === "policies"
            ? "Policies"
            : category === "updates"
              ? "Updates"
              : category;

  const stepBlock = blocks.find((block) => block.type === "steps");

  const listBlock = blocks.find((block) => block.type === "list");

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* ==================================================
          PAGE
      ================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0">
            {/* Back */}
            <Link
              href={`/`}
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#0066FF]"
            >
              <ArrowLeft size={16} />
              Back to
            </Link>

            {/* ==================================================
                ARTICLE HEADER
            ================================================== */}

            <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {/* Category */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-black text-[#0066FF]">
                <FileText size={14} />
                {categoryLabel}
              </div>

              {/* Title */}
              <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {data.title}
              </h1>

              {/* Summary */}
              {data.summary && (
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                  {data.summary}
                </p>
              )}

              {/* Meta */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {data.readTime && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-600">
                    <Clock3 size={14} />
                    {data.readTime}
                  </div>
                )}

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-600">
                  <CheckCircle2 size={14} />
                  Published
                </div>
              </div>
            </header>

            {/* ==================================================
                ARTICLE CONTENT
            ================================================== */}

            <div className="mt-8 space-y-8">
              {blocks.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <section
                      key={index}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <p className="text-base leading-8 text-slate-600 sm:text-lg">
                        {block.data.text}
                      </p>
                    </section>
                  );
                }

                if (block.type === "steps") {
                  const items = (block.data.items as StepItem[]) || [];

                  return (
                    <section
                      key={index}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <div className="mb-7">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                            <ListChecks size={22} />
                          </div>

                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-[#0066FF]">
                              Step by step
                            </p>

                            <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                              How to get started
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-100 hover:bg-blue-50/40"
                          >
                            {/* Number */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066FF] text-sm font-black text-white shadow-sm">
                              {itemIndex + 1}
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-base font-black text-slate-900">
                                {item.title}
                              </h3>

                              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                }

                if (block.type === "list") {
                  const items = (block.data.items as string[]) || [];

                  return (
                    <section
                      key={index}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <div className="mb-6">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                          Checklist
                        </p>

                        <h2 className="mt-1 text-2xl font-black text-slate-900">
                          What you need
                        </h2>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                          >
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                              <Check size={14} strokeWidth={3} />
                            </div>

                            <span className="text-sm font-semibold leading-6 text-slate-600">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                }

                if (block.type === "tip") {
                  return (
                    <section
                      key={index}
                      className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                          <Lightbulb size={23} />
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-amber-600">
                            {block.data.label || "Tip"}
                          </p>

                          <h2 className="mt-1 text-xl font-black text-slate-900">
                            {block.data.title}
                          </h2>

                          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            {block.data.body}
                          </p>
                        </div>
                      </div>
                    </section>
                  );
                }

                if (block.type === "image") {
                  return (
                    <figure
                      key={index}
                      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                    >
                      <img
                        src={block.data.url}
                        alt={block.data.caption || data.title}
                        className="h-auto w-full object-cover"
                      />

                      {block.data.caption && (
                        <figcaption className="border-t border-slate-100 px-5 py-4 text-center text-xs font-medium text-slate-400">
                          {block.data.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-5">
              {/* Article Info */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  On this page
                </p>

                <div className="mt-4 space-y-1">
                  {stepBlock && (
                    <a
                      href="#steps"
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-[#0066FF]"
                    >
                      Getting started
                    </a>
                  )}

                  {listBlock && (
                    <a
                      href="#checklist"
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-[#0066FF]"
                    >
                      What you need
                    </a>
                  )}

                  {blocks.some((block) => block.type === "tip") && (
                    <a
                      href="#tip"
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-[#0066FF]"
                    >
                      Helpful tip
                    </a>
                  )}
                </div>
              </div>

              {/* Article Details */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Clock3 size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Reading time</p>

                    <p className="text-sm font-black text-slate-900">
                      {data.readTime || "5 min read"}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Article status</p>

                    <p className="text-sm font-black capitalize text-slate-900">
                      {data.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

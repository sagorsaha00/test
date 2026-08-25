"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  AlignLeft,
  ArrowDown,
  ArrowUp,
  ImageIcon,
  ListChecks,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { HELP_CATEGORIES, getCategory } from "@/lib/helpCategories";
import type {
  BlockType,
  ContentBlock,
  ImageBlockData,
  ListBlockData,
  ParagraphBlockData,
  StepsBlockData,
  TipBlockData,
} from "@/lib/helpContent";

const BLOCK_LIBRARY: {
  type: BlockType;
  label: string;
  icon: typeof AlignLeft;
}[] = [
  { type: "paragraph", label: "Paragraph", icon: AlignLeft },
  { type: "list", label: "Checklist", icon: ListChecks },
  { type: "steps", label: "Numbered steps", icon: ListChecks },
  { type: "tip", label: "Tip callout", icon: Sparkles },
  { type: "image", label: "Image", icon: ImageIcon },
];

function createBlock(type: BlockType): ContentBlock {
  const id = crypto.randomUUID();

  switch (type) {
    case "paragraph":
      return { id, type, data: { text: "" } as ParagraphBlockData };
    case "list":
      return { id, type, data: { items: [""] } as ListBlockData };
    case "steps":
      return {
        id,
        type,
        data: { items: [{ title: "", description: "" }] } as StepsBlockData,
      };
    case "tip":
      return {
        id,
        type,
        data: { label: "Tip", title: "", body: "" } as TipBlockData,
      };
    case "image":
      return { id, type, data: { url: "", caption: "" } as ImageBlockData };
  }
}

export default function ManageContent() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [categoryKey, setCategoryKey] = useState(HELP_CATEGORIES[0]?.key ?? "");
  const [itemKey, setItemKey] = useState(
    HELP_CATEGORIES[0]?.items[0]?.key ?? "",
  );
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  const [includeNextArticle, setIncludeNextArticle] = useState(false);
  const [nextTitle, setNextTitle] = useState("");
  const [nextDescription, setNextDescription] = useState("");
  const [nextHref, setNextHref] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const activeCategory = useMemo(() => getCategory(categoryKey), [categoryKey]);

  function handleCategoryChange(nextKey: string) {
    setCategoryKey(nextKey);
    const nextCategory = getCategory(nextKey);
    setItemKey(nextCategory?.items[0]?.key ?? "");
  }

  function addBlock(type: BlockType) {
    setBlocks((prev) => [...prev, createBlock(type)]);
  }

  function removeBlock(id: string) {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  }

  function moveBlock(id: string, direction: -1 | 1) {
    setBlocks((prev) => {
      const index = prev.findIndex((block) => block.id === id);
      const nextIndex = index + direction;
      if (index === -1 || nextIndex < 0 || nextIndex >= prev.length)
        return prev;
      const next = [...prev];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
  }

  function updateBlockData(id: string, data: unknown) {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, data: data as never } : block,
      ),
    );
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categoryKey,
          itemKey,
          title,
          slug,
          summary,
          readTime,
          status,
          blocks,
          nextArticle: includeNextArticle
            ? {
                title: nextTitle,
                description: nextDescription,
                href: nextHref,
                label: "Next guide",
              }
            : undefined,
        }),
      }); 
      console.log("Response from server:", response);

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(
          errorBody.error ?? "Something went wrong while saving.",
        );
      }

      setFeedback({ type: "success", message: "Post saved." });
      setTitle("");
      setSlug("");
      setSummary("");
      setBlocks([]);
      setIncludeNextArticle(false);
      setNextTitle("");
      setNextDescription("");
      setNextHref("");
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 lg:px-0">
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
          Help Center
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
          Create a new post
        </h1>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          Build the article from blocks, tag it under the right category, then
          publish it to the help center.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basics */}
        <section className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
          <h2 className="text-sm font-black text-slate-950">Basics</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-500">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Getting started as a Markood seller"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500">
                Slug (optional)
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="auto-generated from title"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500">
                Read time
              </label>
              <input
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="5 min read"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-500">
                Summary
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={2}
                placeholder="One or two sentences shown under the title."
                className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-900 outline-none focus:border-[#0066FF]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500">
                Category
              </label>
              <select
                value={categoryKey}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
              >
                {HELP_CATEGORIES.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500">
                Section
              </label>
              <select
                value={itemKey}
                onChange={(e) => setItemKey(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
              >
                {activeCategory?.items.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-500">Status</label>
              <div className="mt-1.5 flex gap-2">
                {(["draft", "published"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setStatus(option)}
                    className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition-colors ${
                      status === option
                        ? "bg-[#0066FF] text-white"
                        : "border border-slate-200 text-slate-500 hover:border-blue-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blocks */}
        <section className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
          <h2 className="text-sm font-black text-slate-950">Content blocks</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {BLOCK_LIBRARY.map(({ type, label, icon: Icon }) => (
              <button
                key={type}
                type="button"
                onClick={() => addBlock(type)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-600 transition-colors hover:border-blue-100 hover:text-[#0066FF]"
              >
                <Plus size={13} />
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {blocks.length === 0 && (
              <p className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                No blocks yet. Add one above to start building the article body.
              </p>
            )}

            {blocks.map((block, index) => (
              <BlockEditor
                key={block.id}
                block={block}
                index={index}
                total={blocks.length}
                onChange={(data) => updateBlockData(block.id, data)}
                onRemove={() => removeBlock(block.id)}
                onMove={(direction) => moveBlock(block.id, direction)}
              />
            ))}
          </div>
        </section>

        {/* Next article link */}
        <section className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.035)] sm:p-7">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-slate-950">
              Next guide link
            </h2>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <input
                type="checkbox"
                checked={includeNextArticle}
                onChange={(e) => setIncludeNextArticle(e.target.checked)}
              />
              Add link
            </label>
          </div>

          {includeNextArticle && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-500">
                  Title
                </label>
                <input
                  value={nextTitle}
                  onChange={(e) => setNextTitle(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500">
                  Link (href)
                </label>
                <input
                  value={nextHref}
                  onChange={(e) => setNextHref(e.target.value)}
                  placeholder="/help/selling/products"
                  className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-500">
                  Description
                </label>
                <input
                  value={nextDescription}
                  onChange={(e) => setNextDescription(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>
          )}
        </section>

        {feedback && (
          <div
            className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
              feedback.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-sm font-black text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {submitting && <Loader2 size={15} className="animate-spin" />}
            {submitting ? "Saving..." : "Publish post"}
          </button>
        </div>
      </form>
    </div>
  );
}

function BlockEditor({
  block,
  index,
  total,
  onChange,
  onRemove,
  onMove,
}: {
  block: ContentBlock;
  index: number;
  total: number;
  onChange: (data: unknown) => void;
  onRemove: () => void;
  onMove: (direction: -1 | 1) => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-2xl border border-slate-200 p-4 sm:p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
          {block.type}
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={index === 0}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-700 disabled:opacity-30"
          >
            <ArrowUp size={14} />
          </button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={index === total - 1}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-700 disabled:opacity-30"
          >
            <ArrowDown size={14} />
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="rounded-full p-1.5 text-red-400 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div className="mt-3">
        {block.type === "paragraph" && (
          <textarea
            value={(block.data as ParagraphBlockData).text}
            onChange={(e) => onChange({ text: e.target.value })}
            rows={3}
            placeholder="Write a paragraph..."
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm leading-6 text-slate-900 outline-none focus:border-[#0066FF]"
          />
        )}

        {block.type === "list" && (
          <ListItemsEditor
            items={(block.data as ListBlockData).items}
            onChange={(items) => onChange({ items })}
          />
        )}

        {block.type === "steps" && (
          <StepsEditor
            items={(block.data as StepsBlockData).items}
            onChange={(items) => onChange({ items })}
          />
        )}

        {block.type === "tip" && (
          <div className="space-y-2">
            <input
              value={(block.data as TipBlockData).label}
              onChange={(e) =>
                onChange({
                  ...(block.data as TipBlockData),
                  label: e.target.value,
                })
              }
              placeholder="Eyebrow, e.g. Seller tip"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-900 outline-none focus:border-[#0066FF]"
            />
            <input
              value={(block.data as TipBlockData).title}
              onChange={(e) =>
                onChange({
                  ...(block.data as TipBlockData),
                  title: e.target.value,
                })
              }
              placeholder="Tip title"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-black text-slate-900 outline-none focus:border-[#0066FF]"
            />
            <textarea
              value={(block.data as TipBlockData).body}
              onChange={(e) =>
                onChange({
                  ...(block.data as TipBlockData),
                  body: e.target.value,
                })
              }
              rows={2}
              placeholder="Tip body"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm leading-6 text-slate-900 outline-none focus:border-[#0066FF]"
            />
          </div>
        )}

        {block.type === "image" && (
          <div className="space-y-2">
            <input
              value={(block.data as ImageBlockData).url}
              onChange={(e) =>
                onChange({
                  ...(block.data as ImageBlockData),
                  url: e.target.value,
                })
              }
              placeholder="Image URL"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#0066FF]"
            />
            <input
              value={(block.data as ImageBlockData).caption ?? ""}
              onChange={(e) =>
                onChange({
                  ...(block.data as ImageBlockData),
                  caption: e.target.value,
                })
              }
              placeholder="Caption (optional)"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#0066FF]"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ListItemsEditor({
  items,
  onChange,
}: {
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[i] = e.target.value;
              onChange(next);
            }}
            placeholder={`Item ${i + 1}`}
            className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#0066FF]"
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="rounded-full p-2 text-red-400 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="text-xs font-bold text-[#0066FF]"
      >
        + Add item
      </button>
    </div>
  );
}

function StepsEditor({
  items,
  onChange,
}: {
  items: { title: string; description: string }[];
  onChange: (items: { title: string; description: string }[]) => void;
}) {
  return (
    <div className="space-y-3">
      {items.map((step, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-100 bg-slate-50 p-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400">
              STEP {i + 1}
            </span>
            <button
              type="button"
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="rounded-full p-1 text-red-400 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={13} />
            </button>
          </div>
          <input
            value={step.title}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], title: e.target.value };
              onChange(next);
            }}
            placeholder="Step title"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 outline-none focus:border-[#0066FF]"
          />
          <textarea
            value={step.description}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], description: e.target.value };
              onChange(next);
            }}
            rows={2}
            placeholder="Step description"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-900 outline-none focus:border-[#0066FF]"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, { title: "", description: "" }])}
        className="text-xs font-bold text-[#0066FF]"
      >
        + Add step
      </button>
    </div>
  );
}

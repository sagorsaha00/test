"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchArticle {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  readTime?: string;
  categoryKey: string;
  itemKey: string;
}

interface HelpSearchProps {
  open: boolean;
  onClose: () => void;
  locale: string;
  placeholder?: string;
}

export default function HelpSearch({
  open,
  onClose,
  locale,
  placeholder = "Search help articles...",
}: HelpSearchProps) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<SearchArticle[]>([]);
  const [loading, setLoading] = useState(false);
  console.log("result", results);
  // =========================================================
  // SEARCH
  // =========================================================

  useEffect(() => {
    if (!open) return;

    const value = search.trim();

    // Empty search
    if (!value) {
      setResults([]);
      setLoading(false);
      return;
    }

    // Wait until user stops typing
    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search?search=${encodeURIComponent(
            value,
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to search articles");
        }

        const result = await response.json();

        if (result.success) {
          setResults(result.data || []);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search, open]);

  // =========================================================
  // CLOSE
  // =========================================================

  const handleClose = () => {
    setSearch("");
    setResults([]);
    setLoading(false);

    onClose();
  };

  const handleArticleClick = (article: string) => {
    handleClose();
    router.push(`/en/articleDetails/${article}`);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // =========================================================
  // UI
  // =========================================================

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-start
            justify-center
            bg-slate-900/40
            p-4
            pt-16
            backdrop-blur-md
            sm:p-6
            sm:pt-24
          "
          onClick={handleClose}
        >
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
              y: -20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              y: -20,
            }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="
              w-full
              max-w-[900px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-100
              bg-white
              shadow-2xl
            "
          >
            {/* SEARCH INPUT */}

            <div
              className="
                flex
                items-center
                gap-3
                border-b
                border-slate-100
                px-4
                py-3
                sm:px-6
                sm:py-4
              "
            >
              <Search size={22} className="shrink-0 text-slate-400" />

              <input
                type="text"
                autoFocus
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={placeholder}
                className="
                  w-full
                  bg-transparent
                  text-base
                  font-medium
                  text-slate-900
                  outline-none
                  placeholder:text-slate-400
                  sm:text-lg
                "
              />

              {loading && (
                <div
                  className="
                    h-5
                    w-5
                    shrink-0
                    animate-spin
                    rounded-full
                    border-2
                    border-slate-200
                    border-t-[#0066FF]
                  "
                />
              )}

              <button
                type="button"
                onClick={handleClose}
                className="
                  shrink-0
                  rounded-lg
                  p-1.5
                  text-slate-400
                  transition
                  hover:bg-slate-100
                  hover:text-slate-600
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* CONTENT */}

            <div className="max-h-[600px] overflow-y-auto">
              {/* INITIAL */}

              {!search.trim() && (
                <div className="px-6 py-16 text-center">
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-[#0066FF]
                    "
                  >
                    <Search size={25} />
                  </div>

                  <h3 className="mt-5 text-base font-black text-slate-900">
                    Search Markood Help
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Search for guides, policies, delivery information and more.
                  </p>
                </div>
              )}

              {/* LOADING */}

              {search.trim() && loading && (
                <div className="px-6 py-16 text-center">
                  <p className="text-sm font-semibold text-slate-500">
                    Searching articles...
                  </p>
                </div>
              )}

              {/* NO RESULTS */}

              {search.trim() && !loading && results.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <div
                    className="
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-100
                        text-slate-400
                      "
                  >
                    <Search size={25} />
                  </div>

                  <h3 className="mt-5 text-base font-black text-slate-900">
                    No articles found
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Try searching with another keyword.
                  </p>
                </div>
              )}

              {/* RESULTS */}

              {!loading && results.length > 0 && (
                <div className="p-3 sm:p-4">
                  <div className="mb-2 px-3">
                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      Search Results
                    </p>
                  </div>

                  <div className="space-y-1">
                    {results.map(
                      (article) => (
                        console.log("article", article._id),
                        (
                          <button
                            key={article._id}
                            type="button"
                            onClick={() => handleArticleClick(article._id)}
                            className="
                          group
                          flex
                          w-full
                          items-start
                          gap-4
                          rounded-2xl
                          p-4
                          text-left
                          transition
                          hover:bg-blue-50
                        "
                          >
                            {/* ICON */}

                            <div
                              className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-slate-100
                            text-[#0066FF]
                            transition
                            group-hover:bg-white
                          "
                            >
                              <Search size={17} />
                            </div>

                            {/* CONTENT */}

                            <div className="min-w-0 flex-1">
                              <h3
                                className="
                              text-sm
                              font-black
                              text-slate-900
                              transition
                              group-hover:text-[#0066FF]
                            "
                              >
                                {article.title}
                              </h3>

                              {article.summary && (
                                <p
                                  className="
                                mt-1
                                line-clamp-2
                                text-xs
                                leading-5
                                text-slate-500
                              "
                                >
                                  {article.summary}
                                </p>
                              )}

                              <div className="mt-2 flex items-center gap-2">
                                {article.readTime && (
                                  <>
                                    <Clock3
                                      size={12}
                                      className="text-slate-400"
                                    />

                                    <span
                                      className="
                                    text-[10px]
                                    font-semibold
                                    text-slate-400
                                  "
                                    >
                                      {article.readTime}
                                    </span>
                                  </>
                                )}

                                <span className="text-slate-300">•</span>

                                <span
                                  className="
                                truncate
                                text-[10px]
                                font-semibold
                                text-slate-400
                              "
                                >
                                  {article.slug}
                                </span>
                              </div>
                            </div>

                            {/* ARROW */}

                            <ArrowRight
                              size={17}
                              className="
                            mt-2
                            shrink-0
                            text-slate-300
                            transition
                            group-hover:translate-x-1
                            group-hover:text-[#0066FF]
                          "
                            />
                          </button>
                        )
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

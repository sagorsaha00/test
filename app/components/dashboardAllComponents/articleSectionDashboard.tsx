"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  CheckCircle2,
  CalendarDays,
  Trash2,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface UpdatePost {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  data: UpdatePost[];
  message?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ArticleSection() {
  const [posts, setPosts] = useState<UpdatePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const getAllPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/allData`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch updates");
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        setPosts(result.data || []);
      } else {
        throw new Error(result.message || "Failed to fetch updates");
      }
    } catch (error) {
      console.error("Get updates error:", error);

      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(`${id}`);

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(id);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to delete update");
      }

      setPosts((currentPosts) =>
        currentPosts.filter((post) => post._id !== id),
      );
    } catch (error) {
      console.error("Delete update error:", error);

      alert(error instanceof Error ? error.message : "Failed to delete update");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9">
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
            <Loader2 size={20} className="animate-spin text-[#0066FF]" />
            Loading updates...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
          <div className="flex items-center gap-3 text-red-600">
            <AlertCircle size={20} />

            <div>
              <h3 className="text-sm font-black">Failed to load updates</h3>

              <p className="mt-1 text-xs text-red-500">{error}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={getAllPosts}
            className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-sm font-medium text-slate-500">
            Marketplace Communication
          </p>

          <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
            Updates
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Manage announcements, policy changes and marketplace updates.
          </p>
        </div>
      </motion.div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <motion.div
        variants={itemVariants}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {/* TOTAL */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
              <Megaphone size={18} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Total Updates
              </p>

              <p className="mt-1 text-2xl font-black text-slate-950">
                {posts.length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Published
              </p>

              <p className="mt-1 text-2xl font-black text-slate-950">
                {posts.length}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          ALL UPDATES
      ===================================================== */}

      <motion.section
        variants={itemVariants}
        className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0066FF]">
              Announcements
            </p>

            <h3 className="mt-1 text-lg font-black text-slate-950">
              All Updates
            </h3>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500">
            {posts.length} posts
          </span>
        </div>

        {posts.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-200 px-6 py-16 text-center">
            <Megaphone size={30} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-sm font-black text-slate-900">
              No updates found
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Create your first marketplace update.
            </p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-6 space-y-3">
            {posts.map((post) => (
              <div
                key={post._id}
                className="group rounded-2xl border border-slate-100 p-4 transition hover:border-blue-100 hover:bg-slate-50/60"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                    <Megaphone size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-black text-slate-900">
                      {post.title}
                    </h4>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                      {post.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={11} />
                        {formatDate(post.createdAt)}
                      </span>

                      <span className="truncate">{post.slug}</span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      disabled={deletingId === post._id}
                      onClick={() => handleDelete(post._id)}
                      className="flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-red-100 bg-white px-3 text-xs font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === post._id ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Trash2 size={14} />
                      )}

                      <span>
                        {deletingId === post._id ? "Deleting..." : "Delete"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </motion.div>
  );
}

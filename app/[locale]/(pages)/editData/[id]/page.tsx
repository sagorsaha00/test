"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useHelpArticle, useUpdateHelpArticle } from "@/lib/getData";

export default function EditHelpArticlePage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id as string;

  const { data: article, isLoading, isError } = useHelpArticle(id);

  const updateMutation = useUpdateHelpArticle(id);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    summary: "",
    readTime: "",
    status: "draft",
  });

  useEffect(() => {
    if (!article) return;

    setFormData({
      title: article.title || "",
      slug: article.slug || "",
      summary: article.summary || "",
      readTime: article.readTime || "",
      status: article.status || "draft",
    });
  }, [article]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateMutation.mutateAsync({
        title: formData.title,
        slug: formData.slug,
        summary: formData.summary,
        readTime: formData.readTime,
        status: formData.status,
      });

      alert("Article updated successfully!");

      router.push("/updates");
    } catch (error: any) {
      alert(error.message || "Failed to update article");
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading article...</div>;
  }

  if (isError || !article) {
    return <div className="p-8 text-red-500">Article not found.</div>;
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600">
              Markood Center
            </p>

            <h1 className="mt-2 text-2xl font-black text-slate-950">
              Edit Article
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update your help article information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2"></div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Title
              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Slug
              </label>

              <input
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Summary
              </label>

              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Read Time
                </label>

                <input
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="draft">Draft</option>

                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-bold text-blue-900">
                Article content is preserved
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                Your blocks and next article data will remain unchanged because
                they are not included in this update.
              </p>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updateMutation.isPending}
                className="rounded-xl bg-[#0066FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updateMutation.isPending ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

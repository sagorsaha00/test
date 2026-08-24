import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FileEdit,
  FileText,
  CheckCircle2,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import { StatusBadge, SmallStat } from "../lib/icon";
import { articles, containerVariants, itemVariants } from "../lib/constant";

export default function ArticlesSection() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[1500px] px-5 py-7 sm:px-7 lg:px-9 lg:py-9"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-sm font-medium text-slate-500">
            Content Management
          </p>

          <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
            Articles
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Create, edit and manage all Markood Center help content.
          </p>
        </div>

        
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <SmallStat icon={FileText} label="All Articles" value="48" />

        <SmallStat icon={CheckCircle2} label="Published" value="42" />

        <SmallStat icon={FileEdit} label="Drafts" value="06" />
      </motion.div>

      {/* Table */}
      <motion.section
        variants={itemVariants}
        className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.025)]"
      >
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-950">All Articles</h3>

            <p className="mt-1 text-xs text-slate-400">
              Manage your Markood Center knowledge base.
            </p>
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-xs text-slate-700 outline-none transition focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-blue-50"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Article
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Category
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Audience
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Status
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Views
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Updated
                </th>

                <th className="px-6 py-4" />
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredArticles.map((article) => (
                <tr
                  key={article.id}
                  className="group transition hover:bg-slate-50/70"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0066FF]">
                        <FileText size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          {article.title}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Article #{article.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-xs font-medium text-slate-500">
                    {article.category}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                      {article.audience}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={article.status} />
                  </td>

                  <td className="px-6 py-4 text-xs font-bold text-slate-600">
                    {article.views}
                  </td>

                  <td className="px-6 py-4 text-xs text-slate-400">
                    {article.updated}
                  </td>

                  <td className="px-6 py-4">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-slate-700">
                      <MoreHorizontal size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
          <p className="text-[11px] text-slate-400">
            Showing {filteredArticles.length} articles
          </p>

          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-bold text-slate-400">
              Previous
            </button>

            <button className="rounded-lg bg-[#0066FF] px-3 py-1.5 text-[10px] font-bold text-white">
              1
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-bold text-slate-500">
              2
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-bold text-slate-500">
              Next
            </button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import {
  Megaphone,
  CheckCircle2,
  FileEdit,
  Users,
  CalendarDays,
  ArrowUpRight,
  Bell,
  Plus,
} from "lucide-react";
import { StatusBadge, SmallStat, WorkflowStep } from "../lib/icon";
import { containerVariants, itemVariants, updates } from "../lib/constant";
export default function UpdatesSection() {
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
            Marketplace Communication
          </p>

          <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
            Updates
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Publish important changes, policy announcements and marketplace
            updates for your users.
          </p>
        </div>

        
      </motion.div>

      {/* Update overview */}
      <motion.div
        variants={itemVariants}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <SmallStat icon={Megaphone} label="Total Updates" value="18" />

        <SmallStat icon={CheckCircle2} label="Published" value="15" />

        <SmallStat icon={FileEdit} label="Drafts" value="03" />
      </motion.div>

     
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
              Recent Updates
            </h3>
          </div>

          <button className="text-xs font-bold text-[#0066FF] hover:underline">
            View archive
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {updates.map((update) => (
            <div
              key={update.id}
              className="group flex flex-col gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-blue-100 hover:bg-slate-50/60 sm:flex-row sm:items-center"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                <Megaphone size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-black text-slate-900">
                    {update.title}
                  </h4>

                  <StatusBadge status={update.status} />
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-slate-400">
                  <span>{update.type}</span>

                  <span className="flex items-center gap-1">
                    <Users size={11} />
                    {update.audience}
                  </span>

                  <span className="flex items-center gap-1">
                    <CalendarDays size={11} />
                    {update.date}
                  </span>
                </div>
              </div>

              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-100 text-slate-400 transition hover:border-blue-100 hover:bg-blue-50 hover:text-[#0066FF]">
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Publishing workflow */}
      <motion.section
        variants={itemVariants}
        className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)] sm:p-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Bell size={18} />
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">
              Publishing workflow
            </h3>

            <p className="mt-1 text-[11px] text-slate-400">
              Keep users informed whenever Markood rules or services change.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <WorkflowStep
            number="01"
            title="Create"
            description="Write your announcement or policy update."
          />

          <WorkflowStep
            number="02"
            title="Review"
            description="Check the content, audience and effective date."
          />

          <WorkflowStep
            number="03"
            title="Publish"
            description="Make the update visible in Markood Center."
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

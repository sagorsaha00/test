import React from "react";
import { CheckCircle2, ChevronRight, Clock3 } from "lucide-react";
export function ActivityItem({
  icon: Icon,
  title,
  time,
}: {
  icon: React.ElementType;
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
        <Icon size={14} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold text-slate-700">{title}</p>

        <p className="mt-1 text-[10px] text-slate-400">{time}</p>
      </div>
    </div>
  );
}

export function QuickAction({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-blue-100 hover:bg-blue-50/40">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-blue-50 group-hover:text-[#0066FF]">
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-slate-800">{title}</p>

        <p className="mt-0.5 text-[10px] text-slate-400">{description}</p>
      </div>

      <ChevronRight
        size={14}
        className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#0066FF]"
      />
    </button>
  );
}
export function StatusBadge({ status }: { status: "Published" | "Draft" }) {
  if (status === "Published") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
        <CheckCircle2 size={10} />
        Published
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">
      <Clock3 size={10} />
      Draft
    </span>
  );
}
export function SmallStat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.025)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
          <Icon size={18} />
        </div>

        <div>
          <p className="text-[10px] font-semibold text-slate-400">{label}</p>

          <p className="mt-0.5 text-xl font-black tracking-tight text-slate-950">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WorkflowStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
      <span className="text-[10px] font-black tracking-wider text-[#0066FF]">
        {number}
      </span>

      <h4 className="mt-2 text-xs font-black text-slate-900">{title}</h4>

      <p className="mt-1 text-[10px] leading-5 text-slate-400">{description}</p>
    </div>
  );
}
export function SidebarItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group cursor-pointer flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-all ${
        active
          ? "bg-[#0066FF] text-white shadow-[0_8px_20px_rgba(0,102,255,0.18)]"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <Icon
        size={16}
        className={
          active ? "text-white" : "text-slate-400 group-hover:text-[#0066FF]"
        }
      />

      <span>{label}</span>

      {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />}
    </button>
  );
}

export function SidebarLink({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
    >
      <Icon
        size={16}
        className="text-slate-400 transition group-hover:text-[#0066FF]"
      />

      <span>{label}</span>

      <ChevronRight
        size={14}
        className="ml-auto text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#0066FF]"
      />
    </button>
  );
}

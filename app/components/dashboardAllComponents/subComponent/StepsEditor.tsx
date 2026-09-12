"use client";

import { Plus, Trash2 } from "lucide-react";
import type { StepsBlockData } from "@/lib/helpContent";

interface Props {
  data: StepsBlockData;
  onChange: (data: StepsBlockData) => void;
}

export default function StepsEditor({ data, onChange }: Props) {
  function updateStep(index: number, value: string) {
    const items = [...data.items];

    items[index] = value;

    onChange({
      ...data,
      items,
    });
  }

  function addStep() {
    onChange({
      ...data,
      items: [...data.items, ""],
    });
  }

  function removeStep(index: number) {
    onChange({
      ...data,
      items: data.items.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="space-y-3">
      {data.items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066FF] text-sm font-bold text-white">
            {index + 1}
          </div>

          <input
            value={item}
            onChange={(e) => updateStep(index, e.target.value)}
            placeholder={`Step ${index + 1}`}
            className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#0066FF]"
          />

          <button
            type="button"
            onClick={() => removeStep(index)}
            className="rounded-xl border border-slate-200 px-3 text-slate-500 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addStep}
        className="flex items-center gap-2 text-sm font-semibold text-[#0066FF]"
      >
        <Plus size={16} />
        Add step
      </button>
    </div>
  );
}

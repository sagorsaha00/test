"use client";

import { Plus, Trash2 } from "lucide-react";
import type { ListBlockData } from "@/lib/helpContent";

interface Props {
  data: ListBlockData;
  onChange: (data: ListBlockData) => void;
}

export default function ListItemsEditor({ data, onChange }: Props) {
  function updateItem(index: number, value: string) {
    const items = [...data.items];

    items[index] = value;

    onChange({
      ...data,
      items,
    });
  }

  function addItem() {
    onChange({
      ...data,
      items: [...data.items, ""],
    });
  }

  function removeItem(index: number) {
    onChange({
      ...data,
      items: data.items.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="space-y-3">
      {data.items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            placeholder={`List item ${index + 1}`}
            className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#0066FF]"
          />

          <button
            type="button"
            onClick={() => removeItem(index)}
            className="rounded-xl border border-slate-200 px-3 text-slate-500 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="flex items-center gap-2 text-sm font-semibold text-[#0066FF]"
      >
        <Plus size={16} />
        Add item
      </button>
    </div>
  );
}

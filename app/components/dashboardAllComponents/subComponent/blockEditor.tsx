"use client";

import type {
  ContentBlock,
  ImageBlockData,
  ListBlockData,
  ParagraphBlockData,
  StepsBlockData,
  TipBlockData,
} from "@/lib/helpContent";

import ListItemsEditor from "./ListItemsEditor";
import StepsEditor from "./StepsEditor";
import ImageBlockEditor from "./imageLinkGenerate";

interface BlockEditorProps {
  block: ContentBlock;
  onChange: (data: any) => void;
}

export default function BlockEditor({ block, onChange }: BlockEditorProps) {
  if (block.type === "paragraph") {
    const data = block.data as ParagraphBlockData;

    return (
      <textarea
        value={data.text}
        onChange={(e) =>
          onChange({
            ...data,
            text: e.target.value,
          })
        }
        placeholder="Write paragraph..."
        rows={5}
        className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-[#0066FF]"
      />
    );
  }

  if (block.type === "list") {
    return (
      <ListItemsEditor data={block.data as ListBlockData} onChange={onChange} />
    );
  }

  if (block.type === "steps") {
    return (
      <StepsEditor data={block.data as StepsBlockData} onChange={onChange} />
    );
  }

  if (block.type === "tip") {
    const data = block.data as TipBlockData;

    return (
      <textarea
        value={data.text}
        onChange={(e) =>
          onChange({
            ...data,
            text: e.target.value,
          })
        }
        placeholder="Write tip..."
        rows={4}
        className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-[#0066FF]"
      />
    );
  }

  if (block.type === "image") {
    return (
      <ImageBlockEditor
        data={block.data as ImageBlockData}
        onChange={onChange}
      />
    );
  }

  return null;
}

"use client";

import { useState } from "react";
import type { ImageBlockData } from "@/lib/helpContent";

interface ImageBlockEditorProps {
  data: ImageBlockData;
  onChange: (data: ImageBlockData) => void;
}

export default function ImageBlockEditor({
  data,
  onChange,
}: ImageBlockEditorProps) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);

      console.log("file:", file);
      console.log("formData has file:", formData.has("file"));

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log("upload result:", result);

      if (!response.ok) {
        throw new Error(result?.error || "Image upload failed.");
      }

      onChange({
        ...data,
        url: result.url,
      });
    } catch (error) {
      console.error("Upload error:", error);

      alert(error instanceof Error ? error.message : "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <label className="block text-sm font-semibold text-slate-700">
          Upload Image
        </label>

        <input
          type="file"
          accept="image/*"
          disabled={uploading}
          onChange={(e) => {
            const file = e.target.files?.[0];
            console.log("file", file);
            if (file) {
              handleUpload(file);
            }

            e.target.value = "";
          }}
          className="mt-2 block w-full text-sm text-slate-600"
        />

        {uploading && (
          <p className="mt-2 text-sm font-medium text-[#0066FF]">
            Uploading image...
          </p>
        )}
      </div>

      <input
        value={data.url}
        onChange={(e) =>
          onChange({
            ...data,
            url: e.target.value,
          })
        }
        placeholder="Image URL"
        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#0066FF]"
      />

      {/* Preview */}
      {data.url && (
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <img
            src={data.url}
            alt={data.caption || "Uploaded image"}
            className="h-48 w-full object-cover"
          />
        </div>
      )}

      {/* Caption */}
      <input
        value={data.caption ?? ""}
        onChange={(e) =>
          onChange({
            ...data,
            caption: e.target.value,
          })
        }
        placeholder="Caption (optional)"
        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#0066FF]"
      />
    </div>
  );
}

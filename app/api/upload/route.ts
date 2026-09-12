import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Force Node.js runtime — cloudinary's SDK needs Node APIs, not Edge
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: Request) {
  try {
    // Validate ALL required env vars, not just the secret
    const missing: string[] = [];
    if (!process.env.CLOUDINARY_CLOUD_NAME)
      missing.push("CLOUDINARY_CLOUD_NAME");
    if (!process.env.CLOUDINARY_API_KEY) missing.push("CLOUDINARY_API_KEY");
    if (!process.env.CLOUDINARY_API_SECRET)
      missing.push("CLOUDINARY_API_SECRET");

    if (missing.length > 0) {
      console.error("❌ Missing Cloudinary env vars:", missing.join(", "));
      return NextResponse.json(
        {
          error: `Missing env vars: ${missing.join(", ")}. Check .env.local and restart the dev server.`,
        },
        { status: 500 },
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");
    console.log("file", file);
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "markood_riders" },
        (error, result) => {
          if (error) {
            console.error("❌ Cloudinary upload_stream error:", error);
            reject(error);
            return;
          }
          if (!result) {
            reject(new Error("Cloudinary returned no result"));
            return;
          }
          resolve(result);
        },
      );

      stream.end(buffer);
    });

    console.log("✅ Upload Successful:", uploadResponse.secure_url);

    return NextResponse.json(
      { url: uploadResponse.secure_url },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("❌ Upload Error:", error);
    return NextResponse.json(
      { error: error?.message || "Unknown upload error" },
      { status: 500 },
    );
  }
}

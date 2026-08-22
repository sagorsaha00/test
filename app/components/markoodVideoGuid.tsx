"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Clock3 } from "lucide-react";

/* =============================================================
   ANIMATION VARIANTS
============================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =============================================================
   DATA
   Replace videoId with real YouTube IDs for footage you own or
   have licensed. duration is display-only text.
============================================================= */
const videoGuides = [
  {
    title: "How to list your first product",
    category: "Selling",
    duration: "3:12",
    featured: true,
    videoId: "REPLACE_WITH_YOUR_VIDEO_ID_1",
  },
  {
    title: "Tracking an order end-to-end",
    category: "Buying",
    duration: "2:05",
    featured: false,
    videoId: "REPLACE_WITH_YOUR_VIDEO_ID_2",
  },
  {
    title: "Setting up secure payouts",
    category: "Payments",
    duration: "4:40",
    featured: false,
    videoId: "REPLACE_WITH_YOUR_VIDEO_ID_3",
  },
  {
    title: "Requesting a return or refund",
    category: "Buying",
    duration: "2:50",
    featured: false,
    videoId: "REPLACE_WITH_YOUR_VIDEO_ID_4",
  },
];

const categoryStyles: Record<string, string> = {
  Selling: "bg-[#0066FF]/90",
  Buying: "bg-emerald-500/90",
  Payments: "bg-[#FFC400]/90 text-slate-900",
};

export default function MarkoodVideoGuides() {
  const [featured, ...rest] = videoGuides;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0066FF]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#FFC400]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/15 bg-[#0066FF]/5 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
                Video Guides
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              Learn Markood, visually
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Short, focused walkthroughs that show you exactly what to do — no
              reading required.
            </p>
          </motion.div>

          <Link
            href="/help/videos"
            className="
              group inline-flex shrink-0 items-center gap-2 self-start
              rounded-full border border-slate-200 px-5 py-2.5 text-sm
              font-bold text-slate-700 transition
              hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 hover:text-[#0066FF]
              sm:self-auto
            "
          >
            View all videos
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= VIDEO GRID ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2"
        >
          {/* Featured video — spans 2 cols / 2 rows on large screens */}
          <VideoCard
            video={featured}
            className="lg:col-span-2 lg:row-span-2"
            large
          />

          {/* Remaining videos */}
          {rest.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   VIDEO CARD
============================================================= */
function VideoCard({
  video,
  className = "",
  large = false,
}: {
  video: (typeof videoGuides)[number];
  className?: string;
  large?: boolean;
}) {
  return (
    <motion.div variants={scaleIn} className={`group ${className}`}>
      <Link
        href={`/help/videos/${video.videoId}`}
        className="
          relative block h-full w-full overflow-hidden rounded-[28px]
          bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.14)]
          ring-1 ring-slate-900/5 transition-all duration-500
          hover:shadow-[0_35px_90px_rgba(0,102,255,0.18)]
        "
      >
        <div
          className={`relative w-full ${large ? "aspect-[16/11] lg:h-full lg:aspect-auto" : "aspect-[4/3]"}`}
        >
          {/* Video embed */}
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media"
            className="
              pointer-events-none absolute inset-0 h-full w-full
              scale-105 transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient overlay for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

          {/* Subtle border glow on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/0 transition group-hover:ring-white/10" />

          {/* Top row: category + duration */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <span
              className={`
                rounded-full px-3 py-1.5 text-[10px] font-bold
                uppercase tracking-wider text-white backdrop-blur-md
                ${categoryStyles[video.category] ?? "bg-white/15"}
              `}
            >
              {video.category}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
              <Clock3 size={11} />
              {video.duration}
            </span>
          </div>

          {/* Play button */}
          <motion.div
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
              absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
              items-center justify-center rounded-full bg-white text-[#0066FF]
              shadow-2xl
              ${large ? "h-16 w-16" : "h-14 w-14"}
            `}
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-white/30 opacity-0 transition group-hover:animate-ping group-hover:opacity-100" />
            <Play size={large ? 22 : 20} fill="currentColor" className="ml-1" />
          </motion.div>

          {/* Title + description */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3
              className={`
                font-bold text-white
                ${large ? "text-2xl leading-snug sm:text-[1.65rem]" : "text-lg"}
              `}
            >
              {video.title}
            </h3>

            {large && (
              <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                A complete, step-by-step walkthrough — watch once and
                you&apos;ll never need to ask again.
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

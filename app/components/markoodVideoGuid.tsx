"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Store,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cardAnimation, fadeUp, stagger } from "@/lib/animation";

/* =========================================================
   TYPES
========================================================= */

interface VideoGuide {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  videoId: string;
}

/* =========================================================
   VIDEO DATA
========================================================= */

const videoGuides: VideoGuide[] = [
  {
    title: "How to sell on Markood",
    description:
      "Learn how to create your seller account, add products and start receiving orders.",
    category: "For Sellers",
    icon: Store,
    videoId: "IGFC5cLAk6k",
  },
  {
    title: "How buying works",
    description:
      "Everything you need to know about finding products and placing your first order.",
    category: "For Buyers",
    icon: ShoppingBag,
    videoId: "sYta53ZVFlw",
  },
  {
    title: "Safe & secure payments",
    description:
      "Understand how Markood keeps your payments and transactions protected.",
    category: "Safety",
    icon: ShieldCheck,
    videoId: "a0CqrKs13Ps",
  },
  {
    title: "How delivery works",
    description:
      "Follow your order from seller confirmation to doorstep delivery.",
    category: "Delivery",
    icon: Truck,
    videoId: "sYta53ZVFlw",
  },
];

 
 

export default function MarkoodVideoGuides() {
  const featured = videoGuides[0];

  const otherVideos = videoGuides.slice(1);

  /*
   * IMPORTANT:
   * React component variables must start with uppercase.
   */

  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
    

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-sky-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

     

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles
              size={14}
              className="text-[#0066FF]"
              fill="currentColor"
            />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-600">
              Markood Academy
            </span>
          </div>

          <h2 className="text-4xl font-black leading-[1.1] tracking-[-1.8px] text-slate-950 sm:text-5xl lg:text-[56px] lg:leading-[1.05]  ">
            Learn Markood.
            <br />
            <span className="text-[#0066FF] ">One step at a time.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Short, practical video guides to help you buy, sell, deliver, and
            use Markood with confidence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          className="mt-14"
        >
          <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          

              <div className="relative min-h-[320px] overflow-hidden bg-slate-950 sm:min-h-[430px] lg:min-h-[520px]">
                <iframe
                  src={`https://www.youtube.com/embed/${featured.videoId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
                  title={featured.title}
                  allow="autoplay; encrypted-media"
                  className="absolute inset-0 h-full w-full scale-[1.03] transition-transform duration-1000 group-hover:scale-[1.07]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

                <div className="absolute left-6 top-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl">
                    <FeaturedIcon size={14} />

                    {featured.category}
                  </div>
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0066FF] shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
                >
                  <Play size={22} fill="currentColor" className="ml-1" />
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-white/70">
                        Featured guide
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        {featured.title}
                      </h3>
                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md sm:flex">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

          

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0066FF]">
                  <FeaturedIcon size={21} />
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#0066FF]">
                  Start here
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Everything you need to get started.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  New to Markood? This guide walks you through the most
                  important steps so you can start using the marketplace
                  confidently.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Create your Markood account",
                    "Understand how orders work",
                    "Learn about payments",
                    "Track your delivery",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <ShieldCheck size={14} className="text-[#0066FF]" />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            SMALL VIDEO CARDS
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={stagger}
          className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherVideos.map((video) => {
            /*
             * IMPORTANT:
             * Capitalized component variable.
             */

            const Icon = video.icon;

            return (
              <motion.div
                key={video.title}
                variants={cardAnimation}
                className="group"
              >
                <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
                 

                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                      className="pointer-events-none absolute inset-0 h-full w-full scale-[1.05] transition-transform duration-700 group-hover:scale-[1.10]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xl">
                        <Icon size={12} />

                        {video.category}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0066FF] shadow-xl"
                    >
                      <Play size={15} fill="currentColor" className="ml-0.5" />
                    </motion.div>
                  </div>

                  

                  <div className="p-5">
                    <h3 className="text-lg font-bold tracking-tight text-slate-950">
                      {video.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {video.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        Watch guide
                      </span>

                      <ArrowRight
                        size={16}
                        className="text-[#0066FF] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
 

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mt-16 flex flex-col items-center justify-between gap-5 rounded-[26px] border border-slate-200 bg-white px-6 py-6 shadow-sm sm:flex-row sm:px-8"
        >
          <div>
            <p className="text-sm font-bold text-slate-950">
              Looking for something specific?
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Browse the complete Markood Help Center.
            </p>
          </div>

          <Link
            href="/help"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#0066FF]"
          >
            Explore Help Center
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

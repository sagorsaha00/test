"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Link from "next/link";

const reels = [
  {
    label: "Keeping people safe",
    videoId: "a0CqrKs13Ps",
  },
  {
    label: "Verified sellers only",
    videoId: "IKS2vNOcZ7A",
  },
  {
    label: "Secure payments, every time",
    videoId: "sYta53ZVFlw",
  },
  {
    label: "Fast, tracked delivery",
    videoId: "IGFC5cLAk6k",
  },
];

const VIDEO_DURATION = 5000;

export default function MarkoodTrustHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev === reels.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, VIDEO_DURATION);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [paused]);

  const active = reels[index];

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT ================= */}

          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-[#0066FF]">
              Trust &amp; Safety
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
              Buy, sell, and
              <br />
              connect safely
              <br />
              on Markood
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-500 sm:text-lg">
              Every order, every payment, every message is backed by
              verification, encryption, and a support team that actually
              responds — so you can focus on buying and selling, not worrying.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/en/help/updates/policies"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0066FF]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0052CC]
                "
              >
                Explore our safety policies
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[380px]">
            <div
              className="
                relative
                h-[560px]
                w-full
                overflow-hidden
                rounded-[28px]
                bg-slate-950
                shadow-[0_35px_80px_rgba(15,23,42,0.25)]
              "
            >
              {/* =========================================
                  VERTICAL VIDEO STACK
              ========================================= */}

              <div
                className="
                  absolute
                  inset-0
                  transition-transform
                  duration-700
                  ease-in-out
                "
                style={{
                  transform: `translateY(-${index * 100}%)`,
                }}
              >
                {reels.map((reel, i) => (
                  <div
                    key={`${reel.videoId}-${i}`}
                    className="relative h-full w-full shrink-0"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1&mute=1&loop=1&playlist=${reel.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                      title={reel.label}
                      allow="autoplay; encrypted-media"
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-[130%]
                        w-[130%]
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    />

                    {/* Dark overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-black/20
                      "
                    />
                  </div>
                ))}
              </div>

              {/* =========================================
                  TOP PROGRESS
              ========================================= */}

              <div className="absolute left-4 right-4 top-4 z-30 flex gap-1.5">
                {reels.map((reel, i) => (
                  <div
                    key={reel.label}
                    className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
                  >
                    <div
                      className={`
                        h-full rounded-full bg-white
                        ${
                          i < index
                            ? "w-full"
                            : i === index
                              ? "animate-reel-progress w-full"
                              : "w-0"
                        }
                      `}
                      style={{
                        animationPlayState:
                          paused && i === index ? "paused" : "running",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* =========================================
                  CURRENT LABEL
              ========================================= */}

              <div
                className="
                  absolute
                  left-5
                  top-1/2
                  z-20
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-900
                  shadow-lg
                "
              >
                {active.label}
              </div>

              {/* =========================================
                  PAUSE / PLAY
              ========================================= */}

              <button
                type="button"
                onClick={() => setPaused((prev) => !prev)}
                className="
                  absolute
                  bottom-5
                  right-5
                  z-40
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition
                  hover:scale-105
                  hover:bg-black/70
                "
              >
                {paused ? (
                  <Play size={15} fill="currentColor" />
                ) : (
                  <Pause size={15} fill="currentColor" />
                )}
              </button>
            </div>

            {/* =========================================
                DOTS
            ========================================= */}

            <div className="mt-5 flex justify-center gap-2">
              {reels.map((reel, i) => (
                <button
                  key={reel.label}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${index === i ? "w-6 bg-[#0066FF]" : "w-1.5 bg-slate-300"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HelpArticleSkeleton() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl animate-pulse px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <main className="max-w-4xl">
            {/* badge */}
            <div className="h-7 w-32 rounded-full bg-slate-100" />

            {/* title */}
            <div className="mt-6 space-y-3">
              <div className="h-10 w-3/4 rounded-lg bg-slate-100" />
              <div className="h-10 w-1/2 rounded-lg bg-slate-100" />
            </div>

            {/* summary */}
            <div className="mt-6 space-y-2">
              <div className="h-4 w-full rounded bg-slate-100" />
              <div className="h-4 w-5/6 rounded bg-slate-100" />
            </div>

            {/* meta row */}
            <div className="mt-7 flex gap-4">
              <div className="h-3 w-20 rounded bg-slate-100" />
              <div className="h-3 w-32 rounded bg-slate-100" />
            </div>

            {/* blocks */}
            <div className="mt-12 space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[26px] border border-slate-100 bg-white p-6 sm:p-8"
                >
                  <div className="flex gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-2xl bg-slate-100" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-slate-100" />
                      <div className="h-4 w-4/5 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* sidebar */}
          <aside className="hidden lg:block">
            <div className="rounded-[26px] border border-slate-100 bg-white p-5">
              <div className="h-4 w-24 rounded bg-slate-100" />
              <div className="mt-2 h-5 w-32 rounded bg-slate-100" />

              <div className="mt-5 space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-10 rounded-xl bg-slate-100" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

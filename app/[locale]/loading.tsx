export default function Loading() {
  return (
    <div className="fixed inset-x-0 top-0 z-[99999] pointer-events-none">
      <div className="relative h-[3px] w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[25%] animate-global-loader rounded-r-full bg-[#0055ff] shadow-[0_0_12px_rgba(0,85,255,0.7)]" />
      </div>
    </div>
  );
}

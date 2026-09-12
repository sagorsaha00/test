export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="loader" />

      <style>{`
        .loader {
          width: 90px;
          height: 14px;
          --c: #0055ff 92%, #0000;

          background:
            radial-gradient(circle 7px at bottom, var(--c)) 0 0,
            radial-gradient(circle 7px at top, var(--c)) 0 100%;

          background-size: calc(100% / 4) 50%;
          background-repeat: repeat-x;

          animation: l11 1s infinite;
        }

        @keyframes l11 {
          80%,
          100% {
            background-position:
              calc(100% / 3) 0,
              calc(100% / -3) 100%;
          }
        }
      `}</style>
    </div>
  );
}

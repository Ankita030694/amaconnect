"use client";

/**
 * Subtle decorative wavy line background, meant to sit behind the
 * FounderStory card's content (absolutely positioned, low opacity,
 * pointer-events-none so it never blocks clicks/selection).
 *
 * Usage: place as the FIRST child inside the founder section's
 * relative-positioned wrapper, before the photo/text content:
 *
 * <section className="relative overflow-hidden rounded-[2rem] ...">
 *   <FounderBgWaves />
 *   <div className="relative z-10"> ...actual content... </div>
 * </section>
 */
export default function FounderBgWaves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M -100 300 C 200 250, 400 380, 700 320 S 1100 260, 1400 340"
        stroke="#D4AF37"
        strokeOpacity="0.12"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M -100 380 C 200 330, 400 460, 700 400 S 1100 340, 1400 420"
        stroke="#D4AF37"
        strokeOpacity="0.1"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M -100 460 C 200 410, 400 540, 700 480 S 1100 420, 1400 500"
        stroke="#D4AF37"
        strokeOpacity="0.08"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M -100 220 C 200 170, 400 300, 700 240 S 1100 180, 1400 260"
        stroke="#2D2219"
        strokeOpacity="0.05"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

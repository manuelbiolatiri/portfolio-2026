"use client";

import { useEffect, useState, useRef } from "react";

export function PrecisionTracker() {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!visible) setVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest("a, button, [role='button'], input, textarea, .interactive-target");
        setIsHoveringInteractive(isInteractive);
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth physics loop for ring following
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Precision Drafting Cursor (No flares, pure geometric architectural draftsman) */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-1.5 h-1.5 bg-[var(--accent)] rounded-full pointer-events-none z-50 transition-opacity duration-150"
        style={{ willChange: "transform" }}
      />

      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-all duration-200 ${
          isHoveringInteractive
            ? "-ml-5 -mt-5 w-10 h-10 border-[var(--accent)] bg-[var(--accent-subtle)] scale-110"
            : "-ml-3.5 -mt-3.5 w-7 h-7 border-[var(--line-strong)] opacity-60"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Subtle Fixed Precision Coordinate HUD */}
      <div className="fixed bottom-4 right-4 z-40 hidden lg:flex items-center gap-3 px-3 py-1.5 border border-[var(--line-faint)] bg-[var(--paper)]/90 backdrop-blur-sm text-[10px] font-mono text-[var(--muted)] pointer-events-none select-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>MANCHESTER, UK</span>
        </span>
        <span className="text-[var(--line)]">|</span>
        <span>
          X:{coords.x.toString().padStart(4, "0")} Y:{coords.y.toString().padStart(4, "0")}
        </span>
      </div>
    </>
  );
}

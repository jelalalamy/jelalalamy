"use client"
import { useEffect, useRef } from "react";

const Spotlight = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX + window.scrollX}px`);
      targetRef.current.style.setProperty("--y", `${clientY + window.scrollY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return (
    <div ref={targetRef} className="hidden lg:block pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: "radial-gradient(600px at var(--x, 100px) var(--y, 100px), rgba(29, 78, 216, 0.15), transparent 80%)" }}></div>
  )
}

export default Spotlight
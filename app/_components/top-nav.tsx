"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "protocol", label: "Protocol" },
  { id: "features", label: "Features" },
  { id: "technology", label: "Technology" },
  { id: "why-now", label: "Why Now" },
  { id: "status", label: "Status" },
];

export function TopNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 rounded-full border border-surface-variant px-6 py-2 z-50 bg-background/80 backdrop-blur-xl inner-glow shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] shadow-2xl hidden md:flex items-center gap-8">
      <div className="flex items-center gap-6 text-label-caps font-label-caps text-on-surface-variant">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={
                isActive
                  ? "text-primary font-bold border-b border-primary pb-0.5 transition-colors duration-300"
                  : "hover:text-primary border-b border-transparent pb-0.5 transition-colors duration-300"
              }
            >
              {s.label}
            </a>
          );
        })}
      </div>
      <button className="bg-brown text-on-brown px-4 py-2 rounded-full text-label-caps font-label-caps font-bold hover:bg-brown-dim hover:scale-95 active:scale-90 transition-all">
        Join Waitlist
      </button>
    </nav>
  );
}

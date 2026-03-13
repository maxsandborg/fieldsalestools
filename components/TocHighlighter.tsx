"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TOC_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "cost", label: "Total Cost" },
  { id: "tools", label: "The Stack" },
  { id: "why", label: "Why It Works" },
  { id: "verdict", label: "Verdict" },
  { id: "faq", label: "FAQ" },
];

export default function TocHighlighter() {
  const [activeSection, setActiveSection] = useState("overview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {TOC_SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`toc-link${activeSection === id ? " active" : ""}`}
        >
          {label}
        </a>
      ))}
    </>
  );
}

"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14, color: "#0f2340", lineHeight: 1.4 }}>
          {question}
        </span>
        <span
          style={{
            color: "#1d6ce8",
            fontSize: 22,
            fontWeight: 300,
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, margin: "14px 0 0" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";

export function ArticleProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setCompletion(Number((totalScroll / windowHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-[#e3e8ef]/60">
      <div
        className="h-full bg-gradient-to-r from-[#2563eb] via-[#0ea5a4] to-[#059669] transition-all duration-100"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}

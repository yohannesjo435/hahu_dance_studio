"use client";
import { useEffect, useState } from "react";

function Loading() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Fade out after 2.5s
    const timer = setTimeout(() => setHide(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-[100] bg-black flex items-center justify-center transition-all duration-700 ${
        hide
          ? "opacity-0 scale-90 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <h1 className="text-3xl animate-bounce text-white">loading...</h1>
    </div>
  );
}

export default Loading;

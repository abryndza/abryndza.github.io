"use client";

import { IconArrowLeft, IconArrowNarrowUp } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const VISIBILITY_THRESHOLD = 0.3;

const getScrolledRatio = () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollable = scrollHeight - clientHeight;

  return scrollable > 0 ? scrollTop / scrollable : 0;
};

export const BackToTopButton = () => {
  const [wasRevealed, setWasRevealed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolledRatio = getScrolledRatio();
      const isPastThreshold = scrolledRatio > VISIBILITY_THRESHOLD;

      setIsVisible(isPastThreshold);

      if (isPastThreshold) {
        setWasRevealed(true);
      }

      // Written straight to the node: a state update per scrolled pixel would
      // re-render the button just to repaint its reading progress.
      const scrolledPercent = Math.floor(scrolledRatio * 100);

      progressRef.current?.style.setProperty(
        "background-image",
        `conic-gradient(var(--accent), var(--accent) ${scrolledPercent}%, transparent ${scrolledPercent}%)`,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!wasRevealed) {
    return null;
  }

  return (
    <div
      className={`fixed end-4 bottom-8 z-40 transition duration-500 tablet:sticky tablet:end-auto tablet:me-1 tablet:self-end ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-14 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative flex size-14 cursor-pointer items-center justify-center rounded-full bg-background text-sm shadow-xl hover:text-accent tablet:h-8 tablet:w-fit tablet:rounded-md tablet:bg-background/35 tablet:bg-clip-padding tablet:px-2 tablet:py-1 tablet:shadow-none tablet:backdrop-blur-lg"
      >
        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute inset-0 -z-10 block scale-110 rounded-full tablet:hidden"
        />
        <IconArrowLeft
          aria-hidden="true"
          size={24}
          stroke={2}
          className="rotate-90 tablet:hidden"
        />
        <span className="sr-only tablet:not-sr-only tablet:inline-flex tablet:items-center tablet:gap-1">
          <IconArrowNarrowUp aria-hidden="true" size={16} stroke={2} />
          Wróć na górę
        </span>
      </button>
    </div>
  );
};

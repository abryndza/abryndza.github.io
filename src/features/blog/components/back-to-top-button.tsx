"use client";

import { IconArrowNarrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const VISIBILITY_THRESHOLD = 0.3;

const getScrolledRatio = () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollable = scrollHeight - clientHeight;

  return scrollable > 0 ? scrollTop / scrollable : 0;
};

export const BackToTopButton = () => {
  const [wasRevealed, setWasRevealed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isPastThreshold = getScrolledRatio() > VISIBILITY_THRESHOLD;

      setIsVisible(isPastThreshold);

      if (isPastThreshold) {
        setWasRevealed(true);
      }
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
      className={`fixed end-4 bottom-8 z-40 transition duration-500 tablet:sticky tablet:end-auto tablet:self-end ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-14 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex size-14 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-sm shadow-xl hover:text-accent tablet:h-8 tablet:w-fit tablet:gap-1 tablet:rounded-md tablet:border-0 tablet:px-2 tablet:shadow-none"
      >
        <IconArrowNarrowUp aria-hidden="true" size={20} stroke={2} />
        <span className="sr-only tablet:not-sr-only">Wróć na górę</span>
      </button>
    </div>
  );
};

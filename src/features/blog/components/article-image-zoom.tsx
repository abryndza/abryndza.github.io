"use client";

import { IconX } from "@tabler/icons-react";
import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ArticleImageZoomProps = {
  src: ImageProps["src"];
  alt: string;
  sizes?: string;
};

export const ArticleImageZoom = ({
  src,
  alt,
  sizes,
}: ArticleImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLImageElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // The dialog holds a single focusable control, so "trapping" focus means
  // keeping it there: Tab and Shift+Tab must not reach the page behind the
  // overlay, which `aria-modal` only promises to assistive technology.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Without this the page keeps scrolling under the overlay.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* biome-ignore lint/a11y/useSemanticElements: a button wrapper would
          become the focus target, and focus has to return to the image itself
          once the preview closes. */}
      <Image
        ref={triggerRef}
        src={src}
        alt={alt}
        sizes={sizes || "(max-width: 768px) 100vw, 768px"}
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        className="h-auto w-full cursor-zoom-in"
      />

      {isOpen
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Podgląd obrazu"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              {/*
                The backdrop is its own element so that clicking the enlarged
                image does not close the preview. It duplicates the close
                button, so it is kept out of the a11y tree and the tab order.
              */}
              <button
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                onClick={close}
                className="absolute inset-0 cursor-zoom-out"
              />

              <button
                ref={closeRef}
                type="button"
                aria-label="Zamknij podgląd obrazu"
                onClick={close}
                className="absolute end-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-sm bg-background text-foreground"
              >
                <IconX aria-hidden="true" size={22} stroke={2} />
              </button>

              <Image
                src={src}
                alt={alt}
                sizes="100vw"
                className="relative max-h-[90vh] w-auto max-w-full object-contain"
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

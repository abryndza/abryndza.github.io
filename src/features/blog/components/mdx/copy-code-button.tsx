"use client";

import { useEffect, useRef, useState } from "react";

const COPIED_LABEL_DURATION = 700;

/** Sits in the code block wrapper and copies the block it belongs to. */
export const CopyCodeButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [wasCopied, setWasCopied] = useState(false);

  useEffect(() => {
    if (!wasCopied) {
      return;
    }

    const timeout = setTimeout(
      () => setWasCopied(false),
      COPIED_LABEL_DURATION,
    );

    return () => clearTimeout(timeout);
  }, [wasCopied]);

  const copyCode = async () => {
    const code = buttonRef.current
      ?.closest(".code-block-wrapper")
      ?.querySelector("code")?.textContent;

    await navigator.clipboard.writeText(code ?? "");

    setWasCopied(true);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={copyCode}
      className="copy-code-button"
    >
      {wasCopied ? "Skopiowano" : "Kopiuj"}
    </button>
  );
};

"use client";

import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  // TODO: Add an explicit fallback once the desired behavior outside app history is defined.
  const goBack = () => router.back();

  return (
    <button
      type="button"
      onClick={goBack}
      className="mb-2 flex cursor-pointer items-center gap-1 text-sm hover:text-accent"
    >
      <IconArrowNarrowLeft aria-hidden="true" size={20} stroke={2} />
      Wróć
    </button>
  );
};

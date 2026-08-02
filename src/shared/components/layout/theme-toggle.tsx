"use client";

import { useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <button
      type="button"
      aria-label="Przełącz motyw"
      onClick={() => toggleColorScheme()}
      className={`flex size-8 cursor-pointer items-center justify-center rounded-sm text-foreground hover:text-accent ${className}`}
    >
      {colorScheme === "dark" ? (
        <IconSun aria-hidden="true" size={20} stroke={2} />
      ) : (
        <IconMoon aria-hidden="true" size={20} stroke={2} />
      )}
    </button>
  );
};

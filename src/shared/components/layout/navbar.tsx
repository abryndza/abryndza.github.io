"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { urls as blogUrls } from "@/features/blog/urls";
import { ThemeToggle } from "./theme-toggle";

const MENU_ID = "menu-items";

// Matches the `tablet` breakpoint from globals.css.
const DESKTOP_MEDIA_QUERY = "(min-width: 640px)";

type NavItem = {
  href: string;
  label: string;
  /** Announced in the menu, but has no route yet, so it is never current. */
  isPlaceholder?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Strona główna" },
  { href: blogUrls.main(), label: "Wpisy" },
  { href: "/links", label: "Zbiór linków", isPlaceholder: true },
];

const withoutTrailingSlash = (path: string) =>
  path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const currentPath = withoutTrailingSlash(pathname || "/");

  // The menu only exists below the breakpoint; leaving it open while the
  // desktop navigation takes over would bring it back on the way down.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const closeOnDesktop = () => {
      if (desktop.matches) {
        setIsMenuOpen(false);
      }
    };

    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);

    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [isMenuOpen]);

  const isActive = (item: NavItem) => {
    if (item.isPlaceholder) {
      return false;
    }

    return item.href === "/"
      ? currentPath === "/"
      : currentPath === item.href || currentPath.startsWith(`${item.href}/`);
  };

  return (
    <header ref={headerRef} className="app-layout">
      <div className="flex flex-col border-b border-border tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex items-center justify-between py-4 tablet:py-6">
          <Link
            href="/"
            className="whitespace-nowrap text-xl font-semibold tablet:text-2xl"
          >
            Adam Bryndza
          </Link>

          {/*
            Below the breakpoint the theme toggle lives here and nowhere else,
            so opening the menu does not make it jump to the bottom of the list.
          */}
          <div className="flex items-center gap-1 tablet:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isMenuOpen}
              aria-controls={MENU_ID}
              onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
              className="flex size-8 cursor-pointer items-center justify-center rounded-sm text-foreground hover:text-accent"
            >
              {isMenuOpen ? (
                <IconX aria-hidden="true" size={22} stroke={2} />
              ) : (
                <IconMenu2 aria-hidden="true" size={22} stroke={2} />
              )}
            </button>
          </div>
        </div>

        <nav aria-label="Nawigacja główna">
          <ul
            id={MENU_ID}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } list-none flex-col items-center gap-1 pb-4 tablet:flex tablet:flex-row tablet:items-center tablet:gap-5 tablet:pb-0`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item) ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium hover:text-accent ${
                    isActive(item) ? "active-nav" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="hidden py-1 tablet:block">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

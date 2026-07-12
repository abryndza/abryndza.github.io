"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { urls as blogUrls } from "@/features/blog/urls";
import { NavbarIcons } from "./navbar-icons";

const navItems = [
  { href: "/", label: "Strona główna" },
  { href: blogUrls.main(), label: "Blog" },
];

export const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <header className="px-5 laptop:px-20 bg-white dark:bg-bg">
      <nav className="flex items-center justify-between py-2 min-h-15 laptop:min-h-26">
        <div className="flex items-center gap-12.5">
          <Link href="/" style={{ textDecoration: "none" }} scroll={false}>
            <span className="font-bold transition-colors duration-300 hover:text-gray-600 dark:hover:text-zinc-400 text-xl laptop:text-2xl text-gray-900 dark:text-gray-200">
              Adam Bryndza
            </span>
          </Link>

          <ul className="hidden tablet:flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  className="text-base font-normal text-gray-800 dark:text-gray-400"
                  scroll={false}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden tablet:flex items-center gap-4">
            <NavbarIcons />
          </div>
          <div className="tablet:hidden flex items-center">
            <Burger opened={opened} onClick={toggle} size="sm" />
          </div>
        </div>
      </nav>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Menu"
        withCloseButton={false}
        zIndex={1000000}
        classNames={{
          content: "bg-bg !bg-bg",
          header: "bg-bg !bg-bg",
          body: "bg-bg !bg-bg",
        }}
        styles={{
          content: { display: "flex", flexDirection: "column" },
          body: { display: "flex", flexDirection: "column", flex: 1 },
        }}
      >
        <div className="flex-1 flex flex-col justify-between items-center pt-30 pb-10">
          <ul className="list-none flex flex-col items-center gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  onClick={close}
                  className="text-3xl font-bold text-foreground"
                  scroll={false}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-6">
            <NavbarIcons size={30} className="w-14 h-14" />
          </div>
        </div>
      </Drawer>
    </header>
  );
};

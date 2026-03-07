"use client";

import {
  Box,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { NavbarIcons } from "./navbar-icons.component";

const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Box py="sm" h={{ base: 60, md: 104 }}>
        <Group justify="space-between" h="100%">
          <Group gap={50}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text
                fz={{ base: "xl", md: "24px" }}
                fw={700}
                c={colorScheme === "dark" ? "gray.2" : "dark.9"}
                style={{ transition: "color 300ms ease-in-out" }}
                className="hover:text-zinc-400"
              >
                Adam Bryndza
              </Text>
            </Link>

            <Group gap="lg" visibleFrom="sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    c={colorScheme === "dark" ? "gray.4" : "gray.8"}
                    size="md"
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
            </Group>
          </Group>

          <Group gap="xs">
            <Group visibleFrom="sm">
              <NavbarIcons />
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </Group>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack gap="md" mt="xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ textDecoration: "none" }}
              onClick={close}
            >
              <Text
                size="xl"
                fw={500}
                c={colorScheme === "dark" ? "gray.4" : "gray.8"}
              >
                {item.label}
              </Text>
            </Link>
          ))}
          <Box mt="xl">
            <NavbarIcons />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

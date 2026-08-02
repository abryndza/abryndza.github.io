import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import { AppShell } from "@/shared/components/layout";

import "@mantine/core/styles.css";
import "./globals.css";

const mainFont = Google_Sans_Code({
  subsets: ["latin"],
  weight: "variable",
  adjustFontFallback: false,
  variable: "--font-google-sans-code",
});

const theme = createTheme({
  fontFamily: "var(--font-google-sans-code), monospace",
  fontFamilyMonospace: "var(--font-google-sans-code), monospace",
  headings: { fontFamily: "var(--font-google-sans-code), monospace" },
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Adam Bryndza - Blog",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${mainFont.variable} antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

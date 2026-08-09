import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import { AppShell } from "@/shared/components/layout";
import { siteUrl } from "@/shared/helpers";

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

const SITE_NAME = "Adam Bryndza";

const SITE_DESCRIPTION =
  "Blog o automatyzacji i optymalizacji pracy w dobie AI oraz zmianach w rozwoju oprogramowania.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
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

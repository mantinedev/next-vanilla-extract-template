import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { RedHeader } from "../components/RedHeader/RedHeader";
// import { BlueHeader } from "../components/BlueHeader/BlueHeader";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <RedHeader />
          {/* <BlueHeader /> */}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="blue-light"
      enableSystem={false}
      storageKey="portfolio-theme"
    >
      {children}
    </ThemeProvider>
  );
}

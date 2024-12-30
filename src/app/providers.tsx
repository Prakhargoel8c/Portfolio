"use client";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" value={{ light: "light-theme", dark: "dark-theme" }}>
      {children}
      <Analytics />
    </ThemeProvider>
  );
}

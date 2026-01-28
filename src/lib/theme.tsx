"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeName =
  | "default"
  | "gold"
  | "neon"
  | "aurora"
  | "crimson"
  | "midnight"
  | "forest"
  | "lavender"
  | "ember"
  | "arctic"
  | "coral"
  | "slate";

type Mode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  mode: Mode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("default");
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}

"use client";

import { useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, ThemeName } from "@/lib/theme";

const themes: { name: ThemeName; color: string }[] = [
  { name: "default", color: "#6366f1" },
  { name: "gold", color: "#facc15" },
  { name: "neon", color: "#ec4899" },
  { name: "aurora", color: "#10b981" },
  { name: "crimson", color: "#ef4444" },
  { name: "midnight", color: "#3b82f6" },
  { name: "forest", color: "#22c55e" },
  { name: "lavender", color: "#a855f7" },
  { name: "ember", color: "#fb7185" },
  { name: "arctic", color: "#38bdf8" },
  { name: "coral", color: "#fb7185" },
  { name: "slate", color: "#64748b" },
];

export function ThemePalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-lg hover:bg-muted transition"
        aria-label="Theme palette"
      >
        <Palette size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 grid grid-cols-4 gap-3 p-4 rounded-xl bg-card border border-border shadow-lg z-50"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setOpen(false);
                }}
                className="w-6 h-6 rounded-full relative group"
                style={{ backgroundColor: t.color }}
                title={t.name}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 blur-lg transition"
                  style={{ backgroundColor: t.color }}
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/--+/g, "-")
    .trim();
}

export function formatDate(
  date: string | Date,
  format: "short" | "long" = "long",
): string {
  const d = new Date(date);
  if (format === "short") {
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getYearsAgo(date: string | Date): number {
  const d = new Date(date);
  return new Date().getFullYear() - d.getFullYear();
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const currentHostname =
      typeof window !== "undefined" ? window.location.hostname : "";
    return urlObj.hostname !== currentHostname;
  } catch {
    return false;
  }
}

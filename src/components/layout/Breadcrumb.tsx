"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...generateBreadcrumbs(pathname),
  ];

  const breadcrumbs = items || defaultItems;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex items-center gap-2"
            >
              {index === 0 && (
                <>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Home"
                    >
                      <Home size={16} />
                    </Link>
                  ) : (
                    <div className="p-1.5 rounded-lg text-muted-foreground">
                      <Home size={16} />
                    </div>
                  )}
                </>
              )}

              {index > 0 && (
                <ChevronRight
                  size={16}
                  className="text-muted-foreground mx-1"
                  aria-hidden="true"
                />
              )}

              {index > 0 &&
                (isLast ? (
                  <span
                    className="text-sm font-semibold text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((segment, index) => ({
    label: formatSegment(segment),
    href: `/${segments.slice(0, index + 1).join("/")}`,
  }));
}

function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

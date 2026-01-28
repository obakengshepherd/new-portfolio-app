import { socialLinks } from "@/data/social";
import { getLucideIcon } from "@/lib/icon-utils";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {socialLinks.map((social) => {
        const Icon = getLucideIcon(social.icon);
        return (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-background transition-colors duration-200"
            aria-label={social.label}
          >
            <Icon size={iconSize} />
          </Link>
        );
      })}
    </div>
  );
}

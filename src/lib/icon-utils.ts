import * as Icons from "lucide-react";

export function getLucideIcon(iconName: string) {
  return (Icons as any)[iconName] || Icons.Circle;
}

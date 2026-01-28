export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  order?: number;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    order: 1,
  },
  {
    label: "About",
    href: "/about",
    order: 2,
  },
  {
    label: "Skills",
    href: "/skills",
    order: 3,
  },
  {
    label: "Projects",
    href: "/projects",
    order: 4,
  },
  {
    label: "Contact",
    href: "/contact",
    order: 5,
  },
];

"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";

import Link from "next/link";
import SwitchTheme from "@/app/components/SwitchTheme";
import { cn } from "@/app/lib/utils"; // Se você tiver uma função `cn` para unir classes

const links = [
  { href: "/", label: "Home"},
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNavbar() {
  return (
    <div className="flex gap-4 items-center">
      {/* Menu de navegação */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 p-4 w-48 ">
                {links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-2 py-1 text-sm text-foreground hover:underline"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>

      {/* SwitchTheme (tema claro/escuro) */}
      <SwitchTheme />
    </div>
  );
}

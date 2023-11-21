"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./ui/theme-toggle";
import { NavMenu } from "./NavMenu";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="4xl:px-96 p-12 lg:px-24">
      <nav>
        <ul className="flex items-center justify-between  ">
          <Image
            src="/logo-f.svg"
            width={32}
            height={32}
            alt="logo"
            className="dark:invert "
          ></Image>
          <li>
            <NavMenu />
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

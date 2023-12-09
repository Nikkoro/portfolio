"use client";

import { ModeToggle } from "./ui/theme-toggle";
import { NavMenu } from "./NavMenu";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container py-2 ">
        <ul className="flex items-center justify-between">
          <li>
            <Image
              src="/logo-f.svg"
              width={32}
              height={32}
              alt="logo"
              className="dark:invert"
            ></Image>
          </li>
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

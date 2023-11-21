"use client";

import { ModeToggle } from "./ui/theme-toggle";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li className="text-3xl font-bold">Hello! 👋</li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

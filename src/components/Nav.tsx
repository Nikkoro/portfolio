"use client";

import { ModeToggle } from "./ui/theme-toggle";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between ">
          <li className="text-5xl font-bold ">
            Hello! <span className="hover:animate-wave inline-block ">👋</span>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import { ModeToggle } from "./ui/theme-toggle";

export default function Nav() {
  return (
    <header className="p-12 lg:p-24">
      <nav>
        <ul className="flex items-center justify-between ">
          <li className="text-3xl font-bold lg:text-5xl">
            Hello! <span className="inline-block hover:animate-wave ">👋</span>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

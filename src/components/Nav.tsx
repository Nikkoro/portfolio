"use client";

import { ModeToggle } from "./ui/theme-toggle";
import { NavMenu } from "./NavMenu";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:pr-0 xl:pr-4 ">
      <motion.div
        className="fixed bottom-[-1px] left-0 right-0 h-[1px] origin-[0%] bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
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

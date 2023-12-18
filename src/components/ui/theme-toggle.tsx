"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { TbCheck } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    const titles: Record<string, string> = {
      light: "🌞",
      dark: "🌚",
      green: "🍃",
      system: "🤖",
    };

    const title = titles[theme] || theme;
    toast({
      description: `Theme changed to ${theme} ${title} `,
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
          {theme === "light" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
          {theme === "dark" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("green")}>
          Green
          {theme === "green" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
          {theme === "system" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

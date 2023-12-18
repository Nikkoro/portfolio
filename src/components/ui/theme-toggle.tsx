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

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { toast } = useToast();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    const titles: Record<string, string> = {
      light: "🌞",
      dark: "🌚",
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
          {resolvedTheme === "light" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
          {resolvedTheme === "dark" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
          {resolvedTheme === "system" && (
            <span className="ml-2">
              <TbCheck />
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 md:row-span-1 lg:row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className=" flex h-full w-full select-none flex-col justify-end rounded-md bg-[url(/ar_emoji_wobg.png)] from-muted/50  bg-contain bg-no-repeat no-underline outline-none hover:shadow-md focus:shadow-md md:hidden lg:flex"
                    href="/about"
                  >
                    <div className="mb-2 mt-6 p-10 text-lg font-medium"></div>
                    <h1 className=" absolute inset-x-0 top-4 mx-6 text-sm font-medium md:top-8  md:w-[100px]">
                      About me
                    </h1>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                className="hidden md:flex lg:hidden"
                href="/about"
                title="About me"
              ></ListItem>
              <ListItem href="/projects" title="Projects">
                Some of my projects
              </ListItem>
              <ListItem href="/contact" title="Contact">
                Socialmedia links and contact information
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

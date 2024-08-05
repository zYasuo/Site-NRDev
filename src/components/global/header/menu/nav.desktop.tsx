"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RxRocket } from "react-icons/rx";
import { LuNewspaper } from "react-icons/lu";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdCorporateFare } from "react-icons/md";
import { FaQuestionCircle, FaRegBuilding } from "react-icons/fa";
import {
  NavMenuConstants,
  NavMenuFAQ,
} from "@/components/global/header/menu/constants/nav.menu.constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-6 text-sm">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/planos"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/planos",
                  })}
                >
                  <RxRocket className="mr-2" />
                  Planos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn({
                  "bg-accent": pathname === "/conheca-nr",
                })}
              >
                <MdCorporateFare className="mr-2" />
                Conheça a NR
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {NavMenuConstants.map((NavMenuConstants) => (
                    <ListItem
                      key={NavMenuConstants.title}
                      title={NavMenuConstants.title}
                      href={NavMenuConstants.href}
                      className={cn({
                        "bg-accent": pathname === NavMenuConstants.href,
                      })}
                    >
                      {NavMenuConstants.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn({
                  "bg-accent": pathname === "/fale-conosco",
                })}
              >
                <FaQuestionCircle className="mr-2" />
                Fale Conosco
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {NavMenuFAQ.map((NavMenuFAQ) => (
                    <ListItem
                      key={NavMenuFAQ.title}
                      title={NavMenuFAQ.title}
                      href={NavMenuFAQ.href}
                      className={cn({
                        "bg-accent": pathname === NavMenuFAQ.href,
                      })}
                    >
                      {NavMenuFAQ.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faturas" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/faturas",
                  })}
                >
                  <LuNewspaper className="mr-2" />
                  Retire sua Fatura
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const pathname = usePathname(); // Add this line to use usePathname in ListItem as well
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 hover:text-zinc-700 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            {
              "bg-accent": pathname === props.href, // Apply bg-accent based on pathname
            },
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug dark:text-foreground ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

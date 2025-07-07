"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Logo from "./logo";

const menuItems = [
  { name: "About", href: "/" },
  { name: "About", href: "/dashboard" },
  { name: "Community", href: "/pricing" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="">
      <nav
        data-state={menuState && "active"}
        className="mt-[22px] z-50  w-full h-[54px] bg-[#0A0523]  backdrop-blur-3xl "
      >
        <div className="mx-auto max-w-[1440px] px-5 h-full transition-all duration-300 flex items-center justify-between w-full">
          <div className="relative flex flex-wrap items-center justify-between w-full">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
                <h4 className="text-[28px] text-white font-[family-name:var(--font-readeax)]">
                  Demotrade
                </h4>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-[38px] text-[20px] font-[family-name:var(--font-flink)]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={` text-white block duration-150  ${
                        pathname === item.href
                          ? "text-[#0E121B]"
                          : "text-[#525866]"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                          pathname === item.href
                            ? "text-red-500"
                            : "text-[#525866]"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-[family-name:var(--font-flink)]">
                <Button asChild variant="default" size="lg">
                  <Link href="#">
                    <span>Connect Wallet</span>
                    <Image
                      src="right.svg"
                      alt="right arrow"
                      width={20}
                      height={20}
                      className=""
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

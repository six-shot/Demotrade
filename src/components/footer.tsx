import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-[136px] border-t border-[#EAECF0] font-[family-name:var(--font-fig-tree)] px-10">
      <div className="mx-auto max-w-[1440px] px-5 transition-all duration-300 flex justify-between items-center h-full">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-1"
            >
              <Logo />
              <h4 className="text-2xl font-semibold text-[#0E121B] tracking-[-0.96px] ">
                Stockbits
              </h4>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src="twitter.svg" width={24} height={24} alt="twitter" />
          <Image src="linkedin.svg" width={24} height={24} alt="linkedin" />
          <Image src="facebook.svg" width={24} height={24} alt="facebook" />
        </div>
        <h5 className="text-[#0E121B]">
          © 2077 Rockkbit. All rights reserved.
        </h5>
      </div>
    </div>
  );
}

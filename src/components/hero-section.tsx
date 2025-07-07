import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";

import TopSlide from "./topslide";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" w-full  ">
      <HeroHeader />
      <TopSlide />
      <div className="relative">
        <img src="mask.svg" className="w-full" alt="mask" />
        <div className="absolute inset-0 flex flex-col items-center mt-[108px] ">
          <h1 className="text-[120px] head-text font-[family-name:var(--font-flink)] font-bold text-center leading-[120px] mb-[50px]">
            Trade the Hype.
            <br /> Lose the Risk
          </h1>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="font-[family-name:var(--font-flink)]"
          >
            <Link href="#">
              <span>Earn now</span>
              <Image
                src="right.svg"
                alt="right arrow"
                width={20}
                height={20}
                className=""
              />
            </Link>
          </Button>
          <div className="mt-[152px]">
            <Image src="demotrade.svg" width={1359} height={716} alt="demo-trade"/>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

export default function StartInvesting() {
  return (
    <div className="px-4 mt-2.5">
      <div className="bg-[#F5F4FC] rounded-[24px] border-[3px] border-[rgba(71,108,255,0.02)] py-[151px] flex flex-col justify-center items-center relative overflow-hidden">
        <Image src="invest.svg" alt="invest.svg" width={1472} height={952} className='absolute -top-[5px] w-full'/>
        <h2 className="text-[#0E121B] text-[72px] tracking-[-2.88px] leading-[90px] font-[family-name:var(--font-cal-sans)] text-center ">
          Start Investing with <br /> Stockbits Today
        </h2>
        <p className="text-[#525866] w-[607px] text-center text-[20px] font-[family-name:var(--font-fig-tree)] mt-4 mb-8">
          .Buy tokenized assets, manage your portfolio, and participate in DeFi
          all from one clean interface.
        </p>
        <Button asChild variant="default" size="sm">
          <Link href="#">
            <span>Join now</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

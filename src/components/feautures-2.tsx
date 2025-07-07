import Image from "next/image";
import React from "react";
import SwapWidget from "./swap-widget";
import StockCard from "./stock-card";

export default function Feautures2() {
  return (
    <div className="pt-[98px] pb-[246px] px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-balance text-center text-4xl font-[family-name:var(--font-cal-sans)] lg:text-[64px] tracking-[-0.64px] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)]">
          Bonds. Stocks. <br /> Properties.
        </h2>
        <div className="pt-[62px] grid grid-cols-3 gap-10  items-center">
          <div className="h-[472px]">
            <div className="p-10 border border-[#F5F7FA] bg-[#E1E4EA] rounded-[24px] flex justify-between flex-col">
              <div className="bg-white p-6 rounded-[16px]">
                <div className="flex justify-between items-start">
                  <div className="w-[50px] h-[50px] bg-[#EBF1FF] borrder border-[#D5E2FF] rounded-[9px] flex justify-center items-center">
                    <Image
                      src="dollar.svg"
                      alt="dollar"
                      width={27}
                      height={27}
                    />
                  </div>
                  <div className="px-1 h-[22px] bg-[#F0FDF4] rounded-[16px] flex items-center gap-[2px]">
                    <Image width={16} height={16} src="up.svg" alt="up" />
                    <h6 className="text-xs text-[#008236] font-[family-name:var(--font-fig-tree)]">
                      +12.5%
                    </h6>
                  </div>
                </div>

                <div className="mt-[18px]">
                  <div>
                    <h5 className="text-[#0E121B] leading-[48px] font-[family-name:var(--font-cal-sans)] text-[24px]">
                      $2.4T
                    </h5>
                  </div>
                  <p className="text-[#525866] text-[16px] font-medium font-[family-name:var(--font-fig-tree)]">
                    Total Market Cap
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-[16px] mt-3">
                <div className="flex justify-between items-start">
                  <div className="w-[50px] h-[50px] bg-[#EBF1FF] borrder border-[#D5E2FF] rounded-[9px] flex justify-center items-center">
                    <Image
                      src="dollar.svg"
                      alt="dollar"
                      width={27}
                      height={27}
                    />
                  </div>
                  <div className="px-1 h-[22px] bg-[#F0FDF4] rounded-[16px] flex items-center gap-[2px]">
                    <Image width={16} height={16} src="up.svg" alt="up" />
                    <h6 className="text-xs text-[#008236] font-[family-name:var(--font-fig-tree)]">
                      +8.2%
                    </h6>
                  </div>
                </div>

                <div className="mt-[18px]">
                  <div>
                    <h5 className="text-[#0E121B] leading-[48px] font-[family-name:var(--font-cal-sans)] text-[24px]">
                      1,247
                    </h5>
                  </div>
                  <p className="text-[#525866] text-[16px] font-medium font-[family-name:var(--font-fig-tree)]">
                    Active products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StockCard />
          <SwapWidget />
        </div>
        <div className="pt-4 grid grid-cols-3 gap-10  items-start font-[family-name:var(--font-fig-tree)]">
          <div>
            <h4 className="text-[24px] text-[#0E121B] font-semibold">
              Permissionless Trading, 24/7
            </h4>
            <p className="text-[#525866] mt-2">
              Experience true financial freedom by trading shares of companies,
              properties, or bonds anytime, anywhere.{" "}
            </p>
          </div>
          <div>
            <h4 className="text-[24px] text-[#0E121B] font-semibold">
              Fully On-Chain
            </h4>
            <p className="text-[#525866] mt-2">
              By keeping everything on-chain, we guarantee transparency,
              immutability, and trust in every transaction.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] text-[#0E121B] font-semibold">
              USDX is a high yield savings
            </h4>
            <p className="text-[#525866] mt-2">
              The company behind USDT makes $20B per year. USDX is a stablecoin
              just like USDT, but the profits are distributed back to the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

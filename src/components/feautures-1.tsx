import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-24 font-[family-name:var(--font-fig-tree)] ">
      <div className="@container mx-auto max-w-[1440px] px-40">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-[family-name:var(--font-cal-sans)] lg:text-[64px] tracking-[-0.64px] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)]">
            Proven & Reliable
          </h2>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-10 *:text-center md:mt-[64px]">
          <Card className="group ">
            <CardHeader>
              <CardDecorator>
                <Image src="users.svg" width={40} height={40} alt="users" />
              </CardDecorator>
              <h3 className="mt-6 text-[20px] text-[#0E121B] font-semibold">
                $150M+
              </h3>
            </CardHeader>

            <CardContent className="mt-1.5">
              <p className="text-[#0E121B] text-sm font-medium">
                Total Rewards
              </p>
              <p className="text-sm  text-[#525866] ">
                Rewards to be distrubted
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="">
              <CardDecorator>
                <Image src="rewards.svg" width={40} height={40} alt="rewards" />
              </CardDecorator>

              <h3 className="mt-6 text-[20px] text-[#0E121B] font-semibold">
                12600+
              </h3>
            </CardHeader>

            <CardContent className="mt-1.5">
              <p className="text-[#0E121B] text-sm font-medium">Users</p>
              <p className="text-sm  text-[#525866] ">
                People who use and trust stockbits
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="">
              <CardDecorator>
                <Image src="trade.svg" width={40} height={40} alt="trade" />
              </CardDecorator>

              <h3 className="mt-6 text-[20px] text-[#0E121B] font-semibold">
                $100M+
              </h3>
            </CardHeader>

            <CardContent className="mt-1.5">
              <p className="text-[#0E121B] text-sm font-medium">
                Trading Volume
              </p>
              <p className="text-sm  text-[#525866]">
                Processed through our assets
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative flex justify-center items-center ">
    <div className="bg-white border border-[#E1E4EA] rounded-[10px] px-5 w-20 h-20 flex items-center justify-center shadow-[0px_2px_4px_0px_rgba(10,13,20,0.03)] ">
      {children}
    </div>
  </div>
);

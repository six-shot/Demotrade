import Image from 'next/image';
import React from 'react'

export default function HowToSave() {
  return (
    <div className="px-4">
      <div className="bg-[#EBF1FF] rounded-[40px] pt-[98px] pb-[50px] flex flex-col justify-center items-center">
        <h2 className="text-[#122368] text-[64px] tracking-[-0.64px] leading-[64px] font-[family-name:var(--font-cal-sans)] text-center ">
          Redefining how you <br /> invest and save
        </h2>
        <Image
          src="how-to-save.svg"
          className='-mt-2'
          width={1123}
          height={710}
          alt="how-to-save"
        />
      </div>
    </div>
  );
}

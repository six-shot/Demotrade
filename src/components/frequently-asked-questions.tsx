"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FrequentlyAskedQuestions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const data = [
    {
      title: "What is the underlying asset of the USDX stablecoin?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What are tokenized stocks?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "How is the price of USDX decided?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What are the legal rights of WhiteRock RWA tokenholders?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
  ];

  return (
    <div>
      <div className="max-w-[1440px] mx-auto  pt-[96px] pb-[256px] px-10 ">
        <div className="flex  justify-start  items-center ">
          <h2 className="text-[#0E121B] text-[72px] tracking-[-1.44px] leading-[90px] font-[family-name:var(--font-cal-sans)]  ">
            Frequently <br /> asked questions
          </h2>
        </div>

        <div className="mt-[64px] flex justify-center relative ">
          <div className="  flex flex-col  w-full gap-4 ">
            {data.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                answer={item.answer}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer font-[family-name:var(--font-fig-tree)]"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" card-bg border-b border-[#EAECF0]  pt-2.5 ">
        <motion.button className="flex justify-between items-center w-full mb-[24px] ">
          <span className="text-[18px] text-[#061833] text-left font-medium">
            {title}
          </span>
          <div className="w-6 h-6 border-[2px] border-[#667085] rounded-full flex justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-[1px] mt-[1px]"
            >
              {/* Vertical line (always present, animates opacity) */}
              <motion.path
                d="M12 5V19"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Horizontal line (always present) */}
              <motion.path
                d="M5 12H19"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className=" text-[16px] text-[#667085] mb-[24px] w-[1264px]  ">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

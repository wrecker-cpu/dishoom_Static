"use client";
import { ContactPageData, FaqPageData } from "@/data/data";
import { AccordionSvg } from "@/svg/svgs";
import { AccordionItemProps, FaqAccordionData } from "@/type/FaqType";
import Image from "next/image";
import {motion} from "framer-motion";
import React, { useState } from "react";

// const AccordionItem: React.FC<AccordionItemProps> = ({ item,expandedId }) => {
//   return (
//     <motion.div
//     initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: expandedId ? 1 : 0, height: expandedId ? "auto" : 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <p className="text-[4vw] lsm:text-[3.5vw] esm:text-[3.2vw] em:text-[3vw] vem:text-[2.5vw] md:text-[1.7vw] mmd:text-[1.6vw] leading-7 lg:text-[1.5vw] xlg:text-[1.3vw]" dangerouslySetInnerHTML={{ __html: item.answer }} />
//     </motion.div>
//   );
// };

export default function FaqAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {Object.keys(FaqAccordionData).map((category, idx) => {
        return (
          <div key={idx}>
            <p className="uppercase  font-sans font-bold mb-8 text-base tracking-[3px]">
              {category}
            </p>
            <div>
              {FaqAccordionData[category].map((item) => {
                return (
                  <div key={item.id} className="mb-1 md:mb-4 md:pb-4 pb-0">
                    <div
                      onClick={() => {
                        toggleAccordion(item.id);
                      }}
                      className="mb-4 md:mb-0 cursor-pointer w-full relative"
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div className="border-t border-[#C4BFAF80] w-full"></div>
                      </div>

                      <div className="flex justify-between items-center relative z-10">
                        {/* <p className="text-[5.23vw] lsm:text-[3.5vw] esm:text-[3.3vw] em:text-[3.2vw] vem:text-[3.5vw] md:text-[2vw] mmd:text-[1.9vw] lg:text-[1.8vw] 2xl:text-2xl leading-loose tracking-wide bg-cream inline-block max-w-[11rem] lsm:max-w-[15rem] esm:max-w-[18rem] vem:max-w-[22rem] sm:max-w-[20rem] md:max-w-[26rem] xl:max-w-[33rem] text-[#353839] bg-white pr-2"> */}
                        <p className="text-[21px]  md:text-[1.35rem] mmd:text-[1.4rem] lg:text-2xl md:leading-[1.65rem] leading-7 tracking-wide bg-cream inline-block max-w-[260px] esm:max-w-[20rem] em:max-w-[23rem] vem:max-w-[27rem] sm:max-w-[30rem] md:max-w-[25rem] xl:max-w-[33rem] text-[#353839] bg-white pr-2">
                          {item.question}
                        </p>

                        <div className="relative flex-shrink-0 w-10 h-10 flex  justify-center items-center  ">
                          <div
                            className={`p-1 em:p-2 bg-[#f0ece0] rounded-full -ml-10 border border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                              expandedId === item.id ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <AccordionSvg />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden ${
                        expandedId === item.id
                          ? " mt-8 opacity-100"
                          : "max-h-0 opacity-0"
                      }  transition-all duration-[600ms] ease-in-out text-[25px] md:text-[17px] font-serifflex flex-col items-center leading-9 tracking-wide text-[#353839]`}
                    >
                      <div>
                      <motion.div
    initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: expandedId ? 1 : 0, height: expandedId ? "auto" : 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, height: 0 }} 
    >
      <p className="text-lg font-serif leading-6 pb-5 tracking-[2%]" dangerouslySetInnerHTML={{ __html: item.answer }} />
    </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

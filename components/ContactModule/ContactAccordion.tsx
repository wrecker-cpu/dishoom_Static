"use client";
import { ContactPageData } from '@/data/data';
import { AccordionSvg } from '@/svg/svgs';
import CustomButton from '@/utils/CustomButton';
import Image from 'next/image';


import React, { useState } from "react";




export default function ContactAccordion({}) {

    const [expandedId, setExpandedId] = useState<number | null>(null);

    // Function to toggle accordion state
    const toggleAccordion = (id: number) => {
      setExpandedId(expandedId === id ? null : id);
    };
  
  return (
    <div>
      {ContactPageData.accordion.map((item) => {
            return (
              <div key={item.id} className="mb-4 pb-4">
                <div onClick={() => {
                        toggleAccordion(item.id);
                      }} className="text-[#353839] cursor-pointer mb-4 md:mb-0 text-[11px] lsm:text-[12px] esm:text-[16px]  flex items-center whitespace-nowrap gap-3 w-full md:w-auto  ">
                  <p className="text-2xl leading-loose tracking-wide">
                    {item.place}
                  </p>
                  <div className="border border-[#C4BFAF80] relative  block w-full h-0">
                    <div
                      
                      className={`p-1 em:p-2 top-[50%] right-0 translate-x-[-50%] translate-y-[-50%] bg-[#f0ece0] rounded-full border absolute border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                        expandedId === item.id ? " rotate-180 " : "rotate-0 "
                      }`}
                    >
                      <AccordionSvg />
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden ${
                    expandedId === item.id ? "max-h-[30rem] mt-8 opacity-100" : "max-h-0 opacity-0"
                  }  transition-all duration-[600ms] ease-in-out text-[25px] md:text-[17px] font-serifflex flex-col items-center leading-9 tracking-wide text-[#353839]`}
                >
                  <div className="flex gap-3">
                    <div className="w-full ">
                      {item.details.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={`flex items-center py-2 
                                border-t border-t-[#dad6c8] gap-2`}
                          >
                            <div className=" flex justify-center w-[22px]">
                              {item.svg}
                            </div>

                            <p className="font-sans text-base md:text-[15px] emd:text-base whitespace-nowrap ">
                              {item.text}
                            </p>
                          </div>
                        );
                      })}
                      <CustomButton button1={item.button1} button2={item.button2} className={"font-sans mt-2 font-bold  text-[13px] sm:text-[14px] md:text-[12px]  mmd:text-[13px] emd:text-[15px] whitespace-nowrap flex gap-3"} custom={true}/>
                    </div>
                    <div className='md:block hidden'>
                      <Image
                        alt="wth"
                        className="h-full w-[20rem] object-cover"
                        src={item.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  )
}

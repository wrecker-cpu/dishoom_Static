import { ListData, PermitListData } from "@/data/data";

import Image from "next/image";
import React from "react";
import {
  PermitTopSvg
} from "@/svg/svgs";
import CustomButton from "@/utils/CustomButton";

export default function PermitListSection() {
  return (
    <div className="w-full bg-[#f9e082] mb-20">
      <div className="w-full mb-[30px]">
        <PermitTopSvg />
      </div>
      <div></div>
      <div>
        {PermitListData.items.map((item) => {
          return (
            <div key={item.id} className="pb-6">
              <div className=" w-[95%] p-[2px] rounded-lg  bg-inherit md:bg-[#F0ECE0] border-0 md:border border-black   mx-auto">
                <div className="grid-container group rounded-lg  border-0 md:border-2 border-black  md:py-10 bg-inherit md:bg-[#F0ECE0] ">
                  <div className="col-start-1 col-end-7 mb-4 md:mb-0 md:col-start-2 md:col-end-10 md:order-1 order-2 self-center">
                    {/* <p className="text-[7.8vw] mb-2 text-[#353839] lsm:text-[7vw] mt-3 md:mt-0 esm:text-[6.5vw]  em:text-[6vw]  ew:text-[5.5vw] sm:text-[4.5vw] md:text-[3vw] lg:text-[2.7vw] xl:text-[32px] font-serif leading-9 tracking-wide"> */}
                    <p className="text-[24px] font-bold sm:text-[29px] mb-2 md:mb-[20px] mt-3 md:mt-0 leading-8  font-serif  tracking-wide">
                      {item.name}
                    </p>

                    {/* <p className="tracking-tight text-[#353839] font-sans sm:block hidden text-[4vw] lsm:text-[3.6vw] esm:text-[3.4vw]  em:text-[3.2vw] ew:text-[2.8vw] md:text-[1.7vw] emd:text-[1.5vw] xl:text-lg"> */}
                    <p className="tracking-tight mb-[30px] sm:block hidden font-sans text-[18px]">
                      {item.description}
                    </p>
                    <div className={`${item.details?"mb-8":"mb-0"} md:mb-[53px]`}>
                      {item?.details?.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={`flex items-center py-3 ${
                              item.id === 3
                                ? "border-y-2 border-black"
                                : "border-t-2 border-t-black"
                            } ${item.id === 1 && "mt-0 md:mt-4"} gap-2`}
                          >
                            <div className=" flex justify-center w-[22px]">
                              {item.svg}
                            </div>

                            {/* <p className="text-[4vw] text-[#353839]  font-sans lsm:text-[4vw] esm:text-[3.4vw]  em:text-[3.2vw] ew:text-[2.8vw] md:text-[1.7vw] emd:text-base"> */}
                            <p className="font-sans text-sm md:text-base">
                              {item.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {item.button1 || item.button2 || item.details ? (
                      <CustomButton button1={item.button1} button2={item.button2}/>
                    ) : (
                      <p className="text-base text-[#353839] font-bold font-sans ">(Coming Soon)</p>
                    )}
                  </div>
                  <div className="col-start-1 col-end-7 rounded-xl border-2 border-black transition-transform duration-[400ms] overflow-hidden ease-in-out md:group-hover:translate-x-2 relative md:col-start-11 w-full h-full md:col-end-20 md:order-2 order-1  self-center">
                    <Image
                      src={item.image}
                      className="w-full h-full  object-cover"
                      alt="wth"
                    ></Image>
                    <div className="absolute top-0 left-0 w-full h-full  md:group-hover:animate-blink"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

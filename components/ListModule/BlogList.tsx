import { ListItemData } from "@/svg/svgs";
import Image from "next/image";
import React from "react";
import { ListData } from "@/data/data";
import CustomButton from "@/utils/CustomButton";

export default function BlogList() {
  return (
    <>
      <div className="overflow-hidden ">
        <div>
          {ListData.items.map((item,index) => {
            return (
              <div
                key={item.id}
                className={`bg-inherit md:mt-0 ${
                  item.id === 1 ? "mt-0" : "mt-4"
                }   md:bg-[#d2c9ac] w-full relative`}
              >
                <div className=" w-[95%] py-4 md:pt-8  border-b border-[#C4BFAF] md:border-b-0  mx-auto">
                  <div className=" group grid-container  bg-inherit md:bg-[#F0ECE0] ">
                    <div className="bg-[#363839] md:block transition-opacity duration-500 opacity-0 group-hover:opacity-100 w-2"></div>
                    <div className="col-start-1 text-[#363839] transition-transform duration-[400ms]  md:py-10 ease-in-out translate-x-0 md:group-hover:translate-x-2 col-end-7 mb-4 md:mb-0 md:col-start-2 md:col-end-10 md:order-1 order-2 self-center">
                      <p className="text-[21px] sm:text-[32px] mb-2 md:mb-[20px] mt-3 md:mt-0 font-normal  font-serif leading-7 tracking-wide">
                        {item.name}
                      </p>

                      <p className="tracking-tight mb-[30px] sm:block hidden text-[18px]">
                        {item.description}
                      </p>
                      <div className="mb-5 md:mb-[53px]">
                        {ListItemData.details.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className={`flex items-center py-2 ${
                                item.id === 3
                                  ? "border-y border-[#C4BFAF]"
                                  : "border-t border-t-[#C4BFAF]"
                              } ${item.id === 1 && "mt-0 md:mt-4"} gap-2`}
                            >
                              <div className=" flex justify-center w-[22px]">
                                {item.svg}
                              </div>
                              <p className="font-sans text-sm md:text-base">
                                {item.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <CustomButton button1={item.button1} button2={item.button2}/>
                    </div>
                    <div className="col-start-1 col-end-7 transition-transform duration-[400ms] md:py-10 ease-in-out translate-x-0 md:group-hover:translate-x-2  md:col-start-11 w-full h-full md:col-end-20 md:order-2 order-1  self-center">
                      <Image
                        src={item.image}
                        className="w-full h-full object-cover"
                        alt="wth"
                      ></Image>
                    </div>
                  </div>
                </div>
                {index === ListData.items.length - 1 && (
         <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#d2c9ad] to-transparent "></div>

        )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

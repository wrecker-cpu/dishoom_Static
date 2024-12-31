"use client";
import { ArrowSvg, ContactRepeaterSvg } from "@/svg/svgs";
import Image from "next/image";
import React from "react";
import { ContactPageData } from "@/data/data";

export default function SomethingElseList() {
  return (
    <div className="  mb-20 sub-container">
      <div className="grid-container">
        <div className="col-start-1 col-end-7 md:col-end-21 place-self-center my-20">
          <ContactRepeaterSvg />
        </div>
        <div className="col-start-1 col-end-7 md:col-start-1 md:col-end-21 mb-20 place-self-center">
          <p className="text-lg mb-4  text-center md:text-xl font-serif leading-7 tracking-widest">
            Looking For Something Else?
          </p>
          <p className="text-[21px] md:text-[30px] font-extralight font-serif max-w-[350px] md:max-w-[539px] uppercase w-full leading-tight text-center tracking-widest">
            Where may we direct your curiosity?
          </p>
        </div>
        <div className="col-start-1 col-end-7 md:col-end-21">
          <div className="flex flex-col items-center md:flex-row gap-6">
            {ContactPageData.Lookinglist.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full md:w-[440px] group h-[380px] vem:h-[400px] md:h-[539px] relative"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="wth"
                  />
                  <div className="absolute  w-[95%]  bottom-0 left-[80%] md:left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <div className="p-[2px] w-full md:w-auto border-2 border-[#353839] bg-[#f1ece0]">
                      <div className="w-full overflow-hidden h-auto md:h-[72px] md:group-hover:h-[100px] transition-all duration-300 ease-in-out py-[6px] border border-[#353839] text-[#353839] bg-[#f1ece0]">
                        <p className="text-start pl-2 md:pl-0 md:text-center transition ease-in-out duration-300 uppercase font-serif text-[18px] vem:text-lg tracking-[4px]">
                          {item.title}
                        </p>
                        <p className="md:w-full w-[60%] italic text-[14px] em:text-base md:text-[1.5vw] lg:text-base text-start pl-2 md:pl-0 md:text-center mb-4 font-serif">
                          {item.quote}
                        </p>
                        <div className="mb-2 pr-20 md:pr-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex justify-end md:justify-center">
                          <ArrowSvg />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import pigeonImg from "@/public/pigeon.png";
import { DownloadSvg } from "@/svg/svgs";
import WhiteCustomButton from "@/utils/WhiteCustomButton";
export default function DownLoadSection() {
  const items = [...Array(3)].map((_, idx) => {});

  return (
    <div className="grid-container sub-container mb-20">
      <div className="col-start-1 col-end-7 md:col-start-3 md:col-end-19 border-2 p-2 mb-1 border-dishoom">
        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
          <div className="w-auto md:w-[534px] h-auto">
            <Image
              className="w-full h-full object-cover"
              src={pigeonImg}
              alt="wth"
            />
          </div>
          <div className="w-[84%] mx-auto md:w-full max-w-full md:max-w-[417px] my-6 md:my-10">
            <div>
              <p className="text-[#353839] text-sm mb-3  esm:text-base  font-bold font-sans uppercase leading-tight tracking-[0.2rem]">
                Resources
              </p>

              <p className="mb-10 font-normal text-base md:text-lg text-dishoom  tracking-[2%] leading-6 md:leading-7">
                Elit blandit felis dapibus amet id ultrices ligula. Turpis sit
                aliquam at tristique consectetur nisl. Quisque nulla enim cursus
                eget at dictumst ante at dui a consectetur.
              </p>
            </div>
            <div className="mb-10">
              {items.map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className={`${
                      idx === 0
                        ? "border-y"
                        : idx !== items.length - 1
                        ? "border-b"
                        : ""
                    } p-2 flex justify-between cursor-pointer items-center border-[#C4BFAF]`}
                  >
                    <p className="font-sans text-base leading-6 tracking-wide">
                      File/ resource name
                    </p>
                    <div className="w-6 h-6">
                      <DownloadSvg />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-36">
              <WhiteCustomButton
                className="p-[2px] font-bold font-sans text-[15px] text-dishoom border-2 transition-colors ease-in-out duration-200  hover:border-dishoom border-[#80807c]"
                name="Download All"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowSvg, FourSideStarSvg } from "@/svg/svgs";
import { LastSectionFooterData } from "@/data/data";
import modelpic from "@/public/lastsection/model.png";

export default function CoursalSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, LastSectionFooterData.length - 1)
    );
  };

  const imageWidth = 250;
  const spacerWidth = 24;
  const totalWidth = imageWidth + spacerWidth;

  return (
    <>
      <div className="grid-container sub-container">
        <div className="col-start-1 col-end-7 md:col-start-3 md:col-end-19">
          <p className="text-[#353839]  mb-3 text-sm md:text-[15px]  font-bold font-sans uppercase leading-tight tracking-[0.2rem]">
            The story continues
          </p>

          <p className="mb-7 md:mb-10 font-normal text-2xl  md:text-3xl text-light-dishoom  tracking-[1%] leading-8 md:leading-10">
            Explore our selection of recipes ideas, top tips and interviews.
          </p>

          <div className="md:hidden block">
            <div className={`w-auto h-[248px] flex-shrink-0 mb-4 snap-center`}>
              <Image
                className="w-full h-full object-cover"
                src={modelpic}
                alt={`wht`}
              />
            </div>
            <div>
              <div>
                <p className="font-sans font-bold text-dishoom text-xs mb-3 leading-3 uppercase tracking-[0.15rem]">
                  Featured • Dishoom loves
                </p>
                <p className="font-serif text-2xl mb-3 text-light-dishoom leading-6 tracking-wide">
                  Dishoom Loves. Issue XIV
                </p>
                <p className="font-serif text-lg text-dishoom leading-7 tracking-[2%]">
                  We’re heading into March as we mean to go on: filling our
                  eyes, ears and bellies courtesy of many talented creators in
                  the South Asian community.
                </p>
              </div>
              <div className="flex mt-7 mb-9 gap-2 items-center">
                <div className="w-3 h-3">
                  <FourSideStarSvg />
                </div>
                <div className="w-full h-auto border-t border-[#c4bfaf]"></div>
                <div className="w-3 h-3">
                  <FourSideStarSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container group relative sub-container mb-48">
        <div
          onClick={() => {
            currentIndex === 0 ? null : handlePrev();
          }}
          className={`md:block hidden absolute z-[10] w-36 cursor-pointer ${
            currentIndex === 0 ? "opacity-20" : "opacity-100"
          } left-0 top-[40%] transition-all ease-in-out duration-500 translate-x-[-150%] group-hover:translate-x-[-30%]  translate-y-[-50%] `}
        >
          <div className="w-full flex justify-center items-center overflow-hidden h-[50px] transition-all duration-300 ease-in-out py-[6px] border border-[#353839] text-[#353839] bg-[#f1ece0]">
            <div className=" rotate-180 flex justify-center">
              <ArrowSvg />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            currentIndex === LastSectionFooterData.length - 4
              ? null
              : handleNext();
          }}
          className={`md:block hidden absolute z-[10] w-36 cursor-pointer ${
            currentIndex === LastSectionFooterData.length - 4
              ? "opacity-20"
              : "opacity-100"
          }  right-0 top-[40%] transition-all ease-in-out duration-500 group-hover:-translate-x-[-30%] translate-x-[150%] translate-y-[-50%] `}
        >
          <div className="w-full flex justify-center items-center overflow-hidden h-[50px] transition-all duration-300 ease-in-out py-[6px] border border-[#353839] text-[#353839] bg-[#f1ece0]">
            <div className="  flex justify-center">
              <ArrowSvg />
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-7  md:col-start-3 md:col-end-21 mb-4 flex justify-start items-center">
          <div
            className={`relative gap-6 flex scrollbar-hide overflow-x-scroll w-full md:w-[${
              imageWidth + spacerWidth * 2
            }] md:overflow-x-visible snap-x snap-mandatory transition-transform ease-in-out duration-500`}
            style={{
              transform: `translateX(-${currentIndex * totalWidth}px)`,
            }}
          >
            {LastSectionFooterData.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col cursor-pointer transition-opacity duration-500 ease-in-out  ${
                  index >= currentIndex && index < currentIndex + 4
                    ? "opacity-100 md:opacity-100"
                    : "opacity-100 md:opacity-20"
                }`}
              >
                <div
                  className={`w-[255px] h-[180px] flex-shrink-0 mb-4 snap-center`}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={`family-image-${item.id}`}
                  />
                </div>
                <div>
                  <p className="font-sans font-bold text-xs mb-2 leading-3 uppercase tracking-[0.15rem]">
                    {item.title}
                  </p>
                  <p className="font-serif text-[21px] max-w-[95%] text-light-dishoom leading-7 tracking-[2%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden block col-start-1 col-end-4">
          <div className="p-[2px] inline-block border-2 transition-colors ease-in-out duration-200  border-[#7d7c74]">
            <button
              type="submit"
              className="px-4 py-[6px] font-semibold text-dishoom font-sans border transition-colors ease-in-out duration-200 hover:border-dishoom border-[#dad5c7]  bg-inherit"
            >
              <p >View more</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

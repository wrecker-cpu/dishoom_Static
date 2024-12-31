"use client"
import { FooterData } from "@/data/data";
import { AccordionSvg, FooterDiceSvg, FooterRepeaterSvg, FooterTopSvg, InstagramSvg } from "@/svg/svgs";
import React, { useState } from "react";

export default function Footer() {
  


  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Function to toggle accordion state
  const toggleAccordion = (id: number) => {
    if (window.innerWidth <= 768) {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  return (
    <div className="sub-container">
      <div className="grid-container overflow-hidden">
        <div className="col-start-1 col-end-7 md:col-end-20 justify-self-center w-[252.58px] h-auto py-20 md:py-10">
          <FooterTopSvg />
        </div>
        {/* Repeater Svg */}
        <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-20 w-[80rem]  md:w-auto h-auto mb-20 md:mb-10">
          <FooterRepeaterSvg />
        </div>
        {/* Explore */}
        <div className="col-start-1 col-end-7 mb-8 md:mb-0  md:col-start-2 md:col-end-7 emd:col-end-11 lg:col-end-10 justify-self-center w-full md:w-auto md:justify-self-start">
          <div className="md:block flex w-full flex-col items-center">
            <div className="text-[#353839] mb-4 md:mb-0 text-[11px] lsm:text-[12px] esm:text-[16px] md:block flex items-center gap-3 w-full md:w-auto font-bold font-sans uppercase leading-tight tracking-widest">
              <div className="border border-[#C4BFAF80] md:hidden block  w-full h-0"></div>
              <p className="mb-0 md:mb-[30px]">
              {FooterData.explore.title}
              </p>
              <div className="border border-[#C4BFAF80] relative md:hidden block w-full h-0">
                <div onClick={()=>{toggleAccordion(1)}} className={`p-[6px] em:p-2 top-[50%] right-[0%] translate-x-[-50%] translate-y-[-50%] bg-[#f0ece0] rounded-full border absolute border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                        expandedId === 1
                          ? " rotate-180 "
                          : "rotate-0 "
                      }`}><AccordionSvg/></div>
              </div>
            </div>
            <ul className={`grid grid-cols-1 transition-max-height duration-500 ease-in-out ${
                  expandedId === 1 ? "max-h-[30rem] mb-10" : "max-h-0"
                }  md:max-h-none  overflow-hidden emd:grid-cols-2 gap-y-0 gap-x-[2.65rem] xl:gap-x-[0.9rem] place-items-center md:place-items-start 1xl:gap-x-10 text-[25px] font-serif leading-9 tracking-wide text-[#353839]`}>
              {FooterData.explore.details.map((item) => {
                return (
                  <li className="whitespace-nowrap hover:opacity-60 transition-opacity ease-in-out duration-150" key={item.id}>
                    <a href="#">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Shop Dishoom*/}
        <div className="col-start-1 col-end-7 mb-8 md:mb-0 md:col-start-9 md:col-end-14 emd:col-start-11 emd:col-end-16 lg:col-start-11 lg:col-end-16 w-full md:w-auto emd:border-l emd:border-[#C4BFAF80] justify-self-center md:justify-self-start">
          <div className="md:block flex flex-col  emd:pl-8 items-center">
            <div className="text-[#353839] text-[11px] lsm:text-[12px] esm:text-[16px] mb-4 md:mb-0 font-bold md:block flex items-center whitespace-nowrap gap-3 w-full md:w-auto font-sans uppercase leading-tight tracking-widest">
            <div className="border border-[#C4BFAF80] md:hidden block  w-full h-0"></div>
            <p className="mb-0 md:mb-[30px]">{FooterData.Shop.title}</p>
            <div className="border border-[#C4BFAF80] relative md:hidden block w-full h-0">
                <div onClick={()=>{toggleAccordion(2)}} className={`p-[6px] em:p-2 top-[50%] right-[0%]  translate-x-[-50%] translate-y-[-50%] bg-[#f0ece0] rounded-full border absolute border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                        expandedId === 2
                          ? " rotate-180 "
                          : "rotate-0 "
                      }`}><AccordionSvg/></div>
              </div>
            </div>
            <ul className={`overflow-hidden ${expandedId === 2?"max-h-[20rem]":"max-h-0"} md:max-h-none  transition-max-height duration-300 ease-in-out  text-[25px] md:text-[21px]  font-serif md:block flex flex-col items-center  leading-9 tracking-wide text-[#353839]`}>
              {FooterData.Shop.details.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="#" className="hover:opacity-60 transition-opacity ease-in-out duration-150">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Cafe Support & Store Support*/}
        <div className="col-start-1 col-end-7 mb-8 md:mb-0 md:col-start-15 md:col-end-20 emd:col-start-16 lg:col-start-16 w-full emd:border-l emd:border-[#C4BFAF80] md:w-auto justify-self-center md:justify-self-start">
          <div className="md:block flex flex-col   emd:pl-8 items-center">
            <div className="mb-6  w-full md:w-auto">
              <div className="text-[#353839] mb-4 md:mb-0 text-[11px] lsm:text-[12px] esm:text-[16px] font-bold font-sans uppercase md:block flex items-center whitespace-nowrap gap-3 w-full md:w-auto leading-tight tracking-widest">
              <div className="border border-[#C4BFAF80] md:hidden block  w-full h-0"></div>
                <p className="mb-0 md:mb-[30px]">{FooterData.Cafe.title}</p>
                <div className="border border-[#C4BFAF80] relative md:hidden block w-full h-0">
                <div onClick={()=>{toggleAccordion(3)}} className={`p-[6px] em:p-2 top-[50%] right-[0%]  translate-x-[-50%] translate-y-[-50%] bg-[#f0ece0] rounded-full border absolute border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                        expandedId === 3
                          ? " rotate-180 "
                          : "rotate-0 "
                      }`}><AccordionSvg/></div>
              </div>
              </div>
              <ul className={`overflow-hidden ${expandedId===3?"max-h-[rem]":"max-h-0"} md:max-h-none transition-max-height duration-300 ease-in-out text-[25px]  md:text-[21px] font-serif md:block flex flex-col items-center leading-9 tracking-wide text-[#353839]`}>
                {FooterData.Cafe.details.map((item) => {
                  return (
                    <li key={item.id}>
                      <a href="#" className="hover:opacity-60 transition-opacity ease-in-out duration-150">{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex md:block flex-col items-center">
                <div className="text-[#353839] mb-4 md:mb-0 text-[11px] lsm:text-[12px] esm:text-[16px] font-bold font-sans uppercase md:block flex items-center  gap-3 w-full md:w-auto  leading-tight whitespace-nowrap tracking-widest">
                <div className="border border-[#C4BFAF80] md:hidden block  w-full h-0"></div>
                  <p className="mb-0 md:mb-[30px]">{FooterData.Store.title}</p>
                  <div className="border border-[#C4BFAF80] relative md:hidden block w-full h-0">
                <div onClick={()=>{toggleAccordion(4)}} className={`p-[6px] em:p-2 top-[50%] right-[0%]  translate-x-[-50%] translate-y-[-50%] bg-[#f0ece0] rounded-full border absolute border-[#C4BFAF80] inline-block transition-transform duration-300 ease-in-out ${
                        expandedId === 4
                          ? " rotate-180 "
                          : "rotate-0 "
                      }`}><AccordionSvg/></div>
              </div>
                </div>
                <ul className={`overflow-hidden ${expandedId===4?"max-h-[10rem]":"max-h-0"} md:max-h-none  transition-max-height duration-300 ease-in-out text-[25px] md:text-[21px] font-serif md:block flex flex-col items-center leading-9 tracking-wide text-[#353839]`}>
                  {FooterData.Store.details.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href="#" className="hover:opacity-60 transition-opacity ease-in-out duration-150">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SocioLinks & SocioSvgs*/}
        <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-14 emd:col-end-12 lg:col-end-11 xl:col-end-10 1xl:col-end-9 mb-[30px]">
        <p className="text-[#353839] text-[16px] md:block hidden mb-2 font-bold font-sans uppercase leading-tight tracking-widest">
              {FooterData.SocioLinks.title}
            </p>
            <ul className="md:flex hidden justify-between ">
                {FooterData.SocioLinks.details.map((item) => {
                  return (
                    <li className="font-serif text-lg text-[#353839] tracking-tight" key={item.id}>
                      <a href={item.href} className="hover:opacity-60 transition-opacity ease-in-out duration-300">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
  
            </ul>
            <ul className="flex md:hidden gap-6 justify-center">
                {
                  FooterData.SocioSvgs.map((item)=>{
                    return(
                      <li className="hover:rotate-[360deg] transition-transform ease-in-out duration-150 cursor-pointer" key={item.id}>
                        {item.svg}
                      </li>
                    )
                  })
                }
            </ul>
        </div>
        {/* Privacy */}
        <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-20 mb-4">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between">
                <div className=" w-[30px] mt-4 overflow-hidden">{FooterData.Privacy.svg}</div>
                <div className="flex md:block justify-center">
                    <ul className="flex flex-wrap max-w-[322px] em:max-w-full mx-auto justify-center text-[#353839] text-[16px] gap-4">
                        {FooterData.Privacy.details.map((item)=>{
                            return(
                                <li key={item.id} className="hover:opacity-60 transition-opacity cursor-pointer ease-in-out duration-300">{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
